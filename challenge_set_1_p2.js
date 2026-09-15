/* Challenge set 1 – Paper 2. Original extended reasoning paper; 120 minutes.
   Difficulty ratings are provisional author estimates, not official scores. */
const CHALLENGE_SET_1_P2 = [
  {
    "n": 1,
    "stem": "For each real number \\(t\\) with \\(0\\le t\\le1\\), a machine accepts an input \\(x\\) with \\(0\\le x\\le1\\) and returns\n\\[F_t(x)=x^2-2tx+t.\\]\nA target value \\(c\\) is fixed before any inputs are chosen. Consider two claims about this target.<p><b>P.</b> Whatever value of \\(t\\) is chosen, it is possible to choose an input \\(x\\) giving output \\(c\\). The input may depend on \\(t\\).</p><p><b>Q.</b> It is possible to choose a single input \\(x\\) which gives output \\(c\\) for every permitted value of \\(t\\).</p><p>All endpoints of the input intervals are allowed. Which option gives precisely the targets for which P holds, and precisely the targets for which Q holds?</p>",
    "opts": [
      "P: \\(0\\le c\\le1\\); Q: \\(c=1/4\\)",
      "P: \\(1/4\\le c\\le1/2\\); Q: \\(c=1/2\\)",
      "P: \\(1/4\\le c\\le1\\); Q: \\(c=1/4\\)",
      "P: \\(1/4\\le c\\le1/2\\); Q: \\(c=1/4\\)",
      "P: \\(0\\le c\\le1/2\\); Q: no targets",
      "P: \\(c=1/4\\); Q: \\(1/4\\le c\\le1/2\\)",
      "P: \\(1/4<c<1/2\\); Q: \\(c=1/4\\)"
    ],
    "correct": 3,
    "topics": [
      "Logic",
      "General algebra",
      "Functions and Graphs"
    ],
    "estimatedDifficulty": 7.2,
    "difficultySource": "author-estimate",
    "sol": "<p><b>Answer D.</b></p><ol class=\"worked-steps\"><li>Complete the square: \\(F_t(x)=(x-t)^2+t-t^2\\). Since \\(t\\) lies in the input interval, the minimum is attained at \\(x=t\\), and equals \\(t-t^2\\).</li><li>The maximum on \\([0,1]\\) is at one of its endpoints: \\(F_t(0)=t\\) and \\(F_t(1)=1-t\\). Thus the attainable outputs for this particular \\(t\\) form the entire interval from \\(t-t^2\\) to \\(\\max(t,1-t)\\). The graph is continuous, so there are no missing outputs between these bounds.</li><li>P requires \\(c\\) to lie in every one of these output intervals. The largest lower bound is \\(\\max_{0\\le t\\le1}(t-t^2)=1/4\\), since \\(t-t^2=1/4-(t-1/2)^2\\). The smallest upper bound is \\(\\min_{0\\le t\\le1}\\max(t,1-t)=1/2\\). Both occur when \\(t=1/2\\).</li><li>Conversely, if \\(1/4\\le c\\le1/2\\), then for every \\(t\\), \\(t-t^2\\le1/4\\le c\\le1/2\\le\\max(t,1-t)\\). An input exists for every machine. Thus P holds exactly on the closed interval \\([1/4,1/2]\\).</li><li>For Q, rewrite the output as \\(x^2+t(1-2x)\\). It is independent of \\(t\\) exactly when \\(1-2x=0\\), so \\(x=1/2\\) and the common output is \\(1/4\\). This input is allowed. The two different orders of choosing the input cannot be interchanged.</li></ol>",
    "reasoningFormat": "Quantifiers and necessary-and-sufficient conditions"
  },
  {
    "n": 2,
    "stem": "A real parameter \\(a\\) is to be chosen so that\n\\[x^2-2ax+a+2\\ge0\\qquad\\text{for every real }x\\ge1.\\]\nA student gives the following argument. Each numbered line is intended as a deduction from the question and the preceding lines.<ol><li>At \\(x=1\\), the expression is \\(3-a\\), so any admissible parameter must satisfy \\(a\\le3\\).</li><li>The expression can be written as \\((x-a)^2-a^2+a+2\\).</li><li>Its graph is an upward-opening parabola with its vertex at \\(x=a\\).</li><li>Consequently the required inequality holds if and only if the value at that vertex is non-negative.</li><li>This is equivalent to \\((2-a)(a+1)\\ge0\\).</li><li>Combining this with line 1 gives precisely \\(-1\\le a\\le2\\).</li></ol><p>Which option identifies the first invalid deduction and gives the correct full set of admissible parameters? The question concerns the restricted domain \\(x\\ge1\\), not the whole real line.</p>",
    "opts": [
      "Line 2; \\(a\\le2\\)",
      "Line 3; \\(-1\\le a\\le2\\)",
      "Line 4; \\(-1\\le a\\le2\\)",
      "Line 5; \\(a\\le3\\)",
      "Line 4; \\(a\\le2\\)",
      "No invalid deduction; \\(-1\\le a\\le2\\)"
    ],
    "correct": 4,
    "topics": [
      "Logic",
      "General algebra",
      "Functions and Graphs"
    ],
    "estimatedDifficulty": 7.0,
    "difficultySource": "author-estimate",
    "sol": "<p><b>Answer E.</b></p><ol class=\"worked-steps\"><li>Lines 1–3 are valid: substitution gives \\(3-a\\), expansion verifies the completed square, and the coefficient of \\(x^2\\) is positive.</li><li>Line 4 overlooks the domain. If \\(a<1\\), the vertex lies to the left of every permitted input. Its value therefore need not be non-negative. The first invalid deduction is line 4, even though the algebraic steps after it correctly manipulate its stronger, unjustified condition.</li><li>For \\(a\\le1\\) and \\(x\\ge1\\), the distance \\(x-a\\) is non-negative and is smallest at \\(x=1\\). Hence the minimum on the permitted domain is \\(3-a\\ge2\\), so every \\(a\\le1\\) is allowed.</li><li>For \\(a>1\\), the vertex is inside the permitted domain. Its value is \\(-a^2+a+2=(2-a)(a+1)\\). Because \\(a+1>0\\), this is non-negative exactly when \\(a\\le2\\). This adds the interval \\(1<a\\le2\\).</li><li>The combined answer is therefore \\(a\\le2\\). For example, \\(a=-2\\) contradicts the student’s restriction: the polynomial is \\(x^2+4x\\), which is positive for every \\(x\\ge1\\), even though its unrestricted minimum is negative.</li></ol>",
    "reasoningFormat": "First error in a proof"
  },
  {
    "n": 3,
    "stem": "A sequence starts at a real number \\(u_1>1\\) and is generated by\n\\[u_{n+1}=\\frac{u_n+2}{2u_n+1}\\qquad(n=1,2,3,\\ldots).\\]\nA student notices that the first few terms seem to approach 1, but alternate around it. To investigate this without assuming that numerical evidence continues forever, the student introduces\n\\[v_n=\\frac{u_n-1}{u_n+1}.\\]\nHere “strictly decreasing” means that each term is smaller than the preceding term of the indicated sequence.<p><b>I.</b> Every term \\(u_n\\) exists and is positive, and no term equals 1.</p><p><b>II.</b> The sequence \\(u_1,u_3,u_5,\\ldots\\) is strictly decreasing, while \\(u_2,u_4,u_6,\\ldots\\) is strictly increasing.</p><p><b>III.</b> For every positive integer \\(n\\), \\(\\lvert u_{n+1}-1\\rvert<\\frac13\\lvert u_n-1\\rvert\\).</p><p>Which statements are true?</p>",
    "opts": [
      "I only",
      "II only",
      "III only",
      "I and II only",
      "I and III only",
      "II and III only",
      "I, II and III",
      "None of them"
    ],
    "correct": 3,
    "topics": [
      "Logic",
      "Sequences and Series",
      "General algebra"
    ],
    "estimatedDifficulty": 7.5,
    "difficultySource": "author-estimate",
    "sol": "<p><b>Answer D.</b></p><ol class=\"worked-steps\"><li>If \\(u_n>0\\), then both \\(u_n+2\\) and \\(2u_n+1\\) are positive. Starting from \\(u_1>1\\), repeated application of this observation shows that every term is defined and positive.</li><li>Subtract and add 1 in the recurrence: \\(u_{n+1}-1=(1-u_n)/(2u_n+1)\\) and \\(u_{n+1}+1=3(u_n+1)/(2u_n+1)\\). Dividing these expressions gives \\(v_{n+1}=-v_n/3\\), hence \\(v_n=(-1/3)^{n-1}v_1\\).</li><li>Because \\(0<v_1<1\\), all \\(v_n\\) are non-zero, positive at odd indices and negative at even indices. Solving for \\(u_n\\) gives \\(u_n=(1+v_n)/(1-v_n)\\), so \\(u_n=1\\) would require \\(v_n=0\\). Statement I is true.</li><li>For \\(-1<s<t<1\\), \\((1+t)/(1-t)-(1+s)/(1-s)=2(t-s)/[(1-t)(1-s)]>0\\). Thus increasing \\(v\\) increases \\(u\\). The positive odd-indexed \\(v\\)-terms decrease by a factor of 9 at each step, while the negative even-indexed terms increase towards zero. This proves II.</li><li>The actual ratio of successive errors is \\(\\lvert u_{n+1}-1\\rvert/\\lvert u_n-1\\rvert=1/(2u_n+1)\\). It is smaller than \\(1/3\\) when \\(u_n>1\\), but larger than \\(1/3\\) when \\(u_n<1\\). Every even-indexed term lies below 1, so III is false. For example, \\(u_1=2\\) gives \\(u_2=4/5\\), and the next error ratio is \\(5/13>1/3\\).</li></ol>",
    "reasoningFormat": "Multiple statements"
  },
  {
    "n": 4,
    "stem": "Let \\(n\\) be a positive integer. Write \\(b_r=\\binom nr\\), the coefficient of \\(z^r\\) in \\((1+z)^n\\), for \\(r=0,1,\\ldots,n\\). A student wants to prove the identity\n\\[\\sum_{r=0}^n\\frac{(-1)^r b_r}{(r+1)(r+2)}=\\frac1{n+2}.\\]\nThe summation sign means that all the indicated terms, including the terms for \\(r=0\\) and \\(r=n\\), are added. Below are six fragments of a proof; each fragment must be used exactly once, and each reference to an expression must refer to one already introduced.<p><b>P.</b> Thus \\(H(x)=(1-x)^{n+1}\\) throughout \\([0,1]\\).</p><p><b>Q.</b> Define \\(H(x)=(1-x)\\sum_{r=0}^n(-1)^r b_r x^r\\).</p><p><b>R.</b> Evaluating that antiderivative at 1 and 0 shows that \\(\\int_0^1H(x)\\,dx=1/(n+2)\\).</p><p><b>S.</b> Integrating the defining finite sum term by term instead gives \\(\\int_0^1H(x)\\,dx=\\sum_{r=0}^n(-1)^r b_r\\left(1/(r+1)-1/(r+2)\\right)\\).</p><p><b>T.</b> The two evaluations of the integral agree; simplify each bracket to obtain the required identity.</p><p><b>U.</b> By the binomial expansion, \\(\\sum_{r=0}^n(-1)^r b_r x^r=(1-x)^n\\). An antiderivative of \\((1-x)^{n+1}\\) is \\(-(1-x)^{n+2}/(n+2)\\), a fact which may be used here.</p><p>Which ordering produces a complete proof?</p>",
    "opts": [
      "Q, P, U, S, R, T",
      "Q, U, P, R, S, T",
      "U, R, Q, P, S, T",
      "Q, U, R, P, T, S",
      "Q, S, T, U, P, R",
      "Q, P, S, U, R, T"
    ],
    "correct": 1,
    "topics": [
      "Logic",
      "General algebra",
      "Integration"
    ],
    "estimatedDifficulty": 7.5,
    "difficultySource": "author-estimate",
    "sol": "<p><b>Answer B.</b></p><ol class=\"worked-steps\"><li>Q must introduce \\(H\\) before any fragment makes a claim about it. U then identifies the finite sum occurring in Q by substituting \\(z=-x\\) into the binomial expansion.</li><li>Multiplying that sum by the factor \\(1-x\\) in the definition gives \\(H(x)=(1-x)(1-x)^n=(1-x)^{n+1}\\), which is P. R can now use the antiderivative supplied in U to evaluate the integral of \\(H\\).</li><li>That evaluation is \\([- (1-x)^{n+2}/(n+2)]_0^1=0-[-1/(n+2)]=1/(n+2)\\).</li><li>For S, expand the factor \\(1-x\\) in the definition: \\(H(x)=\\sum_{r=0}^n(-1)^rb_r(x^r-x^{r+1})\\). Every sum here is finite. Integrating from 0 to 1 gives the bracket \\(1/(r+1)-1/(r+2)\\) for each term.</li><li>Finally, \\(1/(r+1)-1/(r+2)=[(r+2)-(r+1)]/[(r+1)(r+2)]=1/[(r+1)(r+2)]\\). Equating S with R proves the identity in T. The only listed ordering respecting all these deductions is B. The supplied antiderivative avoids requiring a rule for differentiating a composite function.</li></ol>",
    "reasoningFormat": "Proof ordering"
  },
  {
    "n": 5,
    "stem": "For every real number \\(k\\), let \\(C_k\\) be the circle\n\\[x^2+y^2-2ky=1.\\]\nA straight line \\(L\\) has equation \\(y=mx+c\\), where \\(m\\) and \\(c\\) are fixed real numbers. The same line is to meet every circle in the family at two distinct points. The two points may change when \\(k\\) changes. A tangent counts as only one point of intersection.<p>A student suggests that it should be enough for the line to cross the unit circle \\(C_0\\), because all the other circles pass through the same two points as \\(C_0\\) on the \\(x\\)-axis. You must decide the condition for the entire family, rather than assume this suggestion is valid.</p><p>Which condition is necessary and sufficient for the line to meet every \\(C_k\\) at two distinct points?</p>",
    "opts": [
      "\\(|c|<\\sqrt{1+m^2}\\)",
      "\\(|c|\\le|m|\\)",
      "\\(|c|<|m|\\)",
      "\\(c=0\\)",
      "\\(|c|>|m|\\), or \\(m=c=0\\)",
      "\\(|c|<|m|\\), or \\(m=c=0\\)",
      "\\(|c|\\le|m|\\), with \\(m\\ne0\\)"
    ],
    "correct": 5,
    "topics": [
      "Logic",
      "Geometry",
      "General algebra"
    ],
    "estimatedDifficulty": 8.2,
    "difficultySource": "author-estimate",
    "sol": "<p><b>Answer F.</b></p><ol class=\"worked-steps\"><li>Substitution of \\(y=mx+c\\) into the circle gives \\((1+m^2)x^2+2m(c-k)x+c^2-2kc-1=0\\). Since \\(1+m^2>0\\), two distinct intersections require its discriminant to be strictly positive.</li><li>One quarter of the discriminant simplifies to \\(m^2(c-k)^2-(1+m^2)(c^2-2kc-1)=m^2k^2+2ck+1+m^2-c^2\\). This expression must be positive for every real \\(k\\).</li><li>If \\(m\\ne0\\), complete the square in \\(k\\): \\[m^2\\left(k+\\frac{c}{m^2}\\right)^2+(1+m^2)\\left(1-\\frac{c^2}{m^2}\\right).\\] Its minimum is the second term. Strict positivity for all \\(k\\) is therefore equivalent to \\(c^2<m^2\\), or \\(|c|<|m|\\). Equality would give a tangent for one member of the family.</li><li>If \\(m=0\\), the expression is \\(2ck+1-c^2\\). For \\(c\\ne0\\) this becomes negative in one direction as \\(k\\) varies. For \\(c=0\\), it equals 1 for every \\(k\\), so the horizontal line \\(y=0\\) is a valid additional case.</li><li>Geometrically, a line with \\(|c|<|m|\\) crosses the open segment joining \\((-1,0)\\) to \\((1,0)\\). Such a point is inside every circle because \\(x^2<1\\) when \\(y=0\\). The exceptional line \\(y=0\\) itself goes through the two fixed endpoints. Option F includes both possibilities; testing only \\(C_0\\) gives the weaker condition in A.</li></ol>",
    "reasoningFormat": "Universal condition and exceptional case"
  },
  {
    "n": 6,
    "stem": "A non-zero polynomial \\(p\\) with real coefficients satisfies\n\\[\\int_0^1p(x)\\,dx=0,\\qquad \\int_0^1x p(x)\\,dx=0.\\]\nThere is no upper bound on its degree. A root at which the graph passes from one side of the \\(x\\)-axis to the other is called a <i>sign-changing root</i>. Merely touching the axis does not count as changing sign.<p>You may use the facts that a polynomial is continuous, that a non-zero polynomial has only finitely many roots, and that a continuous non-negative function which is positive somewhere inside an interval has a positive integral over that interval.</p><p><b>I.</b> There are at least two distinct sign-changing roots strictly between 0 and 1.</p><p><b>II.</b> It follows that \\(p(1/2)=0\\).</p><p><b>III.</b> There are no real numbers \\(A,B\\), not both zero, for which \\((Ax+B)p(x)\\ge0\\) throughout \\([0,1]\\).</p><p>Which statements are true?</p>",
    "opts": [
      "I only",
      "II only",
      "III only",
      "I and II only",
      "I and III only",
      "II and III only",
      "I, II and III",
      "None of them"
    ],
    "correct": 4,
    "topics": [
      "Logic",
      "Integration",
      "Functions and Graphs"
    ],
    "estimatedDifficulty": 8.5,
    "difficultySource": "author-estimate",
    "sol": "<p><b>Answer E.</b></p><ol class=\"worked-steps\"><li>The first integral being zero forces \\(p\\) to take both positive and negative values in the open interval. Otherwise either \\(p\\) or \\(-p\\) would be non-negative and positive somewhere there, contradicting the supplied integral fact. Thus at least one sign change occurs.</li><li>Suppose there were exactly one sign-changing root \\(r\\) in \\((0,1)\\). On the two sides of \\(r\\), the signs of \\(p\\) would be opposite; roots where the graph merely touches the axis would not alter these signs. The factor \\(x-r\\) also changes sign exactly there.</li><li>Consequently \\((x-r)p(x)\\) would have the same sign everywhere apart from its zeros. It is a non-zero polynomial, so its integral would be non-zero. But \\[\\int_0^1(x-r)p(x)\\,dx=\\int_0^1xp(x)\\,dx-r\\int_0^1p(x)\\,dx=0.\\] This contradiction proves I. Endpoint roots cannot replace either required interior sign change.</li><li>For II, take \\(p(x)=x^2-x+1/6\\). Its first integral is \\(1/3-1/2+1/6=0\\), and its weighted integral is \\(1/4-1/3+1/12=0\\). However \\(p(1/2)=1/4-1/2+1/6=-1/12\\), so II is false.</li><li>For III, any proposed product \\((Ax+B)p(x)\\) has integral \\(A\\int_0^1xp+B\\int_0^1p=0\\). If \\(A,B\\) are not both zero, the product is a non-zero polynomial and is non-zero at some interior point. If it were non-negative everywhere, its integral would be positive. Hence the proposed numbers cannot exist, proving III.</li></ol>",
    "reasoningFormat": "Multiple statements"
  },
  {
    "n": 7,
    "stem": "The real numbers \\(a,b,c\\) are positive and none is equal to 1. They satisfy\n\\[\\log_a b+\\log_b a=\\log_a c+\\log_c a,\\qquad b\\ne c.\\]\nNo order between the three numbers is specified. In particular, bases between 0 and 1 are allowed. A student argues that the equal sums must mean either equal individual logarithms or a reversal of their two values, and then tries to infer an order for the numbers themselves.<p>Decide which conclusions actually follow from the hypotheses. You may introduce \\(t=\\log_a b\\) and \\(u=\\log_a c\\), but no change-of-base formula is needed: the logarithms can be interpreted as powers.</p><p><b>I.</b> Either \\(b>1\\) and \\(c>1\\), or \\(b<1\\) and \\(c<1\\).</p><p><b>II.</b> The number \\(a\\) lies strictly between \\(b\\) and \\(c\\).</p><p><b>III.</b> \\(\\log_b c>0\\).</p><p>Which statements are true?</p>",
    "opts": [
      "I only",
      "II only",
      "III only",
      "I and II only",
      "I and III only",
      "II and III only",
      "I, II and III",
      "None of them"
    ],
    "correct": 4,
    "topics": [
      "Logic",
      "Exponentials and Logarithms"
    ],
    "estimatedDifficulty": 7.7,
    "difficultySource": "author-estimate",
    "sol": "<p><b>Answer E.</b></p><ol class=\"worked-steps\"><li>Write \\(b=a^t\\) and \\(c=a^u\\). Because \\(b,c\\ne1\\), both \\(t\\) and \\(u\\) are non-zero. The identities \\(b^{1/t}=a\\) and \\(c^{1/u}=a\\) give \\(\\log_b a=1/t\\) and \\(\\log_c a=1/u\\).</li><li>The given equality becomes \\(t+1/t=u+1/u\\). Subtracting the right side and collecting factors gives \\((t-u)(tu-1)/(tu)=0\\). Since \\(a\\ne1\\), different powers of \\(a\\) have different values; \\(b\\ne c\\) therefore gives \\(t\\ne u\\). Hence \\(tu=1\\).</li><li>The numbers \\(t\\) and \\(u\\) have the same sign. If \\(a>1\\), positive exponents give outputs above 1 and negative exponents give outputs below 1. If \\(0<a<1\\), these inequalities reverse for both outputs together. In every case \\(b,c\\) are on the same side of 1. I is true.</li><li>II need not hold. Take \\(a=2\\), \\(t=-2\\), \\(u=-1/2\\), so \\(b=1/4\\) and \\(c=1/\\sqrt2\\). Both are below 1 and \\(a\\) is larger than both. The logarithm sums are both \\(-2-1/2\\), so this is a counterexample satisfying all the hypotheses.</li><li>Finally, \\(b^{u/t}=(a^t)^{u/t}=a^u=c\\), giving \\(\\log_b c=u/t=1/t^2>0\\). This proves III directly from the definition of a logarithm. It does not require guessing whether the base exceeds 1.</li></ol>",
    "reasoningFormat": "Multiple statements"
  },
  {
    "n": 8,
    "stem": "One of two bags is chosen by a fair coin. Bag A contains two red counters and one blue counter. Bag B contains three red counters and three blue counters. The counters are otherwise indistinguishable. Two counters are drawn from the chosen bag without replacement and kept out of the bag.<p>An observer sees both counters. Under the first reporting rule, the observer says “mixed” exactly when one is red and one is blue, and otherwise says “not mixed”. You hear “mixed”. A third counter is then drawn from the same bag.</p><p><b>I.</b> Given the report, the probability that bag A was chosen is \\(10/19\\).</p><p><b>II.</b> Given the report, the probability that the third counter is red is \\(29/38\\).</p><p><b>III.</b> If the rule were instead to say “red seen” exactly when at least one of the first two counters was red, hearing “red seen” would make the probability of bag A equal to \\(5/9\\).</p><p>Each reporting rule is deterministic as described; the observer does not choose which true statement to announce.</p><p>Which statements are true?</p>",
    "opts": [
      "I only",
      "II only",
      "III only",
      "I and II only",
      "I and III only",
      "II and III only",
      "I, II and III",
      "None of them"
    ],
    "correct": 6,
    "topics": [
      "Logic",
      "Probability and Statistics"
    ],
    "estimatedDifficulty": 8.0,
    "difficultySource": "author-estimate",
    "sol": "<p><b>Answer G.</b></p><ol class=\"worked-steps\"><li>For A, the chance of a mixed pair is \\((2/3)(1/2)+(1/3)(2/2)=1/3+1/3=2/3\\). For B it is \\((3/6)(3/5)+(3/6)(3/5)=3/5\\). The two possible orders must both be counted.</li><li>Including the fair choice of bag, the probabilities of “A and mixed” and “B and mixed” are \\(1/3\\) and \\(3/10\\). Out of the mixed cases, the fraction from A is \\[(1/3)/(1/3+3/10)=(10/30)/(19/30)=10/19.\\] Thus I is true. The complementary probability for B is \\(9/19\\).</li><li>After a mixed pair from A, the remaining counter is red, so its chance of red is 1. After a mixed pair from B, two red and two blue counters remain, so its chance is \\(1/2\\). Weighting these by the conditional bag probabilities gives \\((10/19)\\cdot1+(9/19)\\cdot(1/2)=29/38\\). II is true.</li><li>Under the second rule, A always produces “red seen”: it has only one blue counter, so two blue draws are impossible. For B, the probability of two blue counters is \\((3/6)(2/5)=1/5\\), so the probability of the report is \\(4/5\\).</li><li>The new conditional fraction from A is \\[(1/2)/[(1/2)+(1/2)(4/5)]=(1/2)/(9/10)=5/9.\\] III is true. Hearing a report about at least one red counter gives different information from hearing that exactly one is red.</li></ol>",
    "reasoningFormat": "Multiple statements"
  },
  {
    "n": 9,
    "stem": "Seven distinct positive integers are written in increasing order. Their arithmetic mean and their median are both 8, and their range is 12. The median of seven values is the fourth value in increasing order; the range is the largest value minus the smallest.<p>You are not told any of the seven integers individually. A student tries to reconstruct the data by placing three values below 8 and three above 8, but several different reconstructions may be possible. A statement about what “must” happen is required to hold for every reconstruction meeting all three numerical summaries.</p><p><b>I.</b> The smallest integer must be at most 3.</p><p><b>II.</b> The greatest possible value of the largest integer is 15.</p><p><b>III.</b> At least two of the seven integers must be consecutive.</p><p>Which statements are true?</p>",
    "opts": [
      "I only",
      "II only",
      "III only",
      "I and II only",
      "I and III only",
      "II and III only",
      "I, II and III",
      "None of them"
    ],
    "correct": 3,
    "topics": [
      "Logic",
      "Probability and Statistics",
      "General algebra"
    ],
    "estimatedDifficulty": 7.5,
    "difficultySource": "author-estimate",
    "sol": "<p><b>Answer D.</b></p><ol class=\"worked-steps\"><li>The sum of the seven integers is \\(7\\cdot8=56\\). Write the smallest as \\(a\\). The largest is \\(a+12\\), and the fourth is 8.</li><li>The second and third integers are at least \\(a+1\\) and \\(a+2\\). The fifth and sixth are at least 9 and 10. Therefore the sum is at least \\[a+(a+1)+(a+2)+8+9+10+(a+12)=4a+42.\\] If \\(a\\ge4\\), this is at least 58, contradicting the sum 56. I is true.</li><li>Since \\(a\\le3\\), the largest integer \\(a+12\\) is at most 15. This is attainable: \\(3,4,5,8,10,11,15\\) has sum 56, median 8 and range 12. Thus 15 is the greatest possible largest value, and II is true.</li><li>For III, the data \\(2,4,6,8,10,12,14\\) have the same required summaries: the sum is 56, the fourth entry is 8, and the range is \\(14-2=12\\). All successive differences are 2. There are no consecutive integers, so III is false.</li><li>The two examples play different logical roles. The first proves the upper bound in II is achievable; the second disproves a universal claim. Neither example by itself would prove the universal bound in I.</li></ol>",
    "reasoningFormat": "Multiple statements"
  },
  {
    "n": 10,
    "stem": "A function \\(f\\) is defined for every real number and takes real values. It satisfies\n\\[f(f(x))=x+1\\qquad\\text{for every real }x.\\]\nNo continuity, differentiability or polynomial assumption is made. A function is called <i>one-to-one</i> if different inputs always give different outputs.<p>A student has found the example \\(f(x)=x+1/2\\). The student then claims that the equation forces a half-unit translation, because “applying the same function twice must split the total translation into two equal translations”. The following statements separate consequences of the equation from this proposed interpretation.</p><p><b>I.</b> Every function satisfying the equation is one-to-one.</p><p><b>II.</b> Every such function satisfies \\(f(x+1)=f(x)+1\\) for every real \\(x\\).</p><p><b>III.</b> Every such function satisfies \\(f(0)=1/2\\).</p><p>Which statements are true?</p>",
    "opts": [
      "I only",
      "II only",
      "III only",
      "I and II only",
      "I and III only",
      "II and III only",
      "I, II and III",
      "None of them"
    ],
    "correct": 3,
    "topics": [
      "Logic",
      "Functions and Graphs"
    ],
    "estimatedDifficulty": 8.2,
    "difficultySource": "author-estimate",
    "sol": "<p><b>Answer D.</b></p><ol class=\"worked-steps\"><li>If \\(f(s)=f(t)\\), applying \\(f\\) once more gives \\(f(f(s))=f(f(t))\\), hence \\(s+1=t+1\\) and \\(s=t\\). This proves I without assuming any regularity.</li><li>Apply \\(f\\) to the given equality: \\(f(f(f(x)))=f(x+1)\\). Apply the original rule with input \\(f(x)\\): \\(f(f(f(x)))=f(x)+1\\). Comparing these gives II.</li><li>To disprove III, write each real number uniquely as \\(n+t\\), where \\(n\\) is an integer and \\(0\\le t<1\\). Define a function by \\[f(n+t)=\\begin{cases}n+1/3+2t,&0\\le t<1/3,\\\\ n+1+(t-1/3)/2,&1/3\\le t<1.\\end{cases}\\] This is a complete definition on all real inputs, including negative ones.</li><li>In the first case, the new fractional part is \\(1/3+2t\\), which lies in \\([1/3,1)\\). The next application therefore uses the second case and gives \\(n+1+[(1/3+2t)-1/3]/2=n+1+t\\).</li><li>In the second case, the new integer part is \\(n+1\\) and its fractional part is \\((t-1/3)/2\\), which lies in \\([0,1/3)\\). The next application uses the first case and gives \\(n+1+1/3+2[(t-1/3)/2]=n+1+t\\).</li><li>Thus this function satisfies the required equation in both cases, including the boundary \\(t=1/3\\), but \\(f(0)=1/3\\). III is false. A single formula such as the half-unit translation is an example, not a uniqueness proof.</li></ol>",
    "reasoningFormat": "Multiple statements"
  },
  {
    "n": 11,
    "stem": "A non-zero real number \\(x\\) has the property that both\n\\[x^2+\\frac1{x^2}\\quad\\text{and}\\quad x^3+\\frac1{x^3}\\]\nare integers. No assumption is made that either \\(x\\) or \\(x+1/x\\) is rational. For each positive integer \\(n\\), put \\(s_n=x^n+x^{-n}\\), where \\(x^{-n}=1/x^n\\).<p>The distinction between being rational and being an integer matters here. You may use unique prime factorisation of positive integers, but any conclusion about a rational number must be justified rather than assumed from the two given integer values.</p><p><b>I.</b> \\(x+1/x\\) must be an integer.</p><p><b>II.</b> \\(x\\) must be rational.</p><p><b>III.</b> \\(s_n\\) is an integer for every positive integer \\(n\\).</p><p>Which statements are true?</p>",
    "opts": [
      "I only",
      "II only",
      "III only",
      "I and II only",
      "I and III only",
      "II and III only",
      "I, II and III",
      "None of them"
    ],
    "correct": 4,
    "topics": [
      "Logic",
      "Number Theory",
      "Sequences and Series"
    ],
    "estimatedDifficulty": 8.2,
    "difficultySource": "author-estimate",
    "sol": "<p><b>Answer E.</b></p><ol class=\"worked-steps\"><li>Let \\(r=x+1/x\\), and write the two given integers as \\(m=x^2+x^{-2}\\) and \\(j=x^3+x^{-3}\\). Expansion gives \\(r^2=m+2\\) and \\(r^3=j+3r\\). Therefore \\(j=r(r^2-3)=r(m-1)\\).</li><li>The denominator \\(m-1\\) cannot be zero: \\((x-1/x)^2\\ge0\\) gives \\(m\\ge2\\). Hence \\(r=j/(m-1)\\) is rational. We have not assumed it was rational at the start.</li><li>Write \\(r=p/q\\) in lowest terms with integers \\(p,q\\) and \\(q>0\\). Since \\(r^2=m+2\\) is an integer, \\(p^2=(m+2)q^2\\). If a prime divided \\(q\\), it would divide \\(p^2\\), and therefore \\(p\\), contradicting that the fraction is in lowest terms. Thus \\(q=1\\), so \\(r\\) is an integer. I is true.</li><li>II is false. Take \\(x=(3+\\sqrt5)/2\\); its reciprocal is \\((3-\\sqrt5)/2\\), since their product is 1. Thus \\(r=3\\), giving \\(m=r^2-2=7\\) and \\(j=r^3-3r=18\\), both integers, but \\(x\\) is irrational.</li><li>Put \\(s_0=2\\). Multiplication and collection of powers gives \\[r s_n=(x+x^{-1})(x^n+x^{-n})=s_{n+1}+s_{n-1}.\\] Hence \\(s_{n+1}=r s_n-s_{n-1}\\). Starting from the integers \\(s_0=2\\) and \\(s_1=r\\), each subsequent term is an integer by this recurrence. This proves III.</li></ol>",
    "reasoningFormat": "Multiple statements"
  },
  {
    "n": 12,
    "stem": "For a real parameter \\(a\\), let \\(N(a)\\) be the number of distinct solutions of\n\\[\\sin^2 x-2a\\sin x+a=0\\qquad\\text{with }0\\le x<2\\pi.\\]\nTwo equal algebraic roots in \\(\\sin x\\) are counted only once, and the endpoint \\(2\\pi\\) is excluded. In particular, a root \\(\\sin x=0\\) gives two values of \\(x\\), whereas \\(\\sin x=1\\) or \\(\\sin x=-1\\) gives only one.<p>A student intends to classify the answer solely by the discriminant of the quadratic in \\(\\sin x\\). Another student points out that this misses both the allowed range of sine and the number of angles associated with each allowed value.</p><p><b>I.</b> There is exactly one real parameter \\(a\\) for which \\(N(a)\\) is odd.</p><p><b>II.</b> There is exactly one real parameter \\(a\\) for which \\(N(a)=3\\).</p><p><b>III.</b> For every real parameter \\(a\\), \\(N(a)\\le3\\).</p><p>Which statements are true?</p>",
    "opts": [
      "I only",
      "II only",
      "III only",
      "I and II only",
      "I and III only",
      "II and III only",
      "I, II and III",
      "None of them"
    ],
    "correct": 1,
    "topics": [
      "Logic",
      "Trigonometry",
      "General algebra"
    ],
    "estimatedDifficulty": 8.0,
    "difficultySource": "author-estimate",
    "sol": "<p><b>Answer B.</b></p><ol class=\"worked-steps\"><li>Put \\(y=\\sin x\\). We need the roots of \\(y^2-2ay+a=0\\) which lie in \\([-1,1]\\). Its discriminant is \\(4a(a-1)\\), so for \\(0<a<1\\) there are no roots. At \\(a=0\\), the single root is \\(y=0\\), giving \\(N=2\\). At \\(a=1\\), the single root is \\(y=1\\), giving \\(N=1\\).</li><li>For \\(a<0\\), the product of the roots is negative, so one root is negative and one positive. The quadratic is negative at \\(y=0\\) and positive at \\(y=1\\), where its value is \\(1-a\\). Thus the positive root is always strictly between 0 and 1 and gives two angles.</li><li>At \\(y=-1\\), the quadratic has value \\(1+3a\\). If \\(a<-1/3\\), the negative root lies below -1 and contributes nothing. At \\(a=-1/3\\), it equals -1 and contributes one angle. If \\(-1/3<a<0\\), it lies strictly between -1 and 0 and contributes two angles. These cases give \\(N=2,3,4\\), respectively.</li><li>For \\(a>1\\), the quadratic is positive at 0 and negative at 1. One root therefore lies in \\((0,1)\\). The other lies above 1, since the graph eventually becomes positive again and both roots have positive sum and product. Exactly two angles result.</li><li>The complete classification is: \\(N=2\\) for \\(a<-1/3\\); \\(N=3\\) at \\(-1/3\\); \\(N=4\\) for \\(-1/3<a<0\\); \\(N=2\\) at 0; \\(N=0\\) for \\(0<a<1\\); \\(N=1\\) at 1; and \\(N=2\\) for \\(a>1\\).</li><li>Odd values occur at two parameters, \\(-1/3\\) and 1, so I is false. Exactly one parameter gives three solutions, so II is true. Four solutions occur on the non-empty interval \\((-1/3,0)\\), so III is false.</li></ol>",
    "reasoningFormat": "Multiple statements"
  },
  {
    "n": 13,
    "stem": "Six cards numbered 1 to 6 are placed in six boxes numbered 1 to 6, with one card in each box. A placement is allowed only if both of the following conditions hold:<ul><li>No card is in the box bearing its own number.</li><li>Exactly one of cards 1, 2 and 3 is in one of boxes 1, 2 and 3.</li></ul>A <i>reciprocal pair</i> means two different cards \\(i,j\\) for which card \\(i\\) is in box \\(j\\) and card \\(j\\) is in box \\(i\\). The word “pair” here refers to this condition, not merely to two occupied boxes.<p><b>I.</b> There are exactly 144 allowed placements.</p><p><b>II.</b> Every allowed placement contains a reciprocal pair.</p><p><b>III.</b> If one allowed placement is chosen uniformly at random, the probability that card 1 is in box 2 is \\(1/3\\).</p><p>Which statements are true?</p>",
    "opts": [
      "I only",
      "II only",
      "III only",
      "I and II only",
      "I and III only",
      "II and III only",
      "I, II and III",
      "None of them"
    ],
    "correct": 0,
    "topics": [
      "Logic",
      "Combinatorics",
      "Probability and Statistics"
    ],
    "estimatedDifficulty": 7.8,
    "difficultySource": "author-estimate",
    "sol": "<p><b>Answer A.</b></p><ol class=\"worked-steps\"><li>Split the labels into the lower block \\(1,2,3\\) and the upper block \\(4,5,6\\). Exactly one lower card stays in a lower box. Since the two remaining lower cards occupy two upper boxes, exactly one upper card must also stay in an upper box.</li><li>Choose the lower card staying in its block in 3 ways, and its box in 2 ways, since its own box is forbidden. Independently choose the upper card staying in its block in 3 ways and its box in 2 ways.</li><li>The remaining two lower cards can be assigned to the two available upper boxes in \\(2!=2\\) ways. The remaining two upper cards can likewise be assigned to the available lower boxes in 2 ways. These cross-block assignments can never put a card in its own box. Every allowed placement is counted once, giving \\(3\\cdot2\\cdot3\\cdot2\\cdot2\\cdot2=144\\). I is true.</li><li>For II, list the cards in boxes 1 through 6 as \\((2,4,5,1,6,3)\\). No position contains its own number, and among the first three boxes only card 2 is a lower card. Following the box-to-card assignments gives the cycles \\(1\\to2\\to4\\to1\\) and \\(3\\to5\\to6\\to3\\). There is no two-way exchange, so there is no reciprocal pair. II is false.</li><li>If card 1 is in box 2, it is the unique lower card staying in the lower block. Its choice and its position are both fixed. There remain \\(3\\cdot2\\) choices for the upper card staying in its block, followed by the same two cross-block assignments in \\(2\\cdot2\\) ways. The number is 24, so the probability is \\(24/144=1/6\\), not \\(1/3\\). III is false.</li></ol>",
    "reasoningFormat": "Multiple statements"
  },
  {
    "n": 14,
    "stem": "A real polynomial \\(p\\) has degree at most 6 and satisfies\n\\[p(-1)=p(1)=0,\\qquad p(0)=1.\\]\nThe aim is to guarantee that \\(p(x)\\ge0\\) for every real \\(x\\), using a small number of additional checks. Three proposed tests are described below. Each statement asserts that its own test is sufficient; a polynomial is not assumed to pass the other two tests.<p><b>I.</b> It is sufficient to check that \\(p(-2)=p(2)=9\\).</p><p><b>II.</b> It is sufficient to check all four conditions \\(p'(-1)=p'(1)=0\\) and \\(p(-2)=p(2)=9\\).</p><p><b>III.</b> It is sufficient to check \\(p'(-1)=p'(1)=0\\) and \\(p(-2)=p(2)\\), without specifying that common value.</p><p>You may use the consequence of the Factor Theorem that if \\(p(r)=p'(r)=0\\), then \\((x-r)^2\\) is a factor of \\(p(x)\\).</p><p>Which statements are true?</p>",
    "opts": [
      "I only",
      "II only",
      "III only",
      "I and II only",
      "I and III only",
      "II and III only",
      "I, II and III",
      "None of them"
    ],
    "correct": 1,
    "topics": [
      "Logic",
      "General algebra",
      "Differentiation"
    ],
    "estimatedDifficulty": 8.0,
    "difficultySource": "author-estimate",
    "sol": "<p><b>Answer B.</b></p><ol class=\"worked-steps\"><li>First consider II. The derivative checks and the given roots force \\((x-1)^2(x+1)^2=(x^2-1)^2\\) to divide \\(p\\). Since the degree is at most 6, write \\(p(x)=(x^2-1)^2(Ax^2+Bx+C)\\), allowing \\(A\\) or \\(B\\) to be zero.</li><li>The value at zero gives \\(C=1\\). At 2 and -2, the squared factor equals 9. Requiring both values of \\(p\\) to be 9 gives \\(4A+2B+1=1\\) and \\(4A-2B+1=1\\). Subtraction yields \\(4B=0\\); addition yields \\(8A=0\\). Thus \\(p=(x^2-1)^2\\), which is non-negative everywhere. II is true.</li><li>I does not include the derivative checks. A counterexample is \\[p(x)=(x^2-1)^2+x(x^2-1)(x^2-4).\\] It has degree 5, and the added term vanishes at all five checked points \\(-2,-1,0,1,2\\). All the stated values are therefore correct.</li><li>Nevertheless, at \\(x=-3\\) this polynomial equals \\(64+(-3)\\cdot8\\cdot5=-56\\). Thus I is false; agreement at five points does not determine a polynomial allowed to have degree as high as 6.</li><li>For III, take \\(p(x)=(x^2-1)^2(1-x^2)\\). It has degree 6, has the required double roots and value 1 at zero, and is even, so \\(p(-2)=p(2)\\). But \\(p(2)=9(-3)=-27\\). The weaker equality test does not control the sign of the remaining quadratic. III is false.</li></ol>",
    "reasoningFormat": "Multiple statements"
  },
  {
    "n": 15,
    "stem": "Let \\(f(x)=ax^2+bx+c\\), where \\(a,b,c\\) are arbitrary real numbers; linear and constant functions are included. Consider the following property:<p>For every pair of real numbers \\(u<v\\), if the signed integral \\(\\int_u^vf(x)\\,dx\\) is positive, then the value of \\(f\\) at the midpoint \\((u+v)/2\\) is strictly positive.</p><p>The implication need not make any claim when the integral is zero or negative. Conversely, it is not enough that the implication works on just one interval. The coefficients must make it valid on every interval.</p><p>Which condition on the coefficients is necessary and sufficient? In the options, “or” includes the case where both alternatives hold.</p>",
    "opts": [
      "\\(a\\le0\\)",
      "\\(a\\le0\\) or \\(b^2-4ac\\le0\\)",
      "\\(a\\le0\\) or \\(a>0\\text{ and }b^2-4ac<0\\)",
      "\\(a<0\\) or \\(b^2-4ac<0\\)",
      "\\(a\\ge0\\) and \\(b^2-4ac\\le0\\)",
      "\\(f(0)>0\\)",
      "\\(a\\le0\\) and \\(b^2-4ac<0\\)"
    ],
    "correct": 2,
    "topics": [
      "Logic",
      "Integration",
      "General algebra"
    ],
    "estimatedDifficulty": 8.6,
    "difficultySource": "author-estimate",
    "sol": "<p><b>Answer C.</b></p><ol class=\"worked-steps\"><li>Write the interval as \\([m-h,m+h]\\), where \\(m=(u+v)/2\\) and \\(h=(v-u)/2>0\\). Expanding the endpoint antiderivatives of \\(ax^2+bx+c\\) gives \\[\\frac1{2h}\\int_{m-h}^{m+h}f(x)\\,dx=f(m)+\\frac{ah^2}{3}.\\] For example, the quadratic contribution is \\(a[(m+h)^3-(m-h)^3]/(6h)=am^2+ah^2/3\\); the linear and constant contributions are \\(bm\\) and \\(c\\).</li><li>If \\(a\\le0\\), this average is at most \\(f(m)\\). A positive integral has a positive average because \\(2h>0\\). Therefore \\(f(m)\\) is positive. All linear and constant functions are included in this argument.</li><li>Now let \\(a>0\\). If \\(f(m)>0\\) for every real \\(m\\), the conclusion of the implication always holds, so the property is satisfied. An upward-opening quadratic is strictly positive everywhere exactly when its discriminant is strictly negative: its minimum is \\(c-b^2/(4a)>0\\).</li><li>If instead some \\(m\\) has \\(f(m)\\le0\\), choose \\(h>0\\) so large that \\(ah^2/3>-f(m)\\). The displayed average is then positive, while the midpoint value is not positive. This interval disproves the property. Thus for \\(a>0\\), strict positivity everywhere is also necessary.</li><li>The complete condition is C. The strict discriminant inequality matters: \\(f(x)=x^2\\) has discriminant zero, and on \\([-1,1]\\) its integral is \\(2/3>0\\) while the midpoint value is zero. Allowing discriminant zero would incorrectly include this counterexample.</li></ol>",
    "reasoningFormat": "Necessary-and-sufficient condition for an implication"
  },
  {
    "n": 16,
    "stem": "Two real constants \\(b,c\\) are fixed. For each real parameter \\(a\\) in the closed interval \\([1,2]\\), consider\n\\[|x-a|=bx+c.\\]\nThe requirement is that, for <i>every</i> permitted \\(a\\), the equation has exactly two distinct real solutions and both solutions are strictly positive. The solutions are allowed to depend on \\(a\\). A solution at \\(x=0\\) is not allowed, and an entire interval of solutions does not count as “two”.<p>One proposed approach is to solve on the two sides of \\(x=a\\) separately, but then each answer must be checked against the side on which it was obtained. Cases in which a denominator vanishes must also be considered.</p><p>Which condition on \\(b,c\\) is necessary and sufficient for the requirement?</p>",
    "opts": [
      "\\(-1<b<1\\) and \\(-b<c<1\\)",
      "\\(-1<b<1\\) and \\(-2b<c<1\\)",
      "\\(-1/2\\le b<1\\), \\(c\\le1\\), \\(c\\ge-b\\), and \\(c\\ge-2b\\)",
      "\\(-1/2<b<1\\), \\(c<2\\), \\(c>-b\\), and \\(c>-2b\\)",
      "\\(-1/2<b<1\\), \\(0<c<1\\)",
      "\\(-1<b<1\\), \\(c>1\\), \\(c>-b\\), and \\(c>-2b\\)",
      "\\(-1/2<b\\le1\\), \\(c<1\\), \\(c>-b\\), and \\(c>-2b\\)",
      "\\(-1/2<b<1\\), \\(c<1\\), \\(c>-b\\), and \\(c>-2b\\)"
    ],
    "correct": 7,
    "topics": [
      "Logic",
      "Functions and Graphs",
      "General algebra"
    ],
    "estimatedDifficulty": 8.3,
    "difficultySource": "author-estimate",
    "sol": "<p><b>Answer H.</b></p><ol class=\"worked-steps\"><li>For \\(x\\le a\\), solving \\(a-x=bx+c\\) gives \\(x_L=(a-c)/(1+b)\\), when \\(b\\ne-1\\). For \\(x\\ge a\\), solving \\(x-a=bx+c\\) gives \\(x_R=(a+c)/(1-b)\\), when \\(b\\ne1\\). Each branch is linear and can contribute at most one solution unless it coincides with the line.</li><li>Two distinct solutions require \\(-1<b<1\\). To see why the other slopes fail, when \\(b>1\\), the requirement \\(x_L<a\\) gives \\(ab+c>0\\), but \\(x_R>a\\) gives \\(ab+c<0\\), a contradiction. The same opposite requirements arise for \\(b<-1\\). At \\(b=1\\) or \\(b=-1\\), one branch is parallel to the line or coincides with it: there are at most one or infinitely many solutions, never exactly two.</li><li>With \\(-1<b<1\\), both denominators are positive. The strict branch conditions \\(x_L<a<x_R\\) are each equivalent to \\(ab+c>0\\). Strictness matters: equality makes the two formulas describe the same vertex.</li><li>The right solution is then larger than \\(a\\ge1\\), so it is automatically positive. The left solution is positive exactly when \\(a-c>0\\). For every \\(a\\in[1,2]\\), this requires \\(c<1\\).</li><li>The linear expression \\(ab+c\\) is positive throughout \\([1,2]\\) exactly when it is positive at both endpoints. These give \\(b+c>0\\) and \\(2b+c>0\\), or \\(c>-b\\) and \\(c>-2b\\).</li><li>Together with \\(c<1\\), the latter inequality forces \\(-2b<1\\), so \\(b>-1/2\\); the earlier lower bound \\(b>-1\\) is redundant. We obtain H. Conversely every condition in H guarantees two distinct branch solutions and makes both positive for every permitted \\(a\\), completing both directions.</li></ol>",
    "reasoningFormat": "Necessary-and-sufficient condition with moving parameter"
  },
  {
    "n": 17,
    "stem": "Let\n\\[p(x)=ax^2+bx+c,\\]\nwhere \\(a,b,c\\) are integers and \\(a>0\\). Assume that \\(p(n)>0\\) for every integer \\(n\\), including zero and negative integers. The graph might nevertheless reach the axis or pass below it between integer inputs.<p>In this question an “integer translate” of a polynomial means replacing its input \\(x\\) by \\(x-m\\) for an integer \\(m\\); it does not mean adding an arbitrary constant to its output.</p><p><b>I.</b> The smallest possible value of \\(a\\) for which such a polynomial can be negative at a real input is 4.</p><p><b>II.</b> If \\(a=5\\) and \\(p\\) is negative at some real input, then for some integer \\(m\\),\n\\[p(x)=5(x-m)(x-m-1)+1.\\]</p><p><b>III.</b> If \\(1\\le a\\le4\\), then \\(p(x)\\ge0\\) for every real \\(x\\).</p><p>Which statements are true?</p>",
    "opts": [
      "I only",
      "II only",
      "III only",
      "I and II only",
      "I and III only",
      "II and III only",
      "I, II and III",
      "None of them"
    ],
    "correct": 5,
    "topics": [
      "Logic",
      "Number Theory",
      "General algebra"
    ],
    "estimatedDifficulty": 9.0,
    "difficultySource": "author-estimate",
    "sol": "<p><b>Answer F.</b></p><ol class=\"worked-steps\"><li>Let the vertex be at \\(v=-b/(2a)\\), and let its value be \\(d=c-b^2/(4a)\\). Then \\(p(x)=a(x-v)^2+d\\). Choose an integer \\(k\\) nearest to \\(v\\); its distance from \\(v\\) is at most \\(1/2\\).</li><li>The value \\(p(k)\\) is an integer and is strictly positive, so \\(p(k)\\ge1\\). Hence \\[d=p(k)-a(k-v)^2\\ge1-a/4.\\] If \\(a\\le4\\), this lower bound is non-negative, and so the entire quadratic is non-negative. III is true and the claimed value 4 in I is impossible.</li><li>The value 5 is attainable: \\(p(x)=5x(x-1)+1\\). For any integer \\(n\\), \\(n(n-1)\\ge0\\), so \\(p(n)\\ge1\\). But \\(p(1/2)=1-5/4=-1/4\\). The true least leading coefficient is 5, not 4.</li><li>To classify the case \\(a=5\\), use the nearest integer \\(k\\) again and put \\(t=x-k\\). Write \\(p(k+t)=5t^2+Bt+C\\), where \\(B=10k+b\\) is an integer and \\(C=p(k)\\) is an integer at least 1. The vertex in the \\(t\\)-coordinate is within \\([-1/2,1/2]\\), so \\(|B|\\le5\\).</li><li>Negativity at some real input requires the minimum \\(C-B^2/20\\) to be negative. Thus \\(B^2>20C\\ge20\\). Since \\(B\\) is an integer with \\(|B|\\le5\\), the only possibilities are \\(B=5\\) or \\(B=-5\\). The inequality \\(25>20C\\), together with integer \\(C\\ge1\\), then forces \\(C=1\\).</li><li>If \\(B=-5\\), the polynomial is \\(5t(t-1)+1\\), giving the displayed form with \\(m=k\\). If \\(B=5\\), it is \\(5t(t+1)+1\\), giving the same form with \\(m=k-1\\). This proves II; the two algebraic signs do not describe a missing second family.</li><li>At the boundary \\(a=4\\), strict positivity on integer inputs does not imply strict positivity everywhere: \\((2x-1)^2\\) vanishes at \\(x=1/2\\). This is why III correctly uses the non-strict inequality.</li></ol>",
    "reasoningFormat": "Multiple statements"
  },
  {
    "n": 18,
    "stem": "For \\(a>0\\), define \\(f_a(x)=x^2-a\\). Let \\(N(a)\\) be the number of distinct real solutions of\n\\[f_a(f_a(f_a(x)))=0.\\]\nThe function is applied three times; the expression is not the cube of \\(f_a(x)\\). A repeated algebraic root is counted once. In particular, if a step in solving backwards produces \\(x^2=0\\), it contributes one real value of \\(x\\), not two.<p>Let \\(\\rho\\) be the unique real number greater than 1 satisfying \\(\\rho^3-\\rho=1\\). You may use its existence and uniqueness without proving them. Its decimal value is not needed.</p><p><b>I.</b> There is no positive parameter \\(a\\) for which \\(N(a)=4\\).</p><p><b>II.</b> \\(N(a)=7\\) if and only if \\(a=\\rho^2\\).</p><p><b>III.</b> \\(N(a)=6\\) if and only if \\(1<a<\\rho^2\\).</p><p>Which statements are true?</p>",
    "opts": [
      "I only",
      "II only",
      "III only",
      "I and II only",
      "I and III only",
      "II and III only",
      "I, II and III",
      "None of them"
    ],
    "correct": 5,
    "topics": [
      "Logic",
      "Functions and Graphs",
      "General algebra"
    ],
    "estimatedDifficulty": 9.3,
    "difficultySource": "author-estimate",
    "sol": "<p><b>Answer F.</b></p><ol class=\"worked-steps\"><li>Work backwards through the three applications. First \\(f_a(f_a(x))=\\pm\\sqrt a\\). Next \\(f_a(x)=\\pm\\sqrt{a+\\sqrt a}\\), and also \\(f_a(x)=\\pm\\sqrt{a-\\sqrt a}\\) when the latter square root is real. Finally each such value \\(y=f_a(x)\\) gives \\(x^2=a+y\\).</li><li>If \\(0<a<1\\), then \\(a-\\sqrt a<0\\), so only the first pair of intermediate values exists. Also \\(a-\\sqrt{a+\\sqrt a}<0\\), because \\(a^2<a<a+\\sqrt a\\). Thus only \\(x^2=a+\\sqrt{a+\\sqrt a}>0\\) survives, giving two roots.</li><li>At \\(a=1\\), the intermediate values \\(y\\) are \\(\\sqrt2,-\\sqrt2,0\\); the two signs of the zero square root give the same value. They yield \\(x^2=1+\\sqrt2\\), \\(1-\\sqrt2\\), and 1. The first and last give two roots each; the middle gives none. Hence \\(N(1)=4\\), disproving I.</li><li>For \\(a>1\\), both square roots \\(A=\\sqrt{a+\\sqrt a}\\) and \\(B=\\sqrt{a-\\sqrt a}\\) are positive, with \\(A>B\\). The four candidates for \\(x^2\\) are \\(a+A,a-A,a+B,a-B\\). They are distinct. The first and third are positive, and \\(a-B>0\\) because \\(a^2>a>a-\\sqrt a\\). These three values contribute six roots.</li><li>The only undecided value is \\(a-A\\). It is positive exactly when \\(a^2>a+\\sqrt a\\). Put \\(t=\\sqrt a>1\\); division by \\(t>0\\) turns this into \\(t^3-t>1\\). For \\(t>1\\), the expression \\(t^3-t\\) is strictly increasing: if \\(s>t>1\\), the difference is \\((s-t)(s^2+st+t^2-1)>0\\).</li><li>Therefore \\(a-A<0\\) for \\(1<a<\\rho^2\\), equals zero at \\(a=\\rho^2\\), and is positive above that threshold. These cases add respectively zero, one and two roots, giving totals 6, 7 and 8. Together with the cases below and at 1, this proves both II and III and rules out any additional exceptional parameter.</li></ol>",
    "reasoningFormat": "Multiple statements"
  },
  {
    "n": 19,
    "stem": "Five real numbers \\(x_1,\\ldots,x_5\\), not necessarily distinct, satisfy\n\\[x_1+\\cdots+x_5=0,\\qquad x_1^2+\\cdots+x_5^2=5.\\]\nLet \\(R\\) be their range. We seek the greatest constant \\(K\\) for which every such data set has \\(R\\ge K\\). A bound alone is not enough: the greatest constant must be attainable by some permitted data set.<p>A proposed proof subtracts the smallest value and divides all five values by \\(R\\), obtaining numbers \\(y_i\\) in \\([0,1]\\). Write \\(\\bar y=(y_1+\\cdots+y_5)/5\\) and \\(V=\\sum_{i=1}^5(y_i-\\bar y)^2\\). The proof then uses \\(5=R^2V\\) and a sharp upper bound \\(V\\le M\\).</p><p>Which pair gives the sharp value of \\(M\\) for five numbers in \\([0,1]\\), and the resulting greatest value of \\(K\\)? Here “sharp” means the upper bound itself is attainable.</p>",
    "opts": [
      "\\(M=5/4,\\quad K=2\\)",
      "\\(M=1,\\quad K=\\sqrt5\\)",
      "\\(M=6/5,\\quad K=5/\\sqrt6\\)",
      "\\(M=6/5,\\quad K=\\sqrt{5/6}\\)",
      "\\(M=3/2,\\quad K=\\sqrt{10/3}\\)",
      "\\(M=2,\\quad K=\\sqrt{5/2}\\)",
      "\\(M=5/4,\\quad K=\\sqrt5/2\\)",
      "\\(M=5,\\quad K=1\\)"
    ],
    "correct": 2,
    "topics": [
      "Logic",
      "Probability and Statistics",
      "General algebra"
    ],
    "estimatedDifficulty": 9.4,
    "difficultySource": "author-estimate",
    "sol": "<p><b>Answer C.</b></p><ol class=\"worked-steps\"><li>The range is positive: if \\(R=0\\), all five numbers would be equal, and their zero sum would force all of them to be zero, contradicting the sum of squares 5. Let the smallest be \\(m\\), so \\(x_i=m+Ry_i\\). Averaging gives \\(0=m+R\\bar y\\), hence \\(x_i=R(y_i-\\bar y)\\). Squaring and adding proves \\(5=R^2V\\).</li><li>Expand the centred squares: \\(V=\\sum y_i^2-(\\sum y_i)^2/5\\). Fix four of the \\(y_i\\), with sum \\(T\\) and sum of squares \\(U\\), and let the fifth value be \\(s\\). Then \\[V(s)=s^2+U-(s+T)^2/5=\\tfrac45s^2-\\tfrac{2T}{5}s+U-T^2/5.\\]</li><li>This quadratic lies at or below the straight chord joining its values at 0 and 1: direct subtraction gives \\((1-s)V(0)+sV(1)-V(s)=\\tfrac45s(1-s)\\ge0\\) for \\(0\\le s\\le1\\). At least one endpoint value is therefore no smaller than \\(V(s)\\). Replacing that coordinate by 0 or 1 cannot decrease \\(V\\).</li><li>Apply that replacement separately to all five coordinates, recalculating the other-coordinate sum when needed. Each step cannot decrease \\(V\\), and after five steps every coordinate is 0 or 1. Thus an upper bound for these endpoint configurations is an upper bound for all configurations. This argument does not assume in advance that the original maximum occurs at endpoints.</li><li>If there are \\(k\\) ones and \\(5-k\\) zeros, then \\(V=k-k^2/5=k(5-k)/5\\). For integer \\(k=0,1,2,3,4,5\\), these values are \\(0,4/5,6/5,6/5,4/5,0\\). Therefore the sharp upper bound is \\(M=6/5\\). The continuous-variable guess \\(k=5/2\\) is not a possible count of ones.</li><li>Consequently \\(5=R^2V\\le(6/5)R^2\\), so \\(R\\ge5/\\sqrt6\\). For attainment, take two numbers equal to \\(-3/\\sqrt6\\) and three equal to \\(2/\\sqrt6\\). Their sum is \\((-6+6)/\\sqrt6=0\\), their squared sum is \\((2\\cdot9+3\\cdot4)/6=5\\), and their range is \\(5/\\sqrt6\\). No larger universal lower bound is possible.</li></ol>",
    "reasoningFormat": "Complete a sharp-bound proof"
  },
  {
    "n": 20,
    "stem": "A function \\(f\\) is defined on all real numbers and takes real values. It satisfies both identities\n\\[f(x)+f(-x)=2x^2+1,\\qquad f(x)+f(1-x)=x^2-x+1\\]\nfor every real \\(x\\). No continuity or polynomial assumption is imposed on \\(f\\).<p>Define the two polynomials\n\\[P(x)=-\\frac{x^3}{3}+x^2-\\frac{2x}{3}+\\frac12,\\qquad Q(x)=\\frac{x^3}{3}+x^2+\\frac{2x}{3}+\\frac12.\\]\nA function \\(h\\) is <i>odd</i> if \\(h(-x)=-h(x)\\), and <i>even</i> if \\(h(-x)=h(x)\\). Saying it has period 1 means \\(h(x+1)=h(x)\\) for every real \\(x\\); 1 need not be its smallest positive period, and the zero function is permitted. Period 2 is defined in the same way.</p><p>Which option describes exactly all solutions, neither omitting a possible solution nor admitting an invalid one? Every condition on \\(h\\) is to hold for all real inputs.</p>",
    "opts": [
      "\\(f=P+h\\), where \\(h\\) is even and has period 1.",
      "\\(f=Q+h\\), where \\(h\\) is odd and has period 1.",
      "\\(f=P+h\\), where \\(h\\) is odd and has period 2.",
      "\\(f=P+h\\), where \\(h\\) is odd and \\(h(x+1)=-h(x)\\).",
      "\\(f=P+h\\), where \\(h\\) is odd and \\(h(x+1)=h(x)+1\\).",
      "\\(f=Q+h\\), where \\(h\\) is even and has period 1.",
      "\\(f=P\\), with no other solutions.",
      "\\(f=P+h\\), where \\(h\\) is any function with period 1.",
      "\\(f=P+h\\), where \\(h\\) is any odd function.",
      "\\(f=P+h\\), where \\(h\\) is odd and has period 1."
    ],
    "correct": 9,
    "topics": [
      "Logic",
      "Functions and Graphs",
      "General algebra"
    ],
    "estimatedDifficulty": 9.0,
    "difficultySource": "author-estimate",
    "sol": "<p><b>Answer J.</b></p><ol class=\"worked-steps\"><li>Apply the second identity with input \\(-x\\): \\(f(-x)+f(1+x)=x^2+x+1\\). Subtract the first identity, \\(f(-x)+f(x)=2x^2+1\\). This gives \\[f(x+1)-f(x)=x-x^2.\\] The two reflection rules have forced a translation rule; it cannot be chosen independently.</li><li>For a cubic \\(Ax^3+Bx^2+Cx+D\\), subtracting its value at \\(x\\) from its value at \\(x+1\\) gives \\(3Ax^2+(3A+2B)x+(A+B+C)\\). Matching \\(-x^2+x\\) gives \\(A=-1/3\\), \\(B=1\\), \\(C=-2/3\\). The first original identity at zero gives \\(2f(0)=1\\), suggesting \\(D=1/2\\). These coefficients produce \\(P\\).</li><li>We must check a particular solution, not just its difference rule. Odd powers cancel in \\(P(x)+P(-x)\\), leaving \\(2x^2+1\\). Also \\(x^3+(1-x)^3=1-3x+3x^2\\) and \\(x^2+(1-x)^2=1-2x+2x^2\\), so \\[P(x)+P(1-x)=-\\tfrac13(1-3x+3x^2)+(1-2x+2x^2)-\\tfrac23+1=x^2-x+1.\\]</li><li>For any solution \\(f\\), let \\(h=f-P\\). Subtracting the first identity for \\(P\\) from that for \\(f\\) gives \\(h(x)+h(-x)=0\\), so \\(h\\) is odd. Subtracting their translation rules gives \\(h(x+1)=h(x)\\). Thus every solution has the form in J.</li><li>Conversely, suppose \\(h\\) is odd and has period 1. Then \\(h(x)+h(-x)=0\\), and \\(h(1-x)=h(-x)=-h(x)\\), where periodicity is used in the first equality. Adding \\(h\\) to \\(P\\) therefore preserves both required identities. This proves sufficiency as well as necessity.</li><li>There are non-zero functions of the required type, so the polynomial alone is not the complete answer. For example, define \\(h(x)=1\\) when \\(x=n+1/3\\), \\(h(x)=-1\\) when \\(x=n+2/3\\), and \\(h(x)=0\\) otherwise, with \\(n\\) any integer. Translation by 1 preserves these cases, while negation exchanges the first two. Hence G omits valid solutions; J includes them without requiring continuity.</li><li>The other alternatives either use the wrong particular polynomial, remove a necessary condition, or replace period 1 by a different condition. For example a non-zero constant disproves sufficiency of H; \\(h(x)=x\\) disproves sufficiency of I. A non-zero odd function which changes sign after translation by 1 is permitted by D but violates the derived translation rule. Only J matches both necessary conditions and the converse check.</li></ol>",
    "reasoningFormat": "Characterise all functions: necessity and sufficiency"
  }
];
