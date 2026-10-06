(function(){
'use strict';
const $=id=>document.getElementById(id);
function triangleDiagram(){
 const figure=document.createElement('figure');figure.className='rg-triangle';
 const ax=28,cy=152,base=240,b=176,h=88,cx=ax+b*Math.cos(Math.PI/6),a=123.2;
 const offset=Math.sqrt(a*a-h*h),near=cx-offset,far=cx+offset;
 figure.innerHTML=`<svg viewBox="0 0 350 295" role="img" aria-labelledby="ssaDiagramTitle ssaDiagramDesc"><title id="ssaDiagramTitle">The SSA ambiguous case: two possible triangles</title><desc id="ssaDiagramDesc">Angle A is 30 degrees and AC equals b, or 10 units. A circle centred at C with radius a, or 7 units, meets the horizontal ray from A at B1 and B2. Both triangles AB1C and AB2C satisfy the given data. The perpendicular height CH is h equals 5, so h is less than a and a is less than b.</desc>
 <circle class="rg-ssa-circle" cx="${cx}" cy="${cy}" r="${a}"/>
 <path class="rg-ssa-fill" d="M${ax} ${base}L${cx} ${cy}L${far} ${base}Z"/>
 <path class="rg-ssa-ray" d="M${ax} ${base}H333m-7-4 7 4-7 4"/>
 <path class="rg-ssa-side" d="M${ax} ${base}L${cx} ${cy}L${far} ${base}"/>
 <path class="rg-ssa-alternate" d="M${cx} ${cy}L${near} ${base}"/>
 <path class="rg-ssa-height" d="M${cx} ${cy}V${base}m0-9h9v9"/>
 <path class="rg-ssa-angle" d="M${ax+38} ${base}A38 38 0 0 0 ${ax+38*Math.cos(Math.PI/6)} ${base-19}"/>
 ${[[ax,base],[cx,cy],[near,base],[far,base]].map(([x,y])=>`<circle class="rg-ssa-point" cx="${x}" cy="${y}" r="3"/>`).join('')}
 <text x="18" y="259">A</text><text x="${cx}" y="139" text-anchor="middle">C</text>
 <text x="${near}" y="260" text-anchor="middle">B₁</text><text x="${far}" y="260" text-anchor="middle">B₂</text><text x="${cx}" y="260" text-anchor="middle">H</text>
 <text x="82" y="187" class="rg-ssa-label">b = 10</text><text x="64" y="227" class="rg-ssa-label">30°</text>
 <text x="110" y="190" transform="translate(0 17)" class="rg-ssa-label">a = 7</text><text x="242" y="193" class="rg-ssa-label">a = 7</text>
 <text x="${cx+12}" y="225" class="rg-ssa-label">h = 5</text>
 </svg><figcaption><strong>Two triangles from the same data.</strong> Fix A and C. The third vertex B must lie on the ray from A and on the circle centred at C with radius a. Here both B₁ and B₂ work.</figcaption><p class="rg-ssa-explanation">The dashed height is h = b sin A. A circle with radius a &lt; h misses the ray; at a = h it just touches at H. For h &lt; a &lt; b it meets the ray twice. At a = b, one intersection is A itself and is degenerate; for a &gt; b, one intersection lies behind A. Only one triangle remains in these last two cases.</p>`;
 return figure;
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
   for(const [title,html] of cards){const article=document.createElement('article');article.className='rg-lesson';const heading=document.createElement('h3');heading.textContent=title;article.append(heading);const body=document.createElement('div');body.className='rg-body';body.innerHTML=html;article.append(body);grid.append(article);rows.push({node:article,topic,text:(topic+' '+title+' '+body.textContent).toLowerCase()});}
   content.append(section);
  }
  const graphs=content.querySelector('.rg-graphs');if(graphs)graphs.append(distanceGraph([1,5],'Two points: minimum 4 for every x from 1 to 5.'),distanceGraph([1,3,7],'Three points: minimum 6 only at x = 3.'));
  if(key==='tricks')content.querySelector('.rg-lesson .rg-table').before(triangleDiagram());
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
