(function(){
'use strict';
const E=window.MentalMathsEngine,screen=document.getElementById('mentalScreen');
if(!E||!screen)return;
const el=id=>document.getElementById(id),fresh=()=>({completed:0,totalTimeMs:0,attempted:0,correct:0,streak:0,best:0,number:0});
const freshStats=()=>Object.fromEntries(['arithmetic','modular','quadratic','polynomial','trig','pythagorean'].flatMap(m=>Object.keys(E.difficulties).map(d=>[m+':'+d,fresh()])));
let composing=false,firstCorrect=false,usedHint=false;
let owner=null,difficulty='medium',mode='arithmetic',lesson='remainders',selected=Object.keys(E.categories),bag=[],levelBag=[],question=null,closed=false,checked=false,elapsed=0,tickingAt=null,lastPrompt='',stats=freshStats();
const filterViews=[];
function syncFilterButtons(){filterViews.forEach(update=>update());}
const user=()=>typeof currentUser==='undefined'?'guest':currentUser||'guest';
function save(){try{localStorage.setItem('ducktmua.mental.settings.'+owner,JSON.stringify({categoriesVersion:2,selected,lesson,difficulty,trigFunction:el('mmTrigFunction').value,trigUnits:el('mmTrigUnits').value,autoCheck:el('mmAutoCheck').checked,timer:el('mmTimerToggle').checked}));}catch(e){}}
function load(){
 selected=Object.keys(E.categories);lesson='remainders';difficulty='medium';el('mmTrigFunction').value='mixed';el('mmTrigUnits').value='mixed';el('mmAutoCheck').checked=true;el('mmTimerToggle').checked=false;
 try{const p=JSON.parse(localStorage.getItem('ducktmua.mental.settings.'+owner)||'null');if(p){if(['mixed','sin','cos','tan'].includes(p.trigFunction))el('mmTrigFunction').value=p.trigFunction;if(['mixed','degrees','radians'].includes(p.trigUnits))el('mmTrigUnits').value=p.trigUnits;difficulty=Object.hasOwn(E.difficulties,p.difficulty)?p.difficulty:'hard';el('mmAutoCheck').checked=p.autoCheck!==false;const valid=Array.isArray(p.selected)?p.selected.filter(x=>Object.hasOwn(E.categories,x)):[];if(valid.length){selected=valid;const originalCategories=Object.keys(E.categories).filter(x=>!['surds','fractions','decimals'].includes(x));if(p.categoriesVersion!==2&&originalCategories.every(x=>valid.includes(x)))selected=Object.keys(E.categories);}if(E.lessons.some(x=>x.id===p.lesson)||p.lesson==='mixed')lesson=p.lesson;el('mmTimerToggle').checked=!!p.timer;}}catch(e){}
 screen.querySelectorAll('[data-mm-category]').forEach(x=>x.checked=selected.includes(x.value));el('mmLesson').value=lesson;el('mmDifficulty').value=difficulty;difficultyCopy();
}
function pause(){if(tickingAt!==null){elapsed+=performance.now()-tickingAt;tickingAt=null;}}
function syncClock(){const active=!screen.classList.contains('hidden')&&!document.hidden&&!closed;if(active&&tickingAt===null)tickingAt=performance.now();if(!active)pause();}
function timer(){syncClock();el('mmTimer').hidden=!el('mmTimerToggle').checked;el('mmTimer').textContent=((elapsed+(tickingAt===null?0:performance.now()-tickingAt))/1000).toFixed(1)+' s';}
function renderStats(){const s=stats[mode+':'+difficulty];el('mmCompleted').textContent=s.completed;el('mmAccuracy').textContent=s.attempted?Math.round(100*s.correct/s.attempted)+'%':'—';el('mmStreak').textContent=s.streak;el('mmBest').textContent=s.best;el('mmAverageTime').textContent=s.completed?(s.totalTimeMs/s.completed/1000).toFixed(1)+' s':'—';}
function difficultyCopy(){
 const d=E.difficulties[difficulty];
 el('mmRange').textContent=d.range;el('mmLevelBadge').textContent=difficulty==='mixed'&&question?'Mixed · '+E.difficulties[question.difficulty].label:d.label;
 syncFilterButtons();
 el('mmKeyboardHelp').textContent=factorMode()?(el('mmAutoCheck').checked?'Use Tab or Enter between boxes. A correct complete factorisation instantly starts the next question.':'Use Tab or Enter between boxes, then Enter in the last box to check. Correct answers instantly start the next question.'):(el('mmAutoCheck').checked?'Correct answers instantly move you to the next question. Press Enter to check manually.':'Press Enter to check your answer. Correct answers instantly move you to the next question.');
}
function factorMode(){return mode==='quadratic'||mode==='polynomial';}
function answerFields(){return question?.inputKind?Array.from(el('mmCoefficients').querySelectorAll('input')):[el('mmAnswer')];}
function checkAnswer(){return question?.inputKind?E.markFactorisation(answerFields().map(x=>x.value),question):question?.trig?E.markTrig(el('mmAnswer').value,question):E.mark(el('mmAnswer').value,question);}
function focusAnswer(){answerFields()[0]?.focus({preventScroll:true});}
function buildAnswer(){
 const factor=!!question.inputKind,host=el('mmCoefficients');host.replaceChildren();host.hidden=!factor;el('mmAnswer').hidden=factor;el('mmSign').hidden=factor;
 el('mmAnswerLabel').textContent=factor?'Your factorisation':'Your answer';el('mmAnswerLabel').htmlFor=factor?'mmCoefficient0':'mmAnswer';
 el('mmUndefined').hidden=!question.trig;el('mmUndefined').disabled=false;el('mmAnswer').inputMode=question.trig?'text':'decimal';el('mmAnswer').placeholder=question.trig?'Exact value':'Type an answer';
 if(!factor)return;
 let index=0;
 function polynomialGroup(count,label){
  const group=document.createElement('span');group.className='mm-factor-group';group.append(document.createTextNode('('));
  for(let i=0;i<count;i++){
   const power=count-i-1,term=document.createElement('span');term.className='mm-factor-term';
   if(i)term.append(document.createTextNode(' + '));
   const field=document.createElement('input');field.type='text';field.inputMode='text';field.className='mm-coefficient';field.id='mmCoefficient'+index++;field.maxLength=8;field.autocomplete='off';field.spellcheck=false;field.placeholder='?';field.setAttribute('aria-label',label+' '+(power?'coefficient of x'+(power>1?' to the power '+power:''):'constant'));field.setAttribute('aria-describedby','mmAnswerHelp mmFeedback');
   term.append(field);if(power)term.append(document.createTextNode('x'+(power>1?'⁰¹²³⁴⁵'[power]:'')));group.append(term);
  }
  group.append(document.createTextNode(')'));host.append(group);
 }
 if(question.inputKind==='quadratic'){polynomialGroup(2,'First factor');polynomialGroup(2,'Second factor');}
 else{const given=document.createElement('span');given.className='mm-given-factor';given.textContent='('+E.formatPolynomial(question.linear)+')';host.append(given);polynomialGroup(question.expectedCoefficients.length,'Quotient');}
}
function checkAnswerOnInput(){
 answerFields().forEach(x=>x.removeAttribute('aria-invalid'));
 if(!closed){el('mmFeedback').textContent='';el('mmFeedback').removeAttribute('data-tone');}
 if(closed||composing||!question||!el('mmAutoCheck').checked||screen.classList.contains('hidden')||document.hidden)return;
 const result=checkAnswer();
 if(result.valid&&result.correct){recordFirst(true);finish();}
}
function flashCorrect(){
 const card=screen.querySelector('.mm-question-card');
 card.classList.remove('mm-correct-flash');
 void card.offsetWidth;
 card.classList.add('mm-correct-flash');
}
screen.querySelector('.mm-question-card').addEventListener('animationend',event=>{
 if(event.animationName==='mm-correct-glow')event.currentTarget.classList.remove('mm-correct-flash');
});
function lessonCopy(){
 const l=E.lessons.find(x=>x.id===lesson);
 el('mmLessonTitle').textContent=l?l.title:'Mixed modular practice';
 el('mmLessonText').textContent=l?l.text:'Combine the skills from all six topics. Reduce to the least non-negative remainder each time.';
 el('mmLessonExample').textContent=l?l.example:'For example, (−7 + 23) mod 5 = (3 + 3) mod 5 = 1.';
 el('mmLessonTip').textContent=l?l.tip:'If a question feels unfamiliar, choose its topic from the menu to revisit the explanation.';
}
function drawMode(){
 const modular=mode==='modular',factor=factorMode();
 for(const [id,m] of [['mmPracticeMode','arithmetic'],['mmModMode','modular'],['mmQuadraticMode','quadratic'],['mmPolynomialMode','polynomial'],['mmTrigMode','trig'],['mmTriplesMode','pythagorean']])el(id).setAttribute('aria-pressed',String(mode===m));
 el('mmDifficulty').querySelector('[value="easy"]').disabled=factor;
 el('mmTriplesSettings').hidden=mode!=='pythagorean';el('mmTrigSettings').hidden=mode!=='trig';el('mmArithmeticSettings').hidden=mode!=='arithmetic';el('mmModSettings').hidden=!modular;el('mmLessonCard').hidden=!modular;el('mmFactorSettings').hidden=!factor;
 if(factor){el('mmFactorTitle').textContent=E.factorModes[mode];el('mmFactorCopy').textContent=mode==='quadratic'?'Factorise ax² + bx + c into two linear factors. Every question has an integer factorisation.':'Use the given linear factor to find the remaining polynomial mentally. Every division is exact, with no remainder.';}
 lessonCopy();difficultyCopy();
}
function chooseQuestion(){
 const factor=factorMode(),pool=mode==='pythagorean'?['leg','hypotenuse']:mode==='trig'?(el('mmTrigFunction').value==='mixed'?['sin','cos','tan']:[el('mmTrigFunction').value]):mode==='arithmetic'?selected:factor?[mode]:lesson==='mixed'?E.lessons.map(x=>x.id):[lesson];
 if(!bag.length)bag=E.shuffle(pool);
 const cat=bag.pop();let level=difficulty;if(difficulty==='mixed'){if(!levelBag.length)levelBag=E.shuffle(factor?['medium','hard']:E.difficultyLevels);level=levelBag.pop();}let q;
 for(let n=0;n<15;n++){q=mode==='pythagorean'?E.generatePythagorean(cat,Math.random,level):mode==='trig'?E.generateTrig(cat,Math.random,level,el('mmTrigUnits').value):factor?E.generateFactorisation(mode,Math.random,level):mode==='arithmetic'?E.generate(cat,Math.random,level):E.generateMod(cat,Math.random,level);if(q.prompt!==lastPrompt)break;}
 return q;
}
function next(focus=true){
 composing=false;pause();elapsed=0;question=chooseQuestion();lastPrompt=question.prompt;closed=false;checked=false;firstCorrect=false;usedHint=false;stats[mode+':'+difficulty].number++;
 el('mmLevelBadge').textContent=(difficulty==='mixed'?'Mixed · ':'')+E.difficulties[question.difficulty].label;el('mmSkill').textContent=question.label;el('mmCounter').textContent='Question '+stats[mode+':'+difficulty].number;el('mmPrompt').textContent=question.prompt;
 el('mmAnswerHelp').textContent=question.answerHelp||(question.modulus?'Give an integer from 0 to '+(question.modulus-1)+' (the least non-negative remainder).':'Type your answer. Decimals and simple fractions are accepted.');
 buildAnswer();el('mmAnswer').value='';el('mmAnswer').disabled=false;el('mmSign').disabled=false;answerFields().forEach(x=>x.removeAttribute('aria-invalid'));
 el('mmCheck').textContent='Check answer';el('mmFeedback').textContent='';el('mmFeedback').removeAttribute('data-tone');
 el('mmHint').hidden=true;el('mmHintButton').setAttribute('aria-expanded','false');el('mmHintButton').textContent='Show hint';el('mmHintButton').disabled=false;el('mmReveal').disabled=false;el('mmExplanation').hidden=true;
 renderStats();timer();if(focus)focusAnswer();
}
function recordFirst(correct){if(checked)return;checked=true;firstCorrect=correct;const s=stats[mode+':'+difficulty];s.attempted++;if(correct){s.correct++;s.streak++;s.best=Math.max(s.best,s.streak);}else s.streak=0;renderStats();}
function finish(revealed=false){
 if(closed)return;closed=true;pause();stats[mode+':'+difficulty].completed++;stats[mode+':'+difficulty].totalTimeMs+=elapsed;
 window.MentalMathsTracking?.record({owner,mode,question,correct:firstCorrect&&!revealed,timeMs:elapsed,assisted:usedHint,revealed});
 if(!revealed){
  const answer=question.answerDisplay||E.fmt(question.answer);
  next();flashCorrect();el('mmFeedback').textContent='Correct — '+answer+'.';el('mmFeedback').dataset.tone='correct';
  return;
 }
 answerFields().forEach(x=>x.disabled=true);el('mmUndefined').disabled=true;el('mmSign').disabled=true;el('mmHintButton').disabled=true;el('mmReveal').disabled=true;
 el('mmCheck').textContent='Next question →';el('mmExplanationText').textContent=question.explanation;el('mmExplanation').hidden=false;
 el('mmFeedback').textContent='Answer: '+(question.answerDisplay||E.fmt(question.answer))+'. Read the method, then try another.';el('mmFeedback').removeAttribute('data-tone');
 renderStats();timer();el('mmCheck').focus({preventScroll:true});
}
function switchMode(value){if(mode===value)return;pause();mode=value;if(factorMode()&&difficulty==='easy'){difficulty='medium';el('mmDifficulty').value=difficulty;save();}bag=[];levelBag=[];drawMode();next(false);screen.scrollTo(0,0);}
window.showMentalMaths=function(){
 if(owner!==user()){pause();elapsed=0;owner=user();stats=freshStats();mode='arithmetic';bag=[];levelBag=[];question=null;load();drawMode();}
 if(typeof studyHide==='function')studyHide();
 if(typeof timerId!=='undefined'&&timerId)clearInterval(timerId);
 if(typeof dualGapTimerId!=='undefined'&&dualGapTimerId){clearInterval(dualGapTimerId);dualGapTimerId=null;}
 if(typeof stopPreExamTimer==='function')stopPreExamTimer();
 document.querySelectorAll('.screen').forEach(x=>{if(x!==screen)x.classList.add('hidden');});
 ['topbar','substrip','testMain','footbar','navOver','paperGapScreen','endConfirm'].forEach(id=>el(id)?.classList.add('hidden'));
 setSideNav('mental');screen.classList.remove('hidden');screen.scrollTo(0,0);window.scrollTo(0,0);
 if(!question)next(false);else{renderStats();timer();}
 window.MentalMathsTracking?.render();
};
Object.entries(E.categories).forEach(([value,label])=>{const row=document.createElement('label');row.className='mm-category';const input=document.createElement('input');input.type='checkbox';input.value=value;input.checked=true;input.dataset.mmCategory=value;const caption=document.createElement('span');caption.textContent=label;row.append(input,caption);el('mmCategories').appendChild(row);input.addEventListener('change',()=>{const list=Array.from(screen.querySelectorAll('[data-mm-category]:checked'),x=>x.value);if(!list.length){input.checked=true;el('mmFeedback').textContent='Keep at least one question type selected.';return;}selected=list;bag=[];levelBag=[];save();next(false);});});
[...E.lessons,{id:'mixed',title:'Mixed practice · all topics'}].forEach(l=>{const option=document.createElement('option');option.value=l.id;option.textContent=l.title;el('mmLesson').appendChild(option);});
el('navMental').addEventListener('click',window.showMentalMaths);
el('mmPracticeMode').addEventListener('click',()=>switchMode('arithmetic'));el('mmModMode').addEventListener('click',()=>switchMode('modular'));
el('mmQuadraticMode').addEventListener('click',()=>switchMode('quadratic'));el('mmPolynomialMode').addEventListener('click',()=>switchMode('polynomial'));
el('mmTrigMode').addEventListener('click',()=>switchMode('trig'));
el('mmTriplesMode').addEventListener('click',()=>switchMode('pythagorean'));
for(const id of ['mmTrigFunction','mmTrigUnits'])el(id).addEventListener('change',()=>{bag=[];levelBag=[];save();next(false);});
el('mmUndefined').addEventListener('click',()=>{if(closed||!question?.trig)return;el('mmAnswer').value='undefined';el('mmAnswerForm').requestSubmit();});
el('mmLesson').addEventListener('change',()=>{lesson=el('mmLesson').value;bag=[];levelBag=[];lessonCopy();save();next(false);});
el('mmAnswerForm').addEventListener('submit',event=>{event.preventDefault();if(composing)return;if(closed){next();return;}const result=checkAnswer();answerFields().forEach(x=>x.setAttribute('aria-invalid',String(!result.valid||!result.correct)));if(!result.valid){el('mmFeedback').textContent=result.message;el('mmFeedback').dataset.tone='wrong';return;}recordFirst(result.correct);if(result.correct)finish();else{el('mmFeedback').textContent='Not quite. Try again, use a hint, or reveal the answer.';el('mmFeedback').dataset.tone='wrong';focusAnswer();answerFields()[0]?.select();}});
el('mmAnswerForm').addEventListener('input',checkAnswerOnInput);
el('mmAnswerForm').addEventListener('compositionstart',()=>{composing=true;});
el('mmAnswerForm').addEventListener('compositionend',()=>{composing=false;checkAnswerOnInput();});
el('mmCoefficients').addEventListener('keydown',event=>{if(event.key!=='Enter'||event.isComposing||composing)return;const fields=answerFields(),i=fields.indexOf(event.target);if(i>=0&&i<fields.length-1){event.preventDefault();fields[i+1].focus();fields[i+1].select();}});
el('mmSign').addEventListener('click',()=>{const field=el('mmAnswer'),v=field.value.trim().replace(/^−/,'-');field.value=v.startsWith('-')?v.slice(1):'-'+v.replace(/^\+/,'');field.focus();checkAnswerOnInput();});
el('mmHintButton').addEventListener('click',()=>{const visible=el('mmHint').hidden;if(visible)usedHint=true;el('mmHint').textContent=question.hint;el('mmHint').hidden=!visible;el('mmHintButton').setAttribute('aria-expanded',String(visible));el('mmHintButton').textContent=visible?'Hide hint':'Show hint';});
el('mmReveal').addEventListener('click',()=>{recordFirst(false);finish(true);});
el('mmDifficulty').addEventListener('change',()=>{difficulty=el('mmDifficulty').value;bag=[];levelBag=[];difficultyCopy();save();next(false);});
el('mmAutoCheck').addEventListener('change',()=>{save();difficultyCopy();if(el('mmAutoCheck').checked)checkAnswerOnInput();});
el('mmTimerToggle').addEventListener('change',()=>{save();timer();});
el('mmReset').addEventListener('click',()=>{stats[mode+':'+difficulty]=fresh();bag=[];levelBag=[];next();});
new MutationObserver(syncClock).observe(screen,{attributes:true,attributeFilter:['class']});document.addEventListener('visibilitychange',syncClock);setInterval(()=>{if(!screen.classList.contains('hidden'))timer();},200);
// Keep the native select as the state holder while exposing accessible choice buttons.
// Existing generation, persistence and progress filtering handlers remain unchanged.
function selectButtons(id,label,shortNames={}){
 const select=el(id),group=document.createElement('div');
 group.className='mm-filter-buttons';group.setAttribute('role','group');group.setAttribute('aria-label',label);group.id=id+'Buttons';
 select.hidden=true;
 const oldLabel=select.closest('label');
 if(oldLabel){
  const field=document.createElement('div');field.className='mm-history-filter';
  const caption=document.createElement('div');caption.className='mm-label';caption.textContent=label;
  oldLabel.before(field);field.append(caption,select,group);oldLabel.remove();
 }else{
  const caption=screen.querySelector('label[for="'+id+'"]');
  if(caption){caption.removeAttribute('for');caption.id=id+'Caption';group.setAttribute('aria-labelledby',caption.id);}
  select.after(group);
 }
 const buttons=[...select.options].map(option=>{
  const button=document.createElement('button');button.type='button';button.className='mm-filter-button';button.textContent=shortNames[option.value]||option.textContent;
  button.dataset.value=option.value;button.addEventListener('click',()=>{
   if(select.value===option.value)return;
   select.value=option.value;select.dispatchEvent(new Event('change',{bubbles:true}));syncFilterButtons();
  });group.append(button);return {option,button};
 });
 const update=()=>buttons.forEach(({option,button})=>{button.disabled=option.disabled;button.setAttribute('aria-pressed',String(select.value===option.value));});
 filterViews.push(update);select.addEventListener('change',update);update();
}
selectButtons('mmDifficulty','Difficulty');
selectButtons('mmLesson','Modular topic',Object.fromEntries(E.lessons.map(l=>[l.id,l.title.replace(/^\d+\s*[·.]\s*/, '')])));
selectButtons('mmTrigFunction','Function',{mixed:'All functions',sin:'sin',cos:'cos',tan:'tan'});
selectButtons('mmTrigUnits','Angle units',{mixed:'Both',degrees:'Degrees',radians:'Radians'});
selectButtons('mmHistoryMode','Mode',{all:'All modes',arithmetic:'Arithmetic',modular:'Modular',quadratic:'Quadratics',polynomial:'Polynomials',trig:'Trigonometry',pythagorean:'Triples'});
selectButtons('mmHistoryLevel','Difficulty');
drawMode();
})();
