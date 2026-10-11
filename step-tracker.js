/* STEP workbook functions. User records stay in the signed-in profile. */
(function(){
'use strict';
const PAPERS=[{"id":"1-1986","paper":1,"year":1986,"label":"1986 specimen","count":16,"pure":10,"boundaries":null},{"id":"1-1987","paper":1,"year":1987,"label":"1987","count":16,"pure":10,"boundaries":null},{"id":"1-1988","paper":1,"year":1988,"label":"1988","count":16,"pure":10,"boundaries":null},{"id":"1-1989","paper":1,"year":1989,"label":"1989","count":16,"pure":10,"boundaries":null},{"id":"1-1990","paper":1,"year":1990,"label":"1990","count":16,"pure":10,"boundaries":null},{"id":"1-1991","paper":1,"year":1991,"label":"1991","count":16,"pure":10,"boundaries":null},{"id":"1-1992","paper":1,"year":1992,"label":"1992","count":16,"pure":10,"boundaries":null},{"id":"1-1993","paper":1,"year":1993,"label":"1993","count":16,"pure":10,"boundaries":null},{"id":"1-1994","paper":1,"year":1994,"label":"1994","count":14,"pure":8,"boundaries":null},{"id":"1-1995","paper":1,"year":1995,"label":"1995","count":14,"pure":8,"boundaries":null},{"id":"1-1996","paper":1,"year":1996,"label":"1996","count":14,"pure":8,"boundaries":null},{"id":"1-1997","paper":1,"year":1997,"label":"1997","count":14,"pure":8,"boundaries":null},{"id":"1-1998","paper":1,"year":1998,"label":"1998","count":14,"pure":8,"boundaries":null},{"id":"1-1999","paper":1,"year":1999,"label":"1999","count":14,"pure":8,"boundaries":null},{"id":"1-2000","paper":1,"year":2000,"label":"2000","count":14,"pure":8,"boundaries":null},{"id":"1-2001","paper":1,"year":2001,"label":"2001","count":14,"pure":8,"boundaries":null},{"id":"1-2002","paper":1,"year":2002,"label":"2002","count":14,"pure":8,"boundaries":null},{"id":"1-2003","paper":1,"year":2003,"label":"2003","count":14,"pure":8,"boundaries":null},{"id":"1-2004","paper":1,"year":2004,"label":"2004","count":14,"pure":8,"boundaries":null},{"id":"1-2005","paper":1,"year":2005,"label":"2005","count":14,"pure":8,"boundaries":null},{"id":"1-2006","paper":1,"year":2006,"label":"2006","count":14,"pure":8,"boundaries":null},{"id":"1-2007","paper":1,"year":2007,"label":"2007","count":14,"pure":8,"boundaries":null},{"id":"1-2008","paper":1,"year":2008,"label":"2008","count":13,"pure":8,"boundaries":null},{"id":"1-2009","paper":1,"year":2009,"label":"2009","count":13,"pure":8,"boundaries":null},{"id":"1-2010","paper":1,"year":2010,"label":"2010","count":13,"pure":8,"boundaries":null},{"id":"1-2011","paper":1,"year":2011,"label":"2011","count":13,"pure":8,"boundaries":null},{"id":"1-2012","paper":1,"year":2012,"label":"2012","count":13,"pure":8,"boundaries":null},{"id":"1-2013","paper":1,"year":2013,"label":"2013","count":13,"pure":8,"boundaries":null},{"id":"1-2014","paper":1,"year":2014,"label":"2014","count":13,"pure":8,"boundaries":null},{"id":"1-2015","paper":1,"year":2015,"label":"2015","count":13,"pure":8,"boundaries":null},{"id":"1-2016","paper":1,"year":2016,"label":"2016","count":13,"pure":8,"boundaries":null},{"id":"1-2017","paper":1,"year":2017,"label":"2017","count":13,"pure":8,"boundaries":null},{"id":"1-2018","paper":1,"year":2018,"label":"2018","count":13,"pure":8,"boundaries":null},{"id":"1-2019","paper":1,"year":2019,"label":"2019","count":12,"pure":8,"boundaries":null},{"id":"2-1986","paper":2,"year":1986,"label":"1986 specimen","count":16,"pure":10,"boundaries":null},{"id":"2-1987","paper":2,"year":1987,"label":"1987","count":16,"pure":10,"boundaries":null},{"id":"2-1988","paper":2,"year":1988,"label":"1988","count":16,"pure":10,"boundaries":null},{"id":"2-1989","paper":2,"year":1989,"label":"1989","count":16,"pure":10,"boundaries":null},{"id":"2-1990","paper":2,"year":1990,"label":"1990","count":16,"pure":10,"boundaries":null},{"id":"2-1991","paper":2,"year":1991,"label":"1991","count":16,"pure":10,"boundaries":null},{"id":"2-1992","paper":2,"year":1992,"label":"1992","count":16,"pure":10,"boundaries":null},{"id":"2-1993","paper":2,"year":1993,"label":"1993","count":16,"pure":10,"boundaries":null},{"id":"2-1994","paper":2,"year":1994,"label":"1994","count":14,"pure":8,"boundaries":null},{"id":"2-1995","paper":2,"year":1995,"label":"1995","count":14,"pure":8,"boundaries":null},{"id":"2-1996","paper":2,"year":1996,"label":"1996","count":14,"pure":8,"boundaries":null},{"id":"2-1997","paper":2,"year":1997,"label":"1997","count":14,"pure":8,"boundaries":null},{"id":"2-1998","paper":2,"year":1998,"label":"1998","count":14,"pure":8,"boundaries":null},{"id":"2-1999","paper":2,"year":1999,"label":"1999","count":14,"pure":8,"boundaries":null},{"id":"2-2000","paper":2,"year":2000,"label":"2000","count":14,"pure":8,"boundaries":{"S":91,"1":65,"2":48,"3":32}},{"id":"2-2001","paper":2,"year":2001,"label":"2001","count":14,"pure":8,"boundaries":{"S":85,"1":62,"2":47,"3":32}},{"id":"2-2002","paper":2,"year":2002,"label":"2002","count":14,"pure":8,"boundaries":{"S":90,"1":65,"2":40,"3":32}},{"id":"2-2003","paper":2,"year":2003,"label":"2003","count":14,"pure":8,"boundaries":{"S":95,"1":70,"2":55,"3":37}},{"id":"2-2004","paper":2,"year":2004,"label":"2004","count":14,"pure":8,"boundaries":{"S":82,"1":60,"2":49,"3":36}},{"id":"2-2005","paper":2,"year":2005,"label":"2005","count":14,"pure":8,"boundaries":{"S":89,"1":64,"2":49,"3":31}},{"id":"2-2006","paper":2,"year":2006,"label":"2006","count":14,"pure":8,"boundaries":{"S":85,"1":60,"2":49,"3":31}},{"id":"2-2007","paper":2,"year":2007,"label":"2007","count":14,"pure":8,"boundaries":{"S":95,"1":67,"2":56,"3":35}},{"id":"2-2008","paper":2,"year":2008,"label":"2008","count":13,"pure":8,"boundaries":{"S":94,"1":69,"2":58,"3":35}},{"id":"2-2009","paper":2,"year":2009,"label":"2009","count":13,"pure":8,"boundaries":{"S":98,"1":71,"2":61,"3":39}},{"id":"2-2010","paper":2,"year":2010,"label":"2010","count":13,"pure":8,"boundaries":{"S":105,"1":79,"2":64,"3":40}},{"id":"2-2011","paper":2,"year":2011,"label":"2011","count":13,"pure":8,"boundaries":{"S":83,"1":62,"2":49,"3":29}},{"id":"2-2012","paper":2,"year":2012,"label":"2012","count":13,"pure":8,"boundaries":{"S":91,"1":72,"2":60,"3":31}},{"id":"2-2013","paper":2,"year":2013,"label":"2013","count":13,"pure":8,"boundaries":{"S":100,"1":79,"2":67,"3":32}},{"id":"2-2014","paper":2,"year":2014,"label":"2014","count":13,"pure":8,"boundaries":{"S":95,"1":74,"2":64,"3":30}},{"id":"2-2015","paper":2,"year":2015,"label":"2015","count":13,"pure":8,"boundaries":{"S":94,"1":68,"2":60,"3":30}},{"id":"2-2016","paper":2,"year":2016,"label":"2016","count":13,"pure":8,"boundaries":{"S":95,"1":74,"2":65,"3":31}},{"id":"2-2017","paper":2,"year":2017,"label":"2017","count":13,"pure":8,"boundaries":{"S":101,"1":80,"2":69,"3":34}},{"id":"2-2018","paper":2,"year":2018,"label":"2018","count":13,"pure":8,"boundaries":{"S":100,"1":77,"2":65,"3":36}},{"id":"2-2019","paper":2,"year":2019,"label":"2019","count":12,"pure":8,"boundaries":{"S":90,"1":68,"2":55,"3":30}},{"id":"2-2020","paper":2,"year":2020,"label":"2020","count":12,"pure":8,"boundaries":{"S":77,"1":54,"2":42,"3":25}},{"id":"2-2021","paper":2,"year":2021,"label":"2021","count":12,"pure":8,"boundaries":{"S":92,"1":67,"2":54,"3":28}},{"id":"2-2022","paper":2,"year":2022,"label":"2022","count":12,"pure":8,"boundaries":{"S":81,"1":62,"2":52,"3":30}},{"id":"2-2023","paper":2,"year":2023,"label":"2023","count":12,"pure":8,"boundaries":{"S":90,"1":65,"2":50,"3":28}},{"id":"2-2024","paper":2,"year":2024,"label":"2024","count":12,"pure":8,"boundaries":{"S":93,"1":69,"2":51,"3":26}},{"id":"2-2025","paper":2,"year":2025,"label":"2025","count":12,"pure":8,"boundaries":{"S":92,"1":75,"2":61,"3":35}},{"id":"2-2026","paper":2,"year":2026,"label":"2026","count":12,"pure":8,"boundaries":{"S":84,"1":62,"2":52,"3":34}},{"id":"3-1986","paper":3,"year":1986,"label":"1986 specimen","count":16,"pure":10,"boundaries":null},{"id":"3-1987","paper":3,"year":1987,"label":"1987","count":16,"pure":10,"boundaries":null},{"id":"3-1988","paper":3,"year":1988,"label":"1988","count":16,"pure":10,"boundaries":null},{"id":"3-1989","paper":3,"year":1989,"label":"1989","count":16,"pure":10,"boundaries":null},{"id":"3-1990","paper":3,"year":1990,"label":"1990","count":16,"pure":10,"boundaries":null},{"id":"3-1991","paper":3,"year":1991,"label":"1991","count":16,"pure":10,"boundaries":null},{"id":"3-1992","paper":3,"year":1992,"label":"1992","count":16,"pure":10,"boundaries":null},{"id":"3-1993","paper":3,"year":1993,"label":"1993","count":16,"pure":10,"boundaries":null},{"id":"3-1994","paper":3,"year":1994,"label":"1994","count":14,"pure":8,"boundaries":null},{"id":"3-1995","paper":3,"year":1995,"label":"1995","count":14,"pure":8,"boundaries":null},{"id":"3-1996","paper":3,"year":1996,"label":"1996","count":14,"pure":8,"boundaries":null},{"id":"3-1997","paper":3,"year":1997,"label":"1997","count":14,"pure":8,"boundaries":null},{"id":"3-1998","paper":3,"year":1998,"label":"1998","count":14,"pure":8,"boundaries":null},{"id":"3-1999","paper":3,"year":1999,"label":"1999","count":14,"pure":8,"boundaries":null},{"id":"3-2000","paper":3,"year":2000,"label":"2000","count":14,"pure":8,"boundaries":{"S":88,"1":66,"2":50,"3":39}},{"id":"3-2001","paper":3,"year":2001,"label":"2001","count":14,"pure":8,"boundaries":{"S":77,"1":59,"2":46,"3":32}},{"id":"3-2002","paper":3,"year":2002,"label":"2002","count":14,"pure":8,"boundaries":{"S":77,"1":56,"2":43,"3":32}},{"id":"3-2003","paper":3,"year":2003,"label":"2003","count":14,"pure":8,"boundaries":{"S":77,"1":56,"2":43,"3":33}},{"id":"3-2004","paper":3,"year":2004,"label":"2004","count":14,"pure":8,"boundaries":{"S":75,"1":56,"2":43,"3":33}},{"id":"3-2005","paper":3,"year":2005,"label":"2005","count":14,"pure":8,"boundaries":{"S":80,"1":59,"2":47,"3":35}},{"id":"3-2006","paper":3,"year":2006,"label":"2006","count":14,"pure":8,"boundaries":{"S":80,"1":60,"2":48,"3":34}},{"id":"3-2007","paper":3,"year":2007,"label":"2007","count":14,"pure":8,"boundaries":{"S":86,"1":64,"2":52,"3":35}},{"id":"3-2008","paper":3,"year":2008,"label":"2008","count":13,"pure":8,"boundaries":{"S":82,"1":63,"2":52,"3":34}},{"id":"3-2009","paper":3,"year":2009,"label":"2009","count":13,"pure":8,"boundaries":{"S":95,"1":67,"2":55,"3":38}},{"id":"3-2010","paper":3,"year":2010,"label":"2010","count":13,"pure":8,"boundaries":{"S":78,"1":56,"2":46,"3":29}},{"id":"3-2011","paper":3,"year":2011,"label":"2011","count":13,"pure":8,"boundaries":{"S":91,"1":65,"2":52,"3":30}},{"id":"3-2012","paper":3,"year":2012,"label":"2012","count":13,"pure":8,"boundaries":{"S":84,"1":65,"2":53,"3":32}},{"id":"3-2013","paper":3,"year":2013,"label":"2013","count":13,"pure":8,"boundaries":{"S":85,"1":63,"2":48,"3":27}},{"id":"3-2014","paper":3,"year":2014,"label":"2014","count":13,"pure":8,"boundaries":{"S":81,"1":59,"2":48,"3":28}},{"id":"3-2015","paper":3,"year":2015,"label":"2015","count":13,"pure":8,"boundaries":{"S":88,"1":65,"2":54,"3":29}},{"id":"3-2016","paper":3,"year":2016,"label":"2016","count":13,"pure":8,"boundaries":{"S":88,"1":64,"2":55,"3":32}},{"id":"3-2017","paper":3,"year":2017,"label":"2017","count":13,"pure":8,"boundaries":{"S":95,"1":69,"2":57,"3":28}},{"id":"3-2018","paper":3,"year":2018,"label":"2018","count":13,"pure":8,"boundaries":{"S":87,"1":59,"2":49,"3":27}},{"id":"3-2019","paper":3,"year":2019,"label":"2019","count":12,"pure":8,"boundaries":{"S":77,"1":57,"2":48,"3":27}},{"id":"3-2020","paper":3,"year":2020,"label":"2020","count":12,"pure":8,"boundaries":{"S":88,"1":67,"2":53,"3":30}},{"id":"3-2021","paper":3,"year":2021,"label":"2021","count":12,"pure":8,"boundaries":{"S":89,"1":67,"2":54,"3":29}},{"id":"3-2022","paper":3,"year":2022,"label":"2022","count":12,"pure":8,"boundaries":{"S":82,"1":63,"2":51,"3":29}},{"id":"3-2023","paper":3,"year":2023,"label":"2023","count":12,"pure":8,"boundaries":{"S":85,"1":63,"2":54,"3":32}},{"id":"3-2024","paper":3,"year":2024,"label":"2024","count":12,"pure":8,"boundaries":{"S":93,"1":70,"2":57,"3":34}},{"id":"3-2025","paper":3,"year":2025,"label":"2025","count":12,"pure":8,"boundaries":{"S":86,"1":61,"2":49,"3":27}},{"id":"3-2026","paper":3,"year":2026,"label":"2026","count":12,"pure":8,"boundaries":{"S":80,"1":56,"2":48,"3":30}},{"id":"2-mock1","paper":2,"year":0,"label":"Mock 1","count":12,"pure":8,"boundaries":null},{"id":"2-mock2","paper":2,"year":0,"label":"Mock 2","count":12,"pure":8,"boundaries":null},{"id":"2-mock3","paper":2,"year":0,"label":"Mock 3","count":12,"pure":8,"boundaries":null},{"id":"3-mock1","paper":3,"year":0,"label":"Mock 1","count":12,"pure":8,"boundaries":null},{"id":"3-mock2","paper":3,"year":0,"label":"Mock 2","count":12,"pure":8,"boundaries":null},{"id":"3-mock3","paper":3,"year":0,"label":"Mock 3","count":12,"pure":8,"boundaries":null}];
const byId=new Map(PAPERS.map(p=>[p.id,p])),roman={1:'I',2:'II',3:'III'};
const $=id=>document.getElementById(id),screen=$('stepTrackerScreen'),host=$('stepTrackerRoot');
const bands=['low','partial','nearly','complete'];
let owner=null,paper=2,view='scores',filter='all',query='',dialogId=null,built=false,rows=new Map();
const make=(tag,cls,text)=>{const node=document.createElement(tag);if(cls)node.className=cls;if(text!==undefined)node.textContent=text;return node;};
function button(text,fn,cls='bigbtn ghost'){const b=make('button',cls,text);b.type='button';b.addEventListener('click',fn);return b;}
function record(id,create=false){
 const stored=STATE.stepTracker?.[id];if(stored)return stored;
 if(!create)return {v:1,scores:{},times:{},notes:{},statuses:{},graded:false};
 if(!STATE.stepTracker||typeof STATE.stepTracker!=='object')STATE.stepTracker={};
 return STATE.stepTracker[id]={v:1,scores:{},times:{},notes:{},statuses:{},graded:false};
}
function validScore(value){return Number.isInteger(value)&&value>=0&&value<=20;}
function band(score){return !validScore(score)?'':score<=4?'low':score<=10?'partial':score<=15?'nearly':'complete';}
function validBoundaries(b){
 if(!b)return false;
 const values=['S','1','2','3'].map(g=>b[g]);
 return values.every((n,i)=>Number.isInteger(n)&&n>=0&&n<=120&&(i===0||values[i-1]>=n));
}
function boundaries(p,r=record(p.id)){return validBoundaries(r.boundaries)?r.boundaries:validBoundaries(p.boundaries)?p.boundaries:null;}
function calculate(p,r=record(p.id)){
 const marks=[],times=[];let complete=0,recorded=0,unmarked=0;const counts=[0,0,0,0];
 for(let q=1;q<=p.count;q++){
  const score=r.scores?.[q],status=r.statuses?.[q],time=r.times?.[q];
  if(validScore(score)){marks.push(score);recorded++;counts[bands.indexOf(band(score))]++;if(score>=16)complete++;}
  else if(status==='hinted'||status==='done'){recorded++;unmarked++;if(status==='done')complete++;}
  if(typeof time==='number'&&Number.isFinite(time)&&time>=0)times.push(time);
 }
 const total=marks.length?marks.sort((a,b)=>b-a).slice(0,6).reduce((s,n)=>s+n,0):null;
 const thresholds=boundaries(p,r);
 let grade=null;if(r.graded&&total!==null&&!unmarked&&thresholds)grade=['S','1','2','3'].find(g=>total>=thresholds[g])||'U';
 return {total,grade,thresholds,recorded,complete,unmarked,counts,time:times.length?times.reduce((s,n)=>s+n,0):null,averageTime:times.length?times.reduce((s,n)=>s+n,0)/times.length:null,timed:times.length};
}
function formatTime(value){return value===null?'—':new Intl.NumberFormat(undefined,{maximumFractionDigits:2}).format(value);}
function title(p){return 'STEP '+roman[p.paper]+' · '+p.label;}
function selectedPapers(){return PAPERS.filter(p=>p.paper===paper).sort((a,b)=>b.year-a.year||a.label.localeCompare(b.label));}
function shownPapers(){return selectedPapers().filter(p=>{
 const r=record(p.id),has=calculate(p,r).recorded>0||Object.values(r.times||{}).some(v=>v!==null);
 return (filter==='all'||filter==='graded'&&r.graded||filter==='recorded'&&has)&&(!query||p.label.toLowerCase().includes(query.toLowerCase()));
});}
function save(id){
 const r=record(id,true);r.updated=Date.now();persistNow();
 $('stSaveStatus').textContent='Saved';updateRow(id);renderSummary();
}
function setEntry(id,q,kind,input){
 const value=input.value.trim();let result=null,status=null;
 if(value!==''){
  if(kind==='scores'&&/^a$/i.test(value))status='hinted';
  else if(kind==='scores'&&/^done$/i.test(value))status='done';
  else{
   result=Number(value);
   if(kind==='scores'?!/^\d{1,2}$/.test(value)||!validScore(result):!/^\d+(\.\d{1,2})?$/.test(value)||!Number.isFinite(result)||result<0||result>1440){
    input.setCustomValidity(kind==='scores'?'Enter 0–20, A, Done, or leave blank.':'Enter minutes from 0 to 1440, with up to two decimals.');input.setAttribute('aria-invalid','true');return false;
   }
  }
 }
 input.setCustomValidity('');input.removeAttribute('aria-invalid');
 const r=record(id,true);if(!r[kind])r[kind]={};
 if(result===null)delete r[kind][q];else r[kind][q]=result;
 if(kind==='scores'){if(!r.statuses)r.statuses={};if(status)r.statuses[q]=status;else delete r.statuses[q];}
 save(id);paintInput(input,id,q,kind);return true;
}
function entryValue(r,q,kind){return kind==='scores'?(r.scores?.[q]??(r.statuses?.[q]==='hinted'?'A':r.statuses?.[q]==='done'?'Done':'')):(r.times?.[q]??'');}
function paintInput(input,id,q,kind){
 const r=record(id),value=r.scores?.[q];input.dataset.band=band(value)||(r.statuses?.[q]==='hinted'?'hinted':r.statuses?.[q]==='done'?'complete':'');
 input.classList.toggle('has-note',!!r.notes?.[q]);
 const p=byId.get(id);input.title=title(p)+' · Q'+q+(q<=p.pure?' · Pure':' · Applied')+(r.notes?.[q]?' · '+r.notes[q]:'');
 if(document.activeElement!==input)input.value=entryValue(r,q,kind);
}
function entryInput(p,q,kind,dialog=false){
 const input=make('input','st-entry');input.type='text';input.inputMode=kind==='times'?'decimal':'text';input.autocomplete='off';input.spellcheck=false;
 input.maxLength=kind==='times'?7:4;input.dataset.question=q;input.dataset.kind=kind;input.dataset.paper=p.id;
 input.setAttribute('aria-label',title(p)+' question '+q+(kind==='times'?' time in minutes':' score out of 20'));
 input.placeholder='—';input.value=entryValue(record(p.id),q,kind);paintInput(input,p.id,q,kind);
 let original=null;
 input.addEventListener('focus',()=>{const r=record(p.id);original={value:r[kind]?.[q],status:r.statuses?.[q]};});
 input.addEventListener('input',()=>setEntry(p.id,q,kind,input));
 input.addEventListener('blur',()=>{if(!input.checkValidity()){
  const r=record(p.id,true);if(!r[kind])r[kind]={};
  if(original?.value===undefined)delete r[kind][q];else r[kind][q]=original.value;
  if(kind==='scores'){if(!r.statuses)r.statuses={};if(original?.status===undefined)delete r.statuses[q];else r.statuses[q]=original.status;}
  input.setCustomValidity('');input.removeAttribute('aria-invalid');input.value=entryValue(r,q,kind);save(p.id);paintInput(input,p.id,q,kind);$('stSaveStatus').textContent='Invalid entry. Previous value restored.';
 }});
 input.addEventListener('keydown',e=>{
  if(e.key!=='Enter')return;e.preventDefault();if(!input.reportValidity())return;
  const parent=dialog?$('stDialogQuestions'):input.closest('tr'),next=parent?.querySelector('input[data-question="'+(q+1)+'"][data-kind="'+kind+'"]');
  if(next){next.focus();next.select();}else input.blur();
 });
 return input;
}
function renderSummary(){
 const ps=selectedPapers(),summary={recorded:0,complete:0,total:0,time:0,timed:0,graded:0,counts:[0,0,0,0]};
 for(const p of ps){const c=calculate(p),r=record(p.id);summary.recorded+=c.recorded;summary.complete+=c.complete;summary.total+=p.count;summary.time+=c.time||0;summary.timed+=c.timed;if(r.graded)summary.graded++;c.counts.forEach((v,i)=>summary.counts[i]+=v);}
 $('stRecorded').textContent=summary.recorded+' / '+summary.total;
 $('stComplete').textContent=(summary.recorded/summary.total*100).toFixed(1)+'%';
 $('stAverage').textContent=summary.timed?formatTime(summary.time/summary.timed)+' min':'—';
 $('stGraded').textContent=summary.graded;
 summary.counts.forEach((count,i)=>$('stBandCount'+i).textContent=count);
}
function updateRow(id){
 const p=byId.get(id),tr=rows.get(id);if(!p)return;const r=record(id),c=calculate(p,r);
 if(tr){
  tr.querySelector('.st-progress').textContent=c.recorded+'/'+p.count;
  tr.querySelector('.st-graded').checked=!!r.graded;
  tr.querySelector('.st-total').textContent=view==='times'?formatTime(c.time):r.graded&&c.total!==null?String(c.total):'—';
  tr.querySelector('.st-average').textContent=view==='times'?formatTime(c.averageTime):'';
  const grade=tr.querySelector('.st-grade');grade.replaceChildren();delete grade.dataset.grade;
  if(!r.graded)grade.textContent='—';
  else if(c.unmarked){grade.append(button('Add marks',()=>openDetails(id),'linkbtn'));}
  else if(!c.thresholds){grade.append(button('Set bounds',()=>openDetails(id,true),'linkbtn'));}
  else{grade.textContent=c.grade||'—';if(c.grade)grade.dataset.grade=c.grade;}
  tr.querySelectorAll('.st-entry').forEach(input=>paintInput(input,id,Number(input.dataset.question),view));
 }
 if(dialogId===id&&$('stDialog')?.open){
  $('stDialogGraded').checked=!!r.graded;
  $('stDialogScore').textContent=r.graded?(c.unmarked?'Add marks to calculate grade':c.total===null?'No marks entered':c.total+' / 120'+(c.grade?' · Grade '+c.grade:!c.thresholds?' · Set grade boundaries':'')):'Grading off';
  $('stDialogTime').textContent='Total '+formatTime(c.time)+' min · Average '+formatTime(c.averageTime)+' min';
  $('stDialogQuestions').querySelectorAll('.st-entry').forEach(input=>paintInput(input,id,Number(input.dataset.question),input.dataset.kind));
 }
}
function renderTable(){
 rows=new Map();const container=$('stTableWrap'),ps=shownPapers(),max=Math.max(12,...ps.map(p=>p.count));
 container.replaceChildren();$('stRowCount').textContent=ps.length+' '+(ps.length===1?'paper':'papers');
 if(!ps.length){container.append(make('p','study-muted','No papers match.'));return;}
 const table=make('table','st-table');table.setAttribute('aria-label','STEP '+roman[paper]+' '+(view==='scores'?'question scores':'question times in minutes'));
 const head=table.createTHead(),hr=head.insertRow();
 const headers=['Year',...Array.from({length:max},(_,i)=>'Q'+(i+1)),'Graded',view==='scores'?'Best 6 / 120':'Total min',...(view==='times'?['Avg min']:[]),'Grade'];
 headers.forEach(text=>{const th=make('th','',text);th.scope='col';hr.append(th);});
 const body=table.createTBody();
 for(const p of ps){
  const tr=body.insertRow();tr.dataset.paper=p.id;rows.set(p.id,tr);
  const year=make('th','st-year');year.scope='row';const name=button(p.label,()=>openDetails(p.id),'st-year-button');name.setAttribute('aria-label','Edit '+title(p)+' details');year.append(name,make('small','st-progress'));tr.append(year);
  for(let q=1;q<=max;q++){
   const td=tr.insertCell();if(q<=p.count)td.append(entryInput(p,q,view));else{td.textContent='—';td.className='st-unavailable';td.setAttribute('aria-label','Question '+q+' not in this paper');}
   if(q===p.pure+1)td.classList.add('st-section-start');
  }
  const graded=tr.insertCell(),check=make('input','st-graded');check.type='checkbox';check.setAttribute('aria-label','Grade '+title(p));check.addEventListener('change',()=>{record(p.id,true).graded=check.checked;save(p.id);});graded.append(check);
  tr.insertCell().className='st-total';const average=tr.insertCell();average.className='st-average';average.hidden=view!=='times';
  tr.insertCell().className='st-grade';updateRow(p.id);
 }
 container.append(table);
}
function render(){
 $('stEntryHint').textContent=view==='scores'?'Marks out of 20':'Minutes per question';
 host.querySelectorAll('[data-st-paper]').forEach(b=>b.setAttribute('aria-pressed',String(Number(b.dataset.stPaper)===paper)));
 host.querySelectorAll('[data-st-view]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.stView===view)));
 host.querySelectorAll('[data-st-filter]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.stFilter===filter)));
 $('stLegend').hidden=view!=='scores';renderSummary();renderTable();
}
function openDetails(id,editBounds=false){
 const p=byId.get(id);if(!p)return;dialogId=id;
 const dialog=$('stDialog');$('stDialogTitle').textContent=title(p);const questionHost=$('stDialogQuestions');questionHost.replaceChildren();
 for(let q=1;q<=p.count;q++){
  const row=make('div','st-question-row');row.append(make('b','','Q'+q),entryInput(p,q,'scores',true),entryInput(p,q,'times',true));
  const note=make('input','st-note');note.type='text';note.maxLength=2000;note.placeholder='Note';note.value=record(id).notes?.[q]||'';note.setAttribute('aria-label',title(p)+' question '+q+' note');
  note.addEventListener('input',()=>{const r=record(id,true);if(!r.notes)r.notes={};if(note.value)r.notes[q]=note.value;else delete r.notes[q];save(id);});row.append(note);questionHost.append(row);
 }
 const bounds=boundaries(p)||{};
 ['S','1','2','3'].forEach(g=>{$('stBoundary'+g).value=bounds[g]??'';});
 $('stBoundarySource').textContent=validBoundaries(record(id).boundaries)?'Custom boundaries':p.boundaries?'Spreadsheet boundaries':'No boundaries supplied';
 $('stBoundaryError').textContent='';$('stBoundaryDetails').open=editBounds;$('stRestoreBounds').hidden=!validBoundaries(record(id).boundaries);
 if(!dialog.open)dialog.showModal();updateRow(id);
 if(editBounds)$('stBoundaryS').focus();
}
function build(){
 if(built)return;built=true;
 host.innerHTML='<div class="st-toolbar"><div id="stPaperTabs" class="st-buttons" aria-label="STEP paper"></div><span id="stSaveStatus" class="study-muted" role="status"></span></div><div class="st-summary"><div><b id="stRecorded"></b><span>Questions recorded</span></div><div title="Questions with a recorded mark or status"><b id="stComplete"></b><span>Completion</span></div><div><b id="stAverage"></b><span>Average question time</span></div><div><b id="stGraded"></b><span>Graded papers</span></div></div><div class="st-controls"><div id="stViewTabs" class="st-buttons" aria-label="Entry type"></div><div id="stFilters" class="st-buttons" aria-label="Paper filter"></div><label class="st-search">Find year<input id="stYearSearch" type="search" placeholder="Year or mock" autocomplete="off"></label></div><div id="stLegend" class="st-legend" aria-label="Score bands"></div><div class="st-table-head"><span id="stRowCount"></span><span id="stEntryHint">Marks out of 20</span></div><div id="stTableWrap" class="st-table-wrap" tabindex="0" role="region" aria-label="STEP tracker table"></div>';
 [1,2,3].forEach(n=>{const b=button('STEP '+roman[n],()=>{paper=n;render();});b.dataset.stPaper=n;$('stPaperTabs').append(b);});
 [['scores','Marks'],['times','Time (min)']].forEach(([id,label])=>{const b=button(label,()=>{view=id;$('stEntryHint').textContent=id==='scores'?'Marks out of 20':'Minutes per question';render();});b.dataset.stView=id;$('stViewTabs').append(b);});
 [['all','All'],['recorded','Recorded'],['graded','Graded']].forEach(([id,label])=>{const b=button(label,()=>{filter=id;render();});b.dataset.stFilter=id;$('stFilters').append(b);});
 ['0–4','5–10','11–15','16–20'].forEach((label,i)=>{const item=make('span','st-band');item.dataset.band=bands[i];item.append(make('span','',label+' · '));const count=make('b');count.id='stBandCount'+i;item.append(count);$('stLegend').append(item);});
 $('stLegend').append(make('span','st-shorthand','A = hints'),make('span','st-shorthand','Done = unmarked'));
 $('stYearSearch').addEventListener('input',e=>{query=e.target.value.trim();renderTable();});
 const dialog=make('dialog','st-dialog modern-ui');dialog.id='stDialog';dialog.setAttribute('aria-labelledby','stDialogTitle');
 dialog.innerHTML='<div class="st-dialog-head"><h2 id="stDialogTitle"></h2><button id="stCloseDialog" class="bigbtn ghost" type="button" aria-label="Close paper details">×</button></div><div class="st-dialog-summary"><label><input id="stDialogGraded" type="checkbox"> Graded paper</label><b id="stDialogScore"></b><span id="stDialogTime"></span></div><details id="stBoundaryDetails" class="st-boundary-details"><summary>Grade boundaries</summary><p id="stBoundarySource" class="study-muted"></p><form id="stBoundaryForm"><div id="stBoundaryFields" class="st-boundary-fields"></div><div class="study-actions"><button type="submit" class="bigbtn">Save boundaries</button><button id="stRestoreBounds" type="button" class="bigbtn ghost">Use spreadsheet</button></div><p id="stBoundaryError" role="status"></p></form></details><div class="st-question-head"><span>Q</span><span>Mark / 20</span><span>Time (min)</span><span>Notes</span></div><div id="stDialogQuestions"></div>';
 screen.append(dialog);
 ['S','1','2','3'].forEach(g=>{const label=make('label','','Grade '+g),input=make('input');input.id='stBoundary'+g;input.type='number';input.min='0';input.max='120';input.step='1';input.required=true;label.append(input);$('stBoundaryFields').append(label);});
 $('stCloseDialog').addEventListener('click',()=>dialog.close());dialog.addEventListener('close',()=>{dialogId=null;if(currentUser===owner&&!screen.classList.contains('hidden'))render();});
 new MutationObserver(()=>{if(screen.classList.contains('hidden')&&dialog.open)dialog.close();}).observe(screen,{attributes:true,attributeFilter:['class']});
 $('stDialogGraded').addEventListener('change',e=>{if(dialogId){record(dialogId,true).graded=e.target.checked;save(dialogId);}});
 $('stBoundaryForm').addEventListener('submit',e=>{
  e.preventDefault();if(!dialogId)return;const b=Object.fromEntries(['S','1','2','3'].map(g=>[g,Number($('stBoundary'+g).value)]));
  if(!validBoundaries(b)){$('stBoundaryError').textContent='Enter descending boundaries from 0 to 120.';return;}
  record(dialogId,true).boundaries=b;save(dialogId);$('stBoundarySource').textContent='Custom boundaries';$('stRestoreBounds').hidden=false;$('stBoundaryError').textContent='Saved';
 });
 $('stRestoreBounds').addEventListener('click',()=>{if(!dialogId)return;const id=dialogId;delete record(id,true).boundaries;save(id);openDetails(id,true);});
}
function refresh(){
 if(!built||screen.classList.contains('hidden'))return;
 if(owner!==currentUser){owner=currentUser;paper=2;view='scores';filter='all';query='';$('stYearSearch').value='';if($('stDialog').open)$('stDialog').close();dialogId=null;}
 if($('stDialog').open||host.contains(document.activeElement)&&document.activeElement.matches('input'))return;
 render();
}
window.showStepTracker=function(){
 if(!currentUser)return;
 studyHide();if(timerId)clearInterval(timerId);if(typeof dualGapTimerId!=='undefined'&&dualGapTimerId){clearInterval(dualGapTimerId);dualGapTimerId=null;}stopPreExamTimer();
 document.querySelectorAll('.screen').forEach(e=>e.classList.add('hidden'));['topbar','substrip','testMain','footbar','navOver','paperGapScreen','endConfirm'].forEach(id=>$(id)?.classList.add('hidden'));
 setSideNav('stepTracker');screen.classList.remove('hidden');$('airyMoreNav').open=false;screen.scrollTop=0;build();refresh();
};
$('navStepTracker').addEventListener('click',window.showStepTracker);
window.StepTracker={refresh,calculate,band,validBoundaries,papers:PAPERS,openDetails};
})();
