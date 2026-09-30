// Practice set A, Paper 2. Source: user-supplied tmua_p2 (1).pdf.
// Editorial difficulty estimates from the 30 September 2026 review.
const PRACTICE_SET_A_P2 = [
  {
    "n": 1,
    "stem": "Let \\[\\phi=\\frac{1+\\sqrt5}{2}.\\] An approximation to the golden spiral is constructed from infinitely many consecutive quarter-circle arcs. The \\(n\\)th arc has radius \\(r_n\\), where \\[r_0=1\\quad\\text{and}\\quad r_n=\\phi r_{n+1}\\quad\\text{for }n=0,1,2,\\ldots.\\] The arcs are joined end-to-end as shown. The diagram is not drawn to scale.<p><img class=\"qfig\" src=\"papers/practice_set_a/q1_spiral.png\" width=\"176\" alt=\"Consecutive shrinking quarter-circle arcs, with radii r0 equals 1, r1 and r2 labelled.\"></p>What is the total length of the spiral?",
    "opts": [
      "\\(\\frac{\\pi}{2\\phi}\\)",
      "\\(\\frac\\pi2\\)",
      "\\(\\frac{\\pi\\phi}{2}\\)",
      "\\(\\frac{\\pi\\phi^2}{2}\\)",
      "The length is infinite."
    ],
    "correct": 3,
    "sol": "<b>Answer D.</b> The recurrence gives \\(r_{n+1}=r_n/\\phi\\), so \\(r_n=\\phi^{-n}\\). Each quarter-circle has length \\(\\pi r_n/2\\). Since \\(0<1/\\phi<1\\), \\[L=\\frac\\pi2\\sum_{n=0}^{\\infty}\\phi^{-n}=\\frac\\pi2\\frac1{1-1/\\phi}.\\] Now \\(\\phi^2=\\phi+1\\), so \\(\\phi-1=1/\\phi\\) and \\(\\phi/(\\phi-1)=\\phi^2\\). Hence \\(L=\\pi\\phi^2/2\\).",
    "topics": [
      "Geometry",
      "Sequences and Series"
    ],
    "estimatedDifficulty": 4.5,
    "difficultyRationale": "Read the recurrence in the correct direction, sum a geometric series and simplify with the golden-ratio identity."
  },
  {
    "n": 2,
    "stem": "Let \\(f:[a,b]\\to\\mathbb R\\), where \\(a<b\\). Given that the statement<blockquote>If a real-valued function \\(f\\) is continuous on \\([a,b]\\) and differentiable on \\((a,b)\\), then there exists some \\(c\\in(a,b)\\) such that \\[f'(c)=\\frac{f(b)-f(a)}{b-a}\\]</blockquote>is true, which of the following statements must be true?",
    "opts": [
      "If there is no \\(c\\in(a,b)\\) satisfying the displayed equation, then \\(f\\) is not continuous on \\([a,b]\\) or \\(f\\) is not differentiable on \\((a,b)\\).",
      "If there is no \\(c\\in(a,b)\\) satisfying the displayed equation, then \\(f\\) is not continuous on \\([a,b]\\) and \\(f\\) is not differentiable on \\((a,b)\\).",
      "If \\(f\\) is not continuous on \\([a,b]\\) or is not differentiable on \\((a,b)\\), then there is no \\(c\\in(a,b)\\) satisfying the displayed equation.",
      "If there exists some \\(c\\in(a,b)\\) satisfying the displayed equation, then \\(f\\) is continuous on \\([a,b]\\) and differentiable on \\((a,b)\\).",
      "\\(f\\) is continuous on \\([a,b]\\) and differentiable on \\((a,b)\\), but there is no \\(c\\in(a,b)\\) satisfying the displayed equation."
    ],
    "correct": 0,
    "sol": "<b>Answer A.</b> Write the given implication as \\((C\\land D)\\Rightarrow E\\), where \\(C,D\\) are the two hypotheses and \\(E\\) is the existence conclusion. Its contrapositive is \\(\\neg E\\Rightarrow\\neg(C\\land D)\\). By De Morgan's law, \\(\\neg(C\\land D)\\) means \\(\\neg C\\lor\\neg D\\), exactly A. Failure of at least one hypothesis does not require failure of both; neither the converse nor the inverse follows from the theorem.",
    "topics": [
      "Logic",
      "Differentiation"
    ],
    "estimatedDifficulty": 4,
    "difficultyRationale": "Direct contraposition, including negation of a conjunction; the theorem is supplied."
  },
  {
    "n": 3,
    "stem": "Let \\(x,y\\) be real numbers. Exactly one of the following statements is true. Which one?<ol type=\"I\" class=\"roman\"><li>\\(x^2+y^2\\ge1\\)</li><li>\\(x^2+y^2<1\\)</li><li>\\(\\left(x^2-\\frac12\\right)\\left(y^2-\\frac12\\right)>0\\) and \\(|x|\\le\\frac{\\sqrt2}{2}\\)</li><li>\\((x,y)=(1,1)\\)</li><li>\\(|x|+|y|\\le2\\)</li></ol>",
    "opts": [
      "I",
      "II",
      "III",
      "IV",
      "V"
    ],
    "correct": 0,
    "sol": "<b>Answer A.</b> I and II are exact negations, so exactly one of them holds for every real pair. Since only one of all five statements is true, V must be false: \\(|x|+|y|>2\\). From \\((|x|-|y|)^2\\ge0\\), \\[(|x|+|y|)^2\\le2(x^2+y^2).\\] Consequently \\(x^2+y^2>2\\), so I is true. The premise is consistent, for example at \\((x,y)=(3,0)\\). There is no need to solve the inequality in III.",
    "topics": [
      "Logic",
      "General algebra"
    ],
    "estimatedDifficulty": 5.5,
    "difficultyRationale": "Recognise complementary statements and exploit the false fifth statement; the complicated third statement is redundant."
  },
  {
    "n": 4,
    "stem": "A polynomial with real coefficients is given by \\[P(x)=x^4+ax^2+b.\\] Which of the following is a necessary but not sufficient condition for \\(P(x)\\) to have two distinct real roots?<ol type=\"I\" class=\"roman\"><li>\\(b\\le0\\)</li><li>\\(a^2>4b\\)</li><li>\\(a^2\\ge4b\\)</li><li>\\(a\\le0\\)</li></ol>",
    "opts": [
      "None of them",
      "I only",
      "II only",
      "III only",
      "I and II",
      "I and III",
      "II and III",
      "I, II and III",
      "I, II and IV",
      "I, III and IV",
      "I, II, III and IV"
    ],
    "correct": 3,
    "sol": "<b>Answer D.</b> A real root \\(x\\) gives a real solution \\(t=x^2\\) of \\(t^2+at+b=0\\). Thus the discriminant \\(a^2-4b\\) must be nonnegative, making III necessary. It is not sufficient: \\(x^4+3x^2+1>0\\) for every real \\(x\\), yet its coefficients satisfy III. To exclude I and II, take \\(P(x)=(x^2-1)^2\\), with exactly the two distinct real roots \\(\\pm1\\), but \\(b=1>0\\) and \\(a^2=4b\\). To exclude IV, take \\(x^4+x^2-1\\): the quadratic in \\(t=x^2\\) has one positive and one negative root, so there are exactly two real \\(x\\)-roots although \\(a=1>0\\). Only III has the required status.",
    "topics": [
      "Logic",
      "General algebra"
    ],
    "estimatedDifficulty": 6.5,
    "difficultyRationale": "Separate necessary from sufficient conditions and handle repeated roots through counterexamples."
  },
  {
    "n": 5,
    "stem": "Evaluate the integral \\[\\int_{-10}^{10}|2x-\\lfloor x\\rfloor|\\,dx,\\] where \\(\\lfloor x\\rfloor\\) is the greatest integer less than or equal to \\(x\\).",
    "opts": [
      "\\(0\\)",
      "\\(10\\)",
      "\\(45.5\\)",
      "\\(50\\)",
      "\\(55\\)",
      "\\(95.5\\)",
      "\\(100\\)",
      "\\(100.5\\)"
    ],
    "correct": 7,
    "sol": "<b>Answer H.</b> On \\([k,k+1)\\), \\(\\lfloor x\\rfloor=k\\). For \\(k=0,\\ldots,9\\), the expression \\(2x-k\\) is nonnegative and its integral over that interval is \\(k+1\\). Thus the integral from \\(0\\) to \\(10\\) is \\(1+\\cdots+10=55\\). For \\(k=-10,\\ldots,-2\\), \\(2x-k\\le0\\), so \\[\\int_k^{k+1}|2x-k|\\,dx=\\int_k^{k+1}(k-2x)\\,dx=-k-1.\\] These intervals contribute \\(9+8+\\cdots+1=45\\). On \\([-1,0)\\), however, \\(2x-\\lfloor x\\rfloor=2x+1\\) changes sign at \\(-1/2\\). Its absolute-value integral consists of two triangles, each of area \\(1/4\\), hence totals \\(1/2\\). The complete integral is \\(55+45+1/2=100.5\\). Values at individual integer endpoints do not affect the integral.",
    "topics": [
      "Integration",
      "Functions and Graphs"
    ],
    "estimatedDifficulty": 7.5,
    "difficultyRationale": "Negative floor values and an interior sign change defeat naive symmetry; requires careful piecewise integration."
  },
  {
    "n": 6,
    "stem": "Consider the following condition on a set \\(S\\):<blockquote>A positive integer \\(x\\) is an element of \\(S\\) only if for every \\(y\\in S\\) for which at least one of \\(x+y\\) and \\(|x-y|\\) is prime, both \\(|x-y|\\) and \\(x+y\\) are prime.</blockquote>Which of the following sets does not satisfy the condition?",
    "opts": [
      "\\(\\{2,5,9,15,39\\}\\)",
      "\\(\\{2,5,9,15,21\\}\\)",
      "\\(\\{4,7,15,27,33\\}\\)",
      "\\(\\{6,11,17,23,43\\}\\)",
      "\\(\\{6,11,17,23,37\\}\\)",
      "\\(\\{5,8,15,21,39\\}\\)"
    ],
    "correct": 3,
    "sol": "<b>Answer D.</b> The condition fails exactly when a pair has one prime and one non-prime among its sum and absolute difference. In D, choose \\(x=6,y=43\\): \\[|43-6|=37\\text{ is prime},\\qquad43+6=49\\text{ is not prime}.\\] To check uniqueness efficiently, equal-parity pairs in these particular sets have even sums and differences, none equal to \\(2\\); neither is prime. For the mixed-parity pairs, the (difference, sum) pairs are:<br>A: \\((3,7),(7,11),(13,17),(37,41)\\);<br>B: \\((3,7),(7,11),(13,17),(19,23)\\);<br>C: \\((3,11),(11,19),(23,31),(29,37)\\);<br>E: \\((5,17),(11,23),(17,29),(31,43)\\);<br>F: \\((3,13),(7,23),(13,29),(31,47)\\).<br>Every number in these pairs is prime, so all the other options satisfy the condition.",
    "topics": [
      "Logic",
      "Number Theory"
    ],
    "estimatedDifficulty": 6,
    "difficultyRationale": "Decode a nested implication; parity reduces the pair checking, with one composite sum providing the counterexample."
  },
  {
    "n": 7,
    "stem": "Let \\[f(x)=x+\\frac4x,\\qquad -2<x<2,\\quad x\\ne0.\\] A student gives the following argument:<p><b>(I)</b> Differentiating gives \\[f'(x)=1-\\frac4{x^2}.\\]</p><p><b>(II)</b> For every \\(x\\) in the domain, \\(0<x^2<4\\), so \\(f'(x)<0\\).</p><p><b>(III)</b> Consequently, whenever \\(a<b\\) are in the domain, \\(f(a)>f(b)\\).</p><p><b>(IV)</b> Therefore, the equation \\(f(x)=k\\) has at most one solution in the domain for every real number \\(k\\).</p>Which statement correctly assesses the argument?",
    "opts": [
      "Step (I) is incorrect because the derivative of \\(4/x\\) is \\(4/x^2\\).",
      "Step (II) is incorrect because multiplying an inequality by \\(x^2\\) may reverse its direction.",
      "Step (III) is incorrect, and the conclusion in Step (IV) is false.",
      "Step (III) is incorrect, but the conclusion in Step (IV) is true.",
      "Steps (I), (II), (III) are correct, but Step (IV) does not follow from them.",
      "The whole argument is correct."
    ],
    "correct": 3,
    "sol": "<b>Answer D.</b> I and II are correct: \\(x^2>0\\), and \\(4/x^2>1\\). But the domain consists of two separate intervals. For example, \\(-1<1\\), yet \\(f(-1)=-5<5=f(1)\\), contradicting III. On each individual interval \\((-2,0)\\) and \\((0,2)\\), the negative derivative does imply strict decrease. The first branch has only negative values, and the second only positive values. Thus no output occurs twice within a branch or across the branches, so the conclusion in IV is true. The problem is the deduction of III, not the deduction from III to IV.",
    "topics": [
      "Logic",
      "Differentiation",
      "Functions and Graphs"
    ],
    "estimatedDifficulty": 6.5,
    "difficultyRationale": "Distinguish an invalid use of monotonicity across a disconnected domain from a conclusion which remains true."
  },
  {
    "n": 8,
    "stem": "A regular octahedron is inscribed inside a sphere of radius \\(1\\), with all six of its vertices touching the sphere. A sphere is then inscribed in the octahedron tangent to all eight faces of the octahedron. This process is infinitely repeated. What is the sum of the surface areas of all spheres?<p><img class=\"qfig\" src=\"papers/practice_set_a/q8_octahedron.png\" width=\"280\" alt=\"A regular octahedron between its outer circumsphere and inner tangent sphere, shown in three dimensions.\"></p>",
    "opts": [
      "\\(2\\pi\\)",
      "\\(4\\pi\\)",
      "\\(6\\pi\\)",
      "\\(8\\pi\\)",
      "\\((6+2\\sqrt3)\\pi\\)",
      "\\(10\\pi\\)"
    ],
    "correct": 2,
    "sol": "<b>Answer C.</b> Put the centre at the origin and the six vertices at \\((\\pm R,0,0),(0,\\pm R,0),(0,0,\\pm R)\\), where \\(R\\) is the outer sphere radius. Consider the face with vertices \\((R,0,0),(0,R,0),(0,0,R)\\). Its centre is \\((R/3,R/3,R/3)\\), and by symmetry the radius to this point is perpendicular to the face. Hence the inner radius is \\[r=\\sqrt{3(R/3)^2}=\\frac R{\\sqrt3}.\\] Every repetition has the same radius ratio, so the surface-area ratio is \\((1/\\sqrt3)^2=1/3\\). Including the original sphere, the total is \\[4\\pi\\left(1+\\frac13+\\frac1{3^2}+\\cdots\\right)=\\frac{4\\pi}{1-1/3}=6\\pi.\\]",
    "topics": [
      "Geometry",
      "Sequences and Series"
    ],
    "estimatedDifficulty": 7.5,
    "difficultyRationale": "Discover the octahedron inradius-to-circumradius ratio, then sum sphere areas rather than radii."
  },
  {
    "n": 9,
    "stem": "The expansion of \\(\\left(x\\sqrt[4]{17}+y\\sqrt[6]{18}\\right)^k\\) has \\(n\\) terms with rational coefficients.<p>Given that \\(10\\le k\\le20\\) and \\(k\\) is a positive integer, which of the following statements are true for every permitted value of \\(k\\)?</p><ol type=\"I\" class=\"roman\"><li>If \\(k\\) is even, then \\(n=1\\).</li><li>If \\(k\\) is a multiple of \\(4\\), then \\(n=1\\).</li><li>If \\(k\\) is odd, then \\(n=0\\).</li></ol>",
    "opts": [
      "I only",
      "II only",
      "III only",
      "I and II",
      "II and III",
      "I and III",
      "I, II and III",
      "None of the statements are true"
    ],
    "correct": 2,
    "sol": "<b>Answer C.</b> The coefficient of \\(x^{k-j}y^j\\) is \\[\\binom{k}{j}17^{(k-j)/4}18^{j/6}=\\binom{k}{j}17^{(k-j)/4}2^{j/6}3^{j/3}.\\] Distinct prime factors cannot cancel these fractional exponents. The coefficient is rational exactly when \\(4\\mid(k-j)\\) and \\(6\\mid j\\). Both \\(j\\) and \\(k-j\\) must then be even, so \\(k\\) must be even. This proves III. For \\(k=12\\), both \\(j=0\\) and \\(j=12\\) qualify; \\(j=6\\) does not. There are two rational coefficients, although \\(12\\) is both even and a multiple of \\(4\\). The same counterexample disproves I and II.",
    "topics": [
      "Logic",
      "Number Theory",
      "General algebra"
    ],
    "estimatedDifficulty": 7,
    "difficultyRationale": "Combine rationality of radical coefficients with divisibility; one permitted exponent disproves two universal claims."
  },
  {
    "n": 10,
    "stem": "Real numbers \\(a\\) and \\(b\\) satisfy the equations \\[a^b=5^{5^{18}}\\qquad\\text{and}\\qquad(\\log_5a)^{\\log_5b}=5^{17}.\\] What is the sum of all possible values of \\(a\\) and all possible values of \\(b\\)?",
    "opts": [
      "\\(17\\)",
      "\\(18\\)",
      "\\(34\\)",
      "\\(36\\)",
      "\\(5^{5^{17}}+5^5+5^{-1}+5^{-17}\\)",
      "\\(5+5^5+5^{17}+5^{5^{17}}\\)",
      "\\(10+2\\times5^{17}\\)",
      "\\(2\\times5^5+2\\times5^{17}\\)"
    ],
    "correct": 5,
    "sol": "<b>Answer F.</b> The logarithms require \\(a,b>0\\); since \\(a^b>1\\) and \\(b>0\\), also \\(a>1\\). Thus \\(\\log_5a>0\\), and we may set \\[u=\\log_5(\\log_5a),\\qquad v=\\log_5b.\\] Taking logarithms of the first equation gives \\(b\\log_5a=5^{18}\\); taking logarithms again gives \\(u+v=18\\). Taking logarithms of the second equation gives \\(uv=17\\). Thus \\(u,v\\) are the roots of \\(t^2-18t+17=(t-1)(t-17)\\), in either order. Since \\(a=5^{5^u}\\) and \\(b=5^v\\), the possible pairs are \\[(a,b)=(5^5,5^{17})\\quad\\text{or}\\quad(5^{5^{17}},5).\\] Both satisfy the original equations. Summing the possible values gives option F.",
    "topics": [
      "Exponentials and Logarithms",
      "General algebra"
    ],
    "estimatedDifficulty": 7,
    "difficultyRationale": "Find a nested-logarithm substitution and convert back from the auxiliary variables without confusing the requested quantity."
  },
  {
    "n": 11,
    "stem": "A fair six-sided die is rolled \\(17\\) times. The rolls are independent. Let \\(P_1\\) be the probability that the die lands on each of \\(1,2,3,4\\) and \\(5\\) exactly three times, and let \\(P_2\\) be the probability that it lands on \\(1\\) exactly once, \\(2\\) exactly twice, \\(3\\) exactly three times, \\(4\\) exactly four times, and \\(5\\) exactly five times. What is \\(P_1:P_2\\)?",
    "opts": [
      "\\(40:9\\)",
      "\\(9:40\\)",
      "\\(3:1\\)",
      "\\(1:3\\)",
      "\\(7:2\\)",
      "\\(2:7\\)",
      "\\(16:9\\)",
      "\\(9:16\\)"
    ],
    "correct": 0,
    "sol": "<b>Answer A.</b> Each specified event accounts for \\(15\\) rolls of faces \\(1\\) to \\(5\\), leaving exactly two sixes. Each ordered outcome has probability \\(6^{-17}\\). Counting arrangements with the required repetitions gives \\[P_1=\\frac{17!}{(3!)^5\\,2!}\\,6^{-17},\\qquad P_2=\\frac{17!}{1!\\,2!\\,3!\\,4!\\,5!\\,2!}\\,6^{-17}.\\] The common factors cancel: \\[\\frac{P_1}{P_2}=\\frac{1!2!3!4!5!}{(3!)^5}=\\frac{34560}{7776}=\\frac{40}{9}.\\] Therefore \\(P_1:P_2=40:9\\).",
    "topics": [
      "Probability and Statistics",
      "Combinatorics"
    ],
    "estimatedDifficulty": 6.5,
    "difficultyRationale": "Count outcomes with repeated faces, include the implied two sixes and cancel large common factors."
  },
  {
    "n": 12,
    "stem": "Consider the following statements about functions.<ol type=\"I\" class=\"roman\"><li>If \\(f\\) is strictly increasing and differentiable on \\(\\mathbb R\\), then \\(f^{\\prime}(x)>0\\) for every real \\(x\\).</li><li>If \\(f(x)>g(x)\\) for every real \\(x\\), then \\(f^{\\prime}(x)>g^{\\prime}(x)\\) for every real \\(x\\), provided both functions are differentiable.</li><li>If \\(f\\) is strictly increasing on \\([0,1]\\), \\(f(0)=0\\) and \\(f(1)=2\\), then \\(f(c)=1\\) for some \\(c\\in(0,1)\\).</li></ol>Which of the statements are true?",
    "opts": [
      "I only",
      "II only",
      "III only",
      "I and II",
      "II and III",
      "I and III",
      "I, II and III",
      "None of them"
    ],
    "correct": 7,
    "sol": "<b>Answer H.</b> I is false: \\(f(x)=x^3\\) is strictly increasing on \\(\\mathbb R\\), but \\(f'(0)=0\\). II is false: take \\(f(x)=1\\) and \\(g(x)=0\\). Then \\(f>g\\) everywhere, but both derivatives are zero. III is false without continuity. Define \\[f(x)=\\begin{cases}x,&0\\le x<1,\\\\2,&x=1.\\end{cases}\\] This is strictly increasing on \\([0,1]\\), has the required endpoint values and never takes the value \\(1\\). Hence none of the three claims is true in general.",
    "topics": [
      "Logic",
      "Differentiation",
      "Functions and Graphs"
    ],
    "estimatedDifficulty": 5.5,
    "difficultyRationale": "Construct counterexamples to strict derivative, gradient-ordering and intermediate-value claims."
  },
  {
    "n": 13,
    "stem": "Consider the statement<blockquote>If a sequence satisfies \\(a_{n+1}<a_n\\) and \\(a_n>0\\) for every positive integer \\(n\\), then \\(a_n\\to0\\).</blockquote>Which of the following provides a counterexample to the statement?",
    "opts": [
      "\\(a_{n+1}-a_n=\\frac1{n(n+1)},\\quad a_1=-1\\)",
      "\\(a_{n+1}-a_n=\\frac1{n(n+1)},\\quad a_1=0\\)",
      "\\(a_{n+1}-a_n=-\\frac1{n(n+1)},\\quad a_1=1\\)",
      "\\(a_{n+1}-a_n=-\\frac1{n(n+1)},\\quad a_1=2\\)",
      "\\(a_{n+1}-a_n=-\\frac1{n(n+1)},\\quad a_1=-1\\)",
      "There are no counterexamples and the statement is true."
    ],
    "correct": 3,
    "sol": "<b>Answer D.</b> Use \\(1/[n(n+1)]=1/n-1/(n+1)\\). Summing the differences from \\(1\\) to \\(n-1\\), a negative-difference option has \\[a_n=a_1-\\left(1-\\frac1n\\right).\\] Thus C gives \\(a_n=1/n\\), D gives \\(a_n=1+1/n\\), and E gives \\(a_n=-2+1/n\\). D is positive and strictly decreasing but tends to \\(1\\), so it contradicts the conclusion while satisfying every hypothesis. C tends to zero and is not a counterexample; E is negative. A and B are increasing (their differences are positive), so they cannot be counterexamples either.",
    "topics": [
      "Logic",
      "Sequences and Series"
    ],
    "estimatedDifficulty": 5,
    "difficultyRationale": "A counterexample must meet both hypotheses; telescoping distinguishes the two plausible positive decreasing options."
  },
  {
    "n": 14,
    "stem": "Consider the equation \\[\\lfloor x-y\\rfloor=\\lfloor x^2+y^2\\rfloor.\\] Given that \\(x^2+y^2\\le1\\), what is the area of the set of points \\((x,y)\\) satisfying both conditions?",
    "opts": [
      "\\(\\frac\\pi4+\\frac12\\)",
      "\\(\\frac\\pi4\\)",
      "\\(1\\)",
      "\\(\\frac\\pi2+\\frac12\\)",
      "\\(\\frac\\pi2\\)",
      "\\(\\frac\\pi8+1\\)",
      "\\(\\frac\\pi8+\\frac14\\)"
    ],
    "correct": 0,
    "sol": "<b>Answer A.</b> In the interior of the unit circle, \\(0\\le x^2+y^2<1\\), so the common floor value must be zero. Therefore the interior solution set satisfies \\[0\\le x-y<1.\\] The line \\(x-y=0\\) bisects the disc, giving a half-disc of area \\(\\pi/2\\) on the side \\(x-y\\ge0\\). Remove the circular segment where \\(x-y\\ge1\\). The line \\(x-y=1\\) meets the unit circle at \\((1,0)\\) and \\((0,-1)\\); the segment is a quarter-disc minus a right triangle of area \\(1/2\\). Hence \\[A=\\frac\\pi2-\\left(\\frac\\pi4-\\frac12\\right)=\\frac\\pi4+\\frac12.\\] On the circumference the radial floor is \\(1\\), not \\(0\\), but any boundary differences have zero area.",
    "topics": [
      "Geometry",
      "Logic"
    ],
    "estimatedDifficulty": 6.5,
    "difficultyRationale": "Reduce a floor equation to a strip in a disc and subtract the correct circular segment, with boundary values handled separately."
  },
  {
    "n": 15,
    "stem": "Five mathematicians, Archimedes, Bernoulli, Cantor, Descartes and Euler, make the following statements:<p><b>Archimedes:</b> Bernoulli is telling the truth.</p><p><b>Bernoulli:</b> If Cantor is telling the truth, then Descartes is also telling the truth.</p><p><b>Cantor:</b> If Euler is lying, then Descartes is also lying.</p><p><b>Descartes:</b> If Archimedes is lying, then Euler is telling the truth.</p><p><b>Euler:</b> Cantor is lying.</p>Given that each mathematician either always tells the truth or always lies, which of the following is necessarily true?",
    "opts": [
      "Archimedes is telling the truth.",
      "Bernoulli is telling the truth.",
      "Exactly one of Cantor and Descartes is telling the truth.",
      "Descartes is telling the truth.",
      "Euler is telling the truth.",
      "If Cantor is telling the truth, then so is Descartes."
    ],
    "correct": 2,
    "sol": "<b>Answer C.</b> Suppose Cantor is lying. Euler's statement would then be true, making Euler truthful. But Cantor's conditional has the antecedent “Euler is lying”, which would be false, so the conditional would be true: a contradiction. Thus Cantor is truthful and Euler is lying. Cantor's true conditional now forces Descartes to be lying. Bernoulli's conditional has a true antecedent (Cantor truthful) and false conclusion (Descartes truthful), so Bernoulli is lying. Archimedes is therefore lying too. Descartes's conditional indeed has a true antecedent and false conclusion, confirming consistency. The unique assignment is lying, lying, truthful, lying, lying. Only option C is true; F has a true antecedent and false conclusion.",
    "topics": [
      "Logic"
    ],
    "estimatedDifficulty": 6.5,
    "difficultyRationale": "Resolve mutually dependent truth values, using the truth of a conditional with a false antecedent."
  },
  {
    "n": 16,
    "stem": "For a real number \\(k\\), consider the statements:<ol type=\"I\" class=\"roman\"><li>For every \\(x\\in[0,1]\\), there exists \\(y\\in[0,1]\\) such that \\((x-y)^2\\ge k\\).</li><li>There exists \\(y\\in[0,1]\\) such that, for every \\(x\\in[0,1]\\), \\((x-y)^2\\ge k\\).</li></ol>For which values of \\(k\\) is statement I true and statement II false?",
    "opts": [
      "\\(k<0\\)",
      "\\(k=0\\)",
      "\\(0\\le k\\le\\frac14\\)",
      "\\(0<k\\le\\frac14\\)",
      "\\(\\frac14<k\\le1\\)",
      "There are no such values of \\(k\\)."
    ],
    "correct": 3,
    "sol": "<b>Answer D.</b> In I, \\(y\\) may depend on \\(x\\). Choose whichever endpoint, \\(0\\) or \\(1\\), is farther from \\(x\\); the distance is at least \\(1/2\\). Thus I holds for \\(k\\le1/4\\). At \\(x=1/2\\), no permitted \\(y\\) has distance greater than \\(1/2\\), so larger \\(k\\) fail. In II, \\(y\\) must be fixed before considering all \\(x\\). Whatever \\(y\\) is selected, \\(x=y\\) is allowed, giving zero. Consequently II holds exactly when \\(k\\le0\\). Combining I true with II false gives \\(0<k\\le1/4\\).",
    "topics": [
      "Logic",
      "General algebra"
    ],
    "estimatedDifficulty": 6,
    "difficultyRationale": "Distinguish a choice depending on x from a single fixed choice; check both threshold endpoints."
  },
  {
    "n": 17,
    "stem": "A student wishes to prove that, for a positive integer \\(n\\), \\[n^4-1\\] is divisible by \\(240\\). They consider the following possible hypotheses:<ol type=\"I\" class=\"roman\"><li>\\(n\\) is prime and \\(n>5\\).</li><li>\\(n\\) is not divisible by \\(2\\), \\(3\\) or \\(5\\).</li><li>\\(n\\) leaves remainder \\(1\\) or \\(239\\) when divided by \\(240\\).</li></ol>Which statement is correct?",
    "opts": [
      "Only I is sufficient.",
      "Only II is sufficient.",
      "I and II are sufficient, but III is not.",
      "All three are sufficient, but only II is necessary.",
      "All three are sufficient, but none is necessary.",
      "All three are necessary and sufficient."
    ],
    "correct": 3,
    "sol": "<b>Answer D.</b> First prove II sufficient. For odd \\(n=2r+1\\), \\(n^2=4r(r+1)+1=8s+1\\) for some integer \\(s\\), because \\(r(r+1)\\) is even. Squaring gives \\(n^4=16(4s^2+s)+1\\), so \\(16\\mid(n^4-1)\\). If \\(3\\nmid n\\), its remainder is \\(1\\) or \\(-1\\), giving \\(3\\mid(n^4-1)\\). If \\(5\\nmid n\\), its remainder is \\(\\pm1\\) or \\(\\pm2\\), whose fourth powers all leave remainder \\(1\\) on division by \\(5\\). Thus \\(5\\mid(n^4-1)\\). Since \\(16,3,5\\) are pairwise coprime, their product \\(240\\) divides \\(n^4-1\\). II is also necessary: if one of \\(2,3,5\\) divided \\(n\\), then \\(n^4-1\\) would leave remainder \\(-1\\) modulo that prime. Both I and III imply II, so they are sufficient. Neither is necessary: \\(n=49\\) satisfies II and hence the conclusion, but is composite and leaves remainder \\(49\\) modulo \\(240\\).",
    "topics": [
      "Logic",
      "Number Theory"
    ],
    "estimatedDifficulty": 7,
    "difficultyRationale": "Prove an exact divisibility criterion using coprime factors, then distinguish it from two stronger sufficient hypotheses."
  },
  {
    "n": 18,
    "stem": "A sequence is defined by \\[u_1=a,\\qquad u_{n+1}=u_n^2-2,\\] where \\(a\\) is real. A student claims:<blockquote>If \\(a>2\\), then the sequence is strictly increasing, so it is unbounded.</blockquote>Although the conclusion is correct, the reason given is insufficient.<p>Which condition on \\(a\\) is <b>necessary and sufficient</b> for the sequence to be bounded, meaning that there exists \\(M>0\\) such that \\(|u_n|\\le M\\) for every positive integer \\(n\\)?</p>",
    "opts": [
      "\\(a\\le2\\)",
      "\\(-2<a<2\\)",
      "\\(-2\\le a\\le2\\)",
      "\\(-1\\le a\\le2\\)",
      "\\(a\\in\\{-2,-1,2\\}\\)"
    ],
    "correct": 2,
    "sol": "<b>Answer C.</b> If \\(-2\\le u_n\\le2\\), then \\(0\\le u_n^2\\le4\\), hence \\(-2\\le u_{n+1}\\le2\\). By induction, every \\(a\\in[-2,2]\\) produces a bounded sequence. If \\(a>2\\), every term stays above \\(2\\), and \\[u_{n+1}-2=(u_n-2)(u_n+2)\\ge4(u_n-2).\\] Repeatedly applying this inequality gives \\(u_n-2\\ge4^{n-1}(a-2)\\to\\infty\\), proving unboundedness. If \\(a<-2\\), then \\(u_2=a^2-2>2\\), reducing to the preceding case. Thus the exact criterion is \\(-2\\le a\\le2\\). Strict increase alone would not establish unboundedness; for example, \\(2-1/n\\) increases but is bounded.<p><b>Multiple-choice shortcut:</b> \\(a=-2\\) gives \\(-2,2,2,\\ldots\\), eliminating B, D and E. Taking \\(a=-3\\) gives \\(u_2=7>2\\), eliminating A using the supplied true conclusion. C remains.</p>",
    "topics": [
      "Logic",
      "Sequences and Series"
    ],
    "estimatedDifficulty": 5.5,
    "difficultyRationale": "The full invariant-interval proof is substantial, but endpoint and escape examples make the supplied options much easier to eliminate."
  },
  {
    "n": 19,
    "stem": "For a real number \\(a\\), consider the following statements:<ol type=\"I\" class=\"roman\"><li>For every real number \\(x\\), there exists a real number \\(y\\in[1,2]\\) such that \\[x^2-2xy+ay^2\\ge0.\\]</li><li>There exists a real number \\(y\\in[1,2]\\) such that, for every real number \\(x\\), \\[x^2-2xy+ay^2\\ge0.\\]</li></ol>For which values of \\(a\\) is statement I true and statement II false?",
    "opts": [
      "\\(0<a<1\\)",
      "\\(\\frac34\\le a<1\\)",
      "\\(\\frac89<a<1\\)",
      "\\(\\frac89\\le a<1\\)",
      "\\(\\frac89\\le a\\le1\\)",
      "There are no such values of \\(a\\)."
    ],
    "correct": 3,
    "sol": "<b>Answer D.</b> For II, complete the square: \\[x^2-2xy+ay^2=(x-y)^2+(a-1)y^2.\\] Taking \\(x=y\\) shows \\(a\\ge1\\) is necessary, and the same expression proves it sufficient. Thus II is false exactly when \\(a<1\\).<p>For I, at \\(a=8/9\\), the endpoint choices give</p>\\[y=1:\\quad(x-\\tfrac23)(x-\\tfrac43),\\qquad y=2:\\quad(x-\\tfrac43)(x-\\tfrac83).\\] The first is negative only on \\((2/3,4/3)\\), and the second only on \\((4/3,8/3)\\). These open intervals are disjoint, so at least one endpoint works for every \\(x\\), including \\(x=4/3\\), when both expressions are zero. Increasing \\(a\\) adds a nonnegative multiple of \\(y^2\\), so I holds for all \\(a\\ge8/9\\).<p>To prove necessity, take \\(x=4/3\\). Then</p>\\[x^2-2xy+ay^2=\\frac89(y-1)(y-2)+(a-\\tfrac89)y^2.\\] For every \\(y\\in[1,2]\\), the first term is nonpositive. If \\(a<8/9\\), the second is strictly negative, so no choice works. Hence I holds exactly when \\(a\\ge8/9\\). The required range is \\(8/9\\le a<1\\).",
    "topics": [
      "Logic",
      "General algebra"
    ],
    "estimatedDifficulty": 8.5,
    "difficultyRationale": "Requires a non-obvious threshold, coverage by endpoint choices, and a universal counterexample below the threshold."
  },
  {
    "n": 20,
    "stem": "Let \\[P(x)=x^5+ax^3+bx+c,\\] where \\(a,b,c\\) are real constants. Consider the statement:<blockquote>For all real numbers \\(u,v\\), if \\(P(u)P(v)\\le0\\), then \\(uv\\le0\\).</blockquote>Which condition is <b>necessary and sufficient</b> for this statement to be true?",
    "opts": [
      "\\(c=0\\) and \\(b\\ge0\\).",
      "\\(c=0\\), \\(a\\ge0\\) and \\(b\\ge0\\).",
      "\\(c=0\\) and \\(b>\\dfrac{a^2}{4}\\).",
      "\\(c=0\\), and either \\(a\\ge0\\) and \\(b\\ge0\\), or \\(a<0\\) and \\(b\\ge\\dfrac{a^2}{4}\\).",
      "\\(c=0\\), and either \\(a\\ge0\\) and \\(b\\ge0\\), or \\(a<0\\) and \\(b>\\dfrac{a^2}{4}\\).",
      "\\(c=0\\), and either \\(a>0\\) and \\(b>0\\), or \\(a\\le0\\) and \\(b>\\dfrac{a^2}{4}\\)."
    ],
    "correct": 4,
    "sol": "<b>Answer E.</b> If \\(r\\) is a real root, choose \\(u=v=r\\). The hypothesis holds because \\(P(r)^2=0\\), forcing \\(r^2\\le0\\), hence \\(r=0\\). An odd-degree real polynomial has at least one real root, since it is continuous and has opposite signs for sufficiently large positive and negative inputs. Thus zero is a root and \\(c=0\\).<p>Factor:</p>\\[P(x)=x(x^4+ax^2+b).\\] There can be no nonzero real root. With \\(t=x^2>0\\), this means \\(q(t)=t^2+at+b\\) has no positive root. Since \\(q(t)\\to\\infty\\), continuity makes this equivalent to \\(q(t)>0\\) for every \\(t>0\\).<p>If \\(a\\ge0\\), this holds exactly when \\(b\\ge0\\): for such \\(b\\), \\(t^2+at>0\\); for \\(b<0\\), continuity gives a positive root. If \\(a<0\\), the minimum occurs at \\(t=-a/2>0\\), and its value is \\(b-a^2/4\\). It must be strictly positive, so \\(b>a^2/4\\).</p>These conditions are sufficient as well: \\(x^4+ax^2+b>0\\) for every nonzero \\(x\\), so \\(P(x)\\) has the same sign as \\(x\\). Hence \\(P(u)P(v)\\le0\\) implies \\(uv\\le0\\). Equality \\(b=a^2/4\\) is forbidden when \\(a<0\\), because it gives nonzero roots \\(x=\\pm\\sqrt{-a/2}\\). When \\(a=b=0\\), however, \\(P(x)=x^5\\) works, explaining why the nonnegative case includes its boundary.",
    "topics": [
      "Logic",
      "General algebra",
      "Functions and Graphs"
    ],
    "estimatedDifficulty": 8,
    "difficultyRationale": "Use equal inputs in a universal implication, then classify strict positivity of a quadratic on t greater than zero, retaining the exceptional boundary."
  }
];
