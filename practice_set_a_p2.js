// Practice set A, Paper 2. Source: user-supplied tmua_p2 (1).pdf.
// Difficulty ratings supplied by the user on 1 October 2026.
// Expanded worked solutions approved and revised 1 October 2026.
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
    "sol": "<p><b>Answer D: \\(\\dfrac{\\pi\\phi^2}{2}\\).</b></p>\n<p>We first need the radii of the successive arcs. The recurrence \\(r_n=\\phi r_{n+1}\\) rearranges to \\[r_{n+1}=\\frac{r_n}{\\phi}.\\] Since \\(r_0=1\\), the radii form the geometric sequence \\[1,\\quad\\frac1\\phi,\\quad\\frac1{\\phi^2},\\quad\\ldots.\\]</p>\n<p>A complete circle of radius \\(r\\) has circumference \\(2\\pi r\\), so a quarter-circle arc has length \\[\\frac14(2\\pi r)=\\frac{\\pi r}{2}.\\] Therefore the total length is \\[L=\\frac\\pi2\\left(1+\\frac1\\phi+\\frac1{\\phi^2}+\\cdots\\right).\\]</p>\n<p>Because \\(\\phi&gt;1\\), the common ratio \\(1/\\phi\\) lies between \\(0\\) and \\(1\\), so this infinite geometric series converges: \\[L=\\frac\\pi2\\cdot\\frac1{1-1/\\phi}=\\frac\\pi2\\cdot\\frac\\phi{\\phi-1}.\\]</p>\n<p>To simplify this, use \\(\\phi^2=\\phi+1\\), which gives \\[\\phi(\\phi-1)=1\\quad\\Longrightarrow\\quad\\frac1{\\phi-1}=\\phi.\\] Hence \\[\\boxed{L=\\frac{\\pi\\phi^2}{2}}.\\]</p>",
    "topics": [
      "Geometry",
      "Sequences and Series"
    ],
    "estimatedDifficulty": 6.0,
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
    "sol": "<p><b>Answer A.</b></p>\n<p>Let \\(C\\) mean that \\(f\\) is continuous on \\([a,b]\\), \\(D\\) mean that \\(f\\) is differentiable on \\((a,b)\\), and \\(E\\) mean that there exists \\(c\\in(a,b)\\) satisfying the displayed equation. The given statement has the logical form \\[(C\\text{ and }D)\\implies E.\\]</p>\n<p>An implication and its <b>contrapositive</b> are logically equivalent. Thus the given statement also tells us that \\[\\text{not }E\\implies\\text{not }(C\\text{ and }D).\\] If it is not true that both hypotheses hold, then at least one must fail: \\[\\text{not }(C\\text{ and }D)\\iff(\\text{not }C)\\text{ or }(\\text{not }D).\\]</p>\n<p>Consequently, if no suitable \\(c\\) exists, then \\(f\\) must fail to be continuous on \\([a,b]\\), fail to be differentiable on \\((a,b)\\), or fail both conditions. This is exactly <b>A</b>.</p>\n<p>The other options make stronger or reversed claims:</p>\n<ul><li><b>B</b> incorrectly requires both hypotheses to fail.</li><li><b>C</b> assumes that failing a hypothesis prevents the conclusion. A sufficient condition need not be necessary.</li><li><b>D</b> is the converse, which does not follow from the original implication.</li><li><b>E</b> directly contradicts the supplied theorem.</li></ul>",
    "topics": [
      "Logic",
      "Differentiation"
    ],
    "estimatedDifficulty": 5.0,
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
    "sol": "<p><b>Answer A: statement I.</b></p>\n<p>Statements I and II are \\[x^2+y^2\\ge1\\qquad\\text{and}\\qquad x^2+y^2&lt;1.\\] They are <b>logical negations of each other</b>: for every real pair \\((x,y)\\), exactly one of them is true.</p>\n<p>Since the question says exactly one of all five statements is true, the sole true statement must therefore be I or II. In particular, III, IV and V must all be false.</p>\n<p>Now suppose II were true. Then \\(x^2+y^2&lt;1\\). As both squares are nonnegative, this implies \\[x^2&lt;1,\\qquad y^2&lt;1,\\] so \\[|x|&lt;1,\\qquad |y|&lt;1.\\] Adding gives \\[|x|+|y|&lt;2.\\] But this makes statement V true as well, contradicting the requirement that exactly one statement is true.</p>\n<p>Thus II cannot be the true statement. Therefore \\[\\boxed{\\text{I is true}}.\\]</p>\n<p>The premise is possible: at \\((x,y)=(3,0)\\), I is true and all four other statements are false. There is no need to solve the more complicated inequality in III.</p>",
    "topics": [
      "Logic",
      "General algebra"
    ],
    "estimatedDifficulty": 5.0,
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
    "sol": "<p><b>Answer D: III only.</b></p>\n<p>A condition is <b>necessary</b> if every polynomial with the required root property satisfies it. It is <b>not sufficient</b> if some polynomial satisfies the condition without having the required roots.</p>\n<p>Substitute \\(t=x^2\\). The equation \\(P(x)=0\\) becomes \\[t^2+at+b=0.\\] Every real root \\(x\\) gives a real value \\(t=x^2\\). Hence, if \\(P\\) has two distinct real roots, the quadratic in \\(t\\) must have a real root. Its discriminant must therefore satisfy \\[a^2-4b\\ge0.\\] Thus <b>III is necessary</b>.</p>\n<p>However, this condition does not ensure that a quadratic root is nonnegative. For example, \\[P(x)=x^4+3x^2+1\\] satisfies \\[a^2-4b=9-4=5&gt;0,\\] but \\[x^4+3x^2+1\\ge1\\] for every real \\(x\\). It has no real roots. Thus <b>III is not sufficient</b>.</p>\n<p>We can rule out the other conditions using counterexamples. For I and II, take \\[P(x)=(x^2-1)^2=x^4-2x^2+1.\\] Its two distinct real roots are \\(1\\) and \\(-1\\), despite \\[b=1&gt;0\\quad\\text{and}\\quad a^2=4b.\\] Therefore neither \\(b\\le0\\) nor \\(a^2&gt;4b\\) is necessary. Repeated roots still count as distinct values when their values differ.</p>\n<p>For IV, take \\[P(x)=(x^2-1)(x^2+2)=x^4+x^2-2.\\] Its only real roots are \\(1\\) and \\(-1\\), but \\(a=1&gt;0\\). Hence \\(a\\le0\\) is not necessary.</p>\n<p>Therefore, <b>III alone is necessary but not sufficient</b>.</p>",
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
    "sol": "<p><b>Answer H: \\(100.5\\).</b></p>\n<p><b>Piecewise integration.</b> The floor function is constant between consecutive integers: \\[\\lfloor x\\rfloor=k\\qquad\\text{for }k\\le x&lt;k+1.\\] On such an interval, the integrand becomes \\(|2x-k|\\). We must determine its sign before removing the absolute value.</p>\n<p>For \\(k=0,1,\\ldots,9\\), we have \\(2x-k\\ge0\\) on \\([k,k+1)\\). Therefore \\[\\begin{aligned}\\int_k^{k+1}|2x-k|\\,dx&=\\int_k^{k+1}(2x-k)\\,dx\\\\&=\\left[x^2-kx\\right]_k^{k+1}\\\\&=k+1.\\end{aligned}\\] The contribution from \\(0\\) to \\(10\\) is consequently \\[1+2+\\cdots+10=\\frac{10\\cdot11}{2}=55.\\]</p>\n<p>For \\(k=-10,-9,\\ldots,-2\\), the expression \\(2x-k\\) is nonpositive throughout the interval. Thus \\[\\begin{aligned}\\int_k^{k+1}|2x-k|\\,dx&=\\int_k^{k+1}(k-2x)\\,dx\\\\&=\\left[kx-x^2\\right]_k^{k+1}\\\\&=-k-1.\\end{aligned}\\] These intervals contribute \\[9+8+\\cdots+1=\\frac{9\\cdot10}{2}=45.\\]</p>\n<p>The interval \\([-1,0)\\) needs separate treatment. Here \\[2x-\\lfloor x\\rfloor=2x+1,\\] which changes sign at \\(x=-\\tfrac12\\). Hence \\[\\begin{aligned}\\int_{-1}^{0}|2x+1|\\,dx&=\\int_{-1}^{-1/2}(-2x-1)\\,dx+\\int_{-1/2}^{0}(2x+1)\\,dx\\\\&=\\frac14+\\frac14\\\\&=\\frac12.\\end{aligned}\\]</p>\n<p>Combining the three contributions, \\[\\boxed{55+45+\\frac12=100.5}.\\] Values at individual integer endpoints do not affect the integral. In particular, the integrand should not be assumed even: the floor function behaves differently at negative inputs.</p>\n<p><b>Alternative solution: areas under the graph.</b> Let \\(\\{x\\}=x-\\lfloor x\\rfloor\\) denote the fractional part of \\(x\\), so \\(0\\le\\{x\\}&lt;1\\), including for negative \\(x\\). Then \\[\\lfloor x\\rfloor=x-\\{x\\},\\qquad |2x-\\lfloor x\\rfloor|=|x+\\{x\\}|.\\] On each interval \\([k,k+1)\\), the fractional part rises linearly from \\(0\\) towards \\(1\\). Hence \\(x+\\{x\\}=2x-k\\) traces a line segment of gradient \\(2\\); taking its absolute value reflects any part below the horizontal axis upwards.</p>\n<figure style=\"margin:1.25em 0\"><img class=\"qfig\" src=\"papers/practice_set_a/q5_integrand_areas.svg\" width=\"860\" style=\"display:block;max-width:100%;height:auto;background:#fff;border-radius:8px\" alt=\"Graph of the integrand from minus ten to ten, shaded as trapeziums on each unit interval, with a close-up of the two triangles between minus one and zero. The negative intervals to minus one have total area 45, the positive intervals have area 55, and the two small triangles each have area one quarter.\"><figcaption>Open circles show limiting endpoint heights; filled circles show the actual values. The isolated endpoint values do not change any area.</figcaption></figure>\n<p>On \\([k,k+1)\\) for \\(k=0,\\ldots,9\\), the segment starts at height \\(k\\) and approaches height \\(k+2\\). The region below it is a trapezium of width \\(1\\), with area \\[\\frac12\\bigl(k+(k+2)\\bigr)\\cdot1=k+1.\\] These areas are \\(1,2,\\ldots,10\\), totalling \\(55\\). For \\(k=0\\), the trapezium has one vertical side of length zero, so it is a triangle.</p>\n<p>On \\([k,k+1)\\) for \\(k=-10,\\ldots,-2\\), the reflected segment starts at height \\(-k\\) and approaches height \\(-k-2\\). Each trapezium has area \\[\\frac12\\bigl((-k)+(-k-2)\\bigr)\\cdot1=-k-1.\\] These areas are \\(9,8,\\ldots,1\\), totalling \\(45\\). Again, the final one is a triangle because one endpoint height is zero.</p>\n<p>On \\([-1,0)\\), the graph is the V-shape \\(|2x+1|\\), meeting the horizontal axis at \\(-\\tfrac12\\). The area consists of two triangles, each of base \\(\\tfrac12\\) and height \\(1\\). Each has area \\[\\frac12\\cdot\\frac12\\cdot1=\\frac14.\\] Thus, using only areas, the integral is \\[\\boxed{55+45+\\frac14+\\frac14=100.5}.\\]</p>",
    "topics": [
      "Integration",
      "Functions and Graphs"
    ],
    "estimatedDifficulty": 7.0,
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
    "sol": "<p><b>Answer D: \\(\\{6,11,17,23,43\\}\\).</b></p>\n<p>For any pair \\(x,y\\) from the set, consider \\(|x-y|\\) and \\(x+y\\). The condition says that <b>if at least one is prime, both must be prime</b>. Thus the condition is satisfied when both are prime or both are non-prime, and it fails when exactly one is prime. It is enough to find <b>one pair</b> with exactly one prime result.</p>\n<p>In option D, choose \\(x=6\\) and \\(y=43\\). Then \\[|x-y|=37,\\qquad x+y=49=7^2.\\] The difference is prime but the sum is not. Therefore D fails the condition.</p>\n<p>To check that the other sets satisfy it, parity saves considerable work. For same-parity pairs, both the sum and difference are even. In these particular sets neither is \\(2\\), so neither is prime. Such pairs satisfy the condition because its antecedent is false.</p>\n<p>It remains to check the mixed-parity pairs. Each set has only one even element, giving the following pairs of results, written as (difference, sum):</p>\n<ul><li><b>A:</b> \\((3,7),(7,11),(13,17),(37,41)\\).</li><li><b>B:</b> \\((3,7),(7,11),(13,17),(19,23)\\).</li><li><b>C:</b> \\((3,11),(11,19),(23,31),(29,37)\\).</li><li><b>E:</b> \\((5,17),(11,23),(17,29),(31,43)\\).</li><li><b>F:</b> \\((3,13),(7,23),(13,29),(31,47)\\).</li></ul>\n<p>Every number in these pairs is prime, so these options satisfy the condition. <b>D is the unique exception.</b></p>",
    "topics": [
      "Logic",
      "Number Theory"
    ],
    "estimatedDifficulty": 6.0,
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
    "sol": "<p><b>Answer D: Step III is incorrect, but Step IV is true.</b></p>\n<p>Differentiating correctly gives \\[f'(x)=1-\\frac4{x^2}.\\] For every permitted \\(x\\), \\(0&lt;x^2&lt;4\\), so \\[\\frac4{x^2}&gt;1\\quad\\Longrightarrow\\quad f'(x)&lt;0.\\] Thus Steps I and II are correct.</p>\n<p>The error occurs in Step III. A negative derivative establishes strict decrease on an <b>interval</b>, but the domain here is \\[(-2,0)\\cup(0,2),\\] which consists of two separate intervals. The derivative argument does not compare values lying on opposite sides of the missing point \\(0\\).</p>\n<p>For a direct counterexample to III, take \\(a=-1\\) and \\(b=1\\). Although \\(a&lt;b\\), \\[f(a)=-1-4=-5,\\qquad f(b)=1+4=5,\\] so \\(f(a)&lt;f(b)\\), contrary to III.</p>\n<p>Nevertheless, Step IV's conclusion is true. On each of \\((-2,0)\\) and \\((0,2)\\), the function is strictly decreasing, so any given value can occur at most once on each interval. Moreover, if \\(x&lt;0\\), both \\(x\\) and \\(4/x\\) are negative, so \\(f(x)&lt;0\\); if \\(x&gt;0\\), both are positive, so \\(f(x)&gt;0\\).</p>\n<p>The two branches therefore have no common output values. A value cannot occur once on each branch. Hence \\(f(x)=k\\) has at most one solution in the entire domain, even though the student's justification is invalid.</p>",
    "topics": [
      "Logic",
      "Differentiation",
      "Functions and Graphs"
    ],
    "estimatedDifficulty": 5.5,
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
    "sol": "<p><b>Answer C: \\(6\\pi\\).</b></p>\n<p>The key is to find the ratio between the radii of two successive spheres. Let the outer sphere have radius \\(R\\), and place its centre at the origin. A regular octahedron can be positioned with vertices \\[(\\pm R,0,0),\\qquad(0,\\pm R,0),\\qquad(0,0,\\pm R).\\]</p>\n<p>Consider the triangular face with vertices \\[A=(R,0,0),\\quad B=(0,R,0),\\quad C=(0,0,R).\\] This face is an equilateral triangle. Its centre is its centroid, obtained by averaging the vertex coordinates: \\[G=\\left(\\frac R3,\\frac R3,\\frac R3\\right).\\]</p>\n<p>By symmetry, the line from the octahedron's centre to \\(G\\) is perpendicular to the face. The inscribed sphere touches the face at \\(G\\), so its radius \\(r\\) is the distance from the origin to \\(G\\): \\[r^2=\\left(\\frac R3\\right)^2+\\left(\\frac R3\\right)^2+\\left(\\frac R3\\right)^2=\\frac{R^2}{3}.\\] Therefore \\[\\frac rR=\\frac1{\\sqrt3}.\\]</p>\n<p>A sphere's surface area is \\(4\\pi R^2\\). Consequently, successive surface areas have ratio \\[\\left(\\frac1{\\sqrt3}\\right)^2=\\frac13.\\] The original sphere has radius \\(1\\), so its area is \\(4\\pi\\). Including this sphere, the total area is \\[\\begin{aligned}S&=4\\pi\\left(1+\\frac13+\\frac1{3^2}+\\cdots\\right)\\\\&=\\frac{4\\pi}{1-\\frac13}\\\\&=\\boxed{6\\pi}.\\end{aligned}\\]</p>\n<p>The ratio of the <b>areas</b> is \\(1/3\\), not \\(1/\\sqrt3\\); the latter is the ratio of the radii.</p>",
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
    "sol": "<p><b>Answer C: III only.</b></p>\n<p>The general term in the binomial expansion is \\[\\binom{k}{j}\\left(x17^{1/4}\\right)^{k-j}\\left(y18^{1/6}\\right)^j.\\] Thus the coefficient of \\(x^{k-j}y^j\\) is \\[\\binom{k}{j}17^{(k-j)/4}18^{j/6}.\\] Since \\(18=2\\cdot3^2\\), this becomes \\[\\binom{k}{j}17^{(k-j)/4}2^{j/6}3^{j/3}.\\]</p>\n<p>For this coefficient to be rational, the exponents of the distinct primes must be integers. Multiplying by the integer \\(\\binom{k}{j}\\) cannot remove a fractional part from any prime exponent. We therefore need \\[4\\mid(k-j)\\qquad\\text{and}\\qquad6\\mid j.\\] The second condition also ensures that \\(j/3\\) is an integer.</p>\n<p>These conditions make both \\(k-j\\) and \\(j\\) even. Their sum \\(k\\) must therefore be even. Hence, if \\(k\\) is odd, no rational coefficient is possible: \\(n=0\\). So <b>III is true</b>.</p>\n<p>To test I and II, choose the permitted value \\(k=12\\). The possible multiples of \\(6\\) are \\(j=0,6,12\\):</p>\n<ul><li>\\(j=0\\): \\(k-j=12\\), divisible by \\(4\\).</li><li>\\(j=6\\): \\(k-j=6\\), not divisible by \\(4\\).</li><li>\\(j=12\\): \\(k-j=0\\), divisible by \\(4\\).</li></ul>\n<p>There are therefore <b>two</b> rational coefficients when \\(k=12\\). Since \\(12\\) is both even and a multiple of \\(4\\), this disproves I and II simultaneously. Thus <b>III only</b> is true.</p>",
    "topics": [
      "Logic",
      "Number Theory",
      "General algebra"
    ],
    "estimatedDifficulty": 6.0,
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
    "sol": "<p><b>Answer F: \\(5+5^5+5^{17}+5^{5^{17}}\\).</b></p>\n<p>The logarithms require \\(a&gt;0\\) and \\(b&gt;0\\). Also, \\[a^b=5^{5^{18}}&gt;1.\\] Since \\(b&gt;0\\), this forces \\(a&gt;1\\), so \\(\\log_5a&gt;0\\). We may therefore take its logarithm.</p>\n<p><b>Taking logarithms of the first equation.</b> Apply \\(\\log_5\\) to both sides: \\[\\log_5(a^b)=\\log_5\\!\\left(5^{5^{18}}\\right).\\] Using \\(\\log_5(A^B)=B\\log_5A\\) and \\(\\log_5(5^z)=z\\), we obtain \\[b\\log_5a=5^{18}.\\] Both factors on the left are positive, so we can take logarithms again: \\[\\log_5\\!\\left(b\\log_5a\\right)=\\log_5(5^{18}).\\] The product rule for logarithms now gives \\[\\log_5b+\\log_5(\\log_5a)=18.\\]</p>\n<p><b>Taking logarithms of the second equation.</b> Starting from \\[(\\log_5a)^{\\log_5b}=5^{17},\\] apply \\(\\log_5\\) to both sides: \\[\\log_5\\!\\left((\\log_5a)^{\\log_5b}\\right)=\\log_5(5^{17}).\\] Bringing down the exponent on the left gives \\[(\\log_5b)\\,\\log_5(\\log_5a)=17.\\]</p>\n<p>The same two expressions now occur in both equations, so set \\[u=\\log_5(\\log_5a),\\qquad v=\\log_5b.\\] The equations become \\[u+v=18,\\qquad uv=17.\\] Thus \\(u\\) and \\(v\\) are the roots of \\[t^2-18t+17=0.\\] Factorising gives \\[(t-1)(t-17)=0,\\] so the possible ordered pairs are \\[(u,v)=(1,17)\\quad\\text{or}\\quad(17,1).\\]</p>\n<p>We must now return to the original variables. From \\(u=\\log_5(\\log_5a)\\), we have \\(\\log_5a=5^u\\), and hence \\(a=5^{5^u}\\). Also \\(b=5^v\\). Therefore \\[(a,b)=(5^5,5^{17})\\quad\\text{or}\\quad(5^{5^{17}},5).\\]</p>\n<p>Both pairs satisfy the original equations. For the first pair, \\((5^5)^{5^{17}}=5^{5\\cdot5^{17}}=5^{5^{18}}\\), and \\((\\log_5(5^5))^{\\log_5(5^{17})}=5^{17}\\). For the second, \\((5^{5^{17}})^5=5^{5\\cdot5^{17}}=5^{5^{18}}\\), and \\((\\log_5(5^{5^{17}}))^{\\log_5 5}=(5^{17})^1=5^{17}\\).</p>\n<p>Adding the possible values of \\(a\\) and the possible values of \\(b\\) gives \\[\\boxed{5+5^5+5^{17}+5^{5^{17}}}.\\] The numbers \\(1\\) and \\(17\\) are values of the substituted variables, not the requested values of \\(a\\) and \\(b\\).</p>",
    "topics": [
      "Exponentials and Logarithms",
      "General algebra"
    ],
    "estimatedDifficulty": 6.0,
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
    "sol": "<p><b>Answer A: \\(40:9\\).</b></p>\n<p>For the first event, each of the faces \\(1,2,3,4,5\\) occurs three times. This accounts for \\(5\\cdot3=15\\) of the \\(17\\) rolls, so face \\(6\\) must occur exactly twice.</p>\n<p>Every particular ordered sequence of \\(17\\) rolls has probability \\((1/6)^{17}\\). The number of sequences with these repetitions is \\[\\frac{17!}{3!\\,3!\\,3!\\,3!\\,3!\\,2!}.\\] We divide by the factorials because rearranging the positions occupied by identical faces does not produce a new sequence. Thus \\[P_1=\\frac{17!}{(3!)^5\\,2!}\\,6^{-17}.\\]</p>\n<p>For the second event, the specified occurrences again total \\(1+2+3+4+5=15\\), so there are again exactly two sixes. Hence \\[P_2=\\frac{17!}{1!\\,2!\\,3!\\,4!\\,5!\\,2!}\\,6^{-17}.\\]</p>\n<p>When forming the ratio, the factors \\(17!\\), \\(6^{-17}\\), and the \\(2!\\) for the sixes cancel: \\[\\begin{aligned}\\frac{P_1}{P_2}&=\\frac{1!\\,2!\\,3!\\,4!\\,5!}{(3!)^5}\\\\&=\\frac{1\\cdot2\\cdot6\\cdot24\\cdot120}{6^5}\\\\&=\\frac{34560}{7776}\\\\&=\\frac{40}{9}.\\end{aligned}\\] Therefore \\[\\boxed{P_1:P_2=40:9}.\\]</p>",
    "topics": [
      "Probability and Statistics",
      "Combinatorics"
    ],
    "estimatedDifficulty": 7.0,
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
    "sol": "<p><b>Answer H: none of them.</b></p>\n<p>Each statement is universal, so a single valid counterexample is enough to disprove it.</p>\n<p>For <b>I</b>, take \\(f(x)=x^3\\). This function is strictly increasing on \\(\\mathbb R\\), but \\[f'(x)=3x^2\\quad\\Longrightarrow\\quad f'(0)=0.\\] Strict increase therefore does not require the derivative to be strictly positive at every point. I is false.</p>\n<p>For <b>II</b>, take \\(f(x)=1\\) and \\(g(x)=0\\). Then \\(f(x)&gt;g(x)\\) for every real \\(x\\), but \\[f'(x)=g'(x)=0.\\] One graph lying above another does not imply that it has a larger gradient. II is false.</p>\n<p>For <b>III</b>, define \\[f(x)=\\begin{cases}x,&amp;0\\le x&lt;1,\\\\2,&amp;x=1.\\end{cases}\\] This has the required endpoint values: \\(f(0)=0\\) and \\(f(1)=2\\).</p>\n<p>It is also strictly increasing. If \\(0\\le x_1&lt;x_2&lt;1\\), then \\(f(x_1)=x_1&lt;x_2=f(x_2)\\). If \\(x_2=1\\), then \\[f(x_1)=x_1&lt;1&lt;2=f(1).\\]</p>\n<p>Nevertheless, the function never takes the value \\(1\\): its values are less than \\(1\\) for \\(x&lt;1\\), followed by a jump to \\(2\\) at \\(x=1\\). The missing hypothesis is continuity. Strict increase alone does not prevent a function from jumping over a value. Therefore <b>all three statements are false</b>.</p>",
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
    "sol": "<p><b>Answer D.</b></p>\n<p>A counterexample must satisfy <b>both hypotheses</b> while making the conclusion false. We therefore need a sequence that is strictly decreasing, positive for every positive integer \\(n\\), and not convergent to \\(0\\).</p>\n<p>Use the identity \\[\\frac1{n(n+1)}=\\frac1n-\\frac1{n+1}.\\] For the options with negative differences, \\[a_{n+1}-a_n=-\\frac1{n(n+1)},\\] we can add the successive differences: \\[\\begin{aligned}a_n-a_1&=-\\sum_{r=1}^{n-1}\\left(\\frac1r-\\frac1{r+1}\\right)\\\\&=-\\left(1-\\frac1n\\right).\\end{aligned}\\] The intermediate terms cancel, leaving \\[a_n=a_1-1+\\frac1n.\\]</p>\n<p>In option D, \\(a_1=2\\), so \\[a_n=1+\\frac1n.\\] This is positive for every \\(n\\), and \\[a_{n+1}-a_n=-\\frac1{n(n+1)}&lt;0,\\] so it is strictly decreasing. However, \\[\\lim_{n\\to\\infty}a_n=1,\\] not \\(0\\). Thus it is a valid counterexample.</p>\n<p>The other options fail for the following reasons:</p>\n<ul><li><b>A:</b> \\(a_n=-1/n\\) is increasing and negative.</li><li><b>B:</b> \\(a_n=1-1/n\\) is increasing; also \\(a_1=0\\).</li><li><b>C:</b> \\(a_n=1/n\\) satisfies the hypotheses and tends to \\(0\\).</li><li><b>E:</b> \\(a_n=-2+1/n\\) is negative.</li></ul>\n<p>Therefore, the answer is <b>D</b>.</p>",
    "topics": [
      "Logic",
      "Sequences and Series"
    ],
    "estimatedDifficulty": 6.5,
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
    "sol": "<p><b>Answer A: \\(\\dfrac\\pi4+\\dfrac12\\).</b></p>\n<p>Inside the unit circle, \\[0\\le x^2+y^2&lt;1,\\] so \\(\\lfloor x^2+y^2\\rfloor=0\\). The floor equation therefore becomes \\(\\lfloor x-y\\rfloor=0\\), which is equivalent to \\[0\\le x-y&lt;1.\\]</p>\n<p>Thus, apart from boundary points, we need the part of the unit disc lying between the parallel lines \\(x-y=0\\) and \\(x-y=1\\). The line \\(x-y=0\\) passes through the centre and divides the disc into two equal halves. The half satisfying \\(x-y\\ge0\\) has area \\(\\pi/2\\). From this, we must remove the circular segment beyond \\(x-y=1\\).</p>\n<p>To find its endpoints, substitute \\(y=x-1\\) into \\(x^2+y^2=1\\): \\[x^2+(x-1)^2=1.\\] Simplifying, \\[2x^2-2x=0\\quad\\Longrightarrow\\quad x=0\\text{ or }x=1.\\] The intersection points are therefore \\((0,-1)\\) and \\((1,0)\\).</p>\n<p>The radii to these points meet at a right angle. The removed segment is a quarter-circle sector minus the right triangle formed by the two radii and the chord. Its area is \\[\\frac\\pi4-\\frac12(1)(1)=\\frac\\pi4-\\frac12.\\] Hence the required area is \\[\\frac\\pi2-\\left(\\frac\\pi4-\\frac12\\right)=\\boxed{\\frac\\pi4+\\frac12}.\\]</p>\n<p>On the circumference, \\(\\lfloor x^2+y^2\\rfloor=1\\), so the boundary conditions differ. This does not change the area, since the circumference and line boundaries have zero area.</p>",
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
    "sol": "<p><b>Answer C: exactly one of Cantor and Descartes is telling the truth.</b></p>\n<p>Recall that a conditional statement “if \\(P\\), then \\(Q\\)” is false <b>only when \\(P\\) is true and \\(Q\\) is false</b>. In particular, a conditional with a false antecedent is true.</p>\n<p>Start by supposing that <b>Cantor is lying</b>. Euler says that Cantor is lying, so Euler's statement would be true. Euler would therefore be truthful.</p>\n<p>Now consider Cantor's statement: “If Euler is lying, then Descartes is also lying.” Under our assumption, Euler is truthful. The antecedent “Euler is lying” is therefore false, making Cantor's conditional true. This contradicts the assumption that Cantor is lying.</p>\n<p>Thus <b>Cantor must be truthful</b>. Euler's statement that Cantor is lying is consequently false, so <b>Euler is lying</b>.</p>\n<p>Cantor's true conditional now has a true antecedent: Euler really is lying. Its conclusion must therefore hold, so <b>Descartes is lying</b>.</p>\n<p>Bernoulli says: “If Cantor is telling the truth, then Descartes is also telling the truth.” Its antecedent is true and its conclusion is false, so Bernoulli's statement is false. Thus <b>Bernoulli is lying</b>.</p>\n<p>Archimedes says Bernoulli is truthful, so <b>Archimedes is lying</b> too. Finally, check Descartes's statement. Archimedes is lying, but Euler is not truthful, so Descartes's conditional is indeed false, consistent with his being a liar.</p>\n<p>The resulting assignment is: Archimedes lying, Bernoulli lying, Cantor truthful, Descartes lying, and Euler lying. Therefore exactly one of Cantor and Descartes is truthful, giving <b>C</b>.</p>",
    "topics": [
      "Logic"
    ],
    "estimatedDifficulty": 6.0,
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
    "sol": "<p><b>Answer D: \\(0&lt;k\\le\\dfrac14\\).</b></p>\n<p>The distinction is whether \\(y\\) may depend on \\(x\\).</p>\n<p>In <b>statement I</b>, we are given \\(x\\) first and may then choose a suitable \\(y\\). To make \\((x-y)^2\\) large, choose the endpoint farther from \\(x\\): if \\(x\\le\\tfrac12\\), choose \\(y=1\\); if \\(x\\ge\\tfrac12\\), choose \\(y=0\\). In either case, \\[|x-y|\\ge\\frac12,\\] so \\[(x-y)^2\\ge\\frac14.\\] Thus I holds whenever \\(k\\le\\tfrac14\\).</p>\n<p>To see that no larger value works, take \\(x=\\tfrac12\\). Every \\(y\\in[0,1]\\) then satisfies \\[\\left|\\frac12-y\\right|\\le\\frac12,\\] so \\[\\left(\\frac12-y\\right)^2\\le\\frac14.\\] Hence I is true exactly when \\(k\\le\\tfrac14\\).</p>\n<p>In <b>statement II</b>, a single \\(y\\) must work for every \\(x\\). Whatever \\(y\\in[0,1]\\) we choose, \\(x=y\\) is an allowed input. At this input, \\((x-y)^2=0\\). Thus II cannot hold if \\(k&gt;0\\). Conversely, if \\(k\\le0\\), every square is at least \\(k\\), so II does hold.</p>\n<p>Therefore II is false exactly when \\(k&gt;0\\). Combining the two requirements gives \\[\\boxed{0&lt;k\\le\\frac14}.\\]</p>",
    "topics": [
      "Logic",
      "General algebra"
    ],
    "estimatedDifficulty": 6.0,
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
    "sol": "<p><b>Answer D: all three are sufficient, but only II is necessary.</b></p>\n<p>Since \\(240=16\\cdot3\\cdot5\\), we investigate these three pairwise coprime factors. First, suppose <b>II</b> holds: \\(n\\) is divisible by none of \\(2,3,5\\).</p>\n<p>Because \\(n\\) is odd, write \\(n=2r+1\\). Then \\[n^2=4r(r+1)+1.\\] One of the consecutive integers \\(r,r+1\\) is even, so \\(r(r+1)=2s\\) for some integer \\(s\\). Hence \\(n^2=8s+1\\). Squaring, \\[n^4-1=(8s+1)^2-1=64s^2+16s=16s(4s+1).\\] Thus \\(16\\mid(n^4-1)\\).</p>\n<p>Since \\(3\\nmid n\\), the remainder of \\(n\\) modulo \\(3\\) is \\(1\\) or \\(-1\\). Either has fourth power congruent to \\(1\\), so \\(3\\mid(n^4-1)\\).</p>\n<p>Since \\(5\\nmid n\\), its remainder modulo \\(5\\) is one of \\(1,-1,2,-2\\). Their fourth powers are \\(1,1,16,16\\), each leaving remainder \\(1\\) modulo \\(5\\). Thus \\(5\\mid(n^4-1)\\).</p>\n<p>Because \\(16,3,5\\) are pairwise coprime, divisibility by all three gives \\[240\\mid(n^4-1).\\] So II is sufficient.</p>\n<p>It is also necessary. If any \\(p\\in\\{2,3,5\\}\\) divided \\(n\\), then \\[n^4-1\\equiv-1\\pmod p,\\] so \\(p\\) would not divide \\(n^4-1\\). This would prevent divisibility by \\(240\\).</p>\n<p>Now consider I and III. A prime greater than \\(5\\) is divisible by none of \\(2,3,5\\), so I implies II and is sufficient. A number congruent to \\(1\\) or \\(-1\\) modulo \\(240\\) is divisible by none of \\(2,3,5\\), so III also implies II and is sufficient.</p>\n<p>Neither I nor III is necessary. For example, \\(n=49\\) satisfies II, so its fourth power minus \\(1\\) is divisible by \\(240\\). Yet \\(49\\) is composite and its remainder modulo \\(240\\) is neither \\(1\\) nor \\(239\\).</p>\n<p>Thus <b>all three are sufficient, but only II is necessary</b>.</p>",
    "topics": [
      "Logic",
      "Number Theory"
    ],
    "estimatedDifficulty": 7.0,
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
    "sol": "<p><b>Answer C: \\(-2\\le a\\le2\\).</b></p>\n<p>We must prove both that every starting value in this interval gives a bounded sequence and that every starting value outside it gives an unbounded sequence.</p>\n<p>Suppose first that \\(-2\\le u_n\\le2\\). Then \\(0\\le u_n^2\\le4\\), so \\[-2\\le u_n^2-2\\le2.\\] Since \\(u_{n+1}=u_n^2-2\\), this means \\[-2\\le u_{n+1}\\le2.\\]</p>\n<p>Therefore, if \\(u_1=a\\in[-2,2]\\), every subsequent term remains in \\([-2,2]\\), by induction. In particular, \\(|u_n|\\le2\\) for every \\(n\\), so the sequence is bounded.</p>\n<p>Now suppose \\(a&gt;2\\). Whenever \\(u_n&gt;2\\), we also have \\(u_{n+1}&gt;2\\). Moreover, \\[\\begin{aligned}u_{n+1}-2&=u_n^2-4\\\\&=(u_n-2)(u_n+2)\\\\&\\ge4(u_n-2).\\end{aligned}\\] Applying this repeatedly gives \\[u_n-2\\ge4^{n-1}(a-2).\\] Here \\(a-2&gt;0\\), and \\(4^{n-1}\\) grows without bound. Thus the sequence is unbounded.</p>\n<p>If \\(a&lt;-2\\), then \\[u_2=a^2-2&gt;2.\\] From the second term onwards, the sequence falls into the preceding case, so it is again unbounded.</p>\n<p>Hence the exact condition is \\[\\boxed{-2\\le a\\le2}.\\] Both endpoints are included: \\[a=2:\\quad2,2,2,\\ldots,\\qquad a=-2:\\quad-2,2,2,\\ldots.\\]</p>\n<p>Strict increase alone does not prove unboundedness: for example, \\(2-\\tfrac1n\\) is strictly increasing but bounded.</p>",
    "topics": [
      "Logic",
      "Sequences and Series"
    ],
    "estimatedDifficulty": 6.0,
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
    "sol": "<p><b>Answer D: \\(\\dfrac89\\le a&lt;1\\).</b></p>\n<p>Write \\(F(x,y)=x^2-2xy+ay^2\\). First consider <b>statement II</b>, where one fixed \\(y\\in[1,2]\\) must work for every real \\(x\\).</p>\n<p>Completing the square gives \\[F(x,y)=(x-y)^2+(a-1)y^2.\\] If we take \\(x=y\\), then \\[F(y,y)=(a-1)y^2.\\] Since \\(y\\ne0\\), nonnegativity requires \\(a\\ge1\\). Conversely, if \\(a\\ge1\\), both terms in the completed-square expression are nonnegative for every \\(x\\). Thus \\[\\text{II is true exactly when }a\\ge1.\\] We therefore require \\(a&lt;1\\).</p>\n<p>Now consider <b>statement I</b>, where \\(y\\) may depend on \\(x\\). Because \\(y&gt;0\\), dividing by \\(y^2\\) preserves the inequality: \\[\\frac{F(x,y)}{y^2}=\\left(\\frac xy-1\\right)^2+a-1.\\]</p>\n<p>For each \\(x\\), we want to choose \\(y\\) so that \\(x/y\\) is sufficiently far from \\(1\\). The endpoint choices \\(y=1\\) and \\(y=2\\) give the distances \\[|x-1|\\qquad\\text{and}\\qquad\\left|\\frac x2-1\\right|.\\] For \\(1\\le x\\le2\\), these are \\(x-1\\) and \\(1-x/2\\). They balance when \\[x-1=1-\\frac x2,\\] which gives \\(x=4/3\\), with both distances equal to \\(1/3\\). This suggests the critical value; we now prove it.</p>\n<p><b>Necessity.</b> Take \\(x=4/3\\). As \\(y\\) varies over \\([1,2]\\), \\[\\frac xy=\\frac4{3y}\\in\\left[\\frac23,\\frac43\\right].\\] Therefore \\[\\left|\\frac xy-1\\right|\\le\\frac13,\\] and hence \\[\\frac{F(x,y)}{y^2}\\le\\frac19+a-1=a-\\frac89.\\] If \\(a&lt;8/9\\), this is strictly negative for every allowed \\(y\\). Thus I fails. Consequently, I requires \\(a\\ge8/9\\).</p>\n<p><b>Sufficiency.</b> Suppose \\(a\\ge8/9\\). If \\(x\\le4/3\\), choose \\(y=2\\). Then \\[\\frac x2-1\\le-\\frac13,\\] so \\[(x/y-1)^2\\ge\\frac19.\\] If \\(x\\ge4/3\\), choose \\(y=1\\). Then \\(x-1\\ge1/3\\), giving the same lower bound.</p>\n<p>In either case, \\[\\frac{F(x,y)}{y^2}\\ge\\frac19+a-1=a-\\frac89\\ge0.\\] Thus I holds for every real \\(x\\).</p>\n<p>We have proved \\[\\text{I true}\\iff a\\ge\\frac89,\\qquad\\text{II false}\\iff a&lt;1.\\] Combining them, \\[\\boxed{\\frac89\\le a&lt;1}.\\] The lower endpoint is included because equality is permitted in \\(F(x,y)\\ge0\\). The upper endpoint is excluded because II becomes true at \\(a=1\\).</p>",
    "topics": [
      "Logic",
      "General algebra"
    ],
    "estimatedDifficulty": 8.0,
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
    "sol": "<p><b>Answer E.</b></p>\n<p>The condition is \\[P(u)P(v)\\le0\\implies uv\\le0\\] for every pair of real numbers \\(u,v\\). The freedom to choose equal inputs is particularly useful. If \\(r\\) is any real root of \\(P\\), take \\(u=v=r\\). Then \\[P(u)P(v)=P(r)^2=0,\\] so the given implication forces \\(r^2\\le0\\). Therefore \\(r=0\\): <b>the polynomial cannot have a nonzero real root</b>.</p>\n<p>Since \\(P\\) has odd degree and positive leading coefficient, \\[P(x)\\to\\infty\\quad\\text{as }x\\to\\infty,\\qquad P(x)\\to-\\infty\\quad\\text{as }x\\to-\\infty.\\] By continuity, it has at least one real root. That root must be \\(0\\), so \\[P(0)=c=0.\\]</p>\n<p>We can now factor: \\[P(x)=x(x^4+ax^2+b).\\] For nonzero \\(x\\), put \\(t=x^2&gt;0\\). The second factor becomes \\[q(t)=t^2+at+b.\\]</p>\n<p>The absence of nonzero roots of \\(P\\) requires \\(q\\) to have no root for \\(t&gt;0\\). Since \\(q(t)\\) is positive for sufficiently large \\(t\\), continuity then forces \\[q(t)&gt;0\\qquad\\text{for every }t&gt;0.\\] Indeed, if \\(q\\) were negative at a positive input, it would have to cross zero before becoming positive. We now classify when this strict positivity holds.</p>\n<p>If <b>\\(a\\ge0\\)</b> and \\(b\\ge0\\), then for \\(t&gt;0\\), \\[q(t)=t^2+at+b&gt;0,\\] because \\(t^2&gt;0\\). If instead \\(b&lt;0\\), then \\(q(t)\\) is negative for sufficiently small positive \\(t\\), so the required positivity fails. Therefore, when \\(a\\ge0\\), the exact condition is \\(b\\ge0\\).</p>\n<p>If <b>\\(a&lt;0\\)</b>, complete the square: \\[q(t)=\\left(t+\\frac a2\\right)^2+b-\\frac{a^2}{4}.\\] The minimum occurs at \\(t=-a/2&gt;0\\), which lies inside the domain we are considering. Its value must be strictly positive: \\[b-\\frac{a^2}{4}&gt;0.\\] Thus, when \\(a&lt;0\\), the exact condition is \\(b&gt;a^2/4\\).</p>\n<p>These arguments establish necessity. To check sufficiency for the <b>original implication</b>, suppose \\(c=0\\), and either \\(a\\ge0,\\ b\\ge0\\), or \\(a&lt;0,\\ b&gt;a^2/4\\). Then \\[x^4+ax^2+b&gt;0\\] for every nonzero \\(x\\). Therefore \\(P(x)\\) has the same sign as \\(x\\), and \\(P(x)=0\\) only when \\(x=0\\).</p>\n<p>Consequently, \\(P(u)P(v)\\le0\\) can occur only when \\(u,v\\) have opposite signs or at least one is zero. In either case, \\(uv\\le0\\). So the conditions are sufficient as well.</p>\n<p>The boundary distinction is essential. When \\(a&lt;0\\) and \\(b=a^2/4\\), we obtain nonzero roots \\[x=\\pm\\sqrt{-\\frac a2},\\] which violate the condition by taking \\(u=v\\) equal to either root. However, \\(a=b=0\\) is allowed: then \\(P(x)=x^5\\), which satisfies the implication.</p>\n<p>Hence the necessary and sufficient condition is exactly <b>E</b>.</p>",
    "topics": [
      "Logic",
      "General algebra",
      "Functions and Graphs"
    ],
    "estimatedDifficulty": 8.0,
    "difficultyRationale": "Use equal inputs in a universal implication, then classify strict positivity of a quadratic on t greater than zero, retaining the exceptional boundary."
  }
];
