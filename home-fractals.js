/* Actual finite fractal constructions, pre-rendered by authoring/generate_home_fractals.py.
   Only opacity animates: no per-frame geometry, canvas loops or network calls. */
(function(){
 'use strict';
 const host=document.querySelector('.fp-fractal-background'),screen=document.getElementById('dashboardScreen');
 if(!host||!screen)return;
 const items=[['dragon','svg','Heighway dragon curve'],['mandelbrot','png','Mandelbrot set'],['gosper','svg','Gosper curve'],['sierpinski','svg','Sierpiński triangle'],['minkowski','svg','Minkowski island'],['hilbert','svg','Hilbert curve']];
 const motion=matchMedia('(prefers-reduced-motion: reduce)');
 const layers=items.map(([id,extension,name])=>{
  const image=new Image();image.className='fp-fractal-layer';image.alt='';image.draggable=false;image.decoding='async';image.dataset.fractal=id;
  const layer={image,id,name,ready:false,failed:false};
  image.onload=async()=>{try{await image.decode();}catch(_){}layer.ready=true;startWhenReady();sync();};
  image.onerror=()=>{layer.failed=true;startWhenReady();sync();};
  image.src='fractals/'+id+'.'+extension+'?v=20261006-1';host.appendChild(image);return layer;
 });
 let current=-1,timer=0,inView=false;
 function startWhenReady(){
  if(current>=0)return;
  // Preserve the order even when assets arrive out of order; skip failed assets.
  for(let index=0;index<layers.length;index++){
   if(layers[index].ready){show(index);return;}
   if(!layers[index].failed)return;
  }
 }
 function show(index){
  if(current>=0)layers[current].image.classList.remove('is-active');
  current=index;layers[index].image.classList.add('is-active');
  host.dataset.fractal=layers[index].id;
 }
 function canRun(){return inView&&!document.hidden&&!screen.classList.contains('hidden')&&!motion.matches;}
 function advance(){
  if(!canRun()){sync();return;}
  // A failed image never replaces the visible background with a blank frame.
  for(let offset=1;offset<layers.length;offset++){
   const next=(current+offset)%layers.length;
   if(layers[next].ready){show(next);return;}
  }
 }
 function sync(){
  const running=current>=0&&canRun();
  if(running&&!timer)timer=setInterval(advance,10000);
  else if(!running&&timer){clearInterval(timer);timer=0;}
  host.dataset.rotating=String(Boolean(timer));
 }
 // Observe the hero: stop on navigation away and when scrolling to analytics.
 new IntersectionObserver(entries=>{inView=entries[0].isIntersecting;sync();},{root:screen,threshold:0}).observe(host.parentElement);
 new MutationObserver(sync).observe(screen,{attributes:true,attributeFilter:['class']});
 document.addEventListener('visibilitychange',sync);
 motion.addEventListener('change',sync);
})();
