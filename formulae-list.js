(function(){
'use strict';
const $=id=>document.getElementById(id),screen=$('formulaeScreen'),{topics,cards}=window.DuckFormulae;
const kinds={core:'Core recall',shortcut:'Useful shortcut',provided:'Supplied if needed'};
let rendered=false,rows=[];
function build(){
 if(rendered)return;rendered=true;
 for(const [id,title] of topics){
  const option=document.createElement('option');option.value=id;option.textContent=title;$('formulaTopic').append(option);
  const section=document.createElement('section');section.className='formula-topic';section.dataset.topic=id;
  const heading=document.createElement('h2');heading.textContent=title;section.append(heading);
  const grid=document.createElement('div');grid.className='formula-grid';section.append(grid);
  for(const item of cards.filter(c=>c.topic===id)){
   const article=document.createElement('article');article.className='formula-card';article.dataset.kind=item.kind;
   const badge=document.createElement('span');badge.className='formula-badge';badge.textContent=kinds[item.kind];article.append(badge);
   const h=document.createElement('h3');h.textContent=item.title;article.append(h);
   if(item.math){const math=document.createElement('div');math.className='formula-math';math.tabIndex=0;math.setAttribute('role','region');math.setAttribute('aria-label',item.title+' formula');math.textContent='\\[\\begin{gathered}'+item.math+'\\end{gathered}\\]';article.append(math);}
   const note=document.createElement('p');note.textContent=item.note;article.append(note);grid.append(article);
   rows.push({node:article,topic:id,kind:item.kind,text:(title+' '+item.title+' '+item.note+' '+item.math).toLowerCase()});
  }
  $('formulaContent').append(section);
 }
 typeset($('formulaContent'));
}
function filter(){
 const terms=$('formulaSearch').value.trim().toLowerCase().split(/\s+/).filter(Boolean),topic=$('formulaTopic').value,kind=$('formulaKind').value;let count=0;
 for(const row of rows){const visible=(topic==='all'||row.topic===topic)&&(kind==='all'||row.kind===kind)&&terms.every(t=>row.text.includes(t));row.node.hidden=!visible;if(visible)count++;}
 for(const section of screen.querySelectorAll('.formula-topic'))section.hidden=!Array.from(section.querySelectorAll('.formula-card')).some(c=>!c.hidden);
 $('formulaCount').textContent=count+' of '+cards.length+' revision cards';$('formulaEmpty').hidden=count!==0;
}
window.showFormulae=function(){
 if(typeof studyHide==='function')studyHide();
 if(typeof timerId!=='undefined'&&timerId)clearInterval(timerId);
 if(typeof dualGapTimerId!=='undefined'&&dualGapTimerId){clearInterval(dualGapTimerId);dualGapTimerId=null;}
 stopPreExamTimer();document.querySelectorAll('.screen').forEach(e=>e.classList.add('hidden'));
 ['topbar','substrip','testMain','footbar','navOver','paperGapScreen','endConfirm'].forEach(id=>$(id)?.classList.add('hidden'));
 setSideNav('formulae');screen.classList.remove('hidden');$('airyMoreNav').open=false;screen.scrollTop=0;window.scrollTo(0,0);build();filter();
};
$('navFormulae').addEventListener('click',showFormulae);
$('formulaSearch').addEventListener('input',filter);$('formulaTopic').addEventListener('change',filter);$('formulaKind').addEventListener('change',filter);
$('formulaClear').addEventListener('click',()=>{$('formulaSearch').value='';$('formulaTopic').value='all';$('formulaKind').value='all';filter();$('formulaSearch').focus();});
})();
