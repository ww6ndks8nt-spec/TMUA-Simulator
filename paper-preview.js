/* Paper preview: retain existing exam, timing, review and leaderboard handlers. */
(function(){
'use strict';
const el=id=>document.getElementById(id),screen=el('startScreen'),card=screen.querySelector('.card');
const make=(tag,cls,text)=>{const e=document.createElement(tag);if(cls)e.className=cls;if(text!==undefined)e.textContent=text;return e;};
screen.classList.add('paper-preview');
const back=el('backToLib1'),brand=el('startBrand'),title=el('startTitle');
const oldSpecs=card.querySelector('.specs'),timing=el('startTimingSelect').closest('label'),buttons=card.querySelector('.startrow');
const top=make('div','pp-top'),banner=make('section','pp-panel pp-banner'),setup=make('section','pp-panel pp-setup');
const facts=make('div','pp-facts');
for(const [id,label] of [['ppCount','Questions'],['ppStandard','Standard time'],['ppDifficulty','Difficulty']]){
 const fact=make('div','pp-fact'),value=make('div','pp-value');value.id=id;fact.append(value,make('span','pp-label',label));facts.append(fact);
}
banner.append(brand,title,facts);
const instructions=make('details','pp-instructions');instructions.id='ppInstructions';instructions.append(make('summary','','Instructions'));
// Preserve source-material links, keyboard guidance and companion instructions.
instructions.append(oldSpecs,el('companionRow'),el('companionInstructions'),el('stdInstructions'));
timing.firstChild.textContent='Time allowed';
const more=make('details','pp-more');more.append(make('summary','','Combined sitting'),el('beginBothBtn'),el('beginBothNote'));
setup.append(make('h2','','Set up your sitting'),timing,instructions,buttons,more);
top.append(banner,setup);
const stats=make('section','pp-panel pp-stats');stats.append(make('h2','','Your stats'));
for(const [id,label] of [['ppBest','Best score'],['ppFirst','First score'],['ppAttempts','Attempts']]){const slot=make('div','pp-stat'),value=make('strong');value.id=id;slot.append(make('span','pp-label',label),value);stats.append(slot);}
const tabs=make('div','pp-tabs');tabs.setAttribute('role','tablist');tabs.setAttribute('aria-label','Paper history');
const panels={attempts:make('section','pp-history'),leaderboard:make('section','pp-leaderboard')};
let selected='attempts';
function selectTab(key){selected=key;for(const [name,panel] of Object.entries(panels)){panel.hidden=name!==key;el('ppTab-'+name).setAttribute('aria-selected',String(name===key));}}
for(const [key,label] of [['attempts','Your attempts'],['leaderboard','Leaderboard']]){
 const btn=make('button','pp-tab',label);btn.type='button';btn.id='ppTab-'+key;btn.setAttribute('role','tab');btn.setAttribute('aria-controls','ppPanel-'+key);btn.addEventListener('click',()=>selectTab(key));
 btn.addEventListener('keydown',e=>{if(['ArrowLeft','ArrowRight','Home','End'].includes(e.key)){e.preventDefault();const next=e.key==='Home'?'attempts':e.key==='End'?'leaderboard':selected==='attempts'?'leaderboard':'attempts';selectTab(next);el('ppTab-'+next).focus();}});
 tabs.append(btn);panels[key].id='ppPanel-'+key;panels[key].setAttribute('role','tabpanel');panels[key].setAttribute('aria-labelledby',btn.id);
}
panels.attempts.append(el('attemptHist'));panels.leaderboard.append(el('lbCard'));
const legacy=make('div','pp-legacy');legacy.hidden=true;legacy.append(el('startSub'),el('startDifficulty'),el('qGrid'));
card.replaceChildren(back,top,stats,tabs,panels.attempts,panels.leaderboard,legacy);
selectTab('attempts');
function category(p){return p.esat?'Archive paper':p.mat?'MAT paper':isChallengePaper(p)?'Challenge set':p.group===4?'Official paper':p.group===1||p.group===2?'Practice set':/^step/i.test(p.id)?'STEP adaptation':'Community paper';}
function score(p,r){return Array.isArray(r.a)&&r.a.length===p.questions.length?scoreAttemptForPaper(p,r.a):Number.isFinite(r.c)&&Number.isFinite(r.s)&&r.s>0?{c:r.c,s:r.s}:null;}
function scoreText(s){return s?s.c+' / '+s.s:'—';}
function timeText(r){if(!Array.isArray(r.questionTimesMs)||!r.questionTimesMs.some(x=>Number.isFinite(Number(x))&&Number(x)>0))return '—';return fmtQuestionTime(dashboardAttemptTimeMs(r));}
function render(p){
 brand.textContent=category(p);
 title.replaceChildren();const parts=p.title.split(/\s*[·–]\s*(?=Paper\s)/i);parts.forEach((part,i)=>{if(i)title.append(document.createElement('br'));title.append(document.createTextNode(part));});
 el('ppCount').textContent=p.questions.length;el('ppStandard').textContent=paperTimeLabel(standardPaperSeconds(p));
 el('ppDifficulty').innerHTML=difficultyRatingMarkup(difficultyStats(p).mean);
 instructions.open=false;more.open=false;more.hidden=el('beginBothBtn').classList.contains('hidden');
 if(el('beginBtn').textContent==='Begin test')el('beginBtn').textContent='Start paper →';
 const rows=(STATE.results[p.id]||[]).filter(r=>r&&typeof r==='object').slice().sort((a,b)=>(Number(a.t)||0)-(Number(b.t)||0));
 const scores=rows.map(r=>score(p,r)),best=scores.filter(Boolean).reduce((best,s)=>!best||s.c/s.s>best.c/best.s?s:best,null);
 el('ppBest').textContent=scoreText(best);el('ppFirst').textContent=scoreText(scores[0]);el('ppAttempts').textContent=rows.length;
 const host=el('attemptHist');host.replaceChildren();host.classList.remove('hidden');
 if(!rows.length)host.append(make('p','pp-empty','No attempts yet.'));
 rows.slice().reverse().forEach(r=>{
  const s=score(p,r),grade=s?difficultyGrade(s.c,p):null,details=make('details','pp-attempt'),summary=make('summary');
  const date=make('time','pp-date',Number.isFinite(Number(r.t))&&Number(r.t)>0?new Date(Number(r.t)).toLocaleDateString('en-GB'):'Date unavailable');
  if(Number.isFinite(Number(r.t))&&Number(r.t)>0)date.dateTime=new Date(Number(r.t)).toISOString();
  const metric=(label,value)=>{const e=make('span','pp-metric');e.append(make('small','',label),make('strong','',value));return e;};
  const chevron=make('span','pp-chevron','⌄');chevron.setAttribute('aria-hidden','true');
  summary.append(date,make('strong','pp-score',scoreText(s)),metric('Estimated grade',grade===null?'—':grade.toFixed(1)),metric('Tracked time',timeText(r)),chevron);
  const body=make('div','pp-expanded'),scroll=make('div','pp-question-scroll'),table=make('table','pp-question-table');
  table.setAttribute('aria-label','Correct and incorrect answers by question');table.style.minWidth=Math.max(300,p.questions.length*34)+'px';
  const thead=make('thead'),tbody=make('tbody'),numbers=make('tr'),marks=make('tr');
  p.questions.forEach((q,i)=>{const th=make('th','','Q'+(i+1));th.scope='col';numbers.append(th);
   const a=Array.isArray(r.a)?r.a[i]:undefined,excluded=q.correct===99,missing=!Array.isArray(r.a)||r.a.length!==p.questions.length;
   const correct=!missing&&!excluded&&isCorrectAns(q,a??null),label=excluded?'Excluded from scoring':missing?'Answer unavailable':correct?'Correct':a==null?'Unanswered':'Incorrect';
   const td=make('td',excluded||missing?'pp-unknown':correct?'pp-correct':'pp-incorrect',excluded||missing?'—':correct?'✓':'✕');td.setAttribute('aria-label',label);marks.append(td);
  });
  thead.append(numbers);tbody.append(marks);table.append(thead,tbody);scroll.append(table);body.append(scroll);
  if(Array.isArray(r.a)&&r.a.length===p.questions.length){const actions=make('div','pp-attempt-actions'),review=make('button','bigbtn ghost','Review attempt ↗');review.type='button';review.addEventListener('click',()=>{if(active===p)reviewAttempt(r);});actions.append(review);body.append(actions);}
  details.append(summary,body);host.append(details);
 });
 selectTab('attempts');screen.scrollTop=0;
}
const originalOpen=openStart;
openStart=function(p){originalOpen(p);render(active);};
window.PaperPreview={render};
})();
