/* Full-width home and navigation. Reuse live controls, records and their handlers. */
(function(){
 'use strict';
 const $=id=>document.getElementById(id),dash=$('dashboardScreen'),nav=$('sideNav');
 const make=(tag,cls,text)=>{const e=document.createElement(tag);if(cls)e.className=cls;if(text!==undefined)e.textContent=text;return e;};
 document.body.classList.add('duck-fullpage');
 const items=nav.querySelector('.side-nav-items'),menus=[];
 function menu(label,ids){
  const details=make('details','fp-nav-menu'),summary=make('summary','',label),list=make('div','fp-nav-list');
  summary.appendChild(make('span','fp-chevron'));summary.lastChild.setAttribute('aria-hidden','true');
  details.append(summary,list);items.appendChild(details);menus.push(details);
  for(const [id,title] of ids){const node=$(id);if(!node)continue;node.querySelector('.side-nav-label').textContent=title;node.setAttribute('aria-label',title);node.title=title;list.appendChild(node);node.addEventListener('click',()=>{details.fpSetOpen(false);});}
  let closeTimer;
  details.fpSetOpen=expanded=>{
   clearTimeout(closeTimer);
   if(expanded){
    menus.forEach(other=>{if(other!==details)other.fpSetOpen(false);});
    if(!details.open){details.open=true;list.getBoundingClientRect();}
    details.classList.add('fp-menu-visible');list.inert=false;
   }else{
    details.classList.remove('fp-menu-visible');list.inert=true;
    closeTimer=setTimeout(()=>{details.open=false;},matchMedia('(prefers-reduced-motion: reduce)').matches?0:200);
   }
  };
  summary.addEventListener('click',event=>{event.preventDefault();details.fpSetOpen(!details.classList.contains('fp-menu-visible'));});
  let hoverClose;details.addEventListener('pointerenter',e=>{if(e.pointerType==='mouse'){clearTimeout(hoverClose);details.fpSetOpen(true);}});details.addEventListener('pointerleave',e=>{if(e.pointerType==='mouse')hoverClose=setTimeout(()=>{if(!details.contains(document.activeElement))details.fpSetOpen(false);},180);});

 }
 menu('Practise',[['navPapers','Papers'],['navBank','Question bank'],['navMental','Mental maths'],['navFormulae','Formulae list'],['navTricks','Recurring tricks'],['navLogic','Logic']]);
 menu('Review',[['navReview','Attempts'],['navWrong','Mistake drill'],['navJournal','Mistake journal'],['navBookmarks','Bookmarks']]);
 items.appendChild($('navLeaderboards'));
 const account=nav.querySelector('.airy-header-account'),planner=$('navPlanner');
 planner.classList.add('fp-planner');planner.title='Planner';planner.setAttribute('aria-label','Planner');account.prepend(planner);
 // Keep the original More element available to existing navigation handlers.
 $('airyMoreNav').hidden=true;$('navDashboard').hidden=true;
 const find=$('duFindButton');find.title='Search papers and questions';find.setAttribute('aria-label',find.title);find.classList.remove('du-nav-search');find.classList.add('fp-menu-search');menus[0].querySelector('.fp-nav-list').appendChild(find);find.addEventListener('click',()=>{menus[0].fpSetOpen(false);});
 document.addEventListener('click',e=>menus.forEach(m=>{if(!m.contains(e.target))m.fpSetOpen(false);}));
 document.addEventListener('keydown',e=>{if(e.key==='Escape')menus.forEach(m=>{if(m.open){m.fpSetOpen(false);m.querySelector('summary').focus();}});});
 const card=dash.querySelector(':scope>.card'),hero=make('section','fp-home-hero');hero.setAttribute('aria-label','Practice overview');
 card.prepend(hero);
 const main=make('div','fp-home-main'),score=dash.querySelector('.mastery-card'),stats=make('div','fp-home-stats');
 score.classList.add('fp-main-score');main.append(score,stats);
 for(const id of ['dashPapers','dashQuestions','dashTime'])stats.appendChild($(id).closest('.dash-stat'));
 const rail=make('aside','fp-home-rail');rail.setAttribute('aria-label','Your next practice');
 const mascot=dash.querySelector('.duck-mascot');if(mascot)rail.appendChild(mascot);
 rail.append(dash.querySelector('.du-next'),dash.querySelector('.airy-focus'));
 const art=make('div','fp-background-ducks');art.setAttribute('aria-hidden','true');
 art.innerHTML='<img src="duck-mascot-sirquacksalot.png?v=20261002-dry" alt="" draggable="false"><img src="duck-mascot-lady-lay-a-lot.png?v=20261002-dry" alt="" draggable="false">';
 for(let i=0;i<12;i++){const img=make('img');img.src=i%2?'duck-mascot-lady-lay-a-lot.png?v=20261002-dry':'duck-mascot-sirquacksalot.png?v=20261002-dry';img.alt='';img.draggable=false;art.appendChild(img);}
 // Keep constellation endpoints attached to the gently drifting background ducks.
 const stars=[...art.querySelectorAll('img')],svgNS='http://www.w3.org/2000/svg';
 const constellation=document.createElementNS(svgNS,'svg');constellation.classList.add('fp-constellation');constellation.setAttribute('aria-hidden','true');constellation.setAttribute('focusable','false');
 art.appendChild(constellation); // Append after images to preserve their positional selectors.
 // Mask the full silhouettes at full opacity: faint duck artwork must still occlude lines.
 const defs=document.createElementNS(svgNS,'defs');
 defs.innerHTML='<filter id="fp-duck-opaque"><feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 20 0"/></filter><mask id="fp-duck-cutouts" x="0" y="0" maskUnits="userSpaceOnUse" maskContentUnits="userSpaceOnUse" style="mask-type:luminance"><rect width="100%" height="100%" fill="white"/></mask>';
 constellation.appendChild(defs);
 const cutout=defs.querySelector('mask'),cutouts=stars.map(star=>{const image=document.createElementNS(svgNS,'image');image.setAttribute('href',star.getAttribute('src'));image.setAttribute('filter','url(#fp-duck-opaque)');cutout.appendChild(image);return image;});
 const threads=document.createElementNS(svgNS,'g');threads.setAttribute('mask','url(#fp-duck-cutouts)');constellation.appendChild(threads);
 const edges=[[5,8],[8,9],[9,2],[2,10],[10,3],[3,11],[11,4],[4,6],[6,12],[12,1],[1,7],[7,0],[0,13],[13,5],[9,12]];
 const links=edges.map(()=>{const line=document.createElementNS(svgNS,'line');threads.appendChild(line);return line;});
 let constellationVisible=false,constellationFrame=0,lastConstellationDraw=0;
 const constellationMotion=matchMedia('(prefers-reduced-motion: reduce)');
 function drawConstellation(){
  const bounds=art.getBoundingClientRect();if(!bounds.width||!bounds.height)return;
  const points=stars.map(star=>{const b=star.getBoundingClientRect();return b.width&&b.height?{x:b.left+b.width/2-bounds.left,y:b.top+b.height/2-bounds.top}:null;});
  const connections=points.filter(Boolean).length===6?[[0,1],[1,4],[4,3],[3,2],[2,5],[5,0]]:edges;
  cutout.setAttribute('width',bounds.width);cutout.setAttribute('height',bounds.height);
  stars.forEach((star,i)=>{
   const image=cutouts[i];image.style.display=points[i]?'':'none';if(!points[i])return;
   const style=getComputedStyle(star),origin=style.transformOrigin.split(' ').map(parseFloat),w=star.offsetWidth,h=star.offsetHeight;
   image.setAttribute('width',w);image.setAttribute('height',h);
   image.setAttribute('transform','translate('+(star.offsetLeft+origin[0])+' '+(star.offsetTop+origin[1])+') '+(style.transform==='none'?'':style.transform)+' translate('+(-origin[0])+' '+(-origin[1])+')');
  });
  constellation.setAttribute('viewBox','0 0 '+bounds.width+' '+bounds.height);
  links.forEach((line,i)=>{const pair=connections[i],a=pair&&points[pair[0]],b=pair&&points[pair[1]];line.style.display=a&&b?'':'none';if(a&&b){line.setAttribute('x1',a.x);line.setAttribute('y1',a.y);line.setAttribute('x2',b.x);line.setAttribute('y2',b.y);}});
 }
 function animateConstellation(time){
  if(!constellationVisible||document.hidden){constellationFrame=0;return;}
  if(time-lastConstellationDraw>40){drawConstellation();lastConstellationDraw=time;}
  constellationFrame=requestAnimationFrame(animateConstellation);
 }
 function syncConstellation(){
  cancelAnimationFrame(constellationFrame);constellationFrame=0;
  if(!constellationVisible||document.hidden)return;
  drawConstellation();if(!constellationMotion.matches)constellationFrame=requestAnimationFrame(animateConstellation);
 }
 new IntersectionObserver(entries=>{constellationVisible=entries[0].isIntersecting;syncConstellation();},{root:dash}).observe(art);
 new ResizeObserver(()=>{if(constellationVisible)drawConstellation();}).observe(art);
 stars.forEach(star=>star.addEventListener('load',()=>{if(constellationVisible)drawConstellation();}));
 document.addEventListener('visibilitychange',syncConstellation);constellationMotion.addEventListener('change',syncConstellation);
 const scroll=make('button','fp-scroll-cue','Scroll down for detailed analytics ↓');scroll.type='button';
 const recent=dash.querySelector('.airy-recent');recent.classList.add('fp-home-recent');hero.append(art,recent,main,rail,scroll);
 dash.querySelector(':scope>.card>.studio-heading').hidden=true;
 dash.querySelector('.airy-stats')?.remove();
 const analytics=make('section','fp-analytics');analytics.id='homeAnalytics';analytics.setAttribute('aria-label','Detailed analytics');
 hero.after(analytics);scroll.addEventListener('click',()=>{const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;dash.scrollTo({top:dash.scrollTop+analytics.getBoundingClientRect().top-(innerWidth<=800?118:92),behavior:reduced?'instant':'smooth'});});
 const chart=dash.querySelector('.studio-chart');
 chart.querySelector('[data-chart-view="performance"]').click();
 chart.querySelector('h2').textContent='Performance over time';
 analytics.appendChild(chart);
 const daily=make('section','fp-daily dash-panel'),dailyHeader=make('div','fp-daily-header');dailyHeader.appendChild(make('h2','','Questions per day'));
 const period=make('select','airy-chart-period');period.setAttribute('aria-label','Daily activity period');period.innerHTML='<option value="7">Last 7 days</option><option value="30" selected>Last 30 days</option><option value="90">Last 90 days</option><option value="all">All</option>';
 dailyHeader.appendChild(period);const dailyBody=make('div','fp-daily-chart');dailyBody.id='fpDailyChart';daily.append(dailyHeader,dailyBody);analytics.appendChild(daily);
 const details=dash.querySelector('.airy-analysis');analytics.appendChild(details);
 analytics.appendChild($('dashTopics').closest('.studio-analysis'));
 analytics.appendChild($('dashboardTiming').closest('.studio-analysis'));
 // Recent papers now occupies the left-hand side of the opening screen.
 dash.querySelector('.airy-dashboard')?.remove();
 function renderDaily(){
  if(!dailyBody.clientWidth)return; // Measure only after the screen has a layout.
  const now=Date.now(),rows=currentUser?dashboardAllAttemptRows().filter(r=>r.t>0&&r.t<=now&&!!r.p.esat===ESAT_MODE):[];
  const end=new Date(now);end.setHours(0,0,0,0);end.setDate(end.getDate()+1);
  const first=new Date(end);
  if(period.value==='all'&&rows.length){first.setTime(Math.min(...rows.map(r=>r.t)));first.setHours(0,0,0,0);}else first.setDate(first.getDate()-(Number(period.value)||7));
  const buckets=[],byDay=new Map(),dayKey=d=>d.getFullYear()+'-'+d.getMonth()+'-'+d.getDate();
  for(const d=new Date(first);d<end;d.setDate(d.getDate()+1)){const b={start:+d,count:0};buckets.push(b);byDay.set(dayKey(d),b);}
  for(const row of rows){const bucket=byDay.get(dayKey(new Date(row.t)));if(bucket)bucket.count+=Array.isArray(row.r.a)?row.r.a.filter(a=>a!==null&&a!==undefined).length:0;}
  const days=buckets.length,total=buckets.reduce((s,b)=>s+b.count,0),max=Math.max(4,Math.ceil(Math.max(...buckets.map(b=>b.count))/4)*4),diagonal=['7','30'].includes(period.value);
  const W=Math.max(560,dailyBody.clientWidth||740),H=diagonal?320:270,L=42,R=18,T=16,B=diagonal?85:32,base=H-B,slot=(W-L-R)/days,bw=Math.min(28,slot*.6);
  let svg='<svg viewBox="0 0 '+W+' '+H+'" role="img" aria-label="'+total+' attempted questions over '+days+' days">';
  for(let i=0;i<=4;i++){const y=base-(base-T)*i/4;svg+='<line class="airy-chart-grid" x1="'+L+'" y1="'+y+'" x2="'+(W-R)+'" y2="'+y+'"/><text x="'+(L-10)+'" y="'+(y+4)+'" text-anchor="end">'+max*i/4+'</text>';}
  buckets.forEach((b,i)=>{const x=L+slot*(i+.5),h=(base-T)*b.count/max,date=new Date(b.start),label=date.toLocaleDateString('en-GB',{day:'2-digit',month:'2-digit',year:'2-digit'}),short=date.toLocaleDateString('en-GB',{day:'numeric',month:'short'});
   svg+='<g data-count="'+b.count+'"><title>'+label+': '+b.count+' questions</title><rect class="fp-day-bar" x="'+(x-bw/2)+'" y="'+(base-h)+'" width="'+bw+'" height="'+h+'" rx="2"/>';
   if(diagonal)svg+='<text class="fp-date-label" transform="translate('+x+' '+(base+18)+') rotate(-50)" text-anchor="end">'+label+'</text>';
   else if(i%Math.ceil(days/7)===0)svg+='<text x="'+x+'" y="'+(H-9)+'" text-anchor="middle">'+short+'</text>';
   svg+='</g>';
  });
  dailyBody.dataset.total=String(total);dailyBody.dataset.days=String(days);dailyBody.dataset.period=period.value;
  dailyBody.innerHTML='<div class="airy-chart-total">'+total+' questions</div><div class="fp-daily-scroll">'+svg+'</svg></div>'+(total?'':'<p class="airy-chart-empty">No attempted questions in this period.</p>');
 }
 period.addEventListener('change',renderDaily);
 function refresh(){
  // Earlier dashboard builders recreate these cards on each state refresh.
  dash.querySelectorAll('.airy-card-duck').forEach(e=>e.remove());
  renderDaily();
 }
 const original=buildDashboard;buildDashboard=function(...args){const result=original.apply(this,args);refresh();return result;};
 let chartFrame;
 const chartWidths=new WeakMap();
 function scheduleCharts(){
  cancelAnimationFrame(chartFrame);
  chartFrame=requestAnimationFrame(()=>{
   if(dash.classList.contains('hidden'))return;
   renderDaily();
   if(currentUser)renderDashboardChart(dashboardFirstAttempts());
  });
 }
 const observer=new ResizeObserver(entries=>{
  if(entries.some(entry=>{const width=Math.round(entry.contentRect.width),changed=width>0&&width!==chartWidths.get(entry.target);chartWidths.set(entry.target,width);return changed;}))scheduleCharts();
 });
 observer.observe($('dashMasteryChart'));observer.observe(dailyBody);
 // Rearm when leaving home; reveal again after each return, including retained scroll positions.
 const reducedMotion=matchMedia('(prefers-reduced-motion: reduce)'),panels=[...analytics.children];
 let revealObserver=null,revealFrame=0,revealNextFrame=0;
 if('IntersectionObserver' in window){
  revealObserver=new IntersectionObserver(entries=>{
   if(dash.classList.contains('hidden')||analytics.classList.contains('fp-reveal-reset'))return;
   const incoming=entries.filter(entry=>entry.isIntersecting).sort((a,b)=>panels.indexOf(a.target)-panels.indexOf(b.target));
   incoming.forEach((entry,i)=>{entry.target.style.setProperty('--fp-reveal-delay',(i*170)+'ms');entry.target.classList.add('fp-reveal-visible');revealObserver.unobserve(entry.target);});
  },{root:dash,threshold:0.06,rootMargin:'0px 0px -32px 0px'});
 }
 function resetReveals(){
  cancelAnimationFrame(revealFrame);cancelAnimationFrame(revealNextFrame);revealObserver?.disconnect();
  analytics.classList.add('fp-reveal-reset');
  panels.forEach(panel=>{panel.style.setProperty('--fp-reveal-delay','0ms');panel.classList.toggle('fp-reveal-pending',!!revealObserver&&!reducedMotion.matches);panel.classList.remove('fp-reveal-visible');});
 }
 function startReveals(){
  scheduleCharts();
  revealFrame=requestAnimationFrame(()=>{revealNextFrame=requestAnimationFrame(()=>{
   analytics.classList.remove('fp-reveal-reset');
   if(!dash.classList.contains('hidden')&&!reducedMotion.matches)panels.forEach(panel=>revealObserver?.observe(panel));
  });});
 }
 let homeVisible=!dash.classList.contains('hidden');
 new MutationObserver(()=>{
  const visible=!dash.classList.contains('hidden');
  if(visible!==homeVisible){homeVisible=visible;resetReveals();if(visible)startReveals();}
 }).observe(dash,{attributes:true,attributeFilter:['class']});
 analytics.addEventListener('focusin',event=>{const panel=panels.find(panel=>panel.contains(event.target));if(panel){panel.style.setProperty('--fp-reveal-delay','0ms');panel.classList.add('fp-reveal-visible');revealObserver?.unobserve(panel);}});
 reducedMotion.addEventListener('change',()=>{resetReveals();if(homeVisible)startReveals();});
 resetReveals();if(homeVisible)startReveals();

 refresh();
})();
