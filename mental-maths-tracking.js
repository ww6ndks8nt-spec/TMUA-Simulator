/* Private, per-session aggregates use the existing account record store. */
(function(){
'use strict';
const E=window.MentalMathsEngine,screen=document.getElementById('mentalScreen');
if(!E||!screen)return;
const $=id=>document.getElementById(id),sessionIds=new Map();
let guest={};
try{guest=JSON.parse(localStorage.getItem('ducktmua.mental.guestHistory')||'{}')||{};}catch(e){}
const fresh=()=>({n:0,correct:0,time:0,fast:0,assisted:0,revealed:0});
const number=x=>Number.isFinite(x)&&x>=0?x:0;
function data(){return typeof currentUser!=='undefined'&&currentUser?(STATE.mentalMaths??={}):guest;}
function rowFact(q){
 if(q.category!=='multiply'||q.modulus||!Array.isArray(q.operands))return null;
 const [a,b]=q.operands,n=Math.max(Math.abs(a),Math.abs(b));
 if(!Number.isInteger(a)||!Number.isInteger(b)||!a||!b||n>50)return null;
 return {row:n,factor:a*b/n};
}
function add(total,item){for(const k of Object.keys(fresh()))total[k]+=number(item[k]);return total;}
function record({owner,mode,question,correct,timeMs,assisted,revealed}){
 const uid=typeof currentUser==='undefined'?'guest':currentUser||'guest';
 if(owner!==uid)return;
 if(!sessionIds.has(uid))sessionIds.set(uid,crypto.randomUUID());
 const id=sessionIds.get(uid),history=data(),session=history[id]??={v:1,started:Date.now(),updated:Date.now(),skills:{},rows:{}};
 const item={n:1,correct:correct?1:0,time:Math.max(0,Math.round(timeMs)),fast:correct&&!assisted&&!revealed&&timeMs<=5000?1:0,assisted:assisted?1:0,revealed:revealed?1:0};
 const key=[mode,question.category,question.difficulty].join(':');
 add(session.skills[key]??=fresh(),item);
 const fact=mode==='arithmetic'?rowFact(question):null;
 if(fact){const row=session.rows[fact.row]??={...fresh(),facts:{}};add(row,item);row.facts[fact.factor]=true;}
 session.updated=Date.now();
 // Cache and capture the pending sync immediately, including if the page closes next.
 if(uid!=='guest')persistNow();
 else try{localStorage.setItem('ducktmua.mental.guestHistory',JSON.stringify(guest));}catch(e){}
 render();
}
function summarise(history,mode='all',level='all'){
 const total=fresh(),skills={},rows={};
 for(const session of Object.values(history||{})){
  if(!session||session.v!==1)continue;
  for(const [key,item] of Object.entries(session.skills||{})){
   const [m,c,d]=key.split(':');if((mode!=='all'&&mode!==m)||(level!=='all'&&level!==d)||!item)continue;
   add(total,item);add(skills[m+':'+c]??=fresh(),item);
  }
  for(const [n,item] of Object.entries(session.rows||{})){
   if(!item||!/^([1-9]|[1-4][0-9]|50)$/.test(n))continue;
   const row=rows[n]??={...fresh(),facts:{}};add(row,item);
   for(const k of Object.keys(item.facts||{}))if(Number.isInteger(+k)&&+k!==0&&Math.abs(+k)<=+n)row.facts[k]=true;
  }
 }
 return {total,skills,rows};
}
const percent=(a,b)=>b?Math.round(a/b*100)+'%':'—';
const average=s=>s.n?(s.time/s.n/1000).toFixed(1)+' s':'—';
const duration=ms=>{const s=Math.floor(ms/1000);return s>=3600?Math.floor(s/3600)+' h '+Math.floor(s%3600/60)+' min':s>=60?Math.floor(s/60)+' min '+s%60+' s':s+' s';};
function fluency(s,n){
 const coverage=Object.keys(s.facts||{}).length/(2*n);
 if(!s.n)return {label:'Not practised',tone:'new'};
 if(s.n<10||coverage<.5)return {label:'More practice needed',tone:'new'};
 const rate=s.fast/s.n;
 return rate>=.9?{label:'Fluent',tone:'fluent'}:rate>=.7?{label:'Developing',tone:'developing'}:{label:'Building fluency',tone:'building'};
}
screen.querySelector('.mm-session-footer').insertAdjacentHTML('afterend',`
<section class="mm-panel mm-history" aria-labelledby="mmHistoryTitle">
 <h2 id="mmHistoryTitle">Your mental maths progress</h2>
 <p id="mmHistoryStorage" class="mm-muted mm-small"></p>
 <div class="mm-history-filters"><label>Mode<select id="mmHistoryMode"><option value="all">All modes</option><option value="arithmetic">Mental maths</option><option value="modular">Modular arithmetic</option><option value="quadratic">Quadratic factorisation</option><option value="polynomial">Polynomial factorisation</option><option value="trig">Common trig values</option></select></label><label>Difficulty<select id="mmHistoryLevel"><option value="all">All levels</option><option value="easy">Easy</option><option value="medium">Medium</option><option value="hard">Hard</option></select></label></div>
 <div class="mm-stats mm-history-stats" aria-label="Saved practice summary"><div><span id="mmHistoryCount">0</span><p>Completed questions</p></div><div><span id="mmHistoryAccuracy">—</span><p>First-check accuracy</p></div><div><span id="mmHistoryAverage">—</span><p>Average time</p></div><div><span id="mmHistoryTime">0 s</span><p>Active practice time</p></div></div>
 <p class="mm-muted mm-small">Completed questions only. Revealed answers count as incorrect. Timing includes retries and hints, but excludes time away from the tab. Unsubmitted typing edits are not errors. Mixed practice is grouped by each question’s actual difficulty.</p>
 <div class="mm-table-scroll" role="region" aria-label="Accuracy and timing by skill" tabindex="0"><table class="mm-progress-table"><thead><tr><th scope="col">Skill</th><th scope="col">Completed</th><th scope="col">Accuracy</th><th scope="col">Average time</th><th scope="col">Hints / reveals</th></tr></thead><tbody id="mmHistorySkills"></tbody></table></div>
 <p id="mmHistoryEmpty" class="mm-muted">Complete a question to start your saved summary.</p>
</section>
<section class="mm-panel mm-fluency" aria-labelledby="mmFluencyTitle">
 <h2 id="mmFluencyTitle">Multiplication fluency</h2>
 <p class="mm-muted mm-small">All saved multiplication practice, across all levels. Row 12 covers 12 × (−12) through 12 × 12, excluding zero. The largest factor magnitude determines the row; swapped factors and equivalent signs share a fact, so (−12) × (−5) counts as 12 × 5.</p>
 <p class="mm-muted mm-small">The bar shows the percentage answered correctly at the first check, without a hint, within 5 seconds. “Fluent” requires at least 90%, 10 completed questions and half the row’s distinct facts practised. This is a practice benchmark, not an exam grade.</p>
 <div class="mm-table-scroll mm-row-scroll" role="region" aria-label="Fluency for multiplication rows 1 to 50" tabindex="0"><table class="mm-progress-table"><thead><tr><th scope="col">Row</th><th scope="col">Facts practised</th><th scope="col">Completed</th><th scope="col">Accuracy</th><th scope="col">Average time</th><th scope="col">Fluency</th></tr></thead><tbody id="mmFluencyRows"></tbody></table></div>
</section>`);
function render(){
 const {total,skills,rows}=summarise(data(),$('mmHistoryMode').value,$('mmHistoryLevel').value);
 $('mmHistoryStorage').textContent=(typeof currentUser!=='undefined'&&currentUser?'Saved privately with your account and included in cross-device sync.':'Saved in this browser for guest practice.')+' Tracking starts with this update. Starting a fresh session does not erase this summary.';
 $('mmHistoryCount').textContent=total.n;$('mmHistoryAccuracy').textContent=percent(total.correct,total.n);$('mmHistoryAverage').textContent=average(total);$('mmHistoryTime').textContent=duration(total.time);$('mmHistoryEmpty').hidden=total.n>0;
 const body=$('mmHistorySkills');body.replaceChildren();
 for(const m of ['arithmetic','modular','quadratic','polynomial','trig']){
 const cats=m==='trig'?[['sin','Sine'],['cos','Cosine'],['tan','Tangent']]:E.factorModes?.[m]?[[m,E.factorModes[m]]]:m==='arithmetic'?Object.entries(E.categories):E.lessons.map(l=>[l.id,'Modular: '+l.title.split(' · ').slice(1).join(' · ')]);
 for(const [c,label] of cats){const s=skills[m+':'+c];if(!s)continue;const tr=document.createElement('tr');for(const text of [label,s.n,percent(s.correct,s.n),average(s),s.assisted+' / '+s.revealed]){const cell=document.createElement(tr.children.length?'td':'th');if(!tr.children.length)cell.scope='row';cell.textContent=text;tr.append(cell);}body.append(tr);}
 }
 const rowBody=$('mmFluencyRows');rowBody.replaceChildren();
 for(let n=1;n<=50;n++){
 const s=rows[n]||{...fresh(),facts:{}},f=fluency(s,n),tr=document.createElement('tr');tr.dataset.row=n;
 for(const text of [n+' × (−'+n+' … '+n+')',Object.keys(s.facts).length+' / '+2*n,s.n,percent(s.correct,s.n),average(s)]){const cell=document.createElement(tr.children.length?'td':'th');if(!tr.children.length)cell.scope='row';cell.textContent=text;tr.append(cell);}
 const td=document.createElement('td'),label=document.createElement('span'),bar=document.createElement('span');label.className='mm-fluency-label';label.dataset.tone=f.tone;label.textContent=f.label+(s.n?' · '+percent(s.fast,s.n):'');bar.className='mm-fluency-bar';bar.setAttribute('aria-hidden','true');const fill=document.createElement('span');fill.style.width=(s.n?100*s.fast/s.n:0)+'%';bar.append(fill);td.append(label,bar);tr.append(td);rowBody.append(tr);
 }
}
$('mmHistoryMode').addEventListener('change',render);$('mmHistoryLevel').addEventListener('change',render);
window.MentalMathsTracking={record,render,summarise,rowFact,fluency};
})();
