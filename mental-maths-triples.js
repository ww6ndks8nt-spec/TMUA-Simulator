(function(){
'use strict';
const E=window.MentalMathsEngine;
const families=[[3,4,5],[5,12,13],[8,15,17],[7,24,25],[20,21,29],[12,35,37],[9,40,41]];
const descriptions={easy:'The 3–4–5, 5–12–13 and 8–15–17 triples, with scale factors 1 or 2.',medium:'Five familiar triple families, including 7–24–25 and 20–21–29, scaled by 1–3.',hard:'Seven triple families, including 12–35–37 and 9–40–41, scaled by 2–5.',mixed:'A balanced mix of Easy, Medium and Hard triple questions.'};
function generatePythagorean(kind,rng=Math.random,level='medium'){
 if(level==='mixed')level=E.difficultyLevels[Math.floor(rng()*3)];
 if(!E.difficultyLevels.includes(level)||!['leg','hypotenuse'].includes(kind))throw Error('Unknown triple question settings');
 const int=(a,b)=>a+Math.floor(rng()*(b-a+1)),family=families[int(0,level==='easy'?2:level==='medium'?4:6)].slice(),scale=int(level==='hard'?2:1,level==='easy'?2:level==='medium'?3:5),sides=family.map(x=>x*scale),missing=kind==='hypotenuse'?2:int(0,1);
 const shown=sides.map((x,i)=>i===missing?'?':x),[a,b,c]=sides;
 const calculation=missing===2?a+'² + '+b+'² = '+(a*a)+' + '+(b*b)+' = '+c*c:c+'² − '+sides[1-missing]+'² = '+c*c+' − '+sides[1-missing]**2+' = '+sides[missing]**2;
 return {category:kind,label:kind==='hypotenuse'?'Missing hypotenuse':'Missing leg',difficulty:level,pythagorean:true,family,scale,sides,missing,prompt:shown[0]+'² + '+shown[1]+'² = '+shown[2]+'²',answer:sides[missing],answerDisplay:String(sides[missing]),answerHelp:'Type the missing positive side length, not its square. The side on the right of the equation is the hypotenuse.',hint:kind==='hypotenuse'?'Look for a common triple or a scaled version. Otherwise add the squares of the two legs and take the positive square root.':'Look for a common triple or a scaled version. Otherwise subtract the known leg’s square from the hypotenuse’s square, then take the positive square root.',explanation:'The triple ('+family.join(', ')+')'+(scale===1?' gives these side lengths.':' multiplied by '+scale+' gives ('+sides.join(', ')+').')+' Using Pythagoras: '+calculation+'. Taking the positive square root gives '+sides[missing]+'. Side lengths must be positive.'};
}
Object.assign(E,{pythagoreanFamilies:families,pythagoreanDescriptions:descriptions,generatePythagorean});
})();
