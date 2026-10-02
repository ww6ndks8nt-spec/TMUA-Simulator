(function(){
'use strict';
const E=window.MentalMathsEngine,screen=document.getElementById('mentalScreen');
if(!E||!screen)return;
const el=id=>document.getElementById(id),fresh=()=>({completed:0,attempted:0,correct:0,streak:0,best:0,number:0});
let owner=null,mode='arithmetic',lesson='remainders',selected=Object.keys(E.categories),bag=[],question=null,closed=false,checked=false,elapsed=0,tickingAt=null,lastPrompt='',stats={arithmetic:fresh(),modular:fresh()};
const user=()=>typeof currentUser==='undefined'?'guest':currentUser||'guest';
function save(){try{localStorage.setItem('ducktmua.mental.settings.'+owner,JSON.stringify({selected,lesson,timer:el('mmTimerToggle').checked}));}catch(e){}}
function load(){
 selected=Object.keys(E.categories);lesson='remainders';el('mmTimerToggle').checked=false;
 try{const p=JSON.parse(localStorage.getItem('ducktmua.mental.settings.'+owner)||'null');if(p){const valid=Array.isArray(p.selected)?p.selected.filter(x=>Object.hasOwn(E.categories,x)):[];if(valid.length)selected=valid;if(E.lessons.some(x=>x.id===p.lesson)||p.lesson==='mixed')lesson=p.lesson;el('mmTimerToggle').checked=!!p.timer;}}catch(e){}
 screen.querySelectorAll('[data-mm-category]').forEach(x=>x.checked=selected.includes(x.value));el('mmLesson').value=lesson;
}
function pause(){if(tickingAt!==null){elapsed+=performance.now()-tickingAt;tickingAt=null;}}
function syncClock(){const active=!screen.classList.contains('hidden')&&!document.hidden&&!closed;if(active&&tickingAt===null)tickingAt=performance.now();if(!active)pause();}
function timer(){syncClock();el('mmTimer').hidden=!el('mmTimerToggle').checked;el('mmTimer').textContent=((elapsed+(tickingAt===null?0:performance.now()-tickingAt))/1000).toFixed(1)+' s';}
function renderStats(){const s=stats[mode];el('mmCompleted').textContent=s.completed;el('mmAccuracy').textContent=s.attempted?Math.round(100*s.correct/s.attempted)+'%':'—';el('mmStreak').textContent=s.streak;el('mmBest').textContent=s.best;}
function lessonCopy(){
 const l=E.lessons.find(x=>x.id===lesson);
 el('mmLessonTitle').textContent=l?l.title:'Mixed modular practice';
 el('mmLessonText').textContent=l?l.text:'Combine the skills from all six topics. Reduce to the least non-negative remainder each time.';
 el('mmLessonExample').textContent=l?l.example:'For example, (−7 + 23) mod 5 = (3 + 3) mod 5 = 1.';
 el('mmLessonTip').textContent=l?l.tip:'If a question feels unfamiliar, choose its topic from the menu to revisit the explanation.';
}
function drawMode(){
 const modular=mode==='modular';el('mmPracticeMode').setAttribute('aria-pressed',String(!modular));el('mmModMode').setAttribute('aria-pressed',String(modular));
 el('mmArithmeticSettings').hidden=modular;el('mmModSettings').hidden=!modular;el('mmLessonCard').hidden=!modular;lessonCopy();
}
function chooseQuestion(){
 const pool=mode==='arithmetic'?selected:lesson==='mixed'?E.lessons.map(x=>x.id):[lesson];
 if(!bag.length)bag=E.shuffle(pool);
 const cat=bag.pop();let q;
 for(let n=0;n<15;n++){q=mode==='arithmetic'?E.generate(cat):E.generateMod(cat);if(q.prompt!==lastPrompt)break;}
 return q;
}
function next(focus=true){
 pause();elapsed=0;question=chooseQuestion();lastPrompt=question.prompt;closed=false;checked=false;stats[mode].number++;
 el('mmSkill').textContent=question.label;el('mmCounter').textContent='Question '+stats[mode].number;el('mmPrompt').textContent=question.prompt;
 el('mmAnswerHelp').textContent=question.modulus?'Give an integer from 0 to '+(question.modulus-1)+' (the least non-negative remainder).':'Type your answer. Decimals and simple fractions are accepted.';
 el('mmAnswer').value='';el('mmAnswer').disabled=false;el('mmSign').disabled=false;el('mmAnswer').removeAttribute('aria-invalid');
 el('mmCheck').textContent='Check answer';el('mmFeedback').textContent='';el('mmFeedback').removeAttribute('data-tone');
 el('mmHint').hidden=true;el('mmHintButton').setAttribute('aria-expanded','false');el('mmHintButton').textContent='Show hint';el('mmHintButton').disabled=false;el('mmReveal').disabled=false;el('mmExplanation').hidden=true;
 renderStats();timer();if(focus)el('mmAnswer').focus({preventScroll:true});
}
function recordFirst(correct){if(checked)return;checked=true;const s=stats[mode];s.attempted++;if(correct){s.correct++;s.streak++;s.best=Math.max(s.best,s.streak);}else s.streak=0;renderStats();}
function finish(revealed=false){
 if(closed)return;closed=true;pause();stats[mode].completed++;el('mmAnswer').disabled=true;el('mmSign').disabled=true;el('mmHintButton').disabled=true;el('mmReveal').disabled=true;
 el('mmCheck').textContent='Next question →';el('mmExplanationText').textContent=question.explanation;el('mmExplanation').hidden=false;
 if(revealed){el('mmFeedback').textContent='Answer: '+E.fmt(question.answer)+'. Read the method, then try another.';el('mmFeedback').removeAttribute('data-tone');}
 else{el('mmFeedback').textContent='Correct — '+E.fmt(question.answer)+'.';el('mmFeedback').dataset.tone='correct';}
 renderStats();timer();el('mmCheck').focus({preventScroll:true});
}
function switchMode(value){if(mode===value)return;pause();mode=value;bag=[];drawMode();next(false);screen.scrollTo(0,0);if(smallScreen.matches)el('mmSettingsDetails').open=false;}
window.showMentalMaths=function(){
 if(owner!==user()){owner=user();stats={arithmetic:fresh(),modular:fresh()};mode='arithmetic';bag=[];question=null;load();drawMode();}
 if(typeof studyHide==='function')studyHide();
 if(typeof timerId!=='undefined'&&timerId)clearInterval(timerId);
 if(typeof dualGapTimerId!=='undefined'&&dualGapTimerId){clearInterval(dualGapTimerId);dualGapTimerId=null;}
 if(typeof stopPreExamTimer==='function')stopPreExamTimer();
 document.querySelectorAll('.screen').forEach(x=>{if(x!==screen)x.classList.add('hidden');});
 ['topbar','substrip','testMain','footbar','navOver','paperGapScreen','endConfirm'].forEach(id=>el(id)?.classList.add('hidden'));
 setSideNav('mental');screen.classList.remove('hidden');screen.scrollTo(0,0);window.scrollTo(0,0);
 if(!question)next(false);else{renderStats();timer();}
};
Object.entries(E.categories).forEach(([value,label])=>{const row=document.createElement('label');row.className='mm-category';const input=document.createElement('input');input.type='checkbox';input.value=value;input.checked=true;input.dataset.mmCategory=value;row.append(input,document.createTextNode(label));el('mmCategories').appendChild(row);input.addEventListener('change',()=>{const list=Array.from(screen.querySelectorAll('[data-mm-category]:checked'),x=>x.value);if(!list.length){input.checked=true;el('mmFeedback').textContent='Keep at least one question type selected.';return;}selected=list;bag=[];save();next(false);});});
[...E.lessons,{id:'mixed',title:'Mixed practice · all topics'}].forEach(l=>{const option=document.createElement('option');option.value=l.id;option.textContent=l.title;el('mmLesson').appendChild(option);});
el('navMental').addEventListener('click',window.showMentalMaths);
el('mmPracticeMode').addEventListener('click',()=>switchMode('arithmetic'));el('mmModMode').addEventListener('click',()=>switchMode('modular'));
el('mmLesson').addEventListener('change',()=>{lesson=el('mmLesson').value;bag=[];lessonCopy();save();next(false);});
el('mmAnswerForm').addEventListener('submit',event=>{event.preventDefault();if(closed){next();return;}const result=E.mark(el('mmAnswer').value,question);el('mmAnswer').setAttribute('aria-invalid',String(!result.valid||!result.correct));if(!result.valid){el('mmFeedback').textContent=result.message;el('mmFeedback').dataset.tone='wrong';return;}recordFirst(result.correct);if(result.correct)finish();else{el('mmFeedback').textContent='Not quite. Try again, use a hint, or reveal the answer.';el('mmFeedback').dataset.tone='wrong';el('mmAnswer').focus();el('mmAnswer').select();}});
el('mmAnswer').addEventListener('input',()=>el('mmAnswer').removeAttribute('aria-invalid'));
el('mmSign').addEventListener('click',()=>{const field=el('mmAnswer'),v=field.value.trim().replace(/^−/,'-');field.value=v.startsWith('-')?v.slice(1):'-'+v.replace(/^\+/,'');field.focus();field.removeAttribute('aria-invalid');});
el('mmHintButton').addEventListener('click',()=>{const visible=el('mmHint').hidden;el('mmHint').textContent=question.hint;el('mmHint').hidden=!visible;el('mmHintButton').setAttribute('aria-expanded',String(visible));el('mmHintButton').textContent=visible?'Hide hint':'Show hint';});
el('mmReveal').addEventListener('click',()=>{recordFirst(false);finish(true);});
el('mmTimerToggle').addEventListener('change',()=>{save();timer();});
el('mmReset').addEventListener('click',()=>{stats[mode]=fresh();bag=[];next();});
new MutationObserver(syncClock).observe(screen,{attributes:true,attributeFilter:['class']});document.addEventListener('visibilitychange',syncClock);setInterval(()=>{if(!screen.classList.contains('hidden'))timer();},200);
const smallScreen=window.matchMedia('(max-width:850px)');
function sizeSettings(){el('mmSettingsDetails').open=!smallScreen.matches;}
smallScreen.addEventListener('change',sizeSettings);sizeSettings();
drawMode();
})();
