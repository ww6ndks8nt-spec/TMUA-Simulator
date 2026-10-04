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
  for(const [id,title] of ids){const node=$(id);if(!node)continue;node.querySelector('.side-nav-label').textContent=title;node.setAttribute('aria-label',title);node.title=title;list.appendChild(node);node.addEventListener('click',()=>{details.open=false;});}
  let hoverClose;details.addEventListener('pointerenter',e=>{if(e.pointerType==='mouse'){clearTimeout(hoverClose);details.open=true;}});details.addEventListener('pointerleave',e=>{if(e.pointerType==='mouse')hoverClose=setTimeout(()=>{if(!details.contains(document.activeElement))details.open=false;},180);});
  details.addEventListener('toggle',()=>{if(details.open)menus.forEach(other=>{if(other!==details)other.open=false;});});
 }
 menu('Practise',[['navPapers','Papers'],['navBank','Question bank'],['navMental','Mental maths'],['navFormulae','Formulae list']]);
 menu('Review',[['navReview','Attempts'],['navWrong','Mistake drill'],['navJournal','Mistake journal'],['navBookmarks','Bookmarks']]);
 items.appendChild($('navLeaderboards'));
 const account=nav.querySelector('.airy-header-account'),planner=$('navPlanner');
 planner.classList.add('fp-planner');planner.title='Planner';planner.setAttribute('aria-label','Planner');account.prepend(planner);
 // Keep the original More element available to existing navigation handlers.
 $('airyMoreNav').hidden=true;$('navDashboard').hidden=true;
 const find=$('duFindButton');find.title='Search papers and questions';find.setAttribute('aria-label',find.title);find.classList.remove('du-nav-search');find.classList.add('fp-menu-search');menus[0].querySelector('.fp-nav-list').appendChild(find);find.addEventListener('click',()=>{menus[0].open=false;});
 document.addEventListener('click',e=>menus.forEach(m=>{if(!m.contains(e.target))m.open=false;}));
 document.addEventListener('keydown',e=>{if(e.key==='Escape')menus.forEach(m=>{if(m.open){m.open=false;m.querySelector('summary').focus();}});});
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
 for(let i=0;i<6;i++){const img=make('img');img.src=i%2?'duck-mascot-lady-lay-a-lot.png?v=20261002-dry':'duck-mascot-sirquacksalot.png?v=20261002-dry';img.alt='';img.draggable=false;art.appendChild(img);}
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
 let chartWidth=0,chartFrame;
 const observer=new ResizeObserver(entries=>{const width=Math.round(entries[0].contentRect.width);if(width>0&&width!==chartWidth){chartWidth=width;cancelAnimationFrame(chartFrame);chartFrame=requestAnimationFrame(()=>{if(currentUser&&!dash.classList.contains('hidden'))renderDashboardChart(dashboardFirstAttempts());});}});
 observer.observe($('dashMasteryChart'));
 refresh();
})();
