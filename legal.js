(function(){
 'use strict';
 const toggle=document.getElementById('themeToggle');
 function refresh(){toggle.textContent=document.documentElement.dataset.duckTheme==='dark'?'Light mode':'Dark mode';}
 toggle.onclick=()=>{const next=document.documentElement.dataset.duckTheme==='dark'?'light':'dark';document.documentElement.dataset.duckTheme=next;try{localStorage.setItem('ducktmua-appearance',next);}catch(e){}refresh();};refresh();
 const form=document.getElementById('reportForm');if(!form)return;
 form.onsubmit=event=>{
  event.preventDefault();
  const type=document.getElementById('reportType').value,paper=document.getElementById('reportPaper').value.trim(),detail=document.getElementById('reportDetails').value.trim();
  if(!detail){document.getElementById('reportDetails').focus();return;}
  const subject='DuckTMUA — '+type;
  const body='Issue type: '+type+'\nPaper / question: '+(paper||'Not specified')+'\n\n'+detail;
  const link=document.getElementById('reportDraft');link.href='mailto:duck79330@gmail.com?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(body);link.hidden=false;
  document.getElementById('reportStatus').textContent='Your email draft is ready below. Nothing has been sent. If no email app opens, email duck79330@gmail.com and copy your report from the form.';
  link.focus();
 };
})();
