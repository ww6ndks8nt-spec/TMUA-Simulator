/* Pure question generation and marking; shared by the UI and regression checks. */
(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;else root.MentalMathsEngine=api;})(typeof globalThis!=='undefined'?globalThis:this,function(){
'use strict';
const categories={multiply:'Multiplication',addsubtract:'Addition & subtraction',squares:'Squares',cubes:'Cubes',powers:'Powers',tricks:'Useful shortcuts',division:'Exact division',percent:'Percentages'};
const mod=(a,m)=>((a%m)+m)%m;
const fmt=n=>String(n).replace('-', '−');
const operand=n=>n<0?'('+fmt(n)+')':fmt(n);
const superscript=n=>String(n).split('').map(x=>'⁰¹²³⁴⁵⁶⁷⁸⁹'[Number(x)]).join('');
function parseAnswer(raw){
 const s=String(raw).trim().replace(/−/g,'-');
 const number=/^[+-]?(?:(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d*)?|\.\d+)$/;
 const pieces=s.split('/').map(x=>x.trim());
 if(pieces.length>2||pieces.some(x=>!number.test(x)))return null;
 const a=Number(pieces[0].replace(/,/g,''));
 const b=pieces.length===2?Number(pieces[1].replace(/,/g,'')):1;
 const result=a/b;return b!==0&&Number.isFinite(result)?result:null;
}
function mark(raw,q){
 const value=parseAnswer(raw);
 if(value===null)return {valid:false,correct:false,message:'Type a number, decimal or simple fraction, such as −24, 12.5 or 1/2.'};
 if(q.modulus&&(!Number.isInteger(value)||value<0||value>=q.modulus))return {valid:false,correct:false,message:'Give the least non-negative remainder: an integer from 0 to '+(q.modulus-1)+'.'};
 return {valid:true,correct:Math.abs(value-q.answer)<1e-9,value};
}
function generate(category,rng=Math.random){
 const int=(a,b)=>a+Math.floor(rng()*(b-a+1));
 const pick=a=>a[int(0,a.length-1)];
 let a,b,answer,prompt,hint,explanation,operands;
 switch(category){
 case 'multiply':
  a=int(-50,50);b=int(-50,50);answer=a*b;prompt=operand(a)+' × '+operand(b);
  {const x=Math.abs(a),y=Math.abs(b),t=10*Math.floor(y/10),u=y%10;
  hint='Multiply the magnitudes by splitting one number into tens and units, then decide the sign.';
  explanation=x+' × '+y+' = '+x+' × '+t+' + '+x+' × '+u+' = '+(x*t)+' + '+(x*u)+' = '+(x*y)+'. '+(a*b===0?'Any number multiplied by zero is zero.':(a<0)!==(b<0)?'One factor is negative, so the result is negative.':'The signs match, so the result is positive.');}
  operands=[a,b];break;
 case 'addsubtract':
  a=int(-2000,2000);b=int(-2000,2000);{const subtract=rng()<.5;answer=subtract?a-b:a+b;prompt=operand(a)+(subtract?' − ':' + ')+operand(b);const term=subtract?-b:b;
  hint='Rewrite subtraction as adding the opposite. Then combine numbers with the same or different signs.';
  explanation='This is '+operand(a)+' + '+operand(term)+'. '+(a===0||term===0?'Adding zero leaves the other number unchanged.':(a<0)===(term<0)?'Add the magnitudes and keep their shared sign.':'Subtract the smaller magnitude from the larger and keep the sign of the larger magnitude.')+' The result is '+fmt(answer)+'.';}
  operands=[a,b];break;
 case 'squares':
  a=pick([...Array.from({length:33},(_,i)=>i),35,40,45,50,60,70,80,90,100]);if(rng()<.15)a=-a;
  answer=a*a;prompt=operand(a)+'²';hint='A square is the number multiplied by itself. For a number ending in 5, multiply the leading part by the next integer and append 25.';
  {const n=Math.abs(a),t=Math.floor(n/10),u=n%10;
  explanation=u===5?n+'²: '+t+' × '+(t+1)+' = '+t*(t+1)+', then append 25 to get '+answer+'.':u===0?n+'² = '+t+'² × 100 = '+answer+'.':n+'² = '+n+' × '+(10*t)+' + '+n+' × '+u+' = '+(n*10*t)+' + '+(n*u)+' = '+answer+'.';
  if(a<0)explanation+=' Squaring a negative number gives the same result as squaring its magnitude.';}
  operands=[a];break;
 case 'cubes':
  a=int(-10,10);answer=a*a*a;prompt=operand(a)+'³';hint='Square the magnitude, then multiply by the magnitude once more. An odd power keeps the original sign.';
  explanation=operand(a)+'³ = '+(a*a)+' × '+operand(a)+' = '+fmt(answer)+'.';operands=[a];break;
 case 'powers':
  a=pick([2,3,5,10,11]);b=int(0,({2:12,3:6,5:5,10:6,11:5})[a]);answer=a**b;prompt=a+superscript(b);
  hint=b===0?'Every non-zero number to the power 0 is 1.':a===11?'Build up from 11² = 121. To multiply by 11, multiply by 10 and add the original number.':'Use the previous power and multiply by the base once more.';
  explanation=b===0?'For a non-zero base, the zero power is 1.':b===1?'A first power is the number itself.':a===11?'11'+superscript(b)+' = '+(11**(b-1))+' × 11 = '+(11**(b-1)*10)+' + '+11**(b-1)+' = '+answer+'.':a+superscript(b)+' = '+a+superscript(b-1)+' × '+a+' = '+a**(b-1)+' × '+a+' = '+answer+'.';operands=[a,b];break;
 case 'tricks':
  {const kind=int(0,3);
  if(kind===0){a=int(10,99);b=11;answer=a*b;prompt=a+' × 11';hint='Multiply by 10, then add the original number.';explanation=a+' × 11 = '+a+' × (10 + 1) = '+a*10+' + '+a+' = '+answer+'.';}
  if(kind===1){a=int(1,24)*4;b=25;answer=a*b;prompt=a+' × 25';hint='25 is 100 ÷ 4. Divide by 4, then multiply by 100.';explanation=a+' × 25 = ('+a+' ÷ 4) × 100 = '+a/4+' × 100 = '+answer+'.';}
  if(kind===2){a=pick([20,30,40,50,100]);b=int(1,9);answer=(a-b)*(a+b);prompt=(a-b)+' × '+(a+b);hint='These factors are equally spaced around '+a+'. Use (a − b)(a + b) = a² − b².';explanation='('+a+' − '+b+')('+a+' + '+b+') = '+a+'² − '+b+'² = '+a*a+' − '+b*b+' = '+answer+'.';}
  if(kind===3){a=int(1,12)*8;b=125;answer=a*b;prompt=a+' × 125';hint='125 is 1000 ÷ 8. Divide by 8, then multiply by 1000.';explanation=a+' × 125 = ('+a+' ÷ 8) × 1000 = '+a/8+' × 1000 = '+answer+'.';}
  operands=[a,b];}break;
 case 'division':
  b=pick([2,3,4,5,6,7,8,9,10,11,12,25]);answer=int(-50,50);if(rng()<.25)b=-b;a=b*answer;prompt=operand(a)+' ÷ '+operand(b);
  hint='Think of the missing factor: divisor × answer = dividend.';explanation=operand(b)+' × '+operand(answer)+' = '+fmt(a)+', so '+operand(a)+' ÷ '+operand(b)+' = '+fmt(answer)+'.';operands=[a,b];break;
 case 'percent':
  a=pick([1,5,10,12.5,20,25,50,75]);b=int(1,40)*20;answer=a*b/100;prompt=a+'% of '+b;
  hint=({1:'Divide by 100.',5:'Find 10% by dividing by 10, then halve it.',10:'Divide by 10.',12.5:'12.5% is one eighth.',20:'20% is one fifth.',25:'25% is one quarter.',50:'50% is one half.',75:'75% is three quarters.'})[a];
  explanation=a+'% of '+b+' = '+a+' × '+b+' ÷ 100 = '+answer+'. '+hint;operands=[a,b];break;
 default:throw new Error('Unknown category: '+category);
 }
 return {category,label:categories[category],prompt,answer,hint,explanation,operands};
}
const lessons=[
 {id:'remainders',title:'1 · Remainders',text:'Working modulo m means keeping the remainder after division by m. Always give a remainder from 0 to m − 1.',example:'23 = 4 × 5 + 3, so 23 mod 5 = 3.',tip:'Subtract a nearby multiple of the modulus. A multiple itself has remainder 0.'},
 {id:'negative',title:'2 · Negative numbers',text:'The remainder is still non-negative when the original number is negative. Add enough copies of the modulus to reach the range 0 to m − 1.',example:'−7 = (−2) × 5 + 3, so −7 mod 5 = 3.',tip:'For example, −1 is congruent to m − 1 modulo m.'},
 {id:'congruence',title:'3 · Congruence',text:'a ≡ b (mod m) means a and b have the same remainder when divided by m. Equivalently, their difference is a multiple of m.',example:'17 ≡ 5 (mod 6), because 17 − 5 = 12, a multiple of 6.',tip:'In these questions fill the blank with the least non-negative remainder, not just any congruent number.'},
 {id:'operations',title:'4 · Add and subtract',text:'Reduce each number first, then add or subtract the remainders. Reduce the result again if it is outside 0 to m − 1.',example:'(38 + 27) mod 7: 38 ≡ 3 and 27 ≡ 6, so 3 + 6 = 9 ≡ 2 (mod 7).',tip:'After subtraction, add the modulus if your result is negative.'},
 {id:'multiply',title:'5 · Multiply',text:'You can also reduce factors before multiplying. Multiply the small remainders, then reduce again.',example:'(23 × 17) mod 5: use 3 × 2 = 6, whose remainder is 1.',tip:'Addition, subtraction and multiplication work this way. Do not assume you can divide or cancel in the same way.'},
 {id:'cycles',title:'6 · Powers and last digits',text:'For powers, keep multiplying by the base and reducing. Remainders often repeat in a cycle. The last digit is the remainder modulo 10.',example:'Powers of 3 end in 3, 9, 7, 1, then repeat. Since 14 = 3 × 4 + 2, the last digit of 3¹⁴ is the second in the cycle: 9.',tip:'If the exponent is an exact multiple of the cycle length, use the last entry of the cycle, not the first.'}
];
function generateMod(lesson,rng=Math.random){
 if(!lessons.some(l=>l.id===lesson))throw new Error('Unknown modular lesson: '+lesson);
 const int=(a,b)=>a+Math.floor(rng()*(b-a+1)),pick=a=>a[int(0,a.length-1)];
 let m=int(2,12),a,b,prompt,answer,hint,explanation,op;
 if(lesson==='cycles'){
  a=int(2,9);b=int(1,30);m=10;const sequence=[];let r=mod(a,m);
  do{sequence.push(r);r=mod(r*a,m);}while(r!==sequence[0]);
  const position=(b-1)%sequence.length;answer=sequence[position];prompt='Last digit of '+a+superscript(b);
  hint='List the last digits of the first few powers. Look for the repeating cycle.';
  explanation='Starting at '+a+'¹, the last digits repeat: '+sequence.join(', ')+'. The cycle has length '+sequence.length+'. Since '+b+' = '+Math.floor((b-1)/sequence.length)+' × '+sequence.length+' + '+(position+1)+', use entry '+(position+1)+': '+answer+'.';
 }else if(['remainders','negative','congruence'].includes(lesson)){
  a=lesson==='negative'?-int(1,150):int(0,250);answer=mod(a,m);
  prompt=lesson==='congruence'?fmt(a)+' ≡ ? (mod '+m+')':operand(a)+' mod '+m;
  hint='Find a multiple of '+m+' so the leftover is between 0 and '+(m-1)+'.';
  explanation=fmt(a)+' = '+operand(Math.floor(a/m))+' × '+m+' + '+answer+'. The remainder is '+answer+'.';
 }else{
  a=int(0,120);b=int(0,120);op=lesson==='multiply'?'×':pick(['+','−']);const ra=mod(a,m),rb=mod(b,m),v=op==='×'?ra*rb:op==='+'?ra+rb:ra-rb;
  answer=mod(v,m);prompt='('+a+' '+op+' '+b+') mod '+m;hint='Reduce both numbers modulo '+m+' before doing the '+(op==='×'?'multiplication':op==='+'?'addition':'subtraction')+'.';
  explanation=a+' ≡ '+ra+' and '+b+' ≡ '+rb+' (mod '+m+'). Then '+ra+' '+op+' '+rb+' = '+fmt(v)+'. Finally '+fmt(v)+' = '+operand(Math.floor(v/m))+' × '+m+' + '+answer+', so the remainder is '+answer+'.';
 }
 return {category:lesson,label:lessons.find(l=>l.id===lesson)?.title.split(' · ')[1]||'Modular arithmetic',prompt,answer,hint,explanation,modulus:m,operands:[a,b].filter(x=>x!==undefined),operation:op};
}
function shuffle(a,rng=Math.random){a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(rng()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
return {categories,lessons,generate,generateMod,parseAnswer,mark,mod,fmt,shuffle};
});
