(function(){
'use strict';
const $=id=>document.getElementById(id);
let questionSerial=0;
function practiceQuestion(question){
 const id='rg-question-'+(++questionSerial),letters='ABCD';
 const form=document.createElement('form');form.className='rg-practice';
 form.innerHTML=`<h4 id="${id}-title">Try it yourself</h4><p class="rg-question-note">Original DuckTMUA question</p><div class="rg-question-prompt" id="${id}-prompt">${question.prompt}</div><fieldset aria-labelledby="${id}-title ${id}-prompt"><legend>Choose one answer</legend>${question.options.map((option,i)=>`<label class="rg-choice"><input type="radio" name="${id}" value="${i}"><span class="rg-choice-letter">${letters[i]}</span><span class="rg-choice-text">${option}</span><span class="rg-choice-mark"></span></label>`).join('')}</fieldset><div class="rg-question-actions"><button type="submit" disabled>Check answer</button><button type="button" class="rg-retry" hidden>Try again</button></div><p class="rg-feedback" role="status" aria-live="polite" aria-atomic="true"></p><div class="rg-solution" hidden><h5>Worked solution</h5>${question.solution}</div>`;
 const field=form.querySelector('fieldset'),check=form.querySelector('[type=submit]'),retry=form.querySelector('.rg-retry'),feedback=form.querySelector('.rg-feedback'),solution=form.querySelector('.rg-solution');
 const choices=[...form.querySelectorAll('.rg-choice')];
 field.addEventListener('change',()=>{
  check.disabled=false;
  choices.forEach(label=>label.classList.toggle('is-selected',label.querySelector('input').checked));
 });
 form.addEventListener('submit',event=>{
  event.preventDefault();const selected=field.querySelector('input:checked');if(!selected||field.disabled)return;
  const index=Number(selected.value),correct=index===question.answer;
  field.disabled=true;check.disabled=true;retry.hidden=false;solution.hidden=false;
  choices[question.answer].classList.add('is-correct');
  choices[question.answer].querySelector('.rg-choice-mark').textContent='✓ Correct';
  if(!correct){choices[index].classList.add('is-incorrect');choices[index].querySelector('.rg-choice-mark').textContent='✕ Your answer';}
  feedback.textContent=correct?'Correct — '+letters[index]+' is the right answer.':'Not quite — you chose '+letters[index]+'. The correct answer is '+letters[question.answer]+'.';
  form.dataset.result=correct?'correct':'incorrect';
  typeset(solution);
 });
 retry.addEventListener('click',()=>{
  form.reset();field.disabled=false;check.disabled=true;retry.hidden=true;solution.hidden=true;feedback.textContent='';delete form.dataset.result;
  choices.forEach(label=>{label.classList.remove('is-selected','is-correct','is-incorrect');label.querySelector('.rg-choice-mark').textContent='';});
  field.querySelector('input').focus();
 });
 return form;
}
function distanceGraph(points,title){
 const left=0,right=8,bottom=180,scale=10;
 const value=x=>points.reduce((s,a)=>s+Math.abs(x-a),0);
 const xs=[left,...new Set(points),right],coords=xs.map(x=>`${35+32*x},${bottom-scale*value(x)}`).join(' ');
 const lo=points[Math.floor((points.length-1)/2)],hi=points[Math.floor(points.length/2)],min=value(lo);
 const figure=document.createElement('figure');
 figure.innerHTML=`<svg viewBox="0 0 320 220" role="img" aria-label="${title}"><path class="rg-axis" d="M35 15V180H305"/><polyline class="rg-curve" points="${coords}"/><path class="rg-min" d="M${35+32*lo} ${bottom-scale*min}H${35+32*hi}"/><circle class="rg-min-dot" cx="${35+32*lo}" cy="${bottom-scale*min}" r="4"/>${hi!==lo?`<circle class="rg-min-dot" cx="${35+32*hi}" cy="${bottom-scale*min}" r="4"/>`:''}${[0,...points,8].map(x=>`<text x="${35+32*x}" y="199" text-anchor="middle">${x}</text>`).join('')}<text x="24" y="${bottom-scale*min+4}" text-anchor="end">${min}</text><text x="306" y="176">x</text></svg><figcaption>${title}</figcaption>`;
 return figure;
}
for(const [key,data] of Object.entries(window.DuckRevisionGuides)){
 const cap=key[0].toUpperCase()+key.slice(1),nav=document.createElement('button');nav.id='nav'+cap;nav.type='button';nav.className='side-nav-item';nav.setAttribute('aria-label',data.title);nav.innerHTML=`<span class="side-nav-icon" aria-hidden="true">${key==='tricks'?'✧':'⇒'}</span><span class="side-nav-label">${data.title}</span>`;
 $('sideNav').querySelector('.side-nav-items').append(nav);
 const screen=document.createElement('section');screen.id=key+'Screen';screen.className='screen hidden nav-aware modern-ui studio-ui rg-screen';screen.setAttribute('aria-labelledby',key+'Title');
 screen.innerHTML=`<div class="card"><header class="studio-heading"><div><h1 id="${key}Title" tabindex="-1">${data.title}</h1></div></header><div class="rg-controls"><label>Search ${key==='tricks'?'tricks':'logic'}<input type="search" autocomplete="off" placeholder="${key==='tricks'?'Try modulus, triangles, remainders…':'Try necessary, negation, counterexample…'}"></label><label>Topic<select><option value="all">All topics</option></select></label><button class="bigbtn ghost" type="button">Clear filters</button></div><p class="rg-count" role="status" aria-live="polite"></p><p class="rg-empty" hidden>No lessons match. Try another search or clear the filters.</p><div class="rg-content"></div></div>`;
 $('formulaeScreen').after(screen);
 const search=screen.querySelector('input'),select=screen.querySelector('select'),content=screen.querySelector('.rg-content');let built=false;const rows=[];
 for(const [topic] of data.topics){const o=document.createElement('option');o.value=topic;o.textContent=topic;select.append(o);}
 function build(){if(built)return;built=true;
  for(const [topic,cards] of data.topics){const section=document.createElement('section');section.className='rg-topic';const h=document.createElement('h2');h.textContent=topic;section.append(h);const grid=document.createElement('div');grid.className='rg-grid';section.append(grid);
   for(const [title,html] of cards){const article=document.createElement('article');article.className='rg-lesson';const heading=document.createElement('h3');heading.textContent=title;article.append(heading);const body=document.createElement('div');body.className='rg-body';body.innerHTML=html;if(key==='tricks')body.append(practiceQuestion(window.DuckTrickQuestions[title]));article.append(body);grid.append(article);rows.push({node:article,topic,text:(topic+' '+title+' '+body.textContent).toLowerCase()});}
   content.append(section);
  }
  const graphs=content.querySelector('.rg-graphs');if(graphs)graphs.append(distanceGraph([1,5],'Two points: minimum 4 for every x from 1 to 5.'),distanceGraph([1,3,7],'Three points: minimum 6 only at x = 3.'));
  if(key==='tricks')for(const figure of content.querySelectorAll('[data-ssa-case]')){
   figure.innerHTML=window.DuckSSADiagrams[Number(figure.dataset.ssaCase)];
   figure.querySelector('svg').setAttribute('aria-label',figure.getAttribute('aria-label'));
   figure.closest('.rg-lesson').classList.add('rg-ssa-lesson');
  }
  typeset(content);
 }
 function filter(){const terms=search.value.toLowerCase().trim().split(/\s+/).filter(Boolean);let count=0;for(const r of rows){const visible=(select.value==='all'||select.value===r.topic)&&terms.every(t=>r.text.includes(t));r.node.hidden=!visible;if(visible)count++;}for(const section of content.children)section.hidden=![...section.querySelectorAll('.rg-lesson')].some(n=>!n.hidden);screen.querySelector('.rg-count').textContent=`${count} of ${rows.length} lessons`;screen.querySelector('.rg-empty').hidden=count!==0;}
 window['show'+cap]=function(){
  if(typeof studyHide==='function')studyHide();
  if(typeof timerId!=='undefined'&&timerId)clearInterval(timerId);
  if(typeof dualGapTimerId!=='undefined'&&dualGapTimerId){clearInterval(dualGapTimerId);dualGapTimerId=null;}
  stopPreExamTimer();document.querySelectorAll('.screen').forEach(e=>e.classList.add('hidden'));
  ['topbar','substrip','testMain','footbar','navOver','paperGapScreen','endConfirm'].forEach(id=>$(id)?.classList.add('hidden'));
  setSideNav(key);screen.classList.remove('hidden');$('airyMoreNav').open=false;screen.scrollTop=0;window.scrollTo(0,0);build();filter();$(key+'Title').focus({preventScroll:true});
 };
 nav.addEventListener('click',window['show'+cap]);search.addEventListener('input',filter);select.addEventListener('change',filter);screen.querySelector('.rg-controls button').addEventListener('click',()=>{search.value='';select.value='all';filter();search.focus();});
}
const previousHide=hideSideNav;hideSideNav=function(){previousHide();$('tricksScreen').classList.add('hidden');$('logicScreen').classList.add('hidden');};
})();
