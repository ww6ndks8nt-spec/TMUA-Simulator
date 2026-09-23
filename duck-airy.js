/* D / Airy: the approved composition, using the site's real records and controls. */
(function(){
 const $=id=>document.getElementById(id),dash=$('dashboardScreen'),nav=$('sideNav');
 document.body.classList.add('duck-airy');
 document.body.classList.remove('nav-collapsed');nav.classList.remove('collapsed');
 const make=(tag,cls,text)=>{const el=document.createElement(tag);if(cls)el.className=cls;if(text!==undefined)el.textContent=text;return el;};
 const paths={home:'<path d="m3 10 9-7 9 7M5 9v12h5v-7h4v7h5V9"/>',paper:'<path d="M6 3h9l4 4v14H6zM14 3v5h5M9 12h7M9 16h7"/>',bank:'<rect x="3" y="3" width="6" height="6" rx="1"/><rect x="15" y="3" width="6" height="6" rx="1"/><rect x="3" y="15" width="6" height="6" rx="1"/><rect x="15" y="15" width="6" height="6" rx="1"/>',chart:'<path d="M4 20V11M12 20V4M20 20V8"/>',journal:'<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 3h6v4H9zM9 11h6M9 15h6"/>',calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M7 3v4M17 3v4M7 14h3M14 14h3"/>',check:'<path d="m5 12 4 4L19 6"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 3"/>',arrow:'<path d="M4 12h16m-6-6 6 6-6 6"/>',more:'<path d="m6 9 6 6 6-6"/>',bookmark:'<path d="M6 3h12v18l-6-4-6 4z"/>',retry:'<path d="M4 10a8 8 0 1 1 1 8M4 4v6h6"/>'};
 const icon=name=>'<svg class="airy-icon" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">'+paths[name]+'</svg>';
 const duck=()=>'<img src="duck-mascot-airy.png?v=20260923-no-brows" alt="" width="240" height="240" draggable="false">';
 const mascot=dash.querySelector('.duck-mascot');
 const egg=mascot?.querySelector('.duck-egg');
 if(egg)egg.innerHTML='<svg viewBox="0 0 32 44" aria-hidden="true" focusable="false"><defs><radialGradient id="airyEggShell" cx="32%" cy="28%" r="76%"><stop stop-color="#ffffff"/><stop offset=".48" stop-color="#fffdf5"/><stop offset=".86" stop-color="#e9e2d1"/><stop offset="1" stop-color="#cfc5af"/></radialGradient></defs><path d="M16 1.5C9 1.5 2 19 2 28C2 37 7.5 42 16 42S30 37 30 28C30 19 23 1.5 16 1.5Z" fill="url(#airyEggShell)" stroke="#c9c0ac" stroke-width=".7"/></svg>';
 if(mascot){const art=mascot.querySelector('.duck-logo');art.classList.add('airy-duck-art');art.innerHTML=duck();dash.querySelector('.studio-heading').appendChild(mascot);}
 const brandDuck=nav.querySelector('.duck-logo');brandDuck.classList.add('airy-duck-art');brandDuck.innerHTML=duck();
 document.querySelectorAll('.modern-ui .duck-logo:not(.airy-duck-art)').forEach(el=>{el.classList.add('airy-duck-art');el.innerHTML=duck();});
 const brandCopy=make('span','airy-brand-copy');brandCopy.append(nav.querySelector('.duck-brand-word'),nav.querySelector('.side-nav-brand>span:last-child'));nav.querySelector('.side-nav-brand').appendChild(brandCopy);
 const brand=nav.querySelector('.side-nav-brand');brand.setAttribute('role','link');brand.tabIndex=0;brand.setAttribute('aria-label','Overview');brand.addEventListener('click',()=>showDashboardHub());brand.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();showDashboardHub();}});
 const account=dash.querySelector('.account-circles');if(account){account.classList.add('airy-header-account');nav.appendChild(account);}
 // All account controls share the fixed bar; preserve their original handlers.
 nav.classList.add('duck-topbar');
 document.querySelectorAll('.screen.modern-ui.nav-aware').forEach(screen=>{
  const garden=make('div','duck-garden');garden.setAttribute('aria-hidden','true');garden.setAttribute('inert','');
  garden.innerHTML='<img class="duck-garden-left" src="duck-pond-garden.png?v=20260923-no-brows" alt="" width="1024" height="1536" decoding="async" draggable="false"><img class="duck-garden-right" src="duck-pond-garden.png?v=20260923-no-brows" alt="" width="1024" height="1536" decoding="async" draggable="false">';
  screen.prepend(garden);
 });
 const items=nav.querySelector('.side-nav-items');
 const main=[['navDashboard','Overview','home'],['navPapers','Papers','paper'],['navBank','Question bank','bank'],['navReview','Review','chart'],['navJournal','Journal','journal'],['navPlanner','Planner','calendar']];
 main.forEach(([id,label,key])=>{const el=$(id);el.querySelector('.side-nav-label').textContent=label;el.querySelector('.side-nav-icon').innerHTML=icon(key);items.appendChild(el);});
 const more=make('details','airy-nav-more');more.id='airyMoreNav';
 const moreToggle=make('summary');moreToggle.innerHTML=icon('more');moreToggle.setAttribute('aria-label','More pages');moreToggle.title='More pages';
 const moreMenu=make('div','airy-more-menu');
 const find=$('duFindButton');find.classList.add('airy-search-menu');find.querySelector('kbd').remove();find.addEventListener('click',()=>{more.open=false;});moreMenu.appendChild(find);
 [['navWrong','Wrong answers','retry'],['navBookmarks','Bookmarks','bookmark']].forEach(([id,label,key])=>{const el=$(id);el.querySelector('.side-nav-label').textContent=label;el.querySelector('.side-nav-icon').innerHTML=icon(key);el.addEventListener('click',()=>{more.open=false;});moreMenu.appendChild(el);});
 more.append(moreToggle,moreMenu);items.appendChild(more);
 document.addEventListener('click',e=>{if(!more.contains(e.target))more.open=false;});
 document.addEventListener('keydown',e=>{if(e.key==='Escape'&&more.open){more.open=false;moreToggle.focus();}});
 const oldWelcome=dash.querySelector('.du-welcome');if(oldWelcome)oldWelcome.hidden=true;
 document.querySelectorAll('.studio-heading .studio-eyebrow').forEach(el=>el.hidden=true);
 const titles={dashboardScreen:'Overview',libraryScreen:'Papers',reviewHubScreen:'Review',wrongHubScreen:'Wrong answers',bankScreen:'Question bank',bookmarksScreen:'Bookmarks',journalScreen:'Journal',plannerScreen:'Planner'};
 Object.entries(titles).forEach(([id,title])=>{const h=$(id)?.querySelector('h1');if(h)h.textContent=title;});
 const leads={libraryScreen:'Past papers, community papers and challenge sets.',reviewHubScreen:'Your completed attempts.',bankScreen:'Filter questions and build a practice session.',bookmarksScreen:'Saved questions and notes.',journalScreen:'Review your mistakes and lessons.',plannerScreen:'Plan a paper or topic session.'};
 Object.entries(leads).forEach(([id,text])=>{const el=$(id)?.querySelector('.lead');if(el&&!(id==='libraryScreen'&&ESAT_MODE))el.textContent=text;});
 const grid=make('div','airy-dashboard');dash.querySelector('.studio-heading').after(grid);
 const stats=dash.querySelector('.dash-stats'),mastery=dash.querySelector('.mastery-card'),chart=dash.querySelector('.studio-chart');
 const statColumn=make('div','airy-stats');statColumn.append(stats,mastery);grid.appendChild(statColumn);
 [...stats.querySelectorAll('.dash-stat')].forEach((el,i)=>{const badge=make('span','airy-stat-icon');badge.innerHTML=icon(['check','paper','clock'][i]);const copy=make('div','airy-stat-copy');copy.append(el.querySelector('.l'),el.querySelector('.v'));el.append(badge,copy);});
 $('dashTime').previousElementSibling.textContent='Time studied';
 for(const el of [...stats.children])statColumn.insertBefore(el,stats);stats.remove();
 const masteryBadge=make('span','airy-stat-icon');masteryBadge.innerHTML=icon('chart');
 const masteryCopy=make('div','airy-stat-copy');masteryCopy.append(mastery.querySelector('.mastery-kicker'),mastery.querySelector('.mastery-row'));mastery.prepend(masteryBadge,masteryCopy);
 const divisor=make('span','airy-score-divisor',ESAT_MODE?'':'/ 9');$('dashMastery').after(divisor);
 // Preserve the estimate explanation and benchmarks in a labelled disclosure.
 const analysis=make('details','airy-analysis');const analysisLabel=make('summary','', 'Performance details');analysis.appendChild(analysisLabel);
 const analysisBody=make('div','airy-analysis-body');analysis.appendChild(analysisBody);
 for(const el of [mastery.querySelector('.mastery-range'),mastery.querySelector('.mastery-sub'),mastery.querySelector('.mastery-scale'),mastery.querySelector('.mastery-legend'),dash.querySelector('.studio-estimate-note'),$('dashExplain'),dash.querySelector('.studio-benchmarks'),dash.querySelector('.dash-split')])if(el)analysisBody.appendChild(el);
 grid.after(analysis);
 grid.appendChild(chart);chart.querySelector('h2').textContent='Your progress';
 dash.querySelector('.studio-dashboard-grid')?.remove();
 const chartHeader=make('div','airy-chart-header'),chartCopy=make('div');chartCopy.appendChild(chart.querySelector('h2'));chartCopy.appendChild(make('p','airy-chart-caption','Questions attempted per week'));chart.prepend(chartHeader);chartHeader.appendChild(chartCopy);
 const period=make('select','airy-chart-period');period.id='airyActivityPeriod';period.setAttribute('aria-label','Activity period');period.innerHTML='<option value="4">Last 4 weeks</option><option value="8" selected>Last 8 weeks</option><option value="12">Last 12 weeks</option><option value="26">Last 26 weeks</option>';period.value='8';chartHeader.appendChild(period);
 const switcher=make('div','airy-chart-switch');switcher.setAttribute('role','group');switcher.setAttribute('aria-label','Progress chart');
 for(const [key,text] of [['activity','Activity'],['performance','Performance']]){const b=make('button','',text);b.type='button';b.dataset.chartView=key;b.setAttribute('aria-pressed',String(key==='activity'));b.addEventListener('click',()=>setChartView(key));switcher.appendChild(b);}
 chart.appendChild(switcher);const activity=make('div','airy-activity');activity.id='airyActivityChart';chart.insertBefore(activity,$('dashMasteryChart'));
 function setChartView(view){chart.dataset.chartView=view;period.hidden=view!=='activity';switcher.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.chartView===view)));chartCopy.querySelector('p').textContent=view==='activity'?'Questions attempted per week':(ESAT_MODE?'First-attempt accuracy':'Estimated score over time');}
 setChartView('activity');period.addEventListener('change',renderActivity);
 function renderActivity(){
  const weeks=Number(period.value)||8,now=Date.now(),end=new Date(now);end.setHours(0,0,0,0);end.setDate(end.getDate()+(7-(end.getDay()+6)%7));
  const buckets=Array.from({length:weeks},(_,i)=>{const a=new Date(end),b=new Date(end);a.setDate(a.getDate()-7*(weeks-i));b.setDate(b.getDate()-7*(weeks-i-1));return {start:+a,end:+b,count:0};});
  if(currentUser)for(const row of dashboardAllAttemptRows()){if(row.t>now||!!row.p.esat!==ESAT_MODE)continue;const bucket=buckets.find(b=>row.t>=b.start&&row.t<b.end);if(bucket)bucket.count+=Array.isArray(row.r.a)?row.r.a.filter(x=>x!==null&&x!==undefined).length:0;}
  const total=buckets.reduce((n,b)=>n+b.count,0),max=Math.max(20,Math.ceil(Math.max(...buckets.map(b=>b.count))/20)*20),W=740,H=224,L=36,R=8,T=15,B=29,base=H-B,plot=W-L-R,slot=plot/weeks,bw=Math.min(34,slot*.42);
  let svg='<svg viewBox="0 0 '+W+' '+H+'" role="img" aria-label="Weekly attempted questions: '+total+' over '+weeks+' weeks"><defs><linearGradient id="airyActivityGradient" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#ffdd59"/><stop offset="1" stop-color="#ffe99b"/></linearGradient></defs>';
  for(let i=0;i<=4;i++){const v=max*i/4,y=base-(base-T)*i/4;svg+='<line x1="'+L+'" y1="'+y+'" x2="'+(W-R)+'" y2="'+y+'" class="airy-chart-grid"/><text x="'+(L-11)+'" y="'+(y+4)+'" text-anchor="end">'+v+'</text>';}
  buckets.forEach((b,i)=>{const x=L+slot*(i+.5),height=(base-T)*b.count/max,date=new Date(b.start).toLocaleDateString('en-GB',{day:'numeric',month:'short'});svg+='<g class="airy-activity-column" data-count="'+b.count+'"><title>Week of '+escapeHtml(date)+': '+b.count+' questions</title><rect x="'+(x-bw/2)+'" y="'+(base-height)+'" width="'+bw+'" height="'+Math.max(1,height)+'" rx="4" fill="url(#airyActivityGradient)"/>'+(weeks<=12||i%4===0?'<text x="'+x+'" y="'+(H-8)+'" text-anchor="middle">'+escapeHtml(date)+'</text>':'')+'</g>';});
  svg+='</svg>';activity.dataset.total=String(total);activity.innerHTML='<div class="airy-chart-total">'+total+' questions</div>'+svg+(total?'':'<p class="airy-chart-empty">Complete a paper to start tracking.</p>');
 }
 const recent=$('dashRecent').closest('.studio-analysis');recent.classList.add('airy-recent');grid.appendChild(recent);recent.querySelector('h2').textContent='Recent papers';
 const recentHeader=make('div','airy-recent-header');recentHeader.appendChild(recent.querySelector('h2'));const allRecent=make('button','airy-text-link','View history →');allRecent.type='button';allRecent.addEventListener('click',showReviewHub);recentHeader.appendChild(allRecent);recent.prepend(recentHeader);
 const next=dash.querySelector('.du-next');grid.appendChild(next);
 const focus=make('section','airy-focus');analysis.after(focus);
 const topics=$('dashTopics').closest('.studio-analysis');topics.classList.add('airy-topics');topics.querySelector('h2').textContent='Topics';
 function wireCard(card,button){card.tabIndex=0;card.setAttribute('role','link');card.setAttribute('aria-label',card.querySelector('b')?.textContent||button.textContent);card.addEventListener('click',e=>{if(!e.target.closest('button,a,input,select,textarea'))button.click();});card.addEventListener('keydown',e=>{if(e.target===card&&(e.key==='Enter'||e.key===' ')){e.preventDefault();button.click();}});}
 function paperRating(mean){
  const dots=mean<4.5?1:mean<5.5?2:mean<6.5?3:mean<7.5?4:5;
  return '<span class="airy-paper-rating" aria-label="Estimated difficulty '+mean.toFixed(1)+'"><span class="airy-dots" aria-hidden="true">'+Array.from({length:5},(_,i)=>'<i'+(i<dots?' class="filled"':'')+'></i>').join('')+'</span><span>'+mean.toFixed(1)+'</span></span>';
 }
 function refreshPaperRows(){
  $('libraryScreen').querySelectorAll('.paper[data-paper-id]').forEach(button=>{
   const paper=paperById(button.dataset.paperId);if(!paper)return;
   const records=STATE.results[paper.id]||[],best=records.filter(r=>r.s>0).slice().sort((a,b)=>b.c/b.s-a.c/a.s)[0];
   const mean=(paper.esat||paper.mat)?null:difficultyStats(paper).mean,minutes=selectedTimeMinutesForPaper(paper);
   const timing=minutes>0?formatDurationCompact(Math.round(minutes*60)):'Untimed';
   button.classList.add('airy-library-row');
   button.innerHTML='<span class="airy-paper-icon" aria-hidden="true">'+icon('paper')+'</span>'
    +'<span class="airy-library-copy"><span class="pn">'+escapeHtml(paper.title)+'</span><span class="airy-paper-detail">'+paper.questions.length+' questions · '+escapeHtml(timing)+'</span></span>'
    +(mean===null?'<span class="airy-paper-rating airy-rating-empty" aria-hidden="true"></span>':paperRating(mean))
    +'<span class="airy-recent-score"><small>Best</small><span>'+(best?'<b>'+best.c+'</b> / '+best.s:'—')+'</span></span>'
    +'<span class="airy-recent-attempts"><small>Attempts</small><b>'+records.length+'</b></span>'
    +'<span class="airy-paper-open">'+(button.disabled?'Unavailable':'Open paper →')+'</span>';
  });
 }
 // Keep the original buttons, disabled state, filters and opening handlers.
 const originalLibrary=buildLibrary;buildLibrary=function(...args){const result=originalLibrary.apply(this,args);refreshPaperRows();return result;};
 $('timeSelect').addEventListener('change',refreshPaperRows);
 if(!$('libraryScreen').classList.contains('hidden'))refreshPaperRows();
 function renderRecent(){
  const all=dashboardAllAttemptRows().filter(x=>!!x.p.esat===ESAT_MODE),seenPapers=new Set(),rows=all.filter(x=>{if(seenPapers.has(x.p.id))return false;seenPapers.add(x.p.id);return true;}).slice(0,2),host=$('dashRecent');host.replaceChildren();
  if(!rows.length){const blank=make('div','airy-recent-empty');blank.innerHTML=icon('paper')+'<p>No completed papers yet.</p>';const b=make('button','bigbtn','Browse papers →');b.type='button';b.addEventListener('click',showLibraryHub);blank.appendChild(b);host.appendChild(blank);return;}
  for(const row of rows){
   const records=all.filter(x=>x.p.id===row.p.id),best=records.filter(x=>x.s>0).sort((a,b)=>b.c/b.s-a.c/a.s)[0],mean=difficultyStats(row.p).mean;
   const el=make('article','airy-recent-row'),doc=make('span','airy-paper-icon');doc.innerHTML=icon('paper');el.appendChild(doc);
   const title=make('b','airy-recent-title',row.p.title);el.appendChild(title);
   if(mean!==null&&!ESAT_MODE)el.insertAdjacentHTML('beforeend',paperRating(mean));
   const score=make('div','airy-recent-score');score.innerHTML='<small>Best</small><span>'+(best?'<b>'+best.c+'</b> / '+best.s:'—')+'</span>';el.appendChild(score);
   const tries=make('div','airy-recent-attempts');tries.innerHTML='<small>Attempts</small><b>'+records.length+'</b>';el.appendChild(tries);
   const button=make('button','bigbtn','Open paper →');button.type='button';button.addEventListener('click',()=>openStart(row.p));el.appendChild(button);wireCard(el,button);host.appendChild(el);
  }
 }
 function refreshAiry(){
  renderActivity();if(!currentUser)return;
  const cards=[...next.querySelectorAll('.du-next-item')];
  if(cards[0]){const card=cards[0],heading=card.querySelector('b'),label=card.querySelector('small'),text=card.querySelector('p'),button=card.querySelector('button');
   if(heading.textContent==='A fresh paper awaits'){label.textContent='Practice';heading.textContent='Choose a paper';text.textContent='Timed or untimed';}
   else{label.textContent='Continue';heading.textContent=heading.textContent.replace(/^Saved: /,'');text.textContent=text.textContent.replace(' questions answered.',' answered').replace(' questions in your saved practice session.',' questions');}
   button.setAttribute('aria-label',button.textContent);button.title=button.textContent;button.innerHTML=icon('arrow');button.classList.add('airy-continue-arrow');
   const art=make('span','airy-card-duck');art.innerHTML=duck();card.appendChild(art);wireCard(card,button);
  }
  focus.replaceChildren();
  if(cards[1]){const card=cards[1];card.querySelector('small').textContent='Focus';if(card.querySelector('b').textContent==='One question at a time'){card.querySelector('b').textContent='Question bank';card.querySelector('p').textContent='Practise by topic';}focus.appendChild(card);}
  if(cards[2]){const card=cards[2],plan=studyData().plans.filter(p=>!p.done&&planInCurrentPrep(p)).sort((a,b)=>a.date.localeCompare(b.date))[0];
   card.classList.add('airy-planner');card.replaceChildren();card.appendChild(make('h2','','Planner'));
   const event=make('div','airy-planner-event'),badge=make('span','airy-paper-icon');badge.innerHTML=icon('calendar');event.appendChild(badge);const content=make('div');
   if(plan){content.append(make('small','',new Date(plan.date+'T12:00:00').toLocaleDateString('en-GB',{weekday:'short',day:'numeric',month:'short'})),make('b','',studyPlanLabel(plan)),make('p','',plan.minutes+' minutes'));}
   else content.append(make('small','','Next session'),make('b','','Nothing planned'),make('p','','Choose a paper or topic'));
   event.appendChild(content);card.appendChild(event);const button=make('button','bigbtn','Open planner →');button.type='button';button.addEventListener('click',()=>studyNav('planner'));card.appendChild(button);
  }
  renderRecent();
 }
 const originalDashboard=buildDashboard;buildDashboard=function(...args){const result=originalDashboard.apply(this,args);refreshAiry();return result;};
 if(!dash.classList.contains('hidden'))refreshAiry();
 const reduced=()=>window.matchMedia('(prefers-reduced-motion: reduce)').matches;
 document.addEventListener('click',e=>{const target=e.target.closest('button,.paper,.study-clickable-row');if(!target||reduced()||target.disabled||!target.closest('.modern-ui,#sideNav'))return;target.animate?.([{transform:'scale(1)'},{transform:'scale(.97)'},{transform:'scale(1)'}],{duration:180,easing:'ease-out'});});
 mascot?.querySelector('.duck-play')?.addEventListener('click',()=>{if(reduced())return;mascot.querySelector('img')?.animate?.([{transform:'rotate(0)'},{transform:'rotate(-12deg) translateY(-10px)'},{transform:'rotate(8deg)'},{transform:'rotate(0)'}],{duration:500,easing:'ease-out'});});
})();
