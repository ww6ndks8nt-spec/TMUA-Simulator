/* Beyond Horizon Set 2 Paper 2: reviewed editorial update, 2026-10-03. */
const BH2P2_EXPANDED=[
  {
    "n": 1,
    "stem": "\\(3x^4-6x^3+kx^2-8x-12\\) is divisible by \\(x-3\\), so it is also divisible by",
    "opts": [
      "\\(3x^2-4\\)",
      "\\(3x^2+4\\)",
      "\\(3x^2+x\\)",
      "\\(3x^2-x\\)",
      "\\(4x^2+x\\)",
      "\\(4x^2-x\\)"
    ],
    "correct": 1,
    "sol": "<div class=\"bh-expanded-solution\"><p><strong>Answer B.</strong></p><p>Let \\(P(x)=3x^4-6x^3+kx^2-8x-12\\). The Factor Theorem says that divisibility by \\(x-3\\) is equivalent to \\(P(3)=0\\). Therefore\n\\[3(81)-6(27)+9k-8(3)-12=0,\\]\n\\[243-162+9k-24-12=0\\quad\\Longrightarrow\\quad45+9k=0,\\]\nso \\(k=-5\\).</p><p>Substitute this value and group terms so that a common quadratic appears:\n\\[\\begin{aligned}P(x)&amp;=3x^4-6x^3-5x^2-8x-12\\\\&amp;=3x^2(x^2-2x-3)+4(x^2-2x-3)\\\\&amp;=(3x^2+4)(x^2-2x-3)\\\\&amp;=(3x^2+4)(x-3)(x+1).\\end{aligned}\\]\nThis proves that \\(3x^2+4\\) is a factor, giving <strong>B</strong>.</p><p>The factors in C–F all contain \\(x\\), so none can divide \\(P\\), whose constant term is \\(-12\\ne0\\). The factorisation also rules out A: the real roots \\(\\pm2/\\sqrt3\\) of \\(3x^2-4\\) are neither \\(3\\) nor \\(-1\\), while \\(3x^2+4\\) has no real roots.</p></div>",
    "estimatedDifficulty": 5.5,
    "contentRevision": "beyond2p2-expanded-2026-10-03"
  },
  {
    "n": 2,
    "stem": "Consider the statement: \\(x(\\alpha-x)<y(\\alpha-y)\\) for all \\(x,y\\) with \\(0<x<y<1\\). The statement is true",
    "opts": [
      "if and only if \\(\\alpha\\ge2\\)",
      "if and only if \\(\\alpha>2\\)",
      "if and only if \\(\\alpha\\le-1\\)",
      "if and only if \\(\\alpha\\ge-1\\)",
      "if and only if \\(\\alpha\\le2\\)",
      "for no values of \\(\\alpha\\)"
    ],
    "correct": 0,
    "sol": "<div class=\"bh-expanded-solution\"><p><strong>Answer A.</strong></p><p>The statement compares the values of \\(g(t)=t(\\alpha-t)\\) at any two inputs in \\((0,1)\\). Subtract the value at the smaller input from the value at the larger one:\n\\[\\begin{aligned}g(y)-g(x)&amp;=\\alpha y-y^2-\\alpha x+x^2\\\\&amp;=(y-x)\\bigl(\\alpha-(x+y)\\bigr).\\end{aligned}\\]\nBecause \\(y-x&gt;0\\), the required strict inequality is equivalent to \\(\\alpha&gt;x+y\\) for every permitted pair.</p><p>If \\(\\alpha\\ge2\\), then \\(x+y&lt;2\\le\\alpha\\), so the difference above is strictly positive. In particular \\(\\alpha=2\\) works: the inputs can approach \\(1\\), but cannot equal it, so their sum never reaches \\(2\\).</p><p>Conversely, suppose \\(\\alpha&lt;2\\). Choose a positive \\(\\varepsilon\\) smaller than both \\(1/2\\) and \\((2-\\alpha)/3\\), and set\n\\[x=1-2\\varepsilon,\\qquad y=1-\\varepsilon.\\]\nThen \\(0&lt;x&lt;y&lt;1\\), but \\(x+y=2-3\\varepsilon&gt;\\alpha\\), making \\(g(y)-g(x)&lt;0\\). Thus the proposed statement fails for this pair.</p><p>The necessary and sufficient condition is therefore \\(\\boxed{\\alpha\\ge2}\\), option <strong>A</strong>.</p></div>",
    "estimatedDifficulty": 6,
    "contentRevision": "beyond2p2-expanded-2026-10-03"
  },
  {
    "n": 3,
    "stem": "A television station telecasts three types of programs \\(X\\), \\(Y\\) and \\(Z\\). A survey gives the following data on television viewing. Among the people interviewed \\(60\\%\\) watch program \\(X\\), \\(50\\%\\) watch program \\(Y\\), \\(50\\%\\) watch program \\(Z\\), \\(30\\%\\) watch programs \\(X\\) and \\(Y\\), \\(20\\%\\) watch programs \\(Y\\) and \\(Z\\), \\(30\\%\\) watch programs \\(X\\) and \\(Z\\), while \\(10\\%\\) do not watch any television program. The percentage of people watching all the three programs \\(X\\), \\(Y\\) and \\(Z\\) is",
    "opts": [
      "\\(90\\)",
      "\\(50\\)",
      "\\(10\\)",
      "\\(20\\)",
      "\\(30\\)",
      "\\(40\\)"
    ],
    "correct": 2,
    "sol": "<div class=\"bh-expanded-solution\"><p><strong>Answer C.</strong></p><p>The proportion watching at least one programme is \\(100\\%-10\\%=90\\%\\). Let \\(t\\%\\) watch all three. The pairwise percentages include people who also watch the third programme.</p><p>Adding the three individual percentages counts someone watching exactly one programme once, someone watching exactly two twice, and someone watching all three three times. Subtracting the three pairwise overlaps leaves the first two groups counted once, but the all-three group counted zero times. Add that group back once:\n\\[90=60+50+50-30-20-30+t.\\]\nThus \\(90=80+t\\), giving \\(t=10\\).</p><p>A check using disjoint regions gives pair-only percentages \\(20,10,20\\) for XY, YZ and XZ. The X-only, Y-only and Z-only percentages are then \\(10,10,10\\). Together with the all-three percentage \\(10\\), these total \\(90\\), as required.</p><p>The answer is <strong>C: \\(10\\%\\)</strong>.</p></div>",
    "estimatedDifficulty": 5,
    "contentRevision": "beyond2p2-expanded-2026-10-03"
  },
  {
    "n": 4,
    "stem": "In a football league, a particular team played 60 games in a season. Every game ended in a win or a loss; there were no draws. The team never lost three games consecutively and never won five games consecutively in that season. If \\(N\\) is the number of games the team won in that season, then \\(N\\) satisfies",
    "opts": [
      "\\(24\\le N\\le50\\)",
      "\\(20\\le N\\le48\\)",
      "\\(12\\le N\\le40\\)",
      "\\(18\\le N\\le42\\)",
      "\\(20\\le N\\le42\\)",
      "\\(24\\le N\\le42\\)"
    ],
    "correct": 1,
    "sol": "<div class=\"bh-expanded-solution\"><p><strong>Answer B.</strong></p><p>With every match either won or lost, divide the season into twenty consecutive blocks of three games. Each block must contain at least one win, because three losses in any such block would be three consecutive losses. Therefore\n\\[N\\ge20.\\]\nThis bound is attainable: repeat the pattern LLW twenty times. No three losses occur, including across the joins between blocks.</p><p>For the upper bound, divide the same season into twelve consecutive blocks of five games. Every block must contain at least one loss, because five wins would be forbidden. Thus each block contains at most four wins, giving\n\\[N\\le12\\cdot4=48.\\]\nThe pattern WWWWL repeated twelve times attains this bound and has no run of three losses.</p><p>Consequently \\(\\boxed{20\\le N\\le48}\\), option <strong>B</strong>. The two partitions are separate arguments applied to the same season. The no-draws assumption is essential: if draws were allowed, an all-draw season would satisfy the stated run restrictions but have no wins.</p></div>",
    "estimatedDifficulty": 5,
    "contentRevision": "beyond2p2-expanded-2026-10-03",
    "editorialRepair": "Specified that each match is a win or loss, with no draws."
  },
  {
    "n": 5,
    "stem": "Every integer of the form \\((n^3-n)(n-2)\\), for \\(n=3,4,\\ldots\\), is",
    "opts": [
      "divisible by 6 but not always divisible by 12",
      "divisible by 12 but not always divisible by 24",
      "divisible by 24 but not always divisible by 48",
      "divisible by 9",
      "divisible by 48 but not always divisible by 96",
      "divisible by 5"
    ],
    "correct": 2,
    "sol": "<div class=\"bh-expanded-solution\"><p><strong>Answer C.</strong></p><p>Factor the cubic first:\n\\[(n^3-n)(n-2)=n(n-1)(n+1)(n-2)=(n-2)(n-1)n(n+1).\\]\nThese are four consecutive integers.</p><p>Among four consecutive integers, at least one is divisible by \\(3\\). Exactly two are even, and one of those two is divisible by \\(4\\). Their product therefore contains a factor of \\(4\\cdot2=8\\), as well as a factor of \\(3\\). Since \\(8\\) and \\(3\\) have no common prime factor, the whole product is divisible by \\(24\\).</p><p>To test whether divisibility by \\(48\\) is guaranteed, take the smallest permitted input, \\(n=3\\):\n\\[(3^3-3)(3-2)=24.\\]\nThis is not divisible by \\(48\\). It is also not divisible by \\(9\\) or \\(5\\), ruling out those proposed universal claims.</p><p>Thus the expression is always divisible by \\(24\\), but not always by \\(48\\): <strong>C</strong>.</p></div>",
    "estimatedDifficulty": 5,
    "contentRevision": "beyond2p2-expanded-2026-10-03"
  },
  {
    "n": 6,
    "stem": "From a group of seven persons, seven committees are formed. Any two committees have exactly one member in common. Each person is in exactly three committees. Then",
    "opts": [
      "at least one committee must have more than three members",
      "each committee must have exactly three members",
      "each committee must have more than three members",
      "nothing can be said about the sizes of the committees"
    ],
    "correct": 1,
    "sol": "<div class=\"bh-expanded-solution\"><p><strong>Answer B.</strong></p><p>Fix any one committee \\(C\\), and suppose it contains \\(k\\) people. Count memberships shared between \\(C\\) and the other six committees in two ways.</p><p>Every other committee has exactly one member in common with \\(C\\). Counting one shared membership for each of those six committees gives a total of \\(6\\).</p><p>On the other hand, each person in \\(C\\) belongs to exactly three committees altogether. One is \\(C\\), so that person belongs to exactly two of the other committees and contributes two shared memberships. The \\(k\\) members therefore contribute \\(2k\\) in total.</p><p>Both counts describe the same memberships, so\n\\[2k=6\\quad\\Longrightarrow\\quad k=3.\\]\nThe committee was chosen arbitrarily, so <em>every</em> committee has exactly three members: <strong>B</strong>.</p><p>Simply observing that the average committee size is \\(7\\cdot3/7=3\\) would not by itself establish equal sizes. The pairwise-intersection condition is what makes the argument work separately for each committee.</p></div>",
    "estimatedDifficulty": 7,
    "contentRevision": "beyond2p2-expanded-2026-10-03"
  },
  {
    "n": 7,
    "stem": "Given any five points in the square \\(I^2=\\{(x,y):0\\le x\\le1,\\ 0\\le y\\le1\\}\\), only one of the following statements is true. Which one is it?",
    "opts": [
      "The five points lie on a circle.",
      "At least one square can be formed using four of the five points.",
      "At least three of the five points are collinear.",
      "There are at least two points such that the distance between them does not exceed \\(\\frac1{\\sqrt2}\\)."
    ],
    "correct": 3,
    "sol": "<div class=\"bh-expanded-solution\"><p><strong>Answer D.</strong></p><p>Divide the unit square by the lines \\(x=1/2\\) and \\(y=1/2\\), producing four smaller squares of side \\(1/2\\). Assign each of the five points to one of these four squares; a point on a dividing boundary can be assigned consistently to either adjacent square.</p><p>If each smaller square contained at most one assigned point, there would be at most four points. Since there are five, at least two lie in the same smaller square. Their horizontal and vertical separations are each at most \\(1/2\\), so Pythagoras gives\n\\[d^2\\le\\left(\\frac12\\right)^2+\\left(\\frac12\\right)^2=\\frac12,\\qquad d\\le\\frac1{\\sqrt2}.\\]\nThis proves <strong>D</strong> for every configuration.</p><p>The other claims are not guaranteed. For A, the four corners and the centre cannot all lie on a circle: the circle through the corners has its centre at the square's centre, which is not on that circle. For B, five distinct points on one edge cannot contain the vertices of a square. For C, choose five distinct points on \\(y=x^2\\) inside the unit square. A non-vertical line intersects this parabola in at most two points, by substitution into its quadratic equation, and a vertical line intersects it at most once. Thus no three of these five points are collinear.</p><p>The bound is sharp: the four corners and the centre of the unit square have minimum pairwise distance exactly \\(1/\\sqrt2\\).</p></div>",
    "estimatedDifficulty": 6.5,
    "contentRevision": "beyond2p2-expanded-2026-10-03"
  },
  {
    "n": 8,
    "stem": "Let \\(A_1,A_2,A_3\\) be three points on a straight line. Let \\(B_1,B_2,B_3,B_4,B_5\\) be five points on a straight line parallel to the first one. Each of the three points on the first line is joined by a straight line to each of the five points on the second line. Further, no three or more of these joining lines meet at a point except possibly at the \\(A\\)&rsquo;s or the \\(B\\)&rsquo;s. Then the number of points of intersections of the joining lines lying between the two given straight lines is",
    "opts": [
      "\\(30\\)",
      "\\(25\\)",
      "\\(35\\)",
      "\\(20\\)"
    ],
    "correct": 0,
    "sol": "<div class=\"bh-expanded-solution\"><p><strong>Answer A.</strong></p><p>An intersection strictly between the parallel lines must involve joining segments with different endpoints on each line. Two segments sharing an endpoint cannot meet again, since they are straight.</p><p>Choose any two of the three A-points and any two of the five B-points. These four points form a quadrilateral with two vertices on each parallel line. Exactly one pair of joins crosses inside the strip: the joins that reverse the left-to-right order of the endpoints. The other pairing does not cross between the lines.</p><p>There are\n\\[\\binom32=3\\qquad\\text{and}\\qquad\\binom52=10\\]\nways to choose the endpoint pairs. Each choice therefore gives one crossing, for a total of \\(3\\cdot10=30\\).</p><p>The no-three-joining-lines condition ensures that two different crossing pairs are not being counted at the same intersection point. Conversely, every interior crossing identifies its two A-endpoints and two B-endpoints, so every crossing is included exactly once.</p><p>The answer is <strong>A: \\(30\\)</strong>.</p></div>",
    "estimatedDifficulty": 6.5,
    "contentRevision": "beyond2p2-expanded-2026-10-03"
  },
  {
    "n": 9,
    "stem": "Let \\(y=\\log_ax\\) and \\(a>1\\). Then only one of the following statements is false. Which one is it?",
    "opts": [
      "If \\(x=1\\), then \\(y=0\\)",
      "If \\(x<1\\), then \\(y<0\\)",
      "If \\(x=\\frac12\\), then \\(y=\\frac12\\)",
      "If \\(x=a\\), then \\(y=1\\)"
    ],
    "correct": 2,
    "sol": "<div class=\"bh-expanded-solution\"><p><strong>Answer C.</strong></p><p>The equation \\(y=\\log_a x\\) means \\(a^y=x\\), with domain \\(x&gt;0\\). Since \\(a&gt;1\\), the exponential \\(a^y\\) increases with \\(y\\) and equals \\(1\\) at \\(y=0\\).</p><p>For A, \\(x=1=a^0\\) gives \\(y=0\\), so A is true. For B, the understood logarithm domain gives \\(0&lt;x&lt;1\\); such inputs correspond to negative exponents, so \\(y&lt;0\\). For D, \\(x=a=a^1\\) gives \\(y=1\\).</p><p>For C, \\(x=1/2&lt;1\\) must instead give a negative value of \\(y\\), so it cannot give \\(y=1/2\\). Equivalently, a positive half-power \\(a^{1/2}=\\sqrt a\\) is greater than \\(1\\), not equal to \\(1/2\\).</p><p>Thus the unique false statement is <strong>C</strong>. The positive domain restriction is implicit whenever a real logarithm is written.</p></div>",
    "estimatedDifficulty": 4,
    "contentRevision": "beyond2p2-expanded-2026-10-03"
  },
  {
    "n": 10,
    "stem": "If \\(x\\) is a real number and \\(y=\\frac12(e^x-e^{-x})\\), then<p>In the options, \\(\\log\\) denotes the natural logarithm.</p>",
    "opts": [
      "\\(x\\) can be either \\(\\log(y+\\sqrt{y^2+1})\\) or \\(\\log(y-\\sqrt{y^2+1})\\)",
      "\\(x\\) can only be \\(\\log(y+\\sqrt{y^2+1})\\)",
      "\\(x\\) can be either \\(\\log(y+\\sqrt{y^2-1})\\) or \\(\\log(y-\\sqrt{y^2-1})\\)",
      "\\(x\\) can only be \\(\\log(y+\\sqrt{y^2-1})\\)"
    ],
    "correct": 1,
    "sol": "<div class=\"bh-expanded-solution\"><p><strong>Answer B.</strong></p><p>Set \\(t=e^x\\). Then \\(t&gt;0\\) and \\(e^{-x}=1/t\\), so the given equation becomes\n\\[2y=t-\\frac1t.\\]\nMultiplying by the positive non-zero number \\(t\\) gives\n\\[t^2-2yt-1=0.\\]\nThe quadratic formula gives\n\\[t=\\frac{2y\\pm\\sqrt{4y^2+4}}2=y\\pm\\sqrt{y^2+1}.\\]</p><p>Since \\(\\sqrt{y^2+1}&gt;|y|\\), the plus choice is strictly positive and the minus choice strictly negative, for every real \\(y\\). Only the positive choice can equal \\(e^x\\). Thus\n\\[e^x=y+\\sqrt{y^2+1}.\\]\nTaking natural logarithms gives\n\\[\\boxed{x=\\ln\\!\\left(y+\\sqrt{y^2+1}\\right)}.\\]\nThis is <strong>B</strong>, with \\(\\log\\) in the options interpreted as the natural logarithm. There is only one admissible value of \\(x\\), because the exponential is one-to-one. No special inverse-function formula is required.</p></div>",
    "estimatedDifficulty": 5.5,
    "contentRevision": "beyond2p2-expanded-2026-10-03",
    "editorialRepair": "Specified that log denotes the natural logarithm."
  },
  {
    "n": 11,
    "stem": "Let \\(a,b,c\\) be real numbers with \\(a\\ne b\\), \\(c\\ne0\\). The equation \\[\\frac1{x+a}+\\frac1{x+b}=\\frac1c\\qquad(x\\ne-a,-b)\\] has two real roots equal in magnitude and opposite in sign. What is their product?",
    "opts": [
      "\\(\\frac{a^2+b^2}{2}\\)",
      "\\(\\frac{-a^2+b^2}{4}\\)",
      "\\(\\frac{a+b}{2}\\)",
      "\\(-\\frac{a^2+b^2}{2}\\)"
    ],
    "correct": 3,
    "sol": "<div class=\"bh-expanded-solution\"><p><strong>Answer D.</strong></p><p>Keep the restrictions \\(x\\ne-a,-b\\) and \\(c\\ne0\\) while clearing denominators. Multiplication by \\(c(x+a)(x+b)\\) gives\n\\[c(x+b)+c(x+a)=(x+a)(x+b),\\]\nso\n\\[x^2+(a+b-2c)x+ab-c(a+b)=0.\\]</p><p>If the roots are \\(r\\) and \\(-r\\), their sum is zero. Expanding \\((x-r)(x+r)\\), or comparing the linear coefficient, therefore gives\n\\[a+b-2c=0,\\qquad c=\\frac{a+b}{2}.\\]\nThe product of the roots is the constant coefficient of the monic quadratic:\n\\[\\begin{aligned}ab-c(a+b)&amp;=ab-\\frac{(a+b)^2}{2}\\\\&amp;=\\frac{2ab-a^2-2ab-b^2}{2}\\\\&amp;=-\\frac{a^2+b^2}{2}.\\end{aligned}\\]</p><p>No roots created by clearing denominators occur at the forbidden inputs: substituting \\(-a\\) and \\(-b\\) into the quadratic gives \\(c(a-b)\\) and \\(c(b-a)\\), both non-zero under the stated assumptions. Thus the calculated roots are genuine roots of the original equation.</p><p>The answer is <strong>D</strong>. Its negative sign is also consistent with the product of two non-zero roots of opposite signs.</p></div>",
    "editorialRepair": "Replaced duplicate option D with the missing negative product and stated the nonzero-denominator domain.",
    "contentRevision": "beyond2p2-expanded-2026-10-03",
    "estimatedDifficulty": 6
  },
  {
    "n": 12,
    "stem": "How many positive real roots does this equation have?\n\\[\nx^4-2\\sqrt2x^3+2x^2-4x=0.\n\\]",
    "opts": [
      "\\(0\\)",
      "\\(1\\)",
      "\\(2\\)",
      "\\(3\\)",
      "\\(4\\)"
    ],
    "correct": 1,
    "sol": "<div class=\"bh-expanded-solution\"><p><strong>Answer B.</strong></p><p>Factor out \\(x\\), then complete the square in the remaining expression:\n\\[x^4-2\\sqrt2x^3+2x^2-4x=x\\bigl(x(x-\\sqrt2)^2-4\\bigr).\\]\nThe root \\(x=0\\) is not positive. All positive roots must therefore satisfy\n\\[x(x-\\sqrt2)^2=4.\\]</p><p>For \\(0&lt;x\\le\\sqrt2\\), we have \\(x\\le\\sqrt2\\) and \\((x-\\sqrt2)^2\\le2\\), so\n\\[x(x-\\sqrt2)^2\\le2\\sqrt2&lt;4.\\]\nHence there are no roots in that interval.</p><p>For \\(x&gt;\\sqrt2\\), both positive factors \\(x\\) and \\((x-\\sqrt2)^2\\) increase strictly with \\(x\\). Their product is therefore strictly increasing. It starts at \\(0\\) when \\(x=\\sqrt2\\), and at \\(x=2\\sqrt2\\) it is \\(4\\sqrt2&gt;4\\). Since this polynomial is continuous, it takes the value \\(4\\) between those inputs, and strict increase means it takes that value only once on the whole interval \\((\\sqrt2,\\infty)\\).</p><p>There is exactly <strong>one positive real root</strong>, so the answer is <strong>B</strong>.</p></div>",
    "estimatedDifficulty": 6.5,
    "contentRevision": "beyond2p2-expanded-2026-10-03"
  },
  {
    "n": 13,
    "stem": "What is the digit in the unit position of the integer\n\\[\n1!+2!+3!+\\cdots+99!\n\\]",
    "opts": [
      "\\(3\\)",
      "\\(0\\)",
      "\\(1\\)",
      "\\(7\\)",
      "\\(5\\)",
      "\\(9\\)"
    ],
    "correct": 0,
    "sol": "<div class=\"bh-expanded-solution\"><p><strong>Answer A.</strong></p><p>For every \\(k\\ge5\\), the factorial \\(k!\\) contains factors \\(2\\) and \\(5\\), and is therefore divisible by \\(10\\). Every term from \\(5!\\) onwards ends in zero and has no effect on the final units digit.</p><p>It is enough to add the first four factorials:\n\\[1!+2!+3!+4!=1+2+6+24=33.\\]\nThe remaining factorials add a multiple of \\(10\\), so the whole sum is of the form \\(33+10M\\) for an integer \\(M\\).</p><p>Its units digit is consequently \\(\\boxed3\\), option <strong>A</strong>. The fact that later factorials have many digits is irrelevant; only divisibility by \\(10\\) matters here.</p></div>",
    "estimatedDifficulty": 5,
    "contentRevision": "beyond2p2-expanded-2026-10-03"
  },
  {
    "n": 14,
    "stem": "Let \\(\\{a_k\\}\\) be a sequence of integers such that \\(a_1=1\\) and \\(a_{m+n}=a_m+a_n+mn\\), for all positive integers \\(m\\) and \\(n\\). Then \\(a_{12}\\) is",
    "opts": [
      "\\(45\\)",
      "\\(56\\)",
      "\\(67\\)",
      "\\(78\\)",
      "\\(89\\)"
    ],
    "correct": 3,
    "sol": "<div class=\"bh-expanded-solution\"><p><strong>Answer D.</strong></p><p>The rule is valid for every pair of positive integers. Set one index equal to \\(1\\), using \\(a_1=1\\):\n\\[a_{m+1}=a_m+a_1+m=a_m+(m+1).\\]\nThus each new term is obtained by adding its index: \\(a_2=1+2\\), \\(a_3=1+2+3\\), and so on. Repeatedly applying the rule gives\n\\[a_{12}=1+2+\\cdots+12.\\]</p><p>Pair the first and last numbers, then the second and second-last, and continue. Each pair sums to \\(13\\), and there are six pairs, so\n\\[a_{12}=6\\cdot13=78.\\]</p><p>The resulting general expression \\(a_k=k(k+1)/2\\) also satisfies the original two-index rule, since\n\\[\\frac{(m+n)(m+n+1)-m(m+1)-n(n+1)}2=mn.\\]\nThis checks that the values obtained from unit increments are consistent with every permitted choice of \\(m,n\\), not just those with one index equal to \\(1\\).</p><p>The answer is <strong>D</strong>.</p></div>",
    "estimatedDifficulty": 5,
    "contentRevision": "beyond2p2-expanded-2026-10-03"
  },
  {
    "n": 15,
    "stem": "If \\(l^2+m^2+n^2=1\\) and \\(p^2+q^2+r^2=1\\), then the range of values \\(lp+mq+nr\\) can take is",
    "opts": [
      "\\([2,\\infty)\\)",
      "\\([2,1]\\)",
      "\\((\\infty,1]\\)",
      "\\([-1,1]\\)",
      "\\([1,\\infty)\\)",
      "does not satisfy any of the above conditions"
    ],
    "correct": 3,
    "sol": "<div class=\"bh-expanded-solution\"><p><strong>Answer D.</strong></p><p>Write \\(S=lp+mq+nr\\). Non-negative squares give both bounds directly, without assuming a separate inequality theorem.</p><p>For the upper bound,\n\\[\\begin{aligned}0&amp;\\le(l-p)^2+(m-q)^2+(n-r)^2\\\\&amp;=(l^2+m^2+n^2)+(p^2+q^2+r^2)-2S\\\\&amp;=2-2S,\\end{aligned}\\]\nso \\(S\\le1\\). Similarly,\n\\[0\\le(l+p)^2+(m+q)^2+(n+r)^2=2+2S,\\]\nwhich gives \\(S\\ge-1\\).</p><p>To establish the whole range, not just bounds, take any \\(t\\in[-1,1]\\) and choose\n\\[(l,m,n)=(1,0,0),\\qquad(p,q,r)=\\left(t,\\sqrt{1-t^2},0\\right).\\]\nBoth sums of squares equal \\(1\\), and \\(S=t\\). The square root is real throughout the stated interval, including its endpoints.</p><p>Every value from \\(-1\\) to \\(1\\) is therefore attainable, and none outside is possible. The range is \\(\\boxed{[-1,1]}\\), option <strong>D</strong>.</p><p><strong>Alternative solution: Cauchy–Schwarz.</strong> For any six real numbers, the Cauchy–Schwarz inequality gives\n\\[(lp+mq+nr)^2\\le(l^2+m^2+n^2)(p^2+q^2+r^2).\\]\nBoth sums of squares on the right are \\(1\\), so, writing \\(S=lp+mq+nr\\), we obtain\n\\[S^2\\le1\\quad\\Longrightarrow\\quad |S|\\le1\\quad\\Longrightarrow\\quad-1\\le S\\le1.\\]\nThe square bounds both signs; it does not imply that \\(S\\) is non-negative.</p>\n<p>Equality in Cauchy–Schwarz holds when the triples are proportional: \\((p,q,r)=\\lambda(l,m,n)\\). Since each triple has sum of squares \\(1\\), this requires \\(\\lambda^2=1\\). Choosing the same triple gives \\(S=1\\), and choosing its negative gives \\(S=-1\\), so both endpoints are attained.</p>\n<p>To check that no values inside the interval are missing, take \\((l,m,n)=(1,0,0)\\) and \\((p,q,r)=(t,\\sqrt{1-t^2},0)\\) for any \\(t\\in[-1,1]\\). Then both constraints hold and \\(S=t\\). Thus Cauchy–Schwarz gives the bound, and these examples establish the complete range \\(\\boxed{[-1,1]}\\), again <strong>D</strong>.</p></div>",
    "estimatedDifficulty": 6,
    "contentRevision": "beyond2p2-expanded-2026-10-03"
  },
  {
    "n": 16,
    "stem": "Let \\(f\\) be a polynomial of degree \\(n\\), where \\(n\\) is a positive integer:\n\\[f(x)=a_0+a_1x+\\cdots+a_nx^n.\\]\n<p>All the coefficients \\(a_0,a_1,\\ldots,a_n\\) are integers and \\(a_n\\ne0\\). Which of the following statements is true?</p>",
    "opts": [
      "For every odd positive integer \\(n\\), there is a polynomial \\(f\\) of degree \\(n\\) as above such that \\(f(\\sqrt2+\\sqrt3)=0\\).",
      "For every polynomial \\(f\\) as above, if \\(f(\\sqrt2+\\sqrt3)=0\\), then \\(f(\\sqrt2-\\sqrt3)=0\\).",
      "For every even positive integer \\(n\\), there is a polynomial \\(f\\) of degree \\(n\\) as above such that \\(f(\\sqrt2+\\sqrt3)=0\\).",
      "For every odd positive integer \\(n\\), there is a polynomial \\(f\\) of degree \\(n\\) as above such that \\(f(\\sqrt2+\\sqrt5)=0\\)."
    ],
    "correct": 1,
    "sol": "<div class=\"bh-expanded-solution\"><p><strong>Answer B.</strong></p><p>We must establish the root implication in B for an arbitrary non-zero polynomial with integer coefficients. We cannot simply change a radical's sign without explaining why that preserves a zero.</p><p>Let \\(\\alpha=\\sqrt2+\\sqrt3\\) and \\(\\beta=\\sqrt2-\\sqrt3\\). Expand each power of \\(\\alpha\\) by multiplication. Even powers of \\(\\sqrt2\\) and \\(\\sqrt3\\) are integers, so the result can be collected as\n\\[f(\\alpha)=U+V\\sqrt3,\\qquad U=A+B\\sqrt2,\\quad V=C+D\\sqrt2,\\]\nwhere \\(A,B,C,D\\) are integers. Replacing \\(\\sqrt3\\) by \\(-\\sqrt3\\) in the same expansion changes exactly the terms with an odd power of \\(\\sqrt3\\), giving\n\\[f(\\beta)=U-V\\sqrt3.\\]</p><p>We now show that \\(U+V\\sqrt3=0\\) forces \\(U=V=0\\). Suppose instead that \\(V\\ne0\\). Then \\(\\sqrt3=-U/V\\). Rationalising the denominator \\(C+D\\sqrt2\\) expresses this quotient as \\(r+s\\sqrt2\\) for rational \\(r,s\\). The rationalised denominator \\(C^2-2D^2\\) cannot vanish unless \\(C=D=0\\), which would contradict \\(V\\ne0\\).</p><p>However, \\(\\sqrt3=r+s\\sqrt2\\) is impossible. Squaring gives\n\\[3=r^2+2s^2+2rs\\sqrt2.\\]\nSince \\(\\sqrt2\\) is irrational, \\(rs=0\\). If \\(s=0\\), then \\(r^2=3\\), impossible for rational \\(r\\). If \\(r=0\\), then \\(s^2=3/2\\), also impossible for rational \\(s\\): writing \\(s=p/q\\) would give \\(2p^2=3q^2\\), whose two sides contain respectively an odd and an even number of factors of \\(2\\). Thus \\(V=0\\), and the original equality gives \\(U=0\\).</p><p>It follows that \\(f(\\beta)=U-V\\sqrt3=0\\), proving <strong>B</strong> using elementary expansion and irrationality.</p><p>For option A and for D, the phrase “every odd degree” includes degree \\(1\\). A non-zero linear polynomial with integer coefficients has a rational root, whereas \\(\\sqrt2+\\sqrt3\\) and \\(\\sqrt2+\\sqrt5\\) are irrational. The squares of those two surds are \\(5+2\\sqrt6\\) and \\(7+2\\sqrt{10}\\), both irrational, so the surds themselves cannot be rational. Both assertions therefore fail.</p><p>Option C includes degree \\(2\\). If \\(ax^2+bx+c\\), with integer \\(a\\ne0\\), vanished at \\(\\alpha\\), substitution would give\n\\[(5a+c)+b\\sqrt2+(b+2a\\sqrt2)\\sqrt3=0.\\]\nThe argument just established forces \\(b+2a\\sqrt2=0\\), impossible for integers \\(a\\ne0,b\\). So no quadratic works, disproving C. A degree-four example does exist: squaring \\(\\alpha^2-5=2\\sqrt6\\) gives \\(\\alpha^4-10\\alpha^2+1=0\\).</p></div>",
    "estimatedDifficulty": 7.5,
    "contentRevision": "beyond2p2-expanded-2026-10-03",
    "editorialRepair": "Restored polynomial notation, specified exact positive degree and non-zero leading coefficient; changed A from some odd degree to every odd degree to remove a second correct answer."
  },
  {
    "n": 17,
    "stem": "Use exactly four copies of the number \\(4\\) and exactly three binary operations chosen from \\(+, -,\\times,\\div\\). Each operation combines two numbers or subexpressions. Fully bracket every expression so that every operation's two inputs are specified.\n<p>Two expressions count as different if their operation symbols or bracket structure differ. Do not identify expressions using commutativity or associativity. The four copies of \\(4\\) are identical, so merely relabelling them does not make a new expression.</p>\n<p><strong>Examples of the convention.</strong> The expressions \\((((4+4)+4)+4)\\) and \\(((4+4)+(4+4))\\) count separately, even though both equal \\(16\\), because their bracket structures differ. Similarly, \\(((4\\times4)+(4-4))\\) and \\(((4-4)+(4\\times4))\\) count separately because their operation symbols occupy different positions.</p>\n<p>Extra redundant brackets around an entire expression do not create another expression. For instance, writing \\((E)\\) instead of \\(E\\) does not change its structure. Intermediate negative numbers, zero and fractions are allowed, but division by zero is not. Concatenation such as \\(44\\), powers, roots, factorials and unary minus are not allowed.</p>\n<p>How many expressions under these conventions equal \\(16\\)?</p>",
    "opts": [
      "\\(4\\)",
      "\\(5\\)",
      "\\(8\\)",
      "\\(10\\)",
      "\\(13\\)",
      "\\(20\\)",
      "\\(36\\)"
    ],
    "correct": 6,
    "sol": "<div class=\"bh-expanded-solution\"><p><strong>Answer G.</strong></p><p>A full bracket structure records which two subexpressions are combined at every operation. Four inputs have exactly five such structures. If \\(\\circ_1,\\circ_2,\\circ_3\\) denote the operation symbols in their left-to-right written positions, they are\n\\[\\begin{gathered}(((4\\circ_1 4)\\circ_2 4)\\circ_3 4),\\\\((4\\circ_1(4\\circ_2 4))\\circ_3 4),\\\\((4\\circ_1 4)\\circ_2(4\\circ_3 4)),\\\\(4\\circ_1((4\\circ_2 4)\\circ_3 4)),\\\\(4\\circ_1(4\\circ_2(4\\circ_3 4))).\\end{gathered}\\]\nThese are exhaustive: the final operation separates either one input from three, two from two, or three from one; a three-input group has two possible bracketings.</p><p>For three fours, put \\(L=(4\\circ_1 4)\\circ_2 4\\) and \\(R=4\\circ_1(4\\circ_2 4)\\). The tables below check all sixteen operation pairs for each. Rows specify \\(\\circ_1\\), columns specify \\(\\circ_2\\); a dash means division by zero and is excluded.</p><div class=\"bh-count-table\"><table><caption>\\(L=(4\\circ_1 4)\\circ_2 4\\)</caption><thead><tr><th scope=\"col\">\\(\\circ_1\\backslash\\circ_2\\)</th><th scope=\"col\">\\(+\\)</th><th scope=\"col\">\\(-\\)</th><th scope=\"col\">\\(\\times\\)</th><th scope=\"col\">\\(\\div\\)</th></tr></thead><tbody><tr><th scope=\"row\">\\(+\\)</th><td>\\(12\\)</td><td>\\(4\\)</td><td>\\(32\\)</td><td>\\(2\\)</td></tr><tr><th scope=\"row\">\\(-\\)</th><td>\\(4\\)</td><td>\\(-4\\)</td><td>\\(0\\)</td><td>\\(0\\)</td></tr><tr><th scope=\"row\">\\(\\times\\)</th><td>\\(20\\)</td><td>\\(12\\)</td><td>\\(64\\)</td><td>\\(4\\)</td></tr><tr><th scope=\"row\">\\(\\div\\)</th><td>\\(5\\)</td><td>\\(-3\\)</td><td>\\(4\\)</td><td>\\(\\frac{1}{4}\\)</td></tr></tbody></table></div><div class=\"bh-count-table\"><table><caption>\\(R=4\\circ_1(4\\circ_2 4)\\)</caption><thead><tr><th scope=\"col\">\\(\\circ_1\\backslash\\circ_2\\)</th><th scope=\"col\">\\(+\\)</th><th scope=\"col\">\\(-\\)</th><th scope=\"col\">\\(\\times\\)</th><th scope=\"col\">\\(\\div\\)</th></tr></thead><tbody><tr><th scope=\"row\">\\(+\\)</th><td>\\(12\\)</td><td>\\(4\\)</td><td>\\(20\\)</td><td>\\(5\\)</td></tr><tr><th scope=\"row\">\\(-\\)</th><td>\\(-4\\)</td><td>\\(4\\)</td><td>\\(-12\\)</td><td>\\(3\\)</td></tr><tr><th scope=\"row\">\\(\\times\\)</th><td>\\(32\\)</td><td>\\(0\\)</td><td>\\(64\\)</td><td>\\(4\\)</td></tr><tr><th scope=\"row\">\\(\\div\\)</th><td>\\(\\frac{1}{2}\\)</td><td>—</td><td>\\(\\frac{1}{4}\\)</td><td>\\(4\\)</td></tr></tbody></table></div><p>For a final expression \\(T\\circ4=16\\), the four final operations require respectively\n\\[T=12,\\quad20,\\quad4,\\quad64\\]\nfor addition, subtraction, multiplication and division. In the L table these values occur \\(2,1,4,1\\) times, giving \\(8\\) expressions for the first structure. In the R table they occur \\(1,1,4,1\\) times, giving \\(7\\) for the second.</p><p>For an expression \\(4\\circ T=16\\), the required values are instead\n\\[T=12,\\quad-12,\\quad4,\\quad\\frac14.\\]\nTheir counts in L are \\(2,0,4,1\\), giving \\(7\\) for the fourth structure; in R they are \\(1,1,4,1\\), giving \\(7\\) for the fifth.</p><p>For the middle structure, each two-four group takes one of the values \\(8,0,16,1\\), arising uniquely from \\(+, -,\\times,\\div\\). Addition gives \\(16\\) for the ordered pairs \\((8,8),(0,16),(16,0)\\); subtraction for \\((16,0)\\); multiplication for \\((16,1),(1,16)\\); and division for \\((16,1)\\). This gives \\(3+1+2+1=7\\) expressions.</p><p>The total is therefore\n\\[8+7+7+7+7=\\boxed{36},\\]\noption <strong>G</strong>. Expressions with different brackets or symbols are counted separately even when they simplify to the same calculation. Each expression belongs to exactly one of the five structures, so there is no overlap between the five counts.</p></div>",
    "editorialRepair": "Added concrete examples and explicit rules for the existing fully bracketed expression convention.",
    "contentRevision": "beyond2p2-expanded-2026-10-03",
    "estimatedDifficulty": 7.5
  },
  {
    "n": 18,
    "stem": "Mr. Earl E. Bird leaves home every day at 8:00 AM to go to work. If he drives at an average speed of 40 miles per hour, he will be late by 3 minutes. If he drives at an average speed of 60 miles per hour, he will be early by 3 minutes. How many miles per hour does Mr. Bird need to drive to get to work exactly on time?",
    "opts": [
      "\\(45\\)",
      "\\(48\\)",
      "\\(50\\)",
      "\\(55\\)",
      "\\(58\\)"
    ],
    "correct": 1,
    "sol": "<div class=\"bh-expanded-solution\"><p><strong>Answer B.</strong></p><p>Let the journey distance be \\(d\\) miles and let \\(T\\) hours be the time available to arrive exactly on time. Three minutes is \\(3/60=1/20\\) of an hour, so\n\\[\\frac d{40}=T+\\frac1{20},\\qquad\\frac d{60}=T-\\frac1{20}.\\]\nSubtracting eliminates \\(T\\):\n\\[d\\left(\\frac1{40}-\\frac1{60}\\right)=\\frac1{10}.\\]\nSince the bracket is \\(1/120\\), we obtain \\(d=12\\) miles.</p><p>At \\(40\\) mph the trip takes \\(12/40=3/10\\) hour, or \\(18\\) minutes. Being three minutes late means the available time is \\(15\\) minutes, which is \\(1/4\\) hour. The required speed is\n\\[\\frac{12}{1/4}=48\\text{ mph}.\\]\nThe \\(60\\) mph trip takes \\(12\\) minutes, three minutes less than the same target, confirming the result.</p><p>The answer is <strong>B</strong>. Averaging the two speeds to get \\(50\\) mph would be incorrect: the time margins are equal, but speed is inversely proportional to travel time for a fixed distance.</p></div>",
    "estimatedDifficulty": 5,
    "contentRevision": "beyond2p2-expanded-2026-10-03"
  },
  {
    "n": 19,
    "stem": "The set of all real numbers \\(x\\) for which\n\\[\n\\log_{2004}(\\log_{2003}(\\log_{2002}(\\log_{2001}x)))\n\\]\nis defined is \\(\\{x\\mid x>c\\}\\). What is the value of \\(c\\)?",
    "opts": [
      "\\(0\\)",
      "\\(2001^{2002}\\)",
      "\\(2002^{2003}\\)",
      "\\(2003^{2004}\\)",
      "\\(2001^{2002^{2003}}\\)"
    ],
    "correct": 1,
    "sol": "<div class=\"bh-expanded-solution\"><p><strong>Answer B.</strong></p><p>Every real logarithm requires a strictly positive argument. Work from the outermost logarithm inward, keeping track of the difference between a logarithm being defined and being positive.</p><p>The argument of \\(\\log_{2004}\\) must be positive, so\n\\[\\log_{2003}\\!\\bigl(\\log_{2002}(\\log_{2001}x)\\bigr)&gt;0.\\]\nFor a base greater than \\(1\\), a logarithm is positive exactly when its argument exceeds \\(1\\). Therefore\n\\[\\log_{2002}(\\log_{2001}x)&gt;1.\\]\nExponentiating with base \\(2002&gt;1\\) preserves the inequality and gives\n\\[\\log_{2001}x&gt;2002.\\]\nExponentiating again gives \\(\\boxed{x&gt;2001^{2002}}\\).</p><p>This condition also guarantees that every inner logarithm is defined: \\(x&gt;0\\), \\(\\log_{2001}x&gt;2002&gt;0\\), and \\(\\log_{2002}(\\log_{2001}x)&gt;1&gt;0\\). At equality \\(x=2001^{2002}\\), the innermost two logarithms produce \\(2002\\) and \\(1\\), then \\(\\log_{2003}1=0\\); the final logarithm would have argument zero and is undefined.</p><p>Thus \\(c=2001^{2002}\\), option <strong>B</strong>. The last two bases do not appear in the threshold because positivity, rather than a specified positive output size, is all that the outermost logarithm requires.</p></div>",
    "estimatedDifficulty": 5,
    "contentRevision": "beyond2p2-expanded-2026-10-03"
  },
  {
    "n": 20,
    "stem": "A base-10 three-digit number \\(n\\) is selected at random. Which of the following is closest to the probability that the base-9 representation and the base-11 representation of \\(n\\) are both three-digit numerals?",
    "opts": [
      "\\(0.3\\)",
      "\\(0.4\\)",
      "\\(0.5\\)",
      "\\(0.6\\)",
      "\\(0.7\\)"
    ],
    "correct": 4,
    "sol": "<div class=\"bh-expanded-solution\"><p><strong>Answer E.</strong></p><p>In base \\(b\\), the smallest three-digit positive integer is \\(100_b=b^2\\), and the largest is \\((b-1)(b-1)(b-1)_b=b^3-1\\). Thus a number has exactly three digits in that base precisely when\n\\[b^2\\le n&lt;b^3.\\]</p><p>For base \\(9\\), this gives \\(81\\le n\\le728\\). For base \\(11\\), it gives \\(121\\le n\\le1330\\). The original base-ten selection also requires \\(100\\le n\\le999\\). Intersecting all three intervals leaves\n\\[121\\le n\\le728.\\]\nThere are \\(728-121+1=608\\) favourable integers. There are \\(999-100+1=900\\) equally likely three-digit base-ten integers, so the probability is\n\\[\\frac{608}{900}=\\frac{152}{225}\\approx0.6756.\\]\nThis is closer to \\(0.7\\) than to \\(0.6\\), and therefore closer to \\(0.7\\) than to any other listed option. The answer is <strong>E</strong>.</p><p>The added \\(1\\) in each integer count includes both endpoints; omitting it would count the number of gaps between integers rather than the number of integers.</p></div>",
    "estimatedDifficulty": 6,
    "contentRevision": "beyond2p2-expanded-2026-10-03"
  }
];
function applyBeyondHorizon2Review(questions){
 if(questions.length!==20)throw Error("Beyond Horizon Set 2 Paper 2 count mismatch");
 questions.forEach((q,i)=>{if(q.n!==i+1)throw Error("Beyond Horizon question order mismatch");Object.assign(q,BH2P2_EXPANDED[i]);});
}
