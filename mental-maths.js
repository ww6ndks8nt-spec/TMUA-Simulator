(function(){
'use strict';
const E=window.MentalMathsEngine,screen=document.getElementById('mentalScreen');
if(!E||!screen)return;
const el=id=>document.getElementById(id),fresh=()=>({completed:0,totalTimeMs:0,attempted:0,correct:0,streak:0,best:0,number:0});
const freshStats=()=>Object.fromEntries(['arithmetic','modular'].flatMap(m=>Object.keys(E.difficulties).map(d=>[m+':'+d,fresh()])));
let autoCheckTimer=null,composing=false;
let owner=null,difficulty='medium',mode='arithmetic',lesson='remainders',selected=Object.keys(E.categories),bag=[],levelBag=[],question=null,closed=false,checked=false,elapsed=0,tickingAt=null,lastPrompt='',stats=freshStats();
const user=()=>typeof currentUser==='undefined'?'guest':currentUser||'guest';
function save(){try{localStorage.setItem('ducktmua.mental.settings.'+owner,JSON.stringify({categoriesVersion:2,selected,lesson,difficulty,autoCheck:el('mmAutoCheck').checked,timer:el('mmTimerToggle').checked}));}catch(e){}}
function load(){
 selected=Object.keys(E.categories);lesson='remainders';difficulty='medium';el('mmAutoCheck').checked=true;el('mmTimerToggle').checked=false;
 try{const p=JSON.parse(localStorage.getItem('ducktmua.mental.settings.'+owner)||'null');if(p){difficulty=Object.hasOwn(E.difficulties,p.difficulty)?p.difficulty:'hard';el('mmAutoCheck').checked=p.autoCheck!==false;const valid=Array.isArray(p.selected)?p.selected.filter(x=>Object.hasOwn(E.categories,x)):[];if(valid.length){selected=valid;const originalCategories=Object.keys(E.categories).filter(x=>!['surds','fractions','decimals'].includes(x));if(p.categoriesVersion!==2&&originalCategories.every(x=>valid.includes(x)))selected=Object.keys(E.categories);}if(E.lessons.some(x=>x.id===p.lesson)||p.lesson==='mixed')lesson=p.lesson;el('mmTimerToggle').checked=!!p.timer;}}catch(e){}
 screen.querySelectorAll('[data-mm-category]').forEach(x=>x.checked=selected.includes(x.value));el('mmLesson').value=lesson;el('mmDifficulty').value=difficulty;difficultyCopy();
}
function pause(){if(tickingAt!==null){elapsed+=performance.now()-tickingAt;tickingAt=null;}}
function syncClock(){const active=!screen.classList.contains('hidden')&&!document.hidden&&!closed;if(active&&tickingAt===null)tickingAt=performance.now();if(!active)pause();}
function timer(){syncClock();el('mmTimer').hidden=!el('mmTimerToggle').checked;el('mmTimer').textContent=((elapsed+(tickingAt===null?0:performance.now()-tickingAt))/1000).toFixed(1)+' s';}
function renderStats(){const s=stats[mode+':'+difficulty];el('mmCompleted').textContent=s.completed;el('mmAccuracy').textContent=s.attempted?Math.round(100*s.correct/s.attempted)+'%':'—';el('mmStreak').textContent=s.streak;el('mmBest').textContent=s.best;el('mmAverageTime').textContent=s.completed?(s.totalTimeMs/s.completed/1000).toFixed(1)+' s':'—';}
function difficultyCopy(){
 const d=E.difficulties[difficulty];
 el('mmDifficultyHelp').textContent=d.description+(mode==='modular'?' '+d.modRange:'');
 el('mmRange').textContent=d.range;el('mmLevelBadge').textContent=difficulty==='mixed'&&question?'Mixed · '+E.difficulties[question.difficulty].label:d.label;
 el('mmKeyboardHelp').textContent=el('mmAutoCheck').checked?'Correct answers are checked automatically. Press Enter to check manually, or to move on after a correct answer.':'Press Enter to check your answer, then Enter again for the next question.';
}
function cancelAutoCheck(){clearTimeout(autoCheckTimer);autoCheckTimer=null;}
function scheduleAutoCheck(){
 cancelAutoCheck();el('mmAnswer').removeAttribute('aria-invalid');
 if(!closed){el('mmFeedback').textContent='';el('mmFeedback').removeAttribute('data-tone');}
 if(closed||composing||!question||!el('mmAutoCheck').checked)return;
 const pendingQuestion=question;
 autoCheckTimer=setTimeout(()=>{
  autoCheckTimer=null;
  if(closed||composing||question!==pendingQuestion||screen.classList.contains('hidden')||document.hidden||!el('mmAutoCheck').checked)return;
  const result=E.mark(el('mmAnswer').value,question);
  if(result.valid&&result.correct){recordFirst(true);finish();}
 },450);
}
function lessonCopy(){
 const l=E.lessons.find(x=>x.id===lesson);
 el('mmLessonTitle').textContent=l?l.title:'Mixed modular practice';
 el('mmLessonText').textContent=l?l.text:'Combine the skills from all six topics. Reduce to the least non-negative remainder each time.';
 el('mmLessonExample').textContent=l?l.example:'For example, (−7 + 23) mod 5 = (3 + 3) mod 5 = 1.';
 el('mmLessonTip').textContent=l?l.tip:'If a question feels unfamiliar, choose its topic from the menu to revisit the explanation.';
}
function drawMode(){
 const modular=mode==='modular';el('mmPracticeMode').setAttribute('aria-pressed',String(!modular));el('mmModMode').setAttribute('aria-pressed',String(modular));
 el('mmArithmeticSettings').hidden=modular;el('mmModSettings').hidden=!modular;el('mmLessonCard').hidden=!modular;lessonCopy();difficultyCopy();
}
function chooseQuestion(){
 const pool=mode==='arithmetic'?selected:lesson==='mixed'?E.lessons.map(x=>x.id):[lesson];
 if(!bag.length)bag=E.shuffle(pool);
 const cat=bag.pop();let level=difficulty;if(difficulty==='mixed'){if(!levelBag.length)levelBag=E.shuffle(E.difficultyLevels);level=levelBag.pop();}let q;
 for(let n=0;n<15;n++){q=mode==='arithmetic'?E.generate(cat,Math.random,level):E.generateMod(cat,Math.random,level);if(q.prompt!==lastPrompt)break;}
 return q;
}
function next(focus=true){
 cancelAutoCheck();composing=false;pause();elapsed=0;question=chooseQuestion();lastPrompt=question.prompt;closed=false;checked=false;stats[mode+':'+difficulty].number++;
 el('mmLevelBadge').textContent=(difficulty==='mixed'?'Mixed · ':'')+E.difficulties[question.difficulty].label;el('mmSkill').textContent=question.label;el('mmCounter').textContent='Question '+stats[mode+':'+difficulty].number;el('mmPrompt').textContent=question.prompt;
 el('mmAnswerHelp').textContent=question.answerHelp||(question.modulus?'Give an integer from 0 to '+(question.modulus-1)+' (the least non-negative remainder).':'Type your answer. Decimals and simple fractions are accepted.');
 el('mmAnswer').value='';el('mmAnswer').disabled=false;el('mmSign').disabled=false;el('mmAnswer').removeAttribute('aria-invalid');
 el('mmCheck').textContent='Check answer';el('mmFeedback').textContent='';el('mmFeedback').removeAttribute('data-tone');
 el('mmHint').hidden=true;el('mmHintButton').setAttribute('aria-expanded','false');el('mmHintButton').textContent='Show hint';el('mmHintButton').disabled=false;el('mmReveal').disabled=false;el('mmExplanation').hidden=true;
 renderStats();timer();if(focus)el('mmAnswer').focus({preventScroll:true});
}
function recordFirst(correct){if(checked)return;checked=true;const s=stats[mode+':'+difficulty];s.attempted++;if(correct){s.correct++;s.streak++;s.best=Math.max(s.best,s.streak);}else s.streak=0;renderStats();}
function finish(revealed=false){
 if(closed)return;cancelAutoCheck();closed=true;pause();stats[mode+':'+difficulty].completed++;stats[mode+':'+difficulty].totalTimeMs+=elapsed;el('mmAnswer').disabled=true;el('mmSign').disabled=true;el('mmHintButton').disabled=true;el('mmReveal').disabled=true;
 el('mmCheck').textContent='Next question →';el('mmExplanationText').textContent=question.explanation;el('mmExplanation').hidden=false;
 if(revealed){el('mmFeedback').textContent='Answer: '+(question.answerDisplay||E.fmt(question.answer))+'. Read the method, then try another.';el('mmFeedback').removeAttribute('data-tone');}
 else{el('mmFeedback').textContent='Correct — '+(question.answerDisplay||E.fmt(question.answer))+'.';el('mmFeedback').dataset.tone='correct';}
 renderStats();timer();el('mmCheck').focus({preventScroll:true});
}
function switchMode(value){if(mode===value)return;pause();mode=value;bag=[];levelBag=[];drawMode();next(false);screen.scrollTo(0,0);if(smallScreen.matches)el('mmSettingsDetails').open=false;}
window.showMentalMaths=function(){
 if(owner!==user()){owner=user();stats=freshStats();mode='arithmetic';bag=[];levelBag=[];question=null;load();drawMode();}
 if(typeof studyHide==='function')studyHide();
 if(typeof timerId!=='undefined'&&timerId)clearInterval(timerId);
 if(typeof dualGapTimerId!=='undefined'&&dualGapTimerId){clearInterval(dualGapTimerId);dualGapTimerId=null;}
 if(typeof stopPreExamTimer==='function')stopPreExamTimer();
 document.querySelectorAll('.screen').forEach(x=>{if(x!==screen)x.classList.add('hidden');});
 ['topbar','substrip','testMain','footbar','navOver','paperGapScreen','endConfirm'].forEach(id=>el(id)?.classList.add('hidden'));
 setSideNav('mental');screen.classList.remove('hidden');screen.scrollTo(0,0);window.scrollTo(0,0);
 if(!question)next(false);else{renderStats();timer();}
};
Object.entries(E.categories).forEach(([value,label])=>{const row=document.createElement('label');row.className='mm-category';const input=document.createElement('input');input.type='checkbox';input.value=value;input.checked=true;input.dataset.mmCategory=value;row.append(input,document.createTextNode(label));el('mmCategories').appendChild(row);input.addEventListener('change',()=>{const list=Array.from(screen.querySelectorAll('[data-mm-category]:checked'),x=>x.value);if(!list.length){input.checked=true;el('mmFeedback').textContent='Keep at least one question type selected.';return;}selected=list;bag=[];levelBag=[];save();next(false);});});
[...E.lessons,{id:'mixed',title:'Mixed practice · all topics'}].forEach(l=>{const option=document.createElement('option');option.value=l.id;option.textContent=l.title;el('mmLesson').appendChild(option);});
el('navMental').addEventListener('click',window.showMentalMaths);
el('mmPracticeMode').addEventListener('click',()=>switchMode('arithmetic'));el('mmModMode').addEventListener('click',()=>switchMode('modular'));
el('mmLesson').addEventListener('change',()=>{lesson=el('mmLesson').value;bag=[];levelBag=[];lessonCopy();save();next(false);});
el('mmAnswerForm').addEventListener('submit',event=>{event.preventDefault();cancelAutoCheck();if(composing)return;if(closed){next();return;}const result=E.mark(el('mmAnswer').value,question);el('mmAnswer').setAttribute('aria-invalid',String(!result.valid||!result.correct));if(!result.valid){el('mmFeedback').textContent=result.message;el('mmFeedback').dataset.tone='wrong';return;}recordFirst(result.correct);if(result.correct)finish();else{el('mmFeedback').textContent='Not quite. Try again, use a hint, or reveal the answer.';el('mmFeedback').dataset.tone='wrong';el('mmAnswer').focus();el('mmAnswer').select();}});
el('mmAnswer').addEventListener('input',scheduleAutoCheck);
el('mmAnswer').addEventListener('compositionstart',()=>{composing=true;cancelAutoCheck();});
el('mmAnswer').addEventListener('compositionend',()=>{composing=false;scheduleAutoCheck();});
el('mmSign').addEventListener('click',()=>{const field=el('mmAnswer'),v=field.value.trim().replace(/^−/,'-');field.value=v.startsWith('-')?v.slice(1):'-'+v.replace(/^\+/,'');field.focus();scheduleAutoCheck();});
el('mmHintButton').addEventListener('click',()=>{const visible=el('mmHint').hidden;el('mmHint').textContent=question.hint;el('mmHint').hidden=!visible;el('mmHintButton').setAttribute('aria-expanded',String(visible));el('mmHintButton').textContent=visible?'Hide hint':'Show hint';});
el('mmReveal').addEventListener('click',()=>{recordFirst(false);finish(true);});
el('mmDifficulty').addEventListener('change',()=>{difficulty=el('mmDifficulty').value;bag=[];levelBag=[];difficultyCopy();save();next(false);});
el('mmAutoCheck').addEventListener('change',()=>{cancelAutoCheck();save();difficultyCopy();if(el('mmAutoCheck').checked)scheduleAutoCheck();});
el('mmTimerToggle').addEventListener('change',()=>{save();timer();});
el('mmReset').addEventListener('click',()=>{stats[mode+':'+difficulty]=fresh();bag=[];levelBag=[];next();});
new MutationObserver(syncClock).observe(screen,{attributes:true,attributeFilter:['class']});document.addEventListener('visibilitychange',syncClock);setInterval(()=>{if(!screen.classList.contains('hidden'))timer();},200);
const smallScreen=window.matchMedia('(max-width:850px)');
function sizeSettings(){el('mmSettingsDetails').open=!smallScreen.matches;}
smallScreen.addEventListener('change',sizeSettings);sizeSettings();
drawMode();
})();
