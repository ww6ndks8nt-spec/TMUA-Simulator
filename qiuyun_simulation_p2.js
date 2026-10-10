// Exact question wording and option order from the user-supplied simulation paper.
// No answer key was supplied. Answers and review solutions are independently derived.
const QIUYUN_SIMULATION_P2={
  "id": "qiuyunsimulation202609p2",
  "title": "湫云数竞 Simulation · Paper 2",
  "sub": "Simulation test · 20 questions · 75 minutes",
  "type": 2,
  "group": 7,
  "companion": false,
  "url": "papers/qiuyun-simulation-paper-2.pdf",
  "questions": [
    {
      "n": 1,
      "stem": "<div class=\"official-paper-content\"><p>Two circles intersect at distinct points \\(A\\) and \\(B\\). The tangents to the two circles at \\(A\\) are perpendicular. What is the angle between the tangents to the two circles at \\(B\\)?</p></div>",
      "opts": [
        "\\(30^\\circ\\)",
        "\\(45^\\circ\\)",
        "\\(60^\\circ\\)",
        "\\(90^\\circ\\)",
        "It cannot be determined."
      ],
      "correct": 3,
      "sol": "<p>The line joining the two centres is the perpendicular bisector of the common chord \\(AB\\). Reflection in this line preserves both circles and sends \\(A\\) to \\(B\\), so it also sends their tangents at \\(A\\) to their tangents at \\(B\\).</p><p>Reflection preserves angles. The required angle is therefore \\(90^\\circ\\).</p>",
      "topics": [
        "Geometry"
      ],
      "estimatedDifficulty": 5.0,
      "source": "湫云数竞 · Simulation test · Paper 2",
      "sourcePage": 4,
      "difficultySource": "editorial-estimate",
      "answerSource": "independently-derived"
    },
    {
      "n": 2,
      "stem": "<div class=\"official-paper-content\"><p>Let \\(p\\) be a real number. A sequence \\((a_n)\\) is defined by an arbitrary real first term \\(a_1\\) and</p>\\[a_{n+1}=pa_n+(1-p).\\]<p>Which of the following conditions on \\(p\\) is/are individually sufficient to guarantee that \\((a_n)\\) converges for every choice of \\(a_1\\)?</p><div class=\"paper-proof\"><div class=\"paper-proof-step\"><span class=\"paper-step-label\">I.</span><div>\\(|p|<1\\).</div></div><div class=\"paper-proof-step\"><span class=\"paper-step-label\">II.</span><div>\\(p=1\\).</div></div><div class=\"paper-proof-step\"><span class=\"paper-step-label\">III.</span><div>\\(p=-1\\).</div></div></div></div>",
      "opts": [
        "None of them",
        "I only",
        "II only",
        "III only",
        "I and II only",
        "I and III only",
        "II and III only",
        "I, II and III"
      ],
      "correct": 4,
      "sol": "<p>Subtracting \\(1\\) gives \\(a_{n+1}-1=p(a_n-1)\\), so</p>\\[a_n=1+p^{n-1}(a_1-1).\\]<p>If \\(|p|<1\\), the sequence converges to \\(1\\), whatever \\(a_1\\). If \\(p=1\\), every term is \\(a_1\\), so the sequence is constant and converges.</p><p>When \\(p=-1\\), choosing \\(a_1=0\\) gives \\(0,2,0,2,\\ldots\\), which does not converge. Thus I and II only are sufficient.</p>",
      "topics": [
        "Sequences and Series",
        "Logic"
      ],
      "estimatedDifficulty": 5.5,
      "source": "湫云数竞 · Simulation test · Paper 2",
      "sourcePage": 5,
      "difficultySource": "editorial-estimate",
      "answerSource": "independently-derived"
    },
    {
      "n": 3,
      "stem": "<div class=\"official-paper-content\"><p>Let \\(p(x)\\) be a polynomial. Consider the statement \\(P\\):</p>\\[p(x)=p(-x)\\quad\\text{for every real }x,\\]<p>and the statement \\(Q\\):</p>\\[p^{\\prime}(x)=-p^{\\prime}(-x)\\quad\\text{for every real }x.\\]<p>What type of condition is \\(P\\) for \\(Q\\)?</p></div>",
      "opts": [
        "necessary and sufficient",
        "sufficient but not necessary",
        "necessary but not sufficient",
        "neither necessary nor sufficient"
      ],
      "correct": 0,
      "sol": "<p>Differentiating \\(p(x)=p(-x)\\) gives \\(p^{\\prime}(x)=-p^{\\prime}(-x)\\), so \\(P\\) is sufficient for \\(Q\\).</p><p>Conversely, if \\(Q\\) holds, then</p>\\[\\frac{d}{dx}\\bigl(p(x)-p(-x)\\bigr)=p^{\\prime}(x)+p^{\\prime}(-x)=0.\\]<p>Hence \\(p(x)-p(-x)\\) is constant. Its value at \\(x=0\\) is zero, so \\(P\\) holds. Therefore \\(P\\) is also necessary.</p>",
      "topics": [
        "Differentiation",
        "Logic"
      ],
      "estimatedDifficulty": 5.5,
      "source": "湫云数竞 · Simulation test · Paper 2",
      "sourcePage": 6,
      "difficultySource": "editorial-estimate",
      "answerSource": "independently-derived"
    },
    {
      "n": 4,
      "stem": "<div class=\"official-paper-content\"><p>Starting with a positive real number \\(t\\), repeatedly replace the current number \\(u\\) by \\(\\log_2 u\\) whenever \\(u>1\\). Stop as soon as the current number is at most \\(1\\).</p><p>Which condition is necessary and sufficient for the process to stop after exactly three replacements?</p></div>",
      "opts": [
        "\\(4\\le t<16\\)",
        "\\(4<t\\le16\\)",
        "\\(2<t\\le8\\)",
        "\\(8<t\\le16\\)",
        "\\(16<t\\le65536\\)"
      ],
      "correct": 1,
      "sol": "<p>Just before the third replacement, the number must be greater than \\(1\\), but its base-2 logarithm must be at most \\(1\\). It therefore lies in \\((1,2]\\).</p><p>Working backwards, the number after the first replacement lies in \\((2,4]\\), and the original number lies in \\((4,16]\\).</p><p>At \\(t=4\\), only two replacements are needed; at \\(t=16\\), the chain \\(16\\to4\\to2\\to1\\) takes exactly three.</p>",
      "topics": [
        "Exponentials and Logarithms",
        "Logic"
      ],
      "estimatedDifficulty": 5.0,
      "source": "湫云数竞 · Simulation test · Paper 2",
      "sourcePage": 7,
      "difficultySource": "editorial-estimate",
      "answerSource": "independently-derived"
    },
    {
      "n": 5,
      "stem": "<div class=\"official-paper-content\"><p>The non-zero real numbers \\(a\\) and \\(b\\) satisfy \\(\\frac1a<\\frac1b\\). Which condition is necessary and sufficient for \\(a>b\\)?</p></div>",
      "opts": [
        "\\(a+b>0\\)",
        "\\(ab>0\\)",
        "\\(a^2>b^2\\)",
        "\\(a>0\\)",
        "\\(b<0\\)"
      ],
      "correct": 1,
      "sol": "<p>The given inequality is</p>\\[\\frac{b-a}{ab}<0.\\]<p>The numerator and denominator must have opposite signs. Thus \\(a>b\\), which means \\(b-a<0\\), holds exactly when \\(ab>0\\).</p>",
      "topics": [
        "General algebra",
        "Logic"
      ],
      "estimatedDifficulty": 5.0,
      "source": "湫云数竞 · Simulation test · Paper 2",
      "sourcePage": 8,
      "difficultySource": "editorial-estimate",
      "answerSource": "independently-derived"
    },
    {
      "n": 6,
      "stem": "<div class=\"official-paper-content\"><p>A function \\(f:\\mathbb{R}\\to\\mathbb{R}\\) satisfies \\(f(f(x))=x\\) for every real \\(x\\), and \\(f(1)=3\\). Which of the following functions must take the same value at two distinct real inputs?</p></div>",
      "opts": [
        "\\(f(x)\\)",
        "\\(f(x)-2x\\)",
        "\\(f(x)-x\\)",
        "\\(f(x)+x\\)",
        "\\(f(x)+2x\\)"
      ],
      "correct": 3,
      "sol": "<p>Putting \\(x=1\\) in \\(f(f(x))=x\\) gives \\(f(3)=1\\). Consequently,</p>\\[f(1)+1=4=f(3)+3.\\]<p>So \\(f(x)+x\\) has the same value at the distinct inputs \\(1\\) and \\(3\\).</p><p>To see why none of the other options is forced, take \\(f(x)=4-x\\). It satisfies both assumptions, and each of the other four listed functions is a linear function with non-zero gradient.</p>",
      "topics": [
        "Functions and Graphs",
        "Logic"
      ],
      "estimatedDifficulty": 5.5,
      "source": "湫云数竞 · Simulation test · Paper 2",
      "sourcePage": 9,
      "difficultySource": "editorial-estimate",
      "answerSource": "independently-derived"
    },
    {
      "n": 7,
      "stem": "<div class=\"official-paper-content\"><p>For each real number \\(t\\), let \\(L_t\\) be the line with equation</p>\\[(t-1)x+(t+1)y=2t.\\]<p>For a fixed point \\((a,b)\\), which condition is necessary and sufficient for there to be exactly one real value of \\(t\\) for which \\((a,b)\\) lies on \\(L_t\\)?</p></div>",
      "opts": [
        "\\(a\\ne b\\)",
        "\\(b\\ne1\\)",
        "\\(a+b\\ne2\\)",
        "\\((a,b)\\ne(1,1)\\)",
        "\\(a+b=2\\text{ and }a\\ne b\\)"
      ],
      "correct": 2,
      "sol": "<p>Substitution and collection of the \\(t\\)-terms give</p>\\[t(a+b-2)=a-b.\\]<p>This has exactly one solution for \\(t\\) if and only if \\(a+b-2\\ne0\\). If that coefficient is zero, there are either no solutions or infinitely many, never exactly one.</p>",
      "topics": [
        "General algebra",
        "Geometry",
        "Logic"
      ],
      "estimatedDifficulty": 5.0,
      "source": "湫云数竞 · Simulation test · Paper 2",
      "sourcePage": 10,
      "difficultySource": "editorial-estimate",
      "answerSource": "independently-derived"
    },
    {
      "n": 8,
      "stem": "<div class=\"official-paper-content\"><p>Let \\(x\\) be a real number with \\(\\cos x\\ne0\\).</p><p>Which of the following conditions is equivalent to</p>\\[\\tan x>\\sin x?\\]</div>",
      "opts": [
        "\\(\\sin x>0\\).",
        "\\(\\cos x>0\\).",
        "\\(\\sin x\\cos x>0\\).",
        "\\(\\sin x+\\cos x>0\\).",
        "\\(\\sin x\\cos x<0\\)."
      ],
      "correct": 2,
      "sol": "<p>Write the difference as</p>\\[\\tan x-\\sin x=\\frac{\\sin x(1-\\cos x)}{\\cos x}.\\]<p>If \\(\\cos x=1\\), then \\(\\sin x=0\\), so neither the original strict inequality nor \\(\\sin x\\cos x>0\\) holds.</p><p>Otherwise \\(1-\\cos x>0\\), and the sign of the difference is the sign of \\(\\sin x/\\cos x\\). This is positive exactly when \\(\\sin x\\cos x>0\\).</p>",
      "topics": [
        "Trigonometry",
        "Logic"
      ],
      "estimatedDifficulty": 5.5,
      "source": "湫云数竞 · Simulation test · Paper 2",
      "sourcePage": 11,
      "difficultySource": "editorial-estimate",
      "answerSource": "independently-derived"
    },
    {
      "n": 9,
      "stem": "<div class=\"official-paper-content\"><p>Let \\(a\\), \\(b\\) and \\(c\\) be positive real numbers. Consider the following statements.</p><div class=\"paper-proof\"><div class=\"paper-proof-step\"><span class=\"paper-step-label\">I.</span><div>If \\(a,b,c\\) are consecutive terms of both an arithmetic progression and a geometric progression, then \\(a=b=c\\).</div></div><div class=\"paper-proof-step\"><span class=\"paper-step-label\">II.</span><div>If \\(a,b,c\\) are consecutive terms of an arithmetic progression, then \\(1/a,1/b,1/c\\) are consecutive terms of an arithmetic progression if and only if \\(a=b=c\\).</div></div><div class=\"paper-proof-step\"><span class=\"paper-step-label\">III.</span><div>If \\(a^2,b^2,c^2\\) are consecutive terms of an arithmetic progression, then \\(a,b,c\\) are consecutive terms of an arithmetic progression.</div></div></div><p>Which of these statements must be true?</p></div>",
      "opts": [
        "None of them",
        "I only",
        "II only",
        "III only",
        "I and II only",
        "I and III only",
        "II and III only",
        "I, II and III"
      ],
      "correct": 4,
      "sol": "<p>For I, the two progression conditions are \\(a+c=2b\\) and \\(ac=b^2\\). Thus \\((a-c)^2=(a+c)^2-4ac=0\\), giving \\(a=b=c\\).</p><p>For II, the reciprocal condition gives \\(b(a+c)=2ac\\). Combining this with \\(a+c=2b\\) gives \\(b^2=ac\\), so the same argument proves equality. Equal positive numbers also satisfy the reciprocal condition, so the “if and only if” is valid.</p><p>III is false: take \\(a=1\\), \\(b=\\sqrt5\\), \\(c=3\\). Their squares are \\(1,5,9\\), but \\(1+3\\ne2\\sqrt5\\). Therefore I and II only are true.</p>",
      "topics": [
        "Sequences and Series",
        "Logic"
      ],
      "estimatedDifficulty": 5.0,
      "source": "湫云数竞 · Simulation test · Paper 2",
      "sourcePage": 12,
      "difficultySource": "editorial-estimate",
      "answerSource": "independently-derived"
    },
    {
      "n": 10,
      "stem": "<div class=\"official-paper-content\"><p>Let \\(p(x)\\) be a monic quadratic polynomial. Which of the following conditions is/are individually sufficient to guarantee that both roots of \\(p(x)\\) lie strictly between \\(0\\) and \\(1\\)?</p><div class=\"paper-proof\"><div class=\"paper-proof-step\"><span class=\"paper-step-label\">I.</span><div>\\(p(0)>0\\), \\(p(1)>0\\) and \\(p(1/2)<0\\).</div></div><div class=\"paper-proof-step\"><span class=\"paper-step-label\">II.</span><div>\\(p(0)<0\\) and \\(p(1)<0\\).</div></div><div class=\"paper-proof-step\"><span class=\"paper-step-label\">III.</span><div>\\(p(0)p(1)<0\\).</div></div></div></div>",
      "opts": [
        "None of them",
        "I only",
        "II only",
        "III only",
        "I and II only",
        "I and III only",
        "II and III only",
        "I, II and III"
      ],
      "correct": 1,
      "sol": "<p>I gives a sign change between \\(0\\) and \\(1/2\\), and another between \\(1/2\\) and \\(1\\). Since a quadratic has at most two roots, these are its two roots, both in the required interval.</p><p>II is not sufficient: \\(p(x)=(x+1)(x-2)\\) is negative at both endpoints, but its roots lie outside the interval.</p><p>III is not sufficient either: \\(p(x)=(x-1/2)(x-2)\\) changes sign between \\(0\\) and \\(1\\), yet its second root is \\(2\\). Only I is sufficient.</p>",
      "topics": [
        "Functions and Graphs",
        "Logic"
      ],
      "estimatedDifficulty": 5.0,
      "source": "湫云数竞 · Simulation test · Paper 2",
      "sourcePage": 13,
      "difficultySource": "editorial-estimate",
      "answerSource": "independently-derived"
    },
    {
      "n": 11,
      "stem": "<div class=\"official-paper-content\"><p>A student makes the following claim.</p><p>“If \\(f\\) and \\(g\\) both have a strict local minimum at \\(x=0\\), then \\(f-g\\) has a local maximum or a local minimum at \\(x=0\\).”</p><p>Which of the following pairs of functions is a counterexample to this claim?</p></div>",
      "opts": [
        "\\(f(x)=x^2+x^3,\\quad g(x)=x^2\\)",
        "\\(f(x)=x^2,\\quad g(x)=x^4\\)",
        "\\(f(x)=x^3,\\quad g(x)=x^2\\)",
        "\\(f(x)=x^2,\\quad g(x)=-x^2\\)",
        "\\(f(x)=x^4,\\quad g(x)=x^2\\)"
      ],
      "correct": 0,
      "sol": "<p>In A, \\(g(x)=x^2\\) has a strict minimum at zero. Also \\(f(x)=x^2(1+x)>0\\) for all sufficiently small non-zero \\(x\\), while \\(f(0)=0\\), so \\(f\\) has a strict local minimum there too.</p><p>However, \\(f(x)-g(x)=x^3\\), which changes sign through zero and has neither a local maximum nor a local minimum there. This satisfies the hypothesis and contradicts the conclusion.</p>",
      "topics": [
        "Differentiation",
        "Functions and Graphs",
        "Logic"
      ],
      "estimatedDifficulty": 4.5,
      "source": "湫云数竞 · Simulation test · Paper 2",
      "sourcePage": 14,
      "difficultySource": "editorial-estimate",
      "answerSource": "independently-derived"
    },
    {
      "n": 12,
      "stem": "<div class=\"official-paper-content\"><p>Let \\(a,b\\) be non-zero real numbers and let \\(n\\) be a positive integer.</p><p>The expansion of</p>\\[(a+bx)^n\\]<p>has exactly four negative coefficients.</p><p>Which of the following lists all possible values of \\(n\\)?</p></div>",
      "opts": [
        "\\(\\{3\\}\\)",
        "\\(\\{7,8\\}\\)",
        "\\(\\{3,6,7\\}\\)",
        "\\(\\{3,7,8\\}\\)",
        "\\(\\{6,7,8\\}\\)"
      ],
      "correct": 3,
      "sol": "<p>The coefficient of \\(x^k\\) is \\(\\binom nk a^{n-k}b^k\\), so only the signs of \\(a\\) and \\(b\\) matter.</p><p>If both are positive, there are no negative coefficients. If both are negative, all coefficients have sign \\((-1)^n\\); exactly four are negative when \\(n=3\\).</p><p>If the signs are opposite, the coefficients alternate in sign. For even \\(n\\), both end coefficients are positive and there are \\(n/2\\) negative coefficients, giving \\(n=8\\). For odd \\(n\\), exactly \\((n+1)/2\\) are negative, giving \\(n=7\\).</p><p>The complete set is \\(\\{3,7,8\\}\\).</p>",
      "topics": [
        "General algebra",
        "Logic"
      ],
      "estimatedDifficulty": 6.0,
      "source": "湫云数竞 · Simulation test · Paper 2",
      "sourcePage": 15,
      "difficultySource": "editorial-estimate",
      "answerSource": "independently-derived"
    },
    {
      "n": 13,
      "stem": "<div class=\"official-paper-content\"><p>A function \\(f:\\mathbb{R}\\to\\mathbb{R}\\) and real constants \\(a,b\\) satisfy</p>\\[f(2x)=3f(x)+x,\\qquad f(x+1)=f(x)+ax+b\\]<p>for every real \\(x\\). What is the value of \\(f(1)\\)?</p></div>",
      "opts": [
        "\\(-2\\)",
        "\\(-1\\)",
        "\\(0\\)",
        "\\(1\\)",
        "\\(2\\)"
      ],
      "correct": 1,
      "sol": "<p>The first identity at \\(x=0\\) gives \\(f(0)=0\\). The second identity at \\(x=0\\) therefore gives \\(f(1)=b\\).</p><p>Putting \\(x=-1\\) in the second identity gives \\(f(-1)=a-b\\). Then the first identity at \\(x=-1\\) gives</p>\\[f(-2)=3a-3b-1.\\]<p>The second identity at \\(x=-2\\) also gives</p>\\[f(-1)=f(-2)-2a+b=a-2b-1.\\]<p>Equating this with \\(a-b\\) gives \\(b=-1\\), so \\(f(1)=-1\\). The conditions are consistent: \\(f(x)=-x\\), \\(a=0\\), \\(b=-1\\) satisfies both identities.</p>",
      "topics": [
        "Functions and Graphs",
        "General algebra"
      ],
      "estimatedDifficulty": 6.5,
      "source": "湫云数竞 · Simulation test · Paper 2",
      "sourcePage": 16,
      "difficultySource": "editorial-estimate",
      "answerSource": "independently-derived"
    },
    {
      "n": 14,
      "stem": "<div class=\"official-paper-content\"><p>Let \\(p(x)\\) be a non-zero real polynomial and define \\(q(x)=p(x)^2\\). Consider the following statements.</p><div class=\"paper-proof\"><div class=\"paper-proof-step\"><span class=\"paper-step-label\">I.</span><div>At every simple real root of \\(p(x)\\), the function \\(q\\) has a strict local minimum.</div></div><div class=\"paper-proof-step\"><span class=\"paper-step-label\">II.</span><div>At every repeated real root of \\(p(x)\\), the function \\(q\\) has a strict local minimum.</div></div><div class=\"paper-proof-step\"><span class=\"paper-step-label\">III.</span><div>Every real number at which \\(q\\) has a local minimum is a root of \\(p(x)\\).</div></div></div><p>Which of these statements must be true?</p></div>",
      "opts": [
        "None of them",
        "I only",
        "II only",
        "III only",
        "I and II only",
        "I and III only",
        "II and III only",
        "I, II and III"
      ],
      "correct": 4,
      "sol": "<p>A non-zero polynomial has finitely many roots, so every real root \\(r\\) is isolated. At that point \\(q(r)=0\\), while \\(q(x)=p(x)^2>0\\) at all sufficiently close points with \\(x\\ne r\\).</p><p>This proves a strict local minimum whether the root is simple or repeated, so I and II are true.</p><p>III is false. For \\(p(x)=x^2+1\\), the square \\(q(x)=(x^2+1)^2\\) has a strict minimum at zero, but \\(p(0)=1\\ne0\\).</p>",
      "topics": [
        "Functions and Graphs",
        "Logic"
      ],
      "estimatedDifficulty": 5.5,
      "source": "湫云数竞 · Simulation test · Paper 2",
      "sourcePage": 17,
      "difficultySource": "editorial-estimate",
      "answerSource": "independently-derived"
    },
    {
      "n": 15,
      "stem": "<div class=\"official-paper-content\"><p>Let \\(f\\) and \\(g\\) be real-valued functions defined for all real numbers. A student claims that there is exactly one real number \\(x\\) for which \\(f(x)=0\\) and \\(g(x)>0\\).</p><p>Which of the following findings is/are individually sufficient to disprove the claim?</p><div class=\"paper-proof\"><div class=\"paper-proof-step\"><span class=\"paper-step-label\">I.</span><div>The equation \\(f(x)=0\\) has no real solutions.</div></div><div class=\"paper-proof-step\"><span class=\"paper-step-label\">II.</span><div>The equation \\(f(x)=0\\) has at least two distinct real solutions.</div></div><div class=\"paper-proof-step\"><span class=\"paper-step-label\">III.</span><div>Whenever \\(f(x)=0\\), it follows that \\(g(x)\\le0\\).</div></div></div></div>",
      "opts": [
        "I only",
        "II only",
        "III only",
        "I and II only",
        "I and III only",
        "II and III only",
        "I, II and III"
      ],
      "correct": 4,
      "sol": "<p>I rules out every possible solution, so it disproves the claim.</p><p>II does not control the sign of \\(g\\) at the roots. For example, \\(f(x)=x(x-1)\\) and \\(g(x)=x\\) have two roots of \\(f\\), but exactly one of them, \\(x=1\\), also satisfies \\(g(x)>0\\). Thus II does not disprove the claim.</p><p>III says that no root of \\(f\\) can satisfy the required strict inequality for \\(g\\), so it also disproves the claim. The answer is I and III only.</p>",
      "topics": [
        "Logic",
        "Functions and Graphs"
      ],
      "estimatedDifficulty": 4.5,
      "source": "湫云数竞 · Simulation test · Paper 2",
      "sourcePage": 18,
      "difficultySource": "editorial-estimate",
      "answerSource": "independently-derived"
    },
    {
      "n": 16,
      "stem": "<div class=\"official-paper-content\"><p>A continuous function \\(f\\) satisfies \\(f(x+2)=f(x)\\) for all real \\(x\\) and \\(\\int_0^2 f(x)\\,dx=0\\). Define \\(F(x)=\\int_0^x f(t)\\,dt\\). Which additional condition is sufficient to guarantee \\(F(x+1)=F(x)\\) for every real \\(x\\)?</p></div>",
      "opts": [
        "\\(f(x+1)=f(x)\\) for every real \\(x\\).",
        "\\(f(x+1)=-f(x)\\) for every real \\(x\\).",
        "\\(f(0)=0\\).",
        "\\(\\displaystyle\\int_0^1 f(x)\\,dx=0\\).",
        "\\(f(2-x)=f(x)\\) for every real \\(x\\)."
      ],
      "correct": 0,
      "sol": "<p>Under A, the two integrals over \\([0,1]\\) and \\([1,2]\\) are equal. Their sum is zero, so each is zero.</p><p>Let \\(H(x)=F(x+1)-F(x)\\). Differentiating gives \\(H^{\\prime}(x)=f(x+1)-f(x)=0\\), so \\(H\\) is constant. Since \\(H(0)=\\int_0^1 f(t)\\,dt=0\\), the required equality holds for every real \\(x\\).</p><p>For B and C, \\(f(x)=\\sin(\\pi x)\\) is a counterexample. For D and E, \\(f(x)=\\cos(\\pi x)\\) is a counterexample. Both satisfy the original assumptions, but their corresponding \\(F\\) is not periodic with period \\(1\\).</p>",
      "topics": [
        "Integration",
        "Functions and Graphs",
        "Logic"
      ],
      "estimatedDifficulty": 6.5,
      "source": "湫云数竞 · Simulation test · Paper 2",
      "sourcePage": 19,
      "difficultySource": "editorial-estimate",
      "answerSource": "independently-derived"
    },
    {
      "n": 17,
      "stem": "<div class=\"official-paper-content\"><p>For each positive integer \\(n\\), let \\(S_n=\\sum_{k=1}^{n}a_k\\). Consider the following statements.</p><div class=\"paper-proof\"><div class=\"paper-proof-step\"><span class=\"paper-step-label\">I.</span><div>If \\(S_n\\) is a polynomial in \\(n\\) of degree \\(2\\), then \\((a_n)\\) is an arithmetic sequence.</div></div><div class=\"paper-proof-step\"><span class=\"paper-step-label\">II.</span><div>If \\((a_n)\\) is a non-constant geometric sequence, then \\((S_n)\\) is a geometric sequence.</div></div><div class=\"paper-proof-step\"><span class=\"paper-step-label\">III.</span><div>If \\(S_{n+1}-2S_n+S_{n-1}\\) is the same non-zero constant for all \\(n\\ge2\\), then \\((a_n)\\) is a non-constant arithmetic sequence.</div></div></div><p>Which of these statements must be true?</p></div>",
      "opts": [
        "None of them",
        "I only",
        "II only",
        "III only",
        "I and II only",
        "I and III only",
        "II and III only",
        "I, II and III"
      ],
      "correct": 0,
      "sol": "<p><b>For the wording as printed, all three statements can fail.</b></p><p>For I, take \\(a_1=2\\) and \\(a_n=2n-1\\) for \\(n\\ge2\\). The sequence is \\(2,3,5,7,\\ldots\\), which is not arithmetic, but</p>\\[S_n=n^2+1\\qquad(n\\ge1).\\]<p>The usual subtraction \\(a_n=S_n-S_{n-1}\\) only applies here for \\(n\\ge2\\). The printed hypothesis does not require the same polynomial formula at \\(n=0\\).</p><p>For II, take \\(a_n=2^{n-1}\\). Then \\(S_n=2^n-1\\), giving \\(1,3,7,15,\\ldots\\), which is not geometric.</p><p>The same example as in I disproves III: \\(S_{n+1}-2S_n+S_{n-1}=2\\) for every \\(n\\ge2\\), but the first difference \\(a_2-a_1=1\\) differs from the later differences, which are \\(2\\). Thus the answer to the unchanged question is A.</p>",
      "topics": [
        "Sequences and Series",
        "Logic"
      ],
      "estimatedDifficulty": 7.0,
      "source": "湫云数竞 · Simulation test · Paper 2",
      "sourcePage": 20,
      "difficultySource": "editorial-estimate",
      "answerSource": "independently-derived"
    },
    {
      "n": 18,
      "stem": "<div class=\"official-paper-content\"><p>Let \\(p,q,r\\) be primes such that</p>\\[K=\\frac{pqr}{p+q+r}\\]<p>is an integer. Consider the following statements.</p><div class=\"paper-proof\"><div class=\"paper-proof-step\"><span class=\"paper-step-label\">I.</span><div>\\(K\\) is prime.</div></div><div class=\"paper-proof-step\"><span class=\"paper-step-label\">II.</span><div>\\(K\\) is equal to at least one of \\(p,q,r\\).</div></div><div class=\"paper-proof-step\"><span class=\"paper-step-label\">III.</span><div>At least one of \\(p,q,r\\) is at most \\(3\\).</div></div></div><p>Which of these statements must be true?</p></div>",
      "opts": [
        "None of them",
        "I only",
        "II only",
        "III only",
        "I and II only",
        "I and III only",
        "II and III only",
        "I, II and III"
      ],
      "correct": 4,
      "sol": "<p>First suppose the three primes are distinct, and write \\(d=p+q+r\\). Since \\(d\\) divides \\(pqr\\), it is a product of a selection of these primes. It is greater than each individual prime, so it cannot be \\(1\\) or just one prime.</p><p>Also \\(pqr>p+q+r\\): after ordering them, \\(p\\ge2\\), \\(q\\ge3\\), \\(r\\ge5\\), so \\(pqr\\ge6r>3r\\ge p+q+r\\). Therefore \\(d\\) must be the product of exactly two of the primes. The quotient \\(K\\) is the remaining prime, proving I and II in this case.</p><p>If exactly two primes are equal, say \\(p=q=s\\ne r\\), then \\(2s+r\\) is coprime to \\(s\\). To divide \\(s^2r\\), it would have to divide \\(r\\), impossible because \\(2s+r>r\\). If all three primes equal \\(s\\), then \\(K=s^2/3\\) is integral only when \\(s=3\\), giving \\(K=3\\). Hence I and II always hold.</p><p>III fails for \\((p,q,r)=(5,7,23)\\): the sum is \\(35\\) and \\(K=23\\), yet all three primes exceed \\(3\\).</p>",
      "topics": [
        "Number Theory",
        "Logic"
      ],
      "estimatedDifficulty": 7.5,
      "source": "湫云数竞 · Simulation test · Paper 2",
      "sourcePage": 21,
      "difficultySource": "editorial-estimate",
      "answerSource": "independently-derived"
    },
    {
      "n": 19,
      "stem": "<div class=\"official-paper-content\"><p>Let \\(r\\) be the positive solution of \\(r^3+r=1\\). Choose \\(t\\) with \\(0<t<r\\). The tangent to \\(y=x^3+x\\) at \\(x=t\\) meets the line \\(y=1\\) at a point with \\(x\\)-coordinate \\(u\\). Which of the following must be true?</p></div>",
      "opts": [
        "\\(0<u<t\\)",
        "\\(t<u<r\\)",
        "\\(u=r\\)",
        "\\(r<u<1\\)",
        "\\(u\\ge1\\)"
      ],
      "correct": 3,
      "sol": "<p>The tangent has gradient \\(3t^2+1\\), so</p>\\[1-(t^3+t)=(3t^2+1)(u-t),\\qquad u=\\frac{1+2t^3}{1+3t^2}.\\]<p>Because \\(0<t<r<1\\), we have \\(2t^3<3t^2\\), so \\(u<1\\).</p><p>Using \\(1=r^3+r\\),</p>\\[u-r=\\frac{r^3-3rt^2+2t^3}{1+3t^2}=\\frac{(r-t)^2(r+2t)}{1+3t^2}>0.\\]<p>Hence \\(r<u<1\\).</p>",
      "topics": [
        "Differentiation",
        "General algebra"
      ],
      "estimatedDifficulty": 6.5,
      "source": "湫云数竞 · Simulation test · Paper 2",
      "sourcePage": 22,
      "difficultySource": "editorial-estimate",
      "answerSource": "independently-derived"
    },
    {
      "n": 20,
      "stem": "<div class=\"official-paper-content\"><p>Let \\(f\\) be a monic quartic polynomial. The trapezium rule gives the same estimate for \\(\\int_0^1 f(x)\\,dx\\) when either one strip or two equal strips are used. Let this common value be \\(T\\), and let \\(I=\\int_0^1 f(x)\\,dx\\). Which expression must equal \\(T-I\\)?</p></div>",
      "opts": [
        "\\(0\\)",
        "\\(-\\frac1{120}\\)",
        "\\(\\frac1{120}\\)",
        "\\(\\frac1{60}\\)",
        "It cannot be determined from the information given."
      ],
      "correct": 2,
      "sol": "<p>Write \\(f(x)=x^4+ax^3+bx^2+cx+d\\). The one-strip estimate is</p>\\[T=\\frac{f(0)+f(1)}2=\\frac12+\\frac a2+\\frac b2+\\frac c2+d.\\]<p>The two-strip estimate is</p>\\[\\frac{f(0)+2f(1/2)+f(1)}4=\\frac9{32}+\\frac{5a}{16}+\\frac{3b}{8}+\\frac c2+d.\\]<p>Equating them gives \\(7+6a+4b=0\\), or \\(b=-7/4-3a/2\\). Meanwhile,</p>\\[I=\\frac15+\\frac a4+\\frac b3+\\frac c2+d.\\]<p>Therefore</p>\\[T-I=\\frac3{10}+\\frac a4+\\frac b6=\\frac3{10}-\\frac7{24}=\\frac1{120}.\\]",
      "topics": [
        "Integration",
        "General algebra"
      ],
      "estimatedDifficulty": 7.0,
      "source": "湫云数竞 · Simulation test · Paper 2",
      "sourcePage": 23,
      "difficultySource": "editorial-estimate",
      "answerSource": "independently-derived"
    }
  ]
};
