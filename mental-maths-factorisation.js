/* Integer-coefficient generators construct the polynomial from its factors. */
(function(){
'use strict';
const E=window.MentalMathsEngine;
E.factorModes={quadratic:'Quadratic factorisation',polynomial:'Polynomial factorisation'};
function formatPolynomial(coefficients){
 const terms=[];
 coefficients.forEach((c,i)=>{if(!c)return;const power=coefficients.length-i-1,m=Math.abs(c),variable=power?'x'+(power>1?'⁰¹²³⁴⁵'[power]:''):'';
 const term=(power&&m===1?'':m)+variable;
 terms.push((terms.length?(c<0?' − ':' + '):(c<0?'−':''))+term);
 });return terms.join('')||'0';
}
function multiplyLinear([a,b],q){const result=Array(q.length+1).fill(0);q.forEach((c,i)=>{result[i]+=a*c;result[i+1]+=b*c;});return result;}
function generateFactorisation(kind,rng=Math.random,level='medium'){
 if(!Object.hasOwn(E.factorModes,kind))throw Error('Unknown factorisation mode');
 if(level==='mixed')level=rng()<.5?'medium':'hard';
 if(!['medium','hard'].includes(level))throw Error('Factorisation is available in Medium and Hard.');
 const hard=level==='hard',int=(a,b)=>a+Math.floor(rng()*(b-a+1)),signed=max=>int(1,max)*(rng()<.5?-1:1);
 let linear,quotient,polynomial,expected,hint,explanation,steps=[];
 if(kind==='quadratic'){
  linear=[int(1,hard?7:3),signed(hard?12:6)];quotient=[int(1,hard?7:3),signed(hard?12:6)];
  polynomial=multiplyLinear(linear,quotient);expected=[...linear,...quotient];
  const [a,b,c]=polynomial,[p,q]=linear,[r,s]=quotient;
  hint='In (px + q)(rx + s), match pr = '+a+', qs = '+c+' and ps + qr = '+b+'.';
  explanation='The x² coefficient is '+p+' × '+r+' = '+a+'. The constant is ('+q+') × ('+s+') = '+c+'. The two cross terms give '+p+' × ('+s+') + ('+q+') × '+r+' = '+b+', the x coefficient. So the factors are ('+formatPolynomial(linear)+')('+formatPolynomial(quotient)+'). Swapping the factors gives the same product.';
 }else{
  const degree=hard?int(4,5):3;
  linear=[hard?int(1,3):1,signed(hard?5:4)];
  quotient=Array.from({length:degree},(_,i)=>i===0?int(1,hard?4:3):i===degree-1?signed(hard?8:5):int(-(hard?8:5),hard?8:5));
  polynomial=multiplyLinear(linear,quotient);expected=quotient.slice();
  hint='Divide the leading coefficient by '+linear[0]+'. Subtract that multiple of the given factor, then repeat for the next power. Include 0 for any missing term.';
  const [a,b]=linear;
  steps.push('The leading coefficient of the quotient is '+polynomial[0]+' ÷ '+a+' = '+quotient[0]+'.');
  for(let i=1;i<quotient.length;i++)steps.push('The next coefficient is ('+polynomial[i]+' − ('+b+') × ('+quotient[i-1]+')) ÷ '+a+' = '+quotient[i]+'.');
  steps.push('The constant-term check is ('+b+') × ('+quotient.at(-1)+') = '+polynomial.at(-1)+', so the remainder is zero.');
  explanation=steps.join(' ')+' Hence the factorisation is ('+formatPolynomial(linear)+')('+formatPolynomial(quotient)+').';
 }
 return {category:kind,difficulty:level,label:E.factorModes[kind],inputKind:kind,polynomial,linear,expectedCoefficients:expected,prompt:formatPolynomial(polynomial),answerDisplay:'('+formatPolynomial(linear)+')('+formatPolynomial(quotient)+')',hint,explanation,answerHelp:kind==='quadratic'?'Fill all four integer coefficients. Use a negative entry for a minus sign. Equivalent factorisations and swapped factors are accepted.':'Given factor: ('+formatPolynomial(linear)+'). Fill every coefficient of the remaining polynomial, including 0 for a missing term. Use negative entries for minus signs.'};
}
function markFactorisation(raw,q){
 if(!Array.isArray(raw)||raw.length!==q.expectedCoefficients.length)return {valid:false,correct:false,message:'Fill every coefficient box.'};
 const values=raw.map(s=>/^[+\-−]?\d+$/.test(String(s).trim())?Number(String(s).trim().replace('−','-')):NaN);
 if(values.some(n=>!Number.isSafeInteger(n)||Math.abs(n)>1000000))return {valid:false,correct:false,message:'Enter an integer in every box, including 0 for a missing term.'};
 const product=q.inputKind==='quadratic'?multiplyLinear(values.slice(0,2),values.slice(2)):multiplyLinear(q.linear,values);
 return {valid:true,correct:product.every((c,i)=>c===q.polynomial[i]),value:values};
}
Object.assign(E,{formatPolynomial,multiplyLinear,generateFactorisation,markFactorisation});
})();
