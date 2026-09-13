/* ESAT mode reuses account, marking, study and cloud persistence from the TMUA app. */
(function(){
 if(!ESAT_MODE)return;
 const doc=document,root=doc.documentElement;
 root.classList.add('esat-prep');doc.title='Duck ESAT · Exam Simulator';
 const robots=doc.createElement('meta');robots.name='robots';robots.content='noindex, nofollow';doc.head.appendChild(robots);
 // Keep this route discoverable only through the egg, with a clear way home.
 const back=doc.createElement('a');back.href='index.html';back.className='du-esat-back';back.textContent='← Duck TMUA';
 $('sideNav').appendChild(back);
 doc.querySelectorAll('.side-brand,.side-logo-text,.login-brand').forEach(el=>{
  for(const n of el.childNodes)if(n.nodeType===3)n.textContent=n.textContent.replace(/Duck TMUA/g,'Duck ESAT');
 });
 const text=doc.createTreeWalker(doc.body,4);let node;
 while(node=text.nextNode()){
  if(['SCRIPT','STYLE'].includes(node.parentElement?.tagName))continue;
  if(node.textContent.includes('Duck TMUA'))node.textContent=node.textContent.replace(/Duck TMUA/g,'Duck ESAT');
 }
 back.textContent='← Duck TMUA';
 $('libraryScreen').querySelector('.lead').textContent='ENGAA and NSAA multiple-choice past papers, 2016–2023. Read the original PDFs and record your answers in the simulator.';
 $('reviewHubScreen').querySelector('.lead').textContent='Revisit your answers and open the source answer-key PDFs.';
 [['grid4','ENGAA','Sections 1 and 2 · 2016–2023','01'],['gridMAT','NSAA','Section 1: 2016–2023 · Section 2: 2020–2023','02']].forEach(([id,name,sub,num])=>{
  const c=$(id).closest('.studio-collection');c.querySelector('.collection-name').innerHTML=name+'<small>'+sub+'</small>';c.querySelector('.collection-num').textContent=num;
 });
 $('timeSelect').innerHTML='<option value="75">Paper timing</option><option value="0">Untimed</option>';
 $('timeSelect').value='75';
 $('settingsDuration').innerHTML='<option value="75">Paper timing</option><option value="0">Untimed</option>';
 $('settingsDuration').value='75';
 $('duPaperSearch').placeholder='Try 2023, Physics or Chemistry…';
 $('duPaperType').innerHTML='<option value="">All sections</option><option value="1">Section 1</option><option value="2">Section 2</option>';
 $('bankEstimatedDifficulty').closest('label').hidden=true;
 $('downloadDifficulties').hidden=true;
 const info=doc.createElement('p');info.className='esat-archive-note';
 info.innerHTML='Crossed-out questions are excluded from practice and the affected timers are reduced proportionally. The source PDFs retain their original annotations. Unannotated historical papers may still contain advanced topics outside today’s specification. NSAA subject parts are offered separately; older ENGAA Section 2 written reasoning is not marked. <a href="https://esat-tmua.ac.uk/esat-preparation-materials/" target="_blank" rel="noopener noreferrer">Official preparation guidance ↗</a>';
 $('libraryScreen').querySelector('.lead').after(info);
 // Historical raw accuracy has no invented 1–9 conversion.
 dashboardAttemptGrade=(c,s)=>s?100*c/s:null;
 dashboardFmtGrade=v=>v===null||!Number.isFinite(v)?'—':Math.round(v)+'%';
 dashboardWeightedStats=rows=>{
  if(!rows.length)return null;const mean=rows.reduce((n,r)=>n+r.grade,0)/rows.length;
  return {mean,lo:mean,hi:mean,n:rows.length};
 };
 dashboardScalePct=v=>Math.max(0,Math.min(100,v));
 doc.querySelector('.mastery-kicker').textContent='First-attempt accuracy';
 doc.querySelector('.mastery-sub').textContent='Mean percentage correct across completed historical paper parts. This is not an ESAT score estimate.';
 doc.querySelectorAll('.mastery-range,.mastery-scale,.mastery-legend,.studio-estimate-note,.studio-benchmarks').forEach(el=>el.hidden=true);
 doc.querySelectorAll('.dash-split-card .h').forEach((el,i)=>el.textContent='Section '+(i+1));
 renderDashboardChart=rows=>{
  const host=$('dashMasteryChart'),cut=dashboardRange==='all'?0:Date.now()-Number(dashboardRange)*86400000;
  const points=rows.filter(r=>r.t>=cut).sort((a,b)=>a.t-b.t);
  if(!points.length){host.innerHTML='<div class="dash-chart-empty">Complete a paper part to see your accuracy over time.</div>';return;}
  const x=i=>60+(points.length===1?340:i*680/(points.length-1)),y=r=>190-r.grade*1.6;
  let grid=[0,25,50,75,100].map(v=>'<line x1="60" y1="'+(190-v*1.6)+'" x2="740" y2="'+(190-v*1.6)+'" stroke="currentColor" opacity=".15"/><text x="48" y="'+(194-v*1.6)+'" text-anchor="end" fill="currentColor" font-size="12">'+v+'%</text>').join('');
  host.innerHTML='<svg viewBox="0 0 800 230" role="img" aria-label="First-attempt percentage correct over time">'+grid+'<polyline points="'+points.map((p,i)=>x(i)+','+y(p)).join(' ')+'" fill="none" stroke="#d6a900" stroke-width="3"/>'+points.map((p,i)=>'<circle cx="'+x(i)+'" cy="'+y(p)+'" r="4" fill="#d6a900"><title>'+escapeHtml(p.p.title)+' · '+Math.round(p.grade)+'%</title></circle>').join('')+'<text x="60" y="220" fill="currentColor" font-size="12">'+escapeHtml(dashboardDateShort(points[0].t))+'</text><text x="740" y="220" fill="currentColor" text-anchor="end" font-size="12">'+escapeHtml(dashboardDateShort(points[points.length-1].t))+'</text></svg>';
 };
 const dashboard=buildDashboard;
 buildDashboard=function(){dashboard();$('dashRecent').querySelectorAll('.recent-head > div').forEach(el=>{if(el.textContent==='Equivalent')el.textContent='Accuracy';});};
 beginExamIntroFlow=()=>beginPaperAfterInstructions();
 const start=openStart;
 openStart=function(p){
  if(p.replacementId)p=paperById(p.replacementId);
  // Only map an unfinished original sitting when no newer work exists.
  const old=p.legacyId&&STATE.inprogress[p.legacyId],original=p.legacyId&&paperById(p.legacyId);
  if(old&&original&&!STATE.inprogress[p.id]&&!STATE.results[p.id]?.length&&old.answers?.length===original.questions.length){
   const indices=p.questions.map(q=>original.questions.findIndex(x=>x.sourceNumber===q.sourceNumber));
   const take=(arr,fallback)=>indices.map(i=>arr?.[i]??fallback);
   const mappedIdx=indices.findIndex(i=>i>=old.idx);
   STATE.inprogress[p.id]={...old,answers:take(old.answers,null),flags:take(old.flags,false),seen:take(old.seen,false),questionTimesMs:take(old.questionTimesMs,0),idx:mappedIdx<0?indices.length-1:mappedIdx,secondsLeft:old.noTimer?0:Math.max(1,Math.min(p.timerSeconds,Math.round(old.secondsLeft*p.questions.length/original.questions.length))),savedAt:Date.now()};
   delete STATE.inprogress[p.legacyId];persistNow();
  }
  start(p);if(!p.esat)return;
  $('startTime').textContent=selectedTimeMinutesForPaper(p)===0?'Untimed':formatDurationCompact(p.timerSeconds)+' (historical practice timing)';
  const calc=[...doc.querySelectorAll('#startScreen .spec')].find(el=>el.querySelector('.k')?.textContent==='Calculator');
  if(calc)calc.querySelector('.v').textContent=p.calculator?'Permitted in this historical paper':'Not permitted';
  let note=$('esatPaperNote');if(!note){note=doc.createElement('p');note.id='esatPaperNote';note.className='esat-archive-note';$('stdInstructions').before(note);}
  note.textContent=p.note+' Read the original question PDF in the question panel, then select a letter. Answer keys appear in review.';
 };
 const chooseOriginal=choose;
 choose=function(i){
  if(!QUESTIONS[idx]?.esat)return chooseOriginal(i);
  if(reviewMode||submitted||i<0||i>=QUESTIONS[idx].opts.length)return;
  answers[idx]=answers[idx]===i?null:i;
  $('options').querySelectorAll('.copt').forEach((b,j)=>{b.classList.toggle('sel',answers[idx]===j);b.setAttribute('aria-pressed',String(answers[idx]===j));});
  snapshotProgress();
 };
 const meta=studyMeta;
 studyMeta=(x,h)=>x.q.esat?x.topic+' · Source question '+x.q.sourceNumber+' · Your rating: '+(studyData().ratings[x.key]||'Unrated')+' · '+(!h.get(x.key)?'Not attempted':h.get(x.key).ok?'Last attempt correct':'Last attempt incorrect'):meta(x,h);
 const study=renderStudyQuestion;
 renderStudyQuestion=function(){study();const x=studyMap.get(studySession.keys[studySession.index]);if(x?.q.esat)$('studyPosition').textContent='Question '+(studySession.index+1)+' of '+studySession.keys.length+' · '+x.topic+' · Source Q'+x.q.sourceNumber;};
})();
