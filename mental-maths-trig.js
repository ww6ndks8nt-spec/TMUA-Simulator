(function(){
'use strict';
const E=window.MentalMathsEngine;
const angles=Array.from({length:49},(_,i)=>(i-24)*15).filter(a=>a%30===0||a%45===0);
function radians(degrees){
 if(!degrees)return '0';let a=Math.abs(degrees),b=180;while(b)[a,b]=[b,a%b];
 const n=Math.abs(degrees)/a,d=180/a;
 return (degrees<0?'−':'')+(n===1?'':n)+'π'+(d===1?'':'/'+d);
}
// A small arithmetic parser: numbers, signs, fractions, parentheses and square roots.
// No JavaScript evaluation, property access, functions other than sqrt, or powers.
function parseTrigAnswer(raw){
 const s=String(raw).toLowerCase().replace(/−/g,'-').replace(/√/g,'sqrt').replace(/\s+/g,'');
 if(!s||s.length>80)return null;
 const tokens=s.match(/sqrt|\d+(?:\.\d*)?|\.\d+|[()+*/-]/g);
 if(!tokens||tokens.join('')!==s)return null;
 let pos=0,depth=0;
 function atom(){
  if(++depth>16)throw Error();const token=tokens[pos++];let v;
  if(token==='+'||token==='-')v=(token==='-'?-1:1)*atom();
  else if(token==='sqrt'){v=atom();if(v<0)throw Error();v=Math.sqrt(v);}
  else if(token==='('){v=sum();if(tokens[pos++]!==')')throw Error();}
  else if(token!==undefined&&/^(?:\d|\.)/.test(token))v=Number(token);
  else throw Error();depth--;return v;
 }
 function product(){let v=atom();while(tokens[pos]==='*'||tokens[pos]==='/'||tokens[pos]==='sqrt'||tokens[pos]==='('){const op=tokens[pos];if(op==='*'||op==='/')pos++;const b=atom();if(op==='/'&&b===0)throw Error();v=op==='/'?v/b:v*b;}return v;}
 function sum(){let v=product();while(tokens[pos]==='+'||tokens[pos]==='-'){const op=tokens[pos++],b=product();v=op==='+'?v+b:v-b;}return v;}
 try{const value=sum();return pos===tokens.length&&Number.isFinite(value)?value:null;}catch(e){return null;}
}
function trigQuestion(fn,degrees,unit='degrees',level='hard'){
 if(!['sin','cos','tan'].includes(fn)||!angles.includes(degrees))throw Error('Unknown common trig value');
 const normal=((degrees%360)+360)%360,reference=normal<=90?normal:normal<=180?180-normal:normal<=270?normal-180:360-normal;
 const sin={0:'0',30:'1/2',45:'√2/2',60:'√3/2',90:'1'},cos={0:'1',30:'√3/2',45:'√2/2',60:'1/2',90:'0'},tan={0:'0',30:'√3/3',45:'1',60:'√3',90:'undefined'};
 const undefinedValue=fn==='tan'&&normal%180===90;
 let answerDisplay=({sin,cos,tan})[fn][reference];
 const negative=fn==='sin'?normal>180:fn==='cos'?normal>90&&normal<270:(normal>90&&normal<180)||(normal>270&&normal<360);
 if(negative&&answerDisplay!=='0'&&!undefinedValue)answerDisplay='−'+answerDisplay;
 const angle=unit==='radians'?radians(degrees):E.fmt(degrees)+'°';
 const explanation=undefinedValue?'At '+angle+', cos θ = 0 while sin θ is 1 or −1. Since tan θ = sin θ / cos θ, tangent is undefined; it is not infinity.':angle+' is coterminal with '+normal+'°. Its reference angle is '+reference+'° ('+radians(reference)+'). Use the standard value and the quadrant sign: '+fn+'('+angle+') = '+answerDisplay+'.';
 return {category:fn,label:({sin:'Sine',cos:'Cosine',tan:'Tangent'})[fn],difficulty:level,trig:true,fn,degrees,unit,prompt:fn+'('+angle+')',answer:undefinedValue?null:parseTrigAnswer(answerDisplay),undefinedValue,answerDisplay,answerHelp:'Give an exact value: for example 1/2, sqrt(2)/2, −sqrt(3)/2 or 1/sqrt(3). You can also use √. Choose Undefined when the value does not exist.',hint:'Reduce the angle by full turns, identify the reference angle and choose the correct quadrant sign. For tangent, check whether cos θ is zero.',explanation};
}
function generateTrig(fn,rng=Math.random,level='medium',units='mixed'){
 if(level==='mixed')level=E.difficultyLevels[Math.floor(rng()*3)];
 if(!E.difficultyLevels.includes(level))throw Error('Unknown trig difficulty');
 if(!['mixed','degrees','radians'].includes(units))throw Error('Unknown angle unit');
 const pool=angles.filter(a=>level==='easy'?a>=0&&a<=90:level==='medium'?a>=0:true);
 const degrees=pool[Math.floor(rng()*pool.length)],unit=units==='mixed'?(rng()<.5?'degrees':'radians'):units;
 return trigQuestion(fn,degrees,unit,level);
}
function markTrig(raw,q){
 if(String(raw).trim().toLowerCase()==='undefined')return {valid:true,correct:q.undefinedValue};
 const value=parseTrigAnswer(raw);
 if(value===null)return {valid:false,correct:false,message:'Enter a number, fraction or surd such as sqrt(3)/2, or choose Undefined. Infinity is not an answer.'};
 return {valid:true,correct:!q.undefinedValue&&Math.abs(value-q.answer)<1e-10,value};
}
Object.assign(E,{trigAngles:angles,trigRadians:radians,trigQuestion,generateTrig,parseTrigAnswer,markTrig});
})();
