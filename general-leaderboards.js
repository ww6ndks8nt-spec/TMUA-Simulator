/* General rankings publish only opted-in summaries; private answers remain private. */
(function(){
'use strict';
const $=id=>document.getElementById(id),screen=$('leaderboardsScreen');
const boards={
 time:{path:'examTime',pref:'leaderboardTime',title:'Most time spent practising',short:'Practice time',heading:'Recorded time'},
 performance:{path:'performance',pref:'leaderboardPerformance',title:'Highest estimated performance',short:'Estimated performance',heading:'Estimate / 9'},
 papers:{path:'qualifiedPapers',pref:'leaderboardPapers',title:'Most papers completed',short:'Papers completed',heading:'Different papers'}
};
const finite=x=>Number.isFinite(x)&&x>=0?x:0;
const unique=rows=>{const seen=new Set();return (Array.isArray(rows)?rows:[]).filter(r=>{if(!r||typeof r!=='object')return false;const k=r._syncId||r.id||JSON.stringify(r);if(seen.has(k))return false;seen.add(k);return true;});};
function metrics(state=STATE){
 const known=new Map(ALL_PAPERS.map(p=>[p.id,p]));let ms=0,papers=0;const first=[],timeInfo={eligible:0,legacy:0,continued:0,untimed:0,unavailable:0};
 const times=r=>(Array.isArray(r.questionTimesMs)?r.questionTimesMs:[]).reduce((n,x)=>n+((typeof x==='number'||typeof x==='string')?finite(Number(x)):0),0);
 for(const [pid,saved] of Object.entries(state.results||{})){
  const p=known.get(pid);if(!p)continue;const rows=unique(saved).sort((a,b)=>finite(a.t)-finite(b.t));
  for(const r of rows){
   const timing=r.examTiming,mode=typeof r.mode==='string'?r.mode.trim():'',recorded=times(r);
   // Explicit exclusions take precedence; legacy records must not be relabelled as verified timed exams.
   if(timing?.kind==='continued-exam'||/\b(continued|resumed)\b/i.test(mode))timeInfo.continued++;
   else if(timing?.kind==='untimed'||r.noTimer===true||/\buntimed\b/i.test(mode))timeInfo.untimed++;
   else if(p.randomized||/wrong.answer|mistake drill|question.bank/i.test(mode))continue;
   else if(timing?.version===1&&timing.kind==='timed-exam'&&Number.isFinite(timing.limitMs)&&timing.limitMs>0){
    ms+=Math.min(recorded,timing.limitMs);if(recorded>0)timeInfo.eligible++;else timeInfo.unavailable++;
   }else if(!timing&&recorded>0){
    // Older completed results saved question times but often no mode or allowance.
    // Preserve that history without guessing an allowance from today's settings.
    const label=mode.match(/^(\d+(?:\.\d+)?)\s*min(?:\s+(\d+)\s*sec)?(?:\s*·|$)/i);
    const limit=label?(Number(label[1])*60+Number(label[2]||0))*1000:0;
    ms+=limit>0?Math.min(recorded,limit):recorded;
    timeInfo.legacy++;
   }else timeInfo.unavailable++;
  }
  if(!p.esat&&rows.some(r=>Array.isArray(r.a)&&r.a.reduce((n,a,i)=>n+(Number.isInteger(a)&&a>=0&&a<(p.questions[i]?.opts?.length||0)?1:0),0)>=(p.mat?8:15)))papers++;
  // As on Overview, a first submitted attempt cannot be replaced by a retake.
  const r=rows[0];if(!r||p.mat||p.esat||!p.questions?.length)continue;
  const sc=Array.isArray(r.a)&&r.a.length===p.questions.length?scoreAttemptForPaper(p,r.a):{c:r.c,s:r.s};
  if(!Number.isFinite(sc.c)||!Number.isFinite(sc.s)||sc.s<=0||sc.c<0||sc.c>sc.s)continue;
  const grade=dashboardAttemptGrade(sc.c,sc.s,p);if(Number.isFinite(grade)&&grade>=1&&grade<=9)first.push({grade,weight:dashboardSourceWeight(p)});
 }
 const mean=dashboardMeanGrade(first);
 return {time:Math.min(31557600000,Math.floor(ms/1000)),performance:mean===null?null:Math.round(mean*1000)/1000,papers,samples:first.length,timeInfo};
}
function preferences(){return ROOT.profiles[currentUser]?.preferences||{};}
function consent(state,key,enabled,source){const record=state.generalLeaderboardConsent??={version:1};record[key]={enabled,t:Date.now(),source,notice:'2026-10-04'};}
function optInAll(values,choice){for(const [key,b] of Object.entries(boards)){values.profile.preferences[b.pref]=true;consent(values.state,key,true,choice.source);}}
function paths(key){return key==='time'?['examTime','time']:key==='papers'?['qualifiedPapers','papers']:['performance'];}
function addRemovals(patch,uid){for(const key of Object.keys(boards))for(const path of paths(key))patch['generalLeaderboards/'+path+'/'+uid]=null;return patch;}
function withdrawAll(){for(const [key,b] of Object.entries(boards)){preferences()[b.pref]=false;consent(STATE,key,false,'settings-withdraw-all');}refreshChoices();}
function withdrawalPatch(uid,sent){
 const off=Object.entries(boards).filter(([,b])=>Object.hasOwn(sent,'profile/preferences/'+b.pref)&&sent['profile/preferences/'+b.pref]!==true);
 if(!off.length)return null;
 const patch={};for(const [path,value] of Object.entries(sent))patch['users/'+uid+'/'+path]=value;
 for(const [key] of off)for(const path of paths(key))patch['generalLeaderboards/'+path+'/'+uid]=null;
 return patch;
}
const format=(key,value)=>{
 if(key!=='time')return key==='performance'?(value===null?'—':value.toFixed(3)):String(value);
 const d=Math.floor(value/86400),h=Math.floor(value%86400/3600),m=Math.floor(value%3600/60);
 return d?d+' d '+h+' h '+m+' min':h?h+' h '+m+' min':m?m+' min':value+' s';
};
let selected='time',timer=null,queue=Promise.resolve(),saving=false,loadSequence=0;
const signatures=new Map();
function eligible(key,m){return key==='performance'?m.samples>=3&&m.performance!==null:m[key]>0;}
function available(uid=currentUser){return !!uid&&uid===currentUser&&CLOUD.ready&&!CLOUD.deleting&&CLOUD.uid===uid&&CLOUD.auth?.currentUser?.uid===uid;}
function refreshChoices(){
 const m=metrics(),p=preferences();
 for(const [key,b] of Object.entries(boards)){
  const input=$('glbOpt-'+key);if(!input)continue;input.checked=p[b.pref]===true;input.disabled=saving||!available();
  $('glbOwn-'+key).textContent=format(key,m[key]);
  $('glbOwnNote-'+key).textContent=key==='performance'?m.samples+' scored first attempt'+(m.samples===1?'':'s')+(m.samples<3?' · '+(3-m.samples)+' more needed to rank':''):key==='papers'?'Qualifying different papers in your saved history':timeNote(m);
 }
}
function timeNote(m){
 const parts=[m.timeInfo.eligible+' eligible timed attempt'+(m.timeInfo.eligible===1?'':'s')];
 if(m.timeInfo.legacy)parts.push(m.timeInfo.legacy+' older attempt'+(m.timeInfo.legacy===1?'':'s')+' included from recorded exam time (original timing details may be unavailable)');
 if(m.timeInfo.continued)parts.push(m.timeInfo.continued+' continued/resumed excluded');
 if(m.timeInfo.untimed)parts.push(m.timeInfo.untimed+' untimed excluded');
 if(m.timeInfo.unavailable)parts.push(m.timeInfo.unavailable+' attempt'+(m.timeInfo.unavailable===1?'':'s')+' without usable timing');
 if(!m.time)parts.push('No eligible recorded exam time yet');
 return parts.join(' · ')+'.';
}
function schedule(){
 if(!available()||timer)return;
 timer=setTimeout(()=>{timer=null;publish().catch(()=>{});},60000);
}
function publish(force=false){
 const uid=currentUser;
 queue=queue.catch(()=>{}).then(async()=>{
  if(!available(uid))return false;
  const p=preferences(),m=metrics(),payload={};
  for(const [key,b] of Object.entries(boards)){
   // Unset legacy preferences are private; do not opt them in or create entries.
   if(!Object.hasOwn(p,b.pref))continue;
   payload['generalLeaderboards/'+b.path+'/'+uid]=p[b.pref]===true&&eligible(key,m)?{name:publicProfileName(uid),value:m[key],samples:key==='performance'?m.samples:0}:null;
   for(const old of paths(key).filter(path=>path!==b.path))payload['generalLeaderboards/'+old+'/'+uid]=null;
  }
  const sig=JSON.stringify(payload);if(!Object.keys(payload).length||(!force&&signatures.get(uid)===sig))return true;
  const patch={};for(const [path,value] of Object.entries(payload))patch[path]=value?{...value,updated:{'.sv':'timestamp'}}:null;
  try{
   await cloudRequest('/.json',{method:'PATCH',body:JSON.stringify(patch)},uid);
   if(!available(uid))return false;signatures.set(uid,sig);refreshChoices();
   if(!screen.classList.contains('hidden')){$('generalLbSaveStatus').textContent='Participation and public summaries are synced.';await load();}
   return true;
  }catch(error){
   if(currentUser===uid&&!screen.classList.contains('hidden'))$('generalLbSaveStatus').textContent='Public updates could not sync. Reconnect and use Retry sync. '+cloudError(error);
   throw error;
  }
 });return queue;
}
async function syncNow(){
 clearTimeout(timer);timer=null;
 if(!available())throw Error('Sign in with a verified account to change participation.');
 cloudCapture();await Store.writeLocal(ROOT);
 if(!await cloudFlush())throw Error('Saved on this device. Public changes are pending; reconnect and use Retry sync.');
 clearTimeout(timer);timer=null;
 return publish(true);
}
async function changeChoice(key,enabled){
 if(saving||!available()){refreshChoices();return;}
 const uid=currentUser;saving=true;preferences()[boards[key].pref]=enabled;consent(STATE,key,enabled,'leaderboards');refreshChoices();
 $('generalLbSaveStatus').textContent=enabled?'Saving your choice and publishing eligible history…':'Removing your public entry…';
 try{await syncNow();}catch(error){if(currentUser===uid)$('generalLbSaveStatus').textContent=cloudError(error);}
 finally{saving=false;refreshChoices();}
}
function sorted(data){return Object.entries(data||{}).map(([uid,r])=>({...r,uid})).filter(r=>r&&typeof r.name==='string'&&Number.isFinite(r.value)&&r.value>0).sort((a,b)=>b.value-a.value||a.uid.localeCompare(b.uid));}
async function load(){
 const sequence=++loadSequence,key=selected,uid=currentUser,b=boards[key];
 $('generalLbHeading').textContent=b.title;$('generalLbValueHeading').textContent=b.heading;
 $('generalLbRows').replaceChildren();$('generalLbLoadStatus').textContent='Loading rankings…';
 document.querySelectorAll('[data-glb-tab]').forEach(btn=>btn.setAttribute('aria-pressed',String(btn.dataset.glbTab===key)));
 try{
  const data=await lbRequest('/generalLeaderboards/'+b.path+'.json?orderBy=%22value%22&limitToLast=100');
  if(sequence!==loadSequence||uid!==currentUser)return;
  const entries=sorted(data),body=$('generalLbRows');let rank=0,last=null;
  const top=entries[0]?.value||1,labelChars=Math.max(1,...entries.map(r=>format(key,r.value).length));
  entries.forEach((r,i)=>{
   if(r.value!==last)rank=i+1;last=r.value;
   const row=document.createElement('tr');if(r.uid===currentUser)row.className='glb-you';
   const texts=[rank,r.name+(r.uid===currentUser?' (you)':''),format(key,r.value)];
   for(const [i,text] of texts.entries()){
    const cell=document.createElement(i===1?'th':'td');if(i===1)cell.scope='row';
    if(i!==2)cell.textContent=String(text);
    else{
     const plot=document.createElement('div');plot.className='glb-bar-space';plot.style.setProperty('--glb-label-width','calc('+labelChars+'ch + 20px)');
     const area=document.createElement('div');area.className='glb-bar-area';
     const relative=document.createElement('div');relative.className='glb-relative';relative.style.width=(Math.max(0,Math.min(1,r.value/top))*100)+'%';
     const line=document.createElement('span');line.className='glb-line';line.setAttribute('aria-hidden','true');
     const number=document.createElement('span');number.className='glb-bar-number';number.textContent=String(text);
     relative.append(line,number);area.append(relative);plot.append(area);cell.append(plot);
    }
    row.append(cell);
   }body.append(row);
  });
  $('generalLbLoadStatus').textContent=entries.length?'Updated '+new Date().toLocaleTimeString()+'. Showing '+entries.length+' published entries.':'No participants have an eligible published result yet.';
 }catch(error){if(sequence===loadSequence&&uid===currentUser)$('generalLbLoadStatus').textContent='Rankings could not load. Check your connection and try Refresh rankings. The site owner may need to publish the updated database rules.';}
}
for(const [key,b] of Object.entries(boards)){
 const card=document.createElement('section');card.className='glb-choice';
 const title=document.createElement('h2');title.textContent=b.short;
 const value=document.createElement('p');value.className='glb-own';value.id='glbOwn-'+key;
 const note=document.createElement('p');note.className='study-muted';note.id='glbOwnNote-'+key;
 const label=document.createElement('label');label.className='glb-opt';const input=document.createElement('input');input.type='checkbox';input.id='glbOpt-'+key;input.addEventListener('change',()=>changeChoice(key,input.checked));
 const text=document.createElement('span');text.textContent='Participate in '+b.short.toLowerCase();label.append(input,text);card.append(title,value,note,label);$('generalLbChoices').append(card);
 const button=document.createElement('button');button.type='button';button.className='bigbtn ghost';button.dataset.glbTab=key;button.textContent=b.short;button.setAttribute('aria-pressed',String(key===selected));button.onclick=()=>{selected=key;load();};$('generalLbTabs').append(button);
}
const retry=document.createElement('button');retry.type='button';retry.className='bigbtn ghost';retry.id='generalLbRetry';retry.textContent='Retry sync';$('generalLbActions').prepend(retry);
retry.onclick=async()=>{if(saving)return;saving=true;refreshChoices();retry.disabled=true;try{await syncNow();}catch(e){$('generalLbSaveStatus').textContent=cloudError(e);}finally{saving=false;retry.disabled=false;refreshChoices();}};
$('generalLbRefresh').onclick=async()=>{
 const button=$('generalLbRefresh');if(button.disabled||saving)return;button.disabled=true;saving=true;refreshChoices();
 try{
  if(available()){await cloudRefresh();await syncNow();}
  await load();
 }catch(error){$('generalLbSaveStatus').textContent=cloudError(error);await load();}
 finally{button.disabled=false;saving=false;refreshChoices();}
};
window.showGeneralLeaderboards=function(){
 studyHide();if(timerId)clearInterval(timerId);if(dualGapTimerId){clearInterval(dualGapTimerId);dualGapTimerId=null;}stopPreExamTimer();
 document.querySelectorAll('.screen').forEach(e=>e.classList.add('hidden'));
 ['preExamScreen','topbar','substrip','testMain','footbar','navOver','paperGapScreen','endConfirm'].forEach(id=>$(id)?.classList.add('hidden'));
 setSideNav('leaderboards');screen.classList.remove('hidden');$('airyMoreNav').open=false;screen.scrollTop=0;window.scrollTo(0,0);refreshChoices();
 $('generalLbSaveStatus').textContent=available()?'Choose each ranking independently. Switches are saved with your account.':'Sign in with a verified account to participate.';
 load();if(available())syncNow().catch(e=>{$('generalLbSaveStatus').textContent=cloudError(e);});
};
$('navLeaderboards').addEventListener('click',showGeneralLeaderboards);
window.GeneralLeaderboards={metrics,optInAll,withdrawAll,addRemovals,withdrawalPatch,schedule,publish,refreshChoices,sorted};
})();
