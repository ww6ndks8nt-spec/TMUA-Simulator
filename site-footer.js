(function(){
 'use strict';
 const links=[['privacy.html','Privacy'],['terms.html','Terms'],['report.html','Report an issue']];
 document.querySelectorAll('.screen.modern-ui > .card').forEach(card=>{
  if(card.querySelector('.site-footer'))return;
  const footer=document.createElement('footer');footer.className='site-footer';footer.setAttribute('aria-label','Website information');
  links.forEach(([href,label])=>{const a=document.createElement('a');a.href=href;a.textContent=label;a.target='_blank';a.rel='noopener';a.setAttribute('aria-label',label+' (opens in a new tab)');footer.appendChild(a);});
  card.appendChild(footer);
 });
 const note=document.createElement('p');note.className='auth-legal-note';
 note.innerHTML='Read our <a href="terms.html" target="_blank" rel="noopener">Terms</a> and <a href="privacy.html" target="_blank" rel="noopener">Privacy Notice</a> before using an account. Leaderboard publication is optional.';
 document.getElementById('loginErr').after(note);
})();
