/* Authored revision lessons. All HTML is fixed site content, never user input. */
window.DuckRevisionGuides = {
  "tricks": {
    "title": "Recurring tricks",
    "topics": [
      [
        "Triangles",
        [
          [
            "SSA non congruent triangles counting",
            "<p class=\"rg-ssa-note\">This type of problem came up 4 times in official past papers, and is worth mastering before your sitting</p><p>Let \\(A\\) be the given angle, \\(a\\) its opposite side and \\(b\\) the other given side. Put \\(h=b\\sin A\\).</p><p>The four cases below assume \\(0^\\circ&lt;A&lt;90^\\circ\\) and positive side lengths. Fix \\(OC=b\\), with angle \\(A\\) at \\(O\\). The third vertex \\(B\\) must lie both on the horizontal ray from \\(O\\) and on the circle centred at \\(C\\) with radius \\(a\\). The perpendicular \\(CH\\) has length \\(h\\).</p><div class=\"rg-ssa-cases\">\n<section class=\"rg-ssa-case\"><h4>\\(a&lt;h\\): no triangles</h4><figure data-ssa-case=\"0\" aria-label=\"The side of length a cannot reach the baseline\"></figure><p>The shortest distance from \\(C\\) to the baseline is \\(h\\). Since \\(a&lt;h\\), the circle cannot reach the baseline, so there is no possible position for \\(B\\).</p></section>\n<section class=\"rg-ssa-case\"><h4>\\(a=h\\): one triangle</h4><figure data-ssa-case=\"1\" aria-label=\"The circle is tangent to the baseline at H\"></figure><p>The circle just touches the baseline at \\(H\\), giving the single possibility \\(B=H\\). The triangle is right-angled at \\(B\\), and the side of length \\(a\\) is also the height \\(h\\).</p></section>\n<section class=\"rg-ssa-case\"><h4>\\(h&lt;a&lt;b\\): two triangles</h4><figure data-ssa-case=\"2\" aria-label=\"Two circle intersections give two non-congruent triangles\"></figure><p>The circle crosses the ray twice, at \\(B_1\\) and \\(B_2\\). Both points lie beyond \\(O\\), producing two valid triangles with the same \\(a\\), \\(b\\) and \\(A\\). Their third sides \\(OB_1\\) and \\(OB_2\\) differ, so the triangles are non-congruent.</p></section>\n<section class=\"rg-ssa-case\"><h4>\\(a\\ge b\\): one triangle</h4><figure data-ssa-case=\"3\" aria-label=\"Only one circle intersection is on the forward ray\"></figure><p>When \\(a&gt;b\\), as drawn, the second intersection \\(X\\) is behind \\(O\\), outside the ray defining angle \\(A\\). Only the forward intersection \\(B\\) is valid.</p><p>At the boundary \\(a=b\\), \\(X\\) coincides with \\(O\\), giving a zero-length third side rather than a triangle. The other intersection still gives exactly one valid triangle.</p></section>\n</div><div class=\"rg-angle-note\"><strong>If the given angle is right or obtuse</strong><p>For \\(90^\\circ\\le A&lt;180^\\circ\\), there is exactly one triangle when \\(a&gt;b\\), and none when \\(a\\le b\\). Do not apply the four acute-angle cases to these angles.</p></div><p class=\"rg-ssa-sources\">The four direct appearances in the published 2016–2023 archive are 2018 Paper 1 Q19, 2018 Paper 2 Q14, 2022 Paper 1 Q17 and 2023 Paper 1 Q8.</p>"
          ]
        ]
      ],
      [
        "Algebra",
        [
          [
            "Quadratics in disguise",
            "<p>When an expression and its square occur, replace that expression by one variable. Solve the resulting quadratic, then substitute back.</p><p>Carry the possible values of the substituted expression into the new equation. For instance, \\(u=x^2\\) requires \\(u\\ge0\\), while \\(u=2^x\\) requires \\(u>0\\).</p><p>Count the original solutions, not merely the values of the new variable. For \\(u=x^2\\), a positive \\(u\\) gives two real values of \\(x\\), zero gives one, and a negative \\(u\\) gives none.</p>"
          ],
          [
            "Reciprocal substitutions",
            "<p>When powers of \\(x\\) and \\(1/x\\) appear symmetrically, try \\(u=x+1/x\\), with \\(x\\ne0\\).</p>\\[x^2+\\frac1{x^2}=u^2-2.\\]<p>For real \\(x\\), \\(u\\le-2\\) or \\(u\\ge2\\). This follows from \\((x-1)^2\\ge0\\) for positive \\(x\\), and the corresponding negative case.</p><p>For a reciprocal quartic, divide by \\(x^2\\) only after checking that \\(x=0\\) is not a solution.</p>"
          ],
          [
            "Coefficient sums by substitution",
            "<p>For \\(P(x)=c_0+c_1x+\\cdots+c_nx^n\\), evaluate at \\(1\\) to add all coefficients and at \\(-1\\) to alternate their signs.</p>\\[E=\\frac{P(1)+P(-1)}2,\\qquad O=\\frac{P(1)-P(-1)}2,\\]<p>where \\(E\\) and \\(O\\) are the sums of coefficients of even and odd powers. The constant is an even-power term.</p>"
          ],
          [
            "Remainders with quadratic or higher-degree divisors",
            "<p>Write \\(P(x)=D(x)Q(x)+R(x)\\), where the degree of \\(R\\) is smaller than the degree of \\(D\\). For a linear divisor \\(x-a\\), the remainder is the number \\(P(a)\\). For a quadratic divisor, start with \\(R(x)=ux+v\\); for a cubic, start with \\(ux^2+vx+w\\).</p><p>If \\(D(a)=0\\), then \\(R(a)=P(a)\\). A degree-\\(m\\) divisor with \\(m\\) distinct known roots gives \\(m\\) equations for the remainder's coefficients.</p><p><strong>When roots are inconvenient:</strong> use the divisor to reduce higher powers to lower ones. Continue until the expression has degree smaller than the divisor.</p><p><strong>Repeated factors need extra information.</strong> Substituting the same root twice does not give two equations. For a factor \\((x-a)^2\\), differentiating \\(P=DQ+R\\) also gives \\(R'(a)=P'(a)\\). Alternatively, use polynomial division. Do not assume repeated roots provide independent value conditions.</p>"
          ],
          [
            "Recognise a nested surd as a square",
            "<p>To simplify \\(\\sqrt{a+2\\sqrt b}\\), seek \\(u,v\\ge0\\) satisfying \\(u+v=a\\) and \\(uv=b\\). Then</p>\\[(\\sqrt u+\\sqrt v)^2=a+2\\sqrt b.\\]<p>For a minus sign, the principal square root is \\(|\\sqrt u-\\sqrt v|\\). Check which square root is larger before removing the modulus.</p>"
          ]
        ]
      ],
      [
        "Signs, modulus and bounds",
        [
          [
            "Split into sign cases",
            "<p>Multiplying or dividing an inequality by a negative expression reverses its direction. If its sign is unknown, split the domain into cases first, or move everything to one side and use a sign chart.</p><p>When squaring \\(\\sqrt{f(x)}=g(x)\\), retain \\(f(x)\\ge0\\) and \\(g(x)\\ge0\\), then check candidates in the original equation.</p>"
          ],
          [
            "Square roots produce modulus",
            "<p>The square-root symbol means the nonnegative root. Therefore</p>\\[\\sqrt{u^2}=|u|,\\qquad \\sqrt{(x-3)^2}=|x-3|.\\]"
          ],
          [
            "Modulus as distance",
            "<p>Interpret \\(|x-a|\\) as the distance from \\(x\\) to \\(a\\) on the number line.</p>\\[|x-a|&lt;r\\iff a-r&lt;x&lt;a+r\\quad(r&gt;0).\\]<p>For distinct \\(a,b\\), \\(|x-a|=|x-b|\\) has the single solution \\(x=(a+b)/2\\).</p><p>If \\(a=b\\), the distances are equal for every real \\(x\\): check this special case before dividing by \\(a-b\\).</p>"
          ],
          [
            "Graphs of sums of distances: the median rule",
            "<p>Sort the points \\(a_1\\le\\cdots\\le a_n\\). The graph of \\(F(x)=\\sum_{i=1}^n|x-a_i|\\) is continuous and piecewise linear. Between points, its slope is “number to the left minus number to the right”. Crossing one point increases the slope by 2 (or by \\(2k\\) if \\(k\\) points coincide).</p><p><strong>Odd number of points:</strong> the minimum occurs at the middle point. <strong>Even number:</strong> every point between the two middle points minimises the sum. Find the minimum value by substituting any minimiser.</p><div class=\"rg-graphs\"></div><p><strong>Why the rule works:</strong> pair the leftmost and rightmost points, then the next pair, and so on. Each pair is minimised everywhere between its two points. All these intervals overlap in the middle; an unpaired middle term is minimised at its point.</p><p>This is the unweighted rule. If terms have unequal coefficients, use their actual slopes rather than simply counting points.</p>"
          ],
          [
            "Minimums and lower bounds",
            "<p>A lower bound \\(L\\) satisfies \\(f(x)\\ge L\\) throughout the domain. A minimum must also be <strong>attained</strong> at an allowed input. The greatest lower bound need not be a minimum.</p><p>To identify a minimum, check the equality conditions of your bound against the domain. If the bound is only approached at an excluded endpoint, it may be a greatest lower bound without being a minimum.</p>"
          ]
        ]
      ],
      [
        "Graphs and solution counts",
        [
          [
            "Turn an equation into intersections",
            "<p>The solutions of \\(f(x)=g(x)\\) are the x-coordinates of the intersections of their graphs. Count intersections before trying to calculate them.</p><p>If one graph is strictly increasing and the other strictly decreasing on an interval, there can be at most one intersection there. Existence still needs a separate check.</p>"
          ],
          [
            "Turn a parameter into a horizontal line",
            "<p>Rewrite the equation as \\(f(x)=k\\). Varying \\(k\\) moves a horizontal line; the number of solutions changes at critical heights such as extrema and excluded or included boundary values.</p>"
          ],
          [
            "Use symmetry before solving",
            "<p>If the domain is symmetric and \\(f(-x)=f(x)\\), the graph is even: roots of \\(f(x)=k\\) occur in pairs \\(\\pm x\\), except possibly \\(0\\). If \\(f(-x)=-f(x)\\), the graph is odd: roots of \\(f(x)=0\\) pair in the same way.</p><p>For an odd function, a nonzero horizontal level does <strong>not</strong> generally have paired roots: reflecting \\(f(x)=k\\) gives \\(f(-x)=-k\\).</p>"
          ]
        ]
      ],
      [
        "Trigonometry",
        [
          [
            "Change the interval with the angle",
            "<p>When setting \\(u=ax+b\\), transform both ends of the interval. If \\(a&lt;0\\), reverse their order and keep track of open and closed endpoints.</p>"
          ],
          [
            "An inverse-trig answer is only one branch",
            "<p>If \\(\\alpha\\) is one solution, generate all branches and then filter to the interval:</p>\\[\\begin{aligned}\\sin u=\\sin\\alpha &:~u=\\alpha+360^\\circ n\\ \\text{or}\\ 180^\\circ-\\alpha+360^\\circ n,\\\\\\cos u=\\cos\\alpha &:~u=\\pm\\alpha+360^\\circ n,\\\\\\tan u=\\tan\\alpha &:~u=\\alpha+180^\\circ n,\\end{aligned}\\quad n\\in\\mathbb Z.\\]<p>In radians, replace \\(360^\\circ\\) by \\(2\\pi\\) and \\(180^\\circ\\) by \\(\\pi\\). Remove duplicates at special values.</p>"
          ],
          [
            "Turn mixed squares into one trig variable",
            "<p>Use \\(\\sin^2x+\\cos^2x=1\\), then solve a quadratic in \\(\\sin x\\) or \\(\\cos x\\). Reject values outside \\([-1,1]\\) before solving for angles.</p><p>Factor rather than dividing by a trig expression: division can discard solutions where that expression is zero.</p>"
          ]
        ]
      ],
      [
        "Exponentials and logarithms",
        [
          [
            "Rewrite everything in the same base",
            "<p>If all bases are powers of one positive number other than 1, rewrite them using that base and equate exponents.</p>"
          ],
          [
            "Check the original logarithm domains",
            "<p>Every original log argument must be strictly positive. Combining logs can hide restrictions: a positive product does not mean each factor is positive.</p><p>If the base is variable, also require that it is positive and not equal to 1.</p>"
          ]
        ]
      ],
      [
        "Sequences and sums",
        [
          [
            "Calculate a few terms, then explain the pattern",
            "<p>A recurrence may hide a short cycle. Calculate exact values and check that each step is defined. Seeing a pattern suggests a proof; it does not replace one.</p>"
          ],
          [
            "Look for telescoping",
            "<p>Rewrite each term as a difference of neighbouring terms. Write out the beginning and end of the sum before cancelling.</p>\\[\\frac1{n(n+1)}=\\frac1n-\\frac1{n+1}.\\]"
          ]
        ]
      ],
      [
        "Calculus",
        [
          [
            "Include endpoints when finding extrema",
            "<p>For a continuous function on a closed interval, compare values at all stationary points, endpoints and any interior points where the derivative does not exist. Stationary points alone are insufficient.</p><p>An excluded endpoint may give a bound but cannot be where a maximum or minimum is attained.</p>"
          ],
          [
            "King’s rule: pair reflected integrand values",
            "<p>Reflect an integrable function across the midpoint of \\([a,b]\\). Reflection preserves signed area, so</p>\\[I=\\int_a^b f(x)\\,dx=\\int_a^b f(a+b-x)\\,dx.\\]<p>Adding the two expressions gives</p>\\[2I=\\int_a^b\\bigl(f(x)+f(a+b-x)\\bigr)\\,dx.\\]<p>If the bracket is a constant \\(C\\), then \\(I=C(b-a)/2\\). The key is to <strong>check the reflected sum</strong>; the original function need not be constant or symmetric.</p><p>This is a useful symmetry argument; no memorised advanced integration method is needed.</p>"
          ]
        ]
      ]
    ]
  },
  "logic": {
    "title": "Logic",
    "topics": [
      [
        "Statements and implication",
        [
          [
            "What does an implication claim?",
            "<p>\\(P\\Rightarrow Q\\) says that every case satisfying \\(P\\) also satisfies \\(Q\\). It is false only when \\(P\\) is true and \\(Q\\) is false.</p><div class=\"rg-table\"><table><thead><tr><th>P</th><th>Q</th><th>P ⇒ Q</th></tr></thead><tbody><tr><td>True</td><td>True</td><td>True</td></tr><tr><td>True</td><td>False</td><td>False</td></tr><tr><td>False</td><td>True</td><td>True</td></tr><tr><td>False</td><td>False</td><td>True</td></tr></tbody></table></div><p><strong>Example:</strong> “If an integer is divisible by 4, it is even.” The integer 6 does not disprove this: it does not satisfy the premise. A counterexample would have to be divisible by 4 but odd.</p><p>A false premise does not establish the conclusion; it simply cannot falsify this implication.</p>"
          ],
          [
            "Converse, inverse and contrapositive",
            "<p>Starting from \\(P\\Rightarrow Q\\):</p><ul><li>Converse: \\(Q\\Rightarrow P\\).</li><li>Inverse: \\(\\neg P\\Rightarrow\\neg Q\\).</li><li>Contrapositive: \\(\\neg Q\\Rightarrow\\neg P\\).</li></ul><p>Only the contrapositive is always equivalent to the original. The converse and inverse are equivalent to each other.</p><p><strong>Example:</strong> “Divisible by 4 implies even” is equivalent to “Not even implies not divisible by 4”. Its converse is false: 6 is even but not divisible by 4.</p>"
          ],
          [
            "If, only if, necessary and sufficient",
            "<div class=\"rg-table\"><table><thead><tr><th>Wording</th><th>Meaning</th></tr></thead><tbody><tr><td>P if Q</td><td>\\(Q\\Rightarrow P\\)</td></tr><tr><td>P only if Q</td><td>\\(P\\Rightarrow Q\\)</td></tr><tr><td>P is sufficient for Q</td><td>\\(P\\Rightarrow Q\\)</td></tr><tr><td>P is necessary for Q</td><td>\\(Q\\Rightarrow P\\)</td></tr></tbody></table></div><p><strong>Example:</strong> being divisible by 4 is sufficient for being even. Being even is necessary for divisibility by 4. Neither statement claims that all even numbers are divisible by 4.</p><p>“Necessary” means required; “sufficient” means enough on its own.</p>"
          ],
          [
            "If and only if: two separate directions",
            "<p>\\(P\\iff Q\\) means both \\(P\\Rightarrow Q\\) and \\(Q\\Rightarrow P\\). Test each separately.</p><p><strong>Example:</strong> for real \\(x\\), \\(x=2\\Rightarrow x^2=4\\), but the reverse fails at \\(x=-2\\). The correct equivalence is</p>\\[x^2=4\\iff(x=2\\text{ or }x=-2).\\]<p>Adding the assumption \\(x\\ge0\\) makes \\(x^2=4\\iff x=2\\) valid. Domains can change logical equivalence.</p>"
          ]
        ]
      ],
      [
        "Negation and quantifiers",
        [
          [
            "Negate and/or statements",
            "<p>In mathematical logic, “or” is inclusive unless stated otherwise: one or both statements may hold.</p>\\[\\neg(P\\land Q)\\iff\\neg P\\lor\\neg Q,\\qquad\\neg(P\\lor Q)\\iff\\neg P\\land\\neg Q.\\]<p><strong>Example:</strong> the negation of “\\(x&gt;0\\) and \\(y&gt;0\\)” is “\\(x\\le0\\) or \\(y\\le0\\)”. It does not require both to be nonpositive.</p><p>Statements are <strong>logical negations of each other</strong> when exactly one is true in every allowed case. “\\(x&gt;0\\)” and “\\(x&lt;0\\)” are not: both fail at zero.</p>"
          ],
          [
            "Negate an implication",
            "<p>The negation of “if P then Q” is the exact situation in which it fails:</p>\\[\\neg(P\\Rightarrow Q)\\iff P\\land\\neg Q.\\]<p><strong>Example:</strong> to deny “Every positive real number has square greater than itself”, say “There exists a positive real number whose square is less than or equal to itself”. The value \\(x=1/2\\) supplies a counterexample.</p><p>Reversing the arrow or negating both statements is not the negation of the original implication.</p>"
          ],
          [
            "Negate every and some",
            "<p>\\(\\forall\\) means “for every”; \\(\\exists\\) means “there exists at least one”. Negation swaps them:</p>\\[\\neg(\\forall x\\,P(x))\\iff\\exists x\\,\\neg P(x),\\qquad\\neg(\\exists x\\,P(x))\\iff\\forall x\\,\\neg P(x).\\]<p><strong>Example:</strong> “Not every student solved every question” means “Some student failed to solve at least one question”. It does not mean that no student solved anything.</p><p>Keep the domain unchanged: negating a claim about integers still gives a claim about integers.</p>"
          ],
          [
            "Quantifier order changes the claim",
            "<p>\\(\\forall x\\,\\exists y\\) permits a different \\(y\\) for each \\(x\\). In \\(\\exists y\\,\\forall x\\), one fixed \\(y\\) must work for all \\(x\\).</p><p><strong>Example over the reals:</strong> “For every \\(x\\), there exists \\(y&gt;x\\)” is true: choose \\(y=x+1\\). “There exists \\(y\\) greater than every \\(x\\)” is false: take \\(x=y+1\\).</p><p>To negate a sequence of quantifiers, swap each in place and negate the final condition; do not reorder them.</p>"
          ]
        ]
      ],
      [
        "Checking and constructing arguments",
        [
          [
            "Find an efficient counterexample",
            "<p>One admissible counterexample disproves a universal claim. Try zero, one, minus one, equal variables, fractions, negatives and included boundary values where allowed.</p><p><strong>Example:</strong> “If \\(x^2&gt;x\\), then \\(x&gt;1\\)” fails at \\(x=-1\\), since \\(1&gt;-1\\). Positive examples alone can hide an entire negative branch.</p><p>To prove an existence claim, one working example is enough. To prove a universal claim, checking many examples is not enough.</p>"
          ],
          [
            "Locate the first invalid step",
            "<p>Check each inference, especially division by a possibly zero quantity, inequality multiplication by an unknown sign, squaring, and square roots.</p><div class=\"rg-example\"><strong>Example</strong><p>Suppose \\(a=b=1\\). Then \\(a^2=ab\\), so \\((a-b)(a+b)=b(a-b)\\). Cancelling \\(a-b\\) appears to give \\(a+b=b\\), hence \\(2=1\\).</p><p>The first invalid step is the cancellation: \\(a-b=0\\). The earlier equalities are valid.</p></div>"
          ],
          [
            "A true conclusion can have an invalid proof",
            "<p>The truth of a statement and the validity of its justification are separate questions.</p><p><strong>Example:</strong> “For every real \\(x\\), \\(x^2\\ge0\\), because \\(x\\ge0\\) and multiplying two nonnegative numbers gives a nonnegative result.” The conclusion is true, but the argument wrongly assumes \\(x\\ge0\\).</p><p>Repair it by splitting into \\(x\\ge0\\) and \\(x&lt;0\\). In the second case, \\(x^2=(-x)^2\\), a product of two positive numbers.</p>"
          ],
          [
            "Existence is not uniqueness",
            "<p>Existence means at least one solution. Uniqueness means at most one. “Exactly one” requires both.</p><p><strong>Example:</strong> \\(x^3+x=2\\) has the solution \\(x=1\\). Also \\(f'(x)=3x^2+1&gt;0\\), so \\(f(x)=x^3+x\\) is strictly increasing and takes the value 2 at most once. Together these show there is exactly one real solution.</p><p>Finding one solution alone does not exclude others; proving “at most one” alone does not show any solution exists.</p>"
          ]
        ]
      ]
    ]
  }
};
