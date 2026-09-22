/* Workspace presentation and navigation. Existing question, grading and account data stay authoritative. */
(function(){
 'use strict';
 const byId=id=>document.getElementById(id);
 const icon=(path)=>'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+path+'</svg>';
 const searchIcon=icon('<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 4.5 4.5"/>');
 const make=(tag,cls,text)=>{const el=document.createElement(tag);if(cls)el.className=cls;if(text!==undefined)el.textContent=text;return el;};
 const button=(label,fn,cls='bigbtn ghost')=>{const b=make('button',cls,label);b.type='button';b.addEventListener('click',fn);return b;};
 const visiblePapers=()=>PAPERS.filter(p=>!p.archived);
 const matchesTerms=(text,terms)=>{const lower=text.toLowerCase(),tokens=lower.split(/[^a-z0-9]+/);return terms.every(term=>/^[a-z0-9]$/.test(term)?tokens.includes(term):lower.includes(term));};
 const collectionOf=p=>p.esat?(p.exam==='ENGAA'?'official':'mat'):p.mat?'mat':p.group===4?'official':p.group===3?'challenge':'practice';
 const safeNav=fn=>{if(typeof studyHide==='function')studyHide();fn();};
 function openPaper(p){
  safeNav(()=>{
   ['reviewHubScreen','wrongHubScreen','resultScreen','loginScreen'].forEach(id=>byId(id)?.classList.add('hidden'));
   openStart(p);
  });
 }

 // Short page titles make the content, rather than the heading, the focus.
 const titles={dashboardScreen:['YOUR WORKSPACE','Overview'],libraryScreen:['PRACTICE','Paper library'],reviewHubScreen:['REVIEW & REFLECT','Attempt history'],wrongHubScreen:['TARGETED PRACTICE','Wrong-answer practice'],bankScreen:['EXPLORE & PRACTISE','Question bank'],bookmarksScreen:['YOUR COLLECTION','Bookmarks'],journalScreen:['REVIEW & REFLECT','Mistake journal'],plannerScreen:['MAKE TIME FOR PRACTICE','Practice planner']};
 Object.entries(titles).forEach(([id,[eyebrow,title]])=>{
  const screen=byId(id);if(!screen)return;
  const heading=screen.querySelector('.studio-heading h1'),small=screen.querySelector('.studio-eyebrow');
  if(heading)heading.textContent=title;if(small)small.textContent=eyebrow;
 });
 const reviewLead=byId('reviewHubScreen')?.querySelector('.lead');
 if(reviewLead)reviewLead.textContent='Revisit your answers, understand each solution and decide what to practise next.';
 const libraryLead=byId('libraryScreen')?.querySelector('.lead');
 if(libraryLead)libraryLead.textContent='Full papers for exam practice. Individual questions when you want to focus.';
 const officialLabel=byId('dashboardScreen')?.querySelector('.dash-bench .label');
 if(officialLabel)officialLabel.textContent='Official paper benchmark';
 const csv=byId('downloadDifficulties');if(csv)csv.textContent='Download difficulty ratings (CSV)';

 // Reuse the existing navigation buttons and their event listeners.
 const navHost=byId('sideNav')?.querySelector('.side-nav-items');
 const navGroups=[['WORKSPACE',['navDashboard','navPapers','navBank']],['REVIEW',['navReview','navWrong','navJournal']],['ORGANISE',['navBookmarks','navPlanner']]];
 if(navHost){
  navGroups.forEach(([label,ids])=>{navHost.appendChild(make('div','du-nav-caption',label));ids.forEach(id=>{if(byId(id))navHost.appendChild(byId(id));});});
  const icons={navBank:'<path d="M4 4h6v16H4zM14 4h6v16h-6zM7 8h0M17 8h0"/>',navBookmarks:'<path d="M6 3h12v18l-6-4-6 4z"/>',navJournal:'<path d="M4 4h10v16H4zM9 14l9-9 3 3-9 9-4 1z"/>',navPlanner:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4M17 3v4M3 11h18M7 15h3M14 15h3"/>'};
  Object.entries(icons).forEach(([id,path])=>{const el=byId(id)?.querySelector('.side-nav-icon');if(el)el.innerHTML=icon(path);});
  const more=button('',()=>openFinder('navigation'),'side-nav-item');more.id='duNavMore';more.setAttribute('aria-label','More pages and search');more.innerHTML='<span class="side-nav-icon">'+icon('<circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/>')+'</span><span class="side-nav-label">More</span>';navHost.appendChild(more);
  const find=button('',()=>openFinder(),'du-nav-search');find.id='duFindButton';find.setAttribute('aria-label','Find a paper or page');find.innerHTML=searchIcon+'<span>Quick find</span><kbd>⌘ / Ctrl K</kbd>';navHost.insertAdjacentElement('beforebegin',find);
 }

 const destinations=[
  {label:'Overview',detail:'Workspace',run:()=>safeNav(showDashboardHub)},
  {label:'Paper library',detail:'Practice',run:()=>safeNav(showLibraryHub)},
  {label:'Question bank',detail:'Practice',run:()=>studyNav('bank')},
  {label:'Attempt history',detail:'Review',run:()=>safeNav(showReviewHub)},
  {label:'Wrong-answer practice',detail:'Review',run:()=>safeNav(showWrongHub)},
  {label:'Mistake journal',detail:'Review',run:()=>studyNav('journal')},
  {label:'Bookmarks',detail:'Collection',run:()=>studyNav('bookmarks')},
  {label:'Practice planner',detail:'Organise',run:()=>studyNav('planner')},
  {label:'Settings',detail:'Account',run:()=>byId('openProfileSettings').click()},
  {label:'Switch light / dark mode',detail:'Appearance',run:()=>setDuckAppearance(document.documentElement.dataset.duckTheme==='dark'?'light':'dark')}
 ];
 const finder=make('dialog');finder.id='duckQuickFind';finder.setAttribute('aria-label','Find a paper or page');
 finder.innerHTML='<div class="du-find-head">'+searchIcon+'<input id="duFindInput" type="search" aria-label="Find a paper or page" placeholder="Find a paper or page…" autocomplete="off"><button type="button" class="du-find-close" aria-label="Close quick find">Esc</button></div><div id="duFindResults" class="du-find-results" aria-label="Search results"></div><div class="du-find-foot"><span id="duFindCount" role="status" aria-live="polite"></span> · ↑ ↓ to move · Enter to open</div>';
 document.body.appendChild(finder);
 let finderMode='all',returnFocus=null;
 function renderFinder(){
  const input=byId('duFindInput'),host=byId('duFindResults'),query=input.value.trim().toLowerCase();host.replaceChildren();
  let rows=destinations.slice();
  if(finderMode!=='navigation'||query)rows=rows.concat(visiblePapers().map(p=>({label:p.title,detail:p.esat?p.sub:p.mat?'MAT':p.group===4?'Official paper':'Practice paper',run:()=>openPaper(p)})));
  rows=rows.filter(r=>matchesTerms(r.label+' '+r.detail,query.split(/\s+/).filter(Boolean))).slice(0,30);
  if(!rows.length)host.appendChild(make('p','du-find-result','No matches. Try a year, set name or page.'));
  rows.forEach(r=>{const b=button('',()=>{finder.close();r.run();},'du-find-result');b.append(make('span','',r.label),make('small','',r.detail));host.appendChild(b);});
  byId('duFindCount').textContent=rows.length+' result'+(rows.length===1?'':'s');
 }
 function canFind(){return !!currentUser&&byId('testMain').classList.contains('hidden')&&byId('preExamScreen').classList.contains('hidden')&&byId('paperGapScreen').classList.contains('hidden')&&!byId('profileSettings').open;}
 function openFinder(mode='all'){
  if(!canFind())return;finderMode=mode;returnFocus=document.activeElement;byId('duFindInput').value='';renderFinder();finder.showModal();byId('duFindInput').focus();
 }
 byId('duFindInput').addEventListener('input',renderFinder);
 finder.querySelector('.du-find-close').addEventListener('click',()=>finder.close());
 finder.addEventListener('click',e=>{if(e.target===finder){const r=finder.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)finder.close();}});
 finder.addEventListener('close',()=>{if(returnFocus?.isConnected)returnFocus.focus();});
 finder.addEventListener('keydown',e=>{
  const rows=[...finder.querySelectorAll('button.du-find-result')],pos=rows.indexOf(document.activeElement);
  if(e.key==='ArrowDown'||e.key==='ArrowUp'){
   e.preventDefault();if(!rows.length)return;
   const next=e.key==='ArrowDown'?Math.min(rows.length-1,pos+1):(pos<0?rows.length-1:pos-1);
   if(next<0)byId('duFindInput').focus();else rows[next].focus();
  }else if(e.key==='Enter'&&document.activeElement===byId('duFindInput')){e.preventDefault();rows[0]?.click();}
 });
 document.addEventListener('keydown',e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'&&canFind()){e.preventDefault();if(finder.open)finder.close();else openFinder();}});

 // Search and filters operate on the existing paper buttons, so all opening,
 // resume, grading and history behaviour is preserved.
 const library=byId('libraryScreen');let chosenCollection='all';
 const collections=[...library.querySelectorAll('.studio-collection')];
 const categories=['official','practice','challenge','mat'];
 collections.forEach((el,i)=>{el.dataset.collection=categories[i];const count=make('span','du-collection-count');el.querySelector('.collection-chevron').insertAdjacentElement('beforebegin',count);});
 const filters=make('section','du-library-tools');filters.setAttribute('aria-label','Filter papers');
 filters.innerHTML='<div class="du-paper-filters"><label>Search papers<input id="duPaperSearch" type="search" placeholder="Try 2025, Set B or MAT…"></label><label>Paper<select id="duPaperType"><option value="">All papers</option><option value="1">Paper 1</option><option value="2">Paper 2</option></select></label><label>Progress<select id="duPaperProgress"><option value="">Any progress</option><option value="new">Not attempted</option><option value="attempted">Completed before</option><option value="saved">Saved session</option></select></label></div><div class="du-collection-tabs" role="group" aria-label="Paper collection"></div><div class="du-filter-bottom"><span id="duPaperCount" role="status" aria-live="polite"></span><button id="duResetPapers" type="button">Reset filters</button></div>';
 const tabHost=filters.querySelector('.du-collection-tabs');
 (ESAT_MODE?[['all','All papers'],['official','ENGAA'],['mat','NSAA']]:[['all','All collections'],['official','Official'],['practice','Practice sets'],['challenge','Challenge'],['mat','MAT']]).forEach(([value,label])=>{const b=button(label,()=>{chosenCollection=value;filterPapers();},'du-collection-tab');b.dataset.collection=value;b.setAttribute('aria-pressed',String(value==='all'));tabHost.appendChild(b);});
 collections[0].insertAdjacentElement('beforebegin',filters);
 const noPapers=make('div','du-no-papers','No papers match these filters. Try a broader search or reset the filters.');noPapers.id='duNoPapers';noPapers.hidden=true;filters.insertAdjacentElement('afterend',noPapers);
 ['duPaperSearch','duPaperType','duPaperProgress'].forEach(id=>byId(id).addEventListener(id==='duPaperSearch'?'input':'change',filterPapers));
 byId('duResetPapers').addEventListener('click',()=>{chosenCollection='all';['duPaperSearch','duPaperType','duPaperProgress'].forEach(id=>byId(id).value='');filterPapers();});
 function filterPapers(){
  const words=byId('duPaperSearch').value.trim().toLowerCase().split(/\s+/).filter(Boolean),type=byId('duPaperType').value,progress=byId('duPaperProgress').value;
  const filtering=words.length||type||progress||chosenCollection!=='all';let count=0;
  library.querySelectorAll('.paper[data-paper-id]').forEach(el=>{
   const p=paperById(el.dataset.paperId);if(!p)return;
   const history=STATE.results?.[p.id]||[],ip=STATE.inprogress?.[p.id],hasSaved=ip&&Array.isArray(ip.answers)&&ip.answers.length===p.questions.length;
   const text=(p.title+' '+(p.sub||'')+' '+collectionOf(p)).toLowerCase();
   const match=matchesTerms(text,words)&&(!type||String(p.type)===type)&&(chosenCollection==='all'||collectionOf(p)===chosenCollection)&&(!progress||(progress==='new'?!history.length&&!hasSaved:progress==='attempted'?history.length>0:hasSaved));
   el.hidden=!match;if(match)count++;
  });
  library.querySelectorAll('.mock-pair-row').forEach(row=>{row.hidden=![...row.querySelectorAll('.paper')].some(p=>!p.hidden);});
  collections.forEach(el=>{
   const n=[...el.querySelectorAll('.paper')].filter(p=>!p.hidden).length;
   el.hidden=(ESAT_MODE&&!n)||(filtering&&!n);el.querySelector('.du-collection-count').textContent=n+' paper'+(n===1?'':'s');
   if(filtering&&n){if(!el.dataset.duForcedOpen){el.dataset.duWasOpen=String(el.open);el.dataset.duForcedOpen='true';}el.open=true;}
   else if(!filtering&&el.dataset.duForcedOpen){el.open=el.dataset.duWasOpen==='true';delete el.dataset.duForcedOpen;delete el.dataset.duWasOpen;}
  });
  tabHost.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.collection===chosenCollection)));
  byId('duPaperCount').textContent=count+' of '+visiblePapers().length+' papers';noPapers.hidden=count>0;
 }
 const originalBuildLibrary=buildLibrary;
 buildLibrary=function(...args){const result=originalBuildLibrary.apply(this,args);filterPapers();return result;};
 const originalSideNav=setSideNav;
 setSideNav=function(...args){const result=originalSideNav.apply(this,args);document.querySelectorAll('#sideNav .side-nav-item').forEach(b=>{if(b.classList.contains('active'))b.setAttribute('aria-current','page');else b.removeAttribute('aria-current');});return result;};

 // Actionable dashboard cards use existing saved sessions and planner records.
 const dashboard=byId('dashboardScreen'),welcome=make('section','du-welcome');
 welcome.innerHTML='<div><h2 id="duWelcomeTitle">Make room for a little progress.</h2><p>Choose a paper, focus on a topic or return to a question. Your next step is yours.</p></div>';
 welcome.appendChild(button('Find a paper  ↗',()=>safeNav(showLibraryHub),'bigbtn'));
 dashboard.querySelector('.dash-stats').insertAdjacentElement('beforebegin',welcome);
 const next=make('section','du-next');next.innerHTML='<div class="du-next-head"><h2>Next up</h2><span class="study-muted">Your practice, picked up where you left it</span></div><div class="du-next-list"></div>';
 dashboard.querySelector('.dash-stats').insertAdjacentElement('afterend',next);
 function nextCard(label,title,description,cta,run){
  const card=make('article','du-next-item');card.append(make('small','',label),make('b','',title),make('p','',description),button(cta,run));return card;
 }
 function focusTopic(topic){studyNav('bank');byId('bankTopic').value=topic;['bankSource','bankStatus','bankDifficulty','bankEstimatedDifficulty','bankSearch'].forEach(id=>byId(id).value='');studyPage=0;buildStudyBank();}
 function refreshNext(){
  const name=ROOT.profiles?.[currentUser]?.name||'';
  byId('duWelcomeTitle').textContent=name?'Welcome back, '+name+'.':'Make room for a little progress.';
  const host=next.querySelector('.du-next-list');host.replaceChildren();
  const saved=Object.entries(STATE.inprogress||{}).map(([id,rec])=>({p:paperById(id),rec})).filter(x=>paperInCurrentPrep(x.p)&&!x.p.archived&&Array.isArray(x.rec.answers)&&x.rec.answers.length===x.p.questions.length).sort((a,b)=>(b.rec.savedAt||b.rec.t||0)-(a.rec.savedAt||a.rec.t||0));
  const d=studyData(),session=d.sessions.filter(s=>!s.finished&&s.keys?.some(k=>studyMap.has(k))).slice(-1)[0];
  if(saved.length){const {p,rec}=saved[0],answered=rec.answers.filter(a=>a!==null&&a!==undefined).length;host.appendChild(nextCard('Continue','Saved: '+p.title,answered+' of '+p.questions.length+' questions answered.','Open saved paper',()=>openPaper(p)));}
  else if(session)host.appendChild(nextCard('Continue','Your focused session',session.keys.length+' questions in your saved practice session.','Resume practice',()=>resumeStudySession(session.id)));
  else host.appendChild(nextCard('Start a session','A fresh paper awaits',visiblePapers().length+(ESAT_MODE?' historical paper parts across ENGAA and NSAA.':' papers across four collections.')+' Choose the pace that works for you.','Browse papers',()=>safeNav(showLibraryHub)));
  const topic=dashboardTopicStats().filter(t=>t.attempted>=3).sort((a,b)=>a.correct/a.attempted-b.correct/b.attempted)[0];
  if(topic)host.appendChild(nextCard('A useful focus',topic.topic,Math.round(topic.correct/topic.attempted*100)+'% accuracy across '+topic.attempted+' attempted questions.','Practise this topic',()=>focusTopic(topic.topic)));
  else host.appendChild(nextCard('Build understanding','One question at a time','Use the question bank for a short, focused session.','Explore questions',()=>studyNav('bank')));
  const plan=d.plans.filter(p=>!p.done&&planInCurrentPrep(p)).slice().sort((a,b)=>a.date.localeCompare(b.date))[0];
  if(plan){const date=new Date(plan.date+'T12:00:00');host.appendChild(nextCard(plan.date<studyToday()?'Plan to revisit':'On your calendar',studyPlanLabel(plan),date.toLocaleDateString('en-GB',{weekday:'short',day:'numeric',month:'short'})+' · '+plan.minutes+' minutes planned.','Open planner',()=>studyNav('planner')));}
  else{const row=dashboardAllAttemptRows().find(x=>Array.isArray(x.r.a));if(row)host.appendChild(nextCard('Review & reflect',row.p.title,row.c+'/'+row.s+' on your recent attempt. Take a moment to revisit it.','Review attempt',()=>{studyHide();openStoredAttempt(row.p,row.r);}));
   else host.appendChild(nextCard('Make a little time','Plan your next session','Put a paper or topic session on your practice calendar.','Make a plan',()=>studyNav('planner')));}
 }
 const originalDashboard=buildDashboard;
 buildDashboard=function(...args){const result=originalDashboard.apply(this,args);refreshNext();return result;};
 // These hooks also cover a page that was already visible during script loading.
 if(!library.classList.contains('hidden'))filterPapers();
 if(!dashboard.classList.contains('hidden'))refreshNext();
})();
