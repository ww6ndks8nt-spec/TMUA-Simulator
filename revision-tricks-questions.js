/* Original DuckTMUA questions authored for these lessons, not past-paper extracts. */
window.DuckTrickQuestions = {
  "SSA non congruent triangles counting": {
    "prompt": "A triangle has a given acute angle of \\(30^\\circ\\), opposite side \\(a=2t+1\\), and another given side \\(b=12\\). For which values of \\(t\\) are there exactly two non-congruent triangles?",
    "options": [
      "\\(\\frac52\\le t<\\frac{11}2\\)",
      "\\(\\frac52<t<\\frac{11}2\\)",
      "\\(-\\frac12<t<\\frac{11}2\\)",
      "\\(\\frac52<t\\le\\frac{11}2\\)"
    ],
    "answer": 1,
    "solution": "<p>The perpendicular height is \\(h=12\\sin30^\\circ=6\\). For an acute given angle, exactly two triangles require \\(h<a<b\\), so</p>\\[6<2t+1<12\\quad\\Longrightarrow\\quad\\frac52<t<\\frac{11}2.\\]<p>Both endpoints are excluded. At the lower endpoint, the circle is tangent to the ray and gives one right-angled triangle. At the upper endpoint, one intersection is the starting vertex, so that possibility is degenerate and only one triangle remains.</p>"
  },
  "Quadratics in disguise": {
    "prompt": "How many distinct real solutions does \\((x^2-2x)^2-3(x^2-2x)-4=0\\) have?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answer": 2,
    "solution": "<p>Put \\(u=x^2-2x=(x-1)^2-1\\), so \\(u\\ge-1\\). The equation becomes</p>\\[u^2-3u-4=(u-4)(u+1)=0.\\]<p>For \\(u=4\\), \\((x-1)^2=5\\), giving two roots \\(1\\pm\\sqrt5\\). For \\(u=-1\\), \\((x-1)^2=0\\), giving only \\(x=1\\). All three are distinct. A repeated root of the quadratic in \\(x\\) counts only once.</p>"
  },
  "Reciprocal substitutions": {
    "prompt": "For real \\(x\\ne0\\), how many solutions does \\(x^2+\\frac1{x^2}-4\\left(x+\\frac1x\\right)+5=0\\) have?",
    "options": [
      "0",
      "2",
      "3",
      "4"
    ],
    "answer": 1,
    "solution": "<p>Set \\(u=x+1/x\\). Since \\(x^2+1/x^2=u^2-2\\), the equation is</p>\\[u^2-4u+3=(u-1)(u-3)=0.\\]<p>For real nonzero \\(x\\), \\(u\\le-2\\) or \\(u\\ge2\\), so reject \\(u=1\\). The remaining equation \\(x+1/x=3\\) gives \\(x^2-3x+1=0\\), with the two distinct nonzero real roots \\((3\\pm\\sqrt5)/2\\).</p>"
  },
  "Coefficient sums by substitution": {
    "prompt": "What is the sum of the coefficients of the odd powers of \\(x\\) in \\((2x-1)^6\\)?",
    "options": [
      "364",
      "365",
      "−365",
      "−364"
    ],
    "answer": 3,
    "solution": "<p>Let \\(P(x)=(2x-1)^6\\), and let \\(E\\) and \\(O\\) be the sums of its even-power and odd-power coefficients. Then \\(P(1)=E+O=1\\) and \\(P(-1)=E-O=(-3)^6=729\\). Subtracting gives</p>\\[2O=1-729=-728,\\qquad O=-364.\\]<p>The negative sign is essential: the question asks for the coefficients themselves, not their absolute values.</p>"
  },
  "Remainders with quadratic or higher-degree divisors": {
    "prompt": "What is the remainder when \\(x^4-3x+2\\) is divided by \\((x-2)(x+1)\\)?",
    "options": [
      "\\(6x\\)",
      "\\(2x+8\\)",
      "\\(8x+2\\)",
      "\\(2x+6\\)"
    ],
    "answer": 1,
    "solution": "<p>The divisor has degree two, so write the remainder as \\(ux+v\\). At each root of the divisor, the dividend and remainder have the same value:</p>\\[2u+v=2^4-3(2)+2=12,\\qquad -u+v=(-1)^4-3(-1)+2=6.\\]<p>Subtracting gives \\(3u=6\\), hence \\(u=2\\). Substituting back gives \\(v=8\\), so the remainder is \\(2x+8\\).</p>"
  },
  "Recognise a nested surd as a square": {
    "prompt": "Which expression equals the principal square root \\(\\sqrt{11-6\\sqrt2}\\)?",
    "options": [
      "\\(3-\\sqrt2\\)",
      "\\(\\sqrt2-3\\)",
      "\\(3+\\sqrt2\\)",
      "\\(\\sqrt{11}-3\\sqrt2\\)"
    ],
    "answer": 0,
    "solution": "<p>Write \\(6\\sqrt2=2\\sqrt{18}\\). We need nonnegative numbers with sum 11 and product 18: these are 9 and 2. Thus</p>\\[11-6\\sqrt2=(3-\\sqrt2)^2.\\]<p>Taking the principal square root gives \\(|3-\\sqrt2|\\). Since \\(3>\\sqrt2\\), this is \\(3-\\sqrt2\\), not its negative.</p>"
  },
  "Split into sign cases": {
    "prompt": "Which is the complete solution set of \\(\\frac{x+1}{x-2}\\le2\\)?",
    "options": [
      "\\(2<x\\le5\\)",
      "\\(x\\ge5\\)",
      "\\(x\\le2\\text{ or }x\\ge5\\)",
      "\\(x<2\\text{ or }x\\ge5\\)"
    ],
    "answer": 3,
    "solution": "<p>First exclude \\(x=2\\), where the fraction is undefined. If \\(x>2\\), multiplication preserves the inequality:</p>\\[x+1\\le2x-4\\quad\\Longrightarrow\\quad x\\ge5.\\]<p>If \\(x<2\\), multiplication reverses the inequality, giving \\(x+1\\ge2x-4\\), or \\(x\\le5\\). Every \\(x<2\\) satisfies that condition. Combining the two cases gives \\(x<2\\) or \\(x\\ge5\\); equality at 5 is allowed.</p>"
  },
  "Square roots produce modulus": {
    "prompt": "What is the complete set of real solutions of \\(\\sqrt{(x+2)^2}=2x-1\\)?",
    "options": [
      "\\(\\{-\\frac13,3\\}\\)",
      "\\(\\{-\\frac13\\}\\)",
      "\\(\\{3\\}\\)",
      "\\(\\varnothing\\)"
    ],
    "answer": 2,
    "solution": "<p>The left side is \\(|x+2|\\), and it is nonnegative. Hence \\(2x-1\\ge0\\), so \\(x\\ge1/2\\). On this domain \\(x+2>0\\), giving</p>\\[x+2=2x-1\\quad\\Longrightarrow\\quad x=3.\\]<p>Substitution checks it: both sides are 5. Squaring without preserving the sign restriction also produces \\(-1/3\\), which is invalid because the original right side would be negative.</p>"
  },
  "Modulus as distance": {
    "prompt": "Which set of real numbers satisfies both \\(|x+4|<|x-8|\\) and \\(|x-1|\\le3\\)?",
    "options": [
      "\\(-2<x<2\\)",
      "\\(-2\\le x<2\\)",
      "\\(-2\\le x\\le2\\)",
      "\\(2<x\\le4\\)"
    ],
    "answer": 1,
    "solution": "<p>The first condition asks for points closer to \\(-4\\) than to 8. Their midpoint is 2, so it requires \\(x<2\\); the midpoint itself is excluded because its distances are equal.</p><p>The second condition asks for points at most 3 units from 1, giving \\(-2\\le x\\le4\\). Both conditions must hold, so intersect these sets to obtain \\(-2\\le x<2\\). The left endpoint is included, whereas the right endpoint is not.</p>"
  },
  "Graphs of sums of distances: the median rule": {
    "prompt": "For \\(F(x)=|x+4|+|x+1|+|x-2|+|x-7|\\), which statement describes its minimum?",
    "options": [
      "Minimum 14, only at \\(x=\\frac12\\).",
      "Minimum 11, for every \\(x\\in[-1,2]\\).",
      "Minimum 14, for every \\(x\\in[-4,7]\\).",
      "Minimum 14, for every \\(x\\in[-1,2]\\)."
    ],
    "answer": 3,
    "solution": "<p>The four points are \\(-4,-1,2,7\\). With an even number of equally weighted distances, every point between the two middle points minimises the sum. Here that interval is \\([-1,2]\\).</p><p>To find the value, take \\(x=0\\): \\(F(0)=4+1+2+7=14\\). Equivalently, the outer pair contributes at least 11 and the inner pair at least 3, and both bounds are attained simultaneously exactly on \\([-1,2]\\).</p>"
  },
  "Minimums and lower bounds": {
    "prompt": "For \\(f(x)=x+9/x\\) with domain \\(x>3\\), which statement is true?",
    "options": [
      "The minimum is 6.",
      "The greatest lower bound is 3, but there is no minimum.",
      "The greatest lower bound is 6, but there is no minimum.",
      "The minimum is 12."
    ],
    "answer": 2,
    "solution": "<p>Rewrite the difference from 6:</p>\\[x+\\frac9x-6=\\frac{(x-3)^2}{x}.\\]<p>For \\(x>3\\), this is strictly positive, so every value is greater than 6. As \\(x\\) approaches 3 from above, the expression approaches 6, so no larger number is a lower bound. Equality would require \\(x=3\\), which is excluded. Thus 6 is the greatest lower bound but is not a minimum.</p>"
  },
  "Turn an equation into intersections": {
    "prompt": "How many distinct points of intersection do \\(y=|x-1|\\) and \\(y=x^2-1\\) have?",
    "options": [
      "2",
      "1",
      "3",
      "4"
    ],
    "answer": 0,
    "solution": "<p>For \\(x\\ge1\\), intersections satisfy \\(x-1=x^2-1\\), hence \\(x(x-1)=0\\). Only \\(x=1\\) belongs to this branch.</p><p>For \\(x<1\\), solve \\(1-x=x^2-1\\), giving \\((x+2)(x-1)=0\\). Only \\(x=-2\\) belongs to that branch. The two intersections are therefore \\((1,0)\\) and \\((-2,3)\\). The boundary \\(x=1\\) is a single intersection.</p>"
  },
  "Turn a parameter into a horizontal line": {
    "prompt": "For which real value of \\(k\\) does \\((x^2-4)^2=k\\) have exactly three distinct real solutions?",
    "options": [
      "0",
      "16",
      "4",
      "Every positive value of k."
    ],
    "answer": 1,
    "solution": "<p>There are no roots for \\(k<0\\). For \\(k\\ge0\\), the equation is equivalent to</p>\\[x^2=4+\\sqrt k\\quad\\text{or}\\quad x^2=4-\\sqrt k.\\]<p>The first right side is positive and gives two roots. Exactly one additional root occurs when the second right side is zero, so \\(\\sqrt k=4\\), or \\(k=16\\). The roots are \\(0,\\pm\\sqrt8\\). When \\(k=0\\), the two branches coincide, giving only \\(\\pm2\\).</p>"
  },
  "Use symmetry before solving": {
    "prompt": "The equation \\((x-3)^4+2(x-3)^2=7\\) has two real solutions. What is their sum?",
    "options": [
      "0",
      "3",
      "6",
      "7"
    ],
    "answer": 2,
    "solution": "<p>The expression depends only on even powers of \\(x-3\\), so its graph is symmetric about \\(x=3\\). Solutions therefore come as \\(3-d\\) and \\(3+d\\), whose sum is 6.</p><p>To check that these are two distinct roots, put \\(u=(x-3)^2\\ge0\\). Then \\(u^2+2u-7=0\\), giving \\(u=-1\\pm2\\sqrt2\\). Exactly one value is positive, producing that pair.</p>"
  },
  "Change the interval with the angle": {
    "prompt": "Which is the complete set of solutions of \\(\\cos(3x-60^\\circ)=\\frac12\\) for \\(0^\\circ\\le x<180^\\circ\\)?",
    "options": [
      "\\(\\{40^\\circ,120^\\circ\\}\\)",
      "\\(\\{0^\\circ,40^\\circ,120^\\circ\\}\\)",
      "\\(\\{20^\\circ,100^\\circ,140^\\circ\\}\\)",
      "\\(\\{0^\\circ,40^\\circ,120^\\circ,160^\\circ\\}\\)"
    ],
    "answer": 3,
    "solution": "<p>Set \\(u=3x-60^\\circ\\). The transformed interval is \\(-60^\\circ\\le u<480^\\circ\\), rather than the original interval for \\(x\\).</p><p>The cosine equals \\(1/2\\) at \\(u=\\pm60^\\circ+360^\\circ n\\). Within the transformed interval, the values are \\(-60^\\circ,60^\\circ,300^\\circ,420^\\circ\\). Using \\(x=(u+60^\\circ)/3\\) gives \\(0^\\circ,40^\\circ,120^\\circ,160^\\circ\\). The lower endpoint is included.</p>"
  },
  "An inverse-trig answer is only one branch": {
    "prompt": "Which is the complete set of solutions of \\(\\sin x=-\\frac{\\sqrt3}{2}\\) on \\([-180^\\circ,360^\\circ]\\)?",
    "options": [
      "\\(\\{-120^\\circ,-60^\\circ,240^\\circ,300^\\circ\\}\\)",
      "\\(\\{-60^\\circ,300^\\circ\\}\\)",
      "\\(\\{240^\\circ,300^\\circ\\}\\)",
      "\\(\\{-120^\\circ,-60^\\circ,120^\\circ,240^\\circ\\}\\)"
    ],
    "answer": 0,
    "solution": "<p>The reference angle is \\(60^\\circ\\), and sine is negative in the third and fourth quadrants. One full turn gives \\(240^\\circ\\) and \\(300^\\circ\\). Subtracting \\(360^\\circ\\) gives \\(-120^\\circ\\) and \\(-60^\\circ\\), also in the required interval.</p><p>The general branches are \\(x=-60^\\circ+360^\\circ n\\) and \\(x=240^\\circ+360^\\circ n\\). Filtering both branches gives exactly the four listed values. A principal inverse-sine value alone would miss three of them.</p>"
  },
  "Turn mixed squares into one trig variable": {
    "prompt": "Which angles satisfy \\(2\\sin^2x+3\\cos x=0\\) for \\(0^\\circ\\le x<360^\\circ\\)?",
    "options": [
      "\\(60^\\circ,300^\\circ\\)",
      "\\(120^\\circ\\text{ only}\\)",
      "\\(0^\\circ,120^\\circ,240^\\circ\\)",
      "\\(120^\\circ,240^\\circ\\)"
    ],
    "answer": 3,
    "solution": "<p>Use \\(\\sin^2x=1-\\cos^2x\\), and put \\(c=\\cos x\\). Then</p>\\[2(1-c^2)+3c=0\\quad\\Longrightarrow\\quad2c^2-3c-2=(2c+1)(c-2)=0.\\]<p>The value \\(c=2\\) is impossible for a cosine. The remaining value \\(c=-1/2\\) gives \\(x=120^\\circ\\) and \\(240^\\circ\\) in the required interval.</p>"
  },
  "Rewrite everything in the same base": {
    "prompt": "What is the real solution of \\(9^{x-1}=27^{2-x}\\)?",
    "options": [
      "\\(\\frac45\\)",
      "\\(\\frac85\\)",
      "\\(\\frac52\\)",
      "\\(8\\)"
    ],
    "answer": 1,
    "solution": "<p>Write \\(9=3^2\\) and \\(27=3^3\\). The equation becomes</p>\\[3^{2x-2}=3^{6-3x}.\\]<p>Since the exponential with base 3 is one-to-one, the exponents are equal: \\(2x-2=6-3x\\). Hence \\(5x=8\\) and \\(x=8/5\\). All real exponents are allowed, so there is no further domain restriction.</p>"
  },
  "Check the original logarithm domains": {
    "prompt": "What is the complete set of real solutions of \\(\\log_3(x-2)+\\log_3(x+2)=2\\)?",
    "options": [
      "\\(\\{-\\sqrt{13},\\sqrt{13}\\}\\)",
      "\\(\\{\\sqrt5\\}\\)",
      "\\(\\{\\sqrt{13}\\}\\)",
      "\\(\\{\\frac{13}2\\}\\)"
    ],
    "answer": 2,
    "solution": "<p>The original arguments require both \\(x-2>0\\) and \\(x+2>0\\), so \\(x>2\\). Only on this domain may we combine the logarithms:</p>\\[\\log_3((x-2)(x+2))=2\\quad\\Longrightarrow\\quad x^2-4=3^2=9.\\]<p>Thus \\(x=\\pm\\sqrt{13}\\), but only the positive root satisfies \\(x>2\\). A positive product at the negative root does not make either original logarithm valid.</p>"
  },
  "Calculate a few terms, then explain the pattern": {
    "prompt": "A sequence satisfies \\(u_1=2\\) and \\(u_{n+1}=\\frac{u_n-1}{u_n+1}\\). What is \\(u_{2027}\\)?",
    "options": [
      "\\(-\\frac12\\)",
      "\\(\\frac13\\)",
      "\\(-3\\)",
      "\\(2\\)"
    ],
    "answer": 0,
    "solution": "<p>Calculate the first few values exactly:</p>\\[2,\\quad\\frac13,\\quad-\\frac12,\\quad-3,\\quad2.\\]<p>None is \\(-1\\), so every denominator is nonzero. Returning to 2 restarts the same recurrence, proving a repeating block of four terms. Since \\(2027=4\\cdot506+3\\), the requested term is the third entry of the block, \\(-1/2\\).</p>"
  },
  "Look for telescoping": {
    "prompt": "What is \\(\\displaystyle\\sum_{n=1}^{8}\\frac1{(n+1)(n+2)}\\)?",
    "options": [
      "\\(\\frac45\\)",
      "\\(\\frac49\\)",
      "\\(\\frac25\\)",
      "\\(\\frac12\\)"
    ],
    "answer": 2,
    "solution": "<p>Split each term:</p>\\[\\frac1{(n+1)(n+2)}=\\frac1{n+1}-\\frac1{n+2}.\\]<p>Writing the start and end makes the cancellation clear:</p>\\[\\left(\\frac12-\\frac13\\right)+\\left(\\frac13-\\frac14\\right)+\\cdots+\\left(\\frac19-\\frac1{10}\\right)=\\frac12-\\frac1{10}=\\frac25.\\]<p>The first surviving term is \\(1/2\\), not 1, because the original denominator starts with \\(n+1\\).</p>"
  },
  "Include endpoints when finding extrema": {
    "prompt": "What is the maximum value of \\(f(x)=x^3-6x^2+9x\\) on \\([0,5]\\)?",
    "options": [
      "0",
      "4",
      "9",
      "20"
    ],
    "answer": 3,
    "solution": "<p>Differentiate:</p>\\[f^{\\prime}(x)=3x^2-12x+9=3(x-1)(x-3).\\]<p>The stationary points in the interval are \\(x=1\\) and \\(x=3\\). Compare these with both included endpoints:</p>\\[f(0)=0,\\quad f(1)=4,\\quad f(3)=0,\\quad f(5)=20.\\]<p>The maximum is therefore 20, attained at \\(x=5\\). The local maximum at \\(x=1\\) is not the maximum on the whole interval.</p>"
  },
  "King’s rule: pair reflected integrand values": {
    "prompt": "What is \\(\\displaystyle I=\\int_0^2\\frac{x^3}{x^3+(2-x)^3}\\,dx\\)?",
    "options": [
      "\\(\\frac12\\)",
      "\\(1\\)",
      "\\(2\\)",
      "\\(\\frac43\\)"
    ],
    "answer": 1,
    "solution": "<p>The denominator is positive throughout \\([0,2]\\): both cubes are nonnegative, and they cannot both be zero. Let the integrand be \\(f(x)\\). Reflection about the midpoint sends \\(x\\) to \\(2-x\\), and</p>\\[f(x)+f(2-x)=\\frac{x^3+(2-x)^3}{x^3+(2-x)^3}=1.\\]<p>The reflected integral has the same value, so adding gives \\(2I=\\int_0^2 1\\,dx=2\\). Therefore \\(I=1\\). The interval has length 2, which is why the answer is not \\(1/2\\).</p>"
  }
};
