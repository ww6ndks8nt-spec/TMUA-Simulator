/* Transcribed from the supplied unofficial reconstruction, not an official release.
 * Answer checks independently verified; difficulty ratings are editorial estimates. */
const TMUA_2026_RECONSTRUCTED_PAPERS = [
  {
    "id": "tmua2026reconstructedp1",
    "title": "TMUA October 2026 reconstruction · Paper 1",
    "sub": "Applications of Mathematical Knowledge",
    "type": 1,
    "group": 4,
    "year": 2026,
    "officialTyped": true,
    "reconstructed": true,
    "url": "TMUA-2026-reconstructed-question-paper.pdf#page=1",
    "solutionUrl": "TMUA-2026-reconstructed-answer-key.pdf#page=2",
    "questions": [
      {
        "n": 1,
        "stem": "<div class=\"official-paper-content\"><p>For \\(-\\dfrac{\\pi}{2}\\leq x<\\dfrac{3\\pi}{2}\\), what is the sum of all solutions to the equation</p>\\[\n\\tan^3x-\\frac{2}{\\sqrt3}\\tan^2x=\\tan x\\,?\n\\]</div>",
        "opts": [
          "\\(\\dfrac{\\pi}{6}\\)",
          "\\(\\dfrac{5\\pi}{3}\\)",
          "\\(\\dfrac{7\\pi}{3}\\)",
          "\\(\\dfrac{8\\pi}{3}\\)",
          "\\(\\dfrac{10\\pi}{3}\\)",
          "\\(\\dfrac{7\\pi}{2}\\)",
          "\\(4\\pi\\)"
        ],
        "correct": 4,
        "sol": "<p>The six roots are \\(-\\pi/6,0,\\pi/3,5\\pi/6,\\pi,4\\pi/3\\), with sum \\(10\\pi/3\\).</p>",
        "estimatedDifficulty": 5.5,
        "topics": [
          "Trigonometry",
          "General algebra"
        ]
      },
      {
        "n": 2,
        "stem": "<div class=\"official-paper-content\"><p>What is the complete range of values of \\(k\\), where \\(k\\) is a positive real number, for which the equation</p>\\[\n2\\sin(k\\theta)=1\n\\]<p>has exactly five solutions in \\(0\\leq\\theta\\leq\\pi\\)?</p></div>",
        "opts": [
          "\\(\\dfrac{13}{6}\\leq k<\\dfrac{17}{6}\\)",
          "\\(2\\dfrac{1}{6}\\leq k<2\\dfrac{5}{6}\\)",
          "\\(4\\leq k<5\\)",
          "\\(4\\dfrac{1}{6}<k<4\\dfrac{5}{6}\\)",
          "\\(4\\dfrac{1}{6}<k\\leq4\\dfrac{5}{6}\\)",
          "\\(4\\dfrac{1}{6}\\leq k<4\\dfrac{5}{6}\\)",
          "\\(4\\dfrac{1}{6}\\leq k\\leq4\\dfrac{5}{6}\\)",
          "\\(4\\dfrac{1}{6}\\leq k<6\\dfrac{1}{6}\\)",
          "\\(5\\dfrac{1}{6}\\leq k<5\\dfrac{5}{6}\\)"
        ],
        "correct": 5,
        "sol": "<p>The fifth and sixth positive roots of \\(\\sin u=1/2\\) are \\(25\\pi/6\\) and \\(29\\pi/6\\). Hence \\(25/6\\leq k<29/6\\).</p>",
        "estimatedDifficulty": 5.5,
        "topics": [
          "Trigonometry",
          "Functions and Graphs"
        ]
      },
      {
        "n": 3,
        "stem": "<div class=\"official-paper-content\"><p>Points \\(P(1,35)\\) and \\(Q(4,80)\\) lie on the curve \\(y=36x-x^3\\). A point \\(R\\) lies on the curve between \\(P\\) and \\(Q\\) and is such that the area of triangle \\(PQR\\) is greatest.</p><p>What is the \\(x\\)-coordinate of \\(R\\)?</p></div>",
        "opts": [
          "\\(\\dfrac52\\)",
          "\\(\\sqrt7\\)",
          "\\(3\\)",
          "\\(2\\sqrt3\\)",
          "\\(\\dfrac72\\)"
        ],
        "correct": 1,
        "sol": "<p>The chord \\(PQ\\) is \\(y=15x+20\\). Maximise \\(21x-x^3-20\\) on \\((1,4)\\) to obtain \\(x=\\sqrt7\\).</p>",
        "estimatedDifficulty": 6.5,
        "topics": [
          "Geometry",
          "Differentiation"
        ]
      },
      {
        "n": 4,
        "stem": "<div class=\"official-paper-content\"><p>A function is defined by \\(f(x)=x^3+5x^2+3x+c\\), where \\(c\\) is a real constant. Given that \\(f'(x)\\) shares a linear factor with \\(f(x)\\), what is the sum of all possible values of \\(c\\)?</p></div>",
        "opts": [
          "\\(-\\dfrac{230}{27}\\)",
          "\\(-9\\)",
          "\\(-\\dfrac{1}{27}\\)",
          "\\(-\\dfrac{10}{27}\\)",
          "\\(-\\dfrac19\\)",
          "\\(-10\\)",
          "\\(-27\\)"
        ],
        "correct": 0,
        "sol": "<p>The repeated root is \\(-3\\) or \\(-1/3\\), giving \\(c=-9\\) or \\(13/27\\). Their sum is \\(-230/27\\).</p>",
        "estimatedDifficulty": 5.0,
        "topics": [
          "General algebra",
          "Differentiation"
        ]
      },
      {
        "n": 5,
        "stem": "<div class=\"official-paper-content\"><p>The diagram shows triangle \\(QRS\\). The angles \\(RQT\\) and \\(TQS\\) are equal.</p><img class=\"official-source-fig\" src=\"p1-q5.png\" alt=\"Triangle QRS with equal angles RQT and TQS, and T on RS.\" width=\"410\"><p>Which of the following is equal to \\(\\dfrac{RT}{TS}\\)?</p></div>",
        "opts": [
          "\\(\\dfrac{\\sin S}{\\sin R}\\)",
          "\\(\\dfrac{\\sin R}{\\sin S}\\)",
          "\\(\\dfrac{\\tan S}{\\tan Q}\\)",
          "\\(\\dfrac{\\tan Q}{\\tan R}\\)",
          "\\(\\dfrac{\\cos S}{\\cos R}\\)",
          "\\(\\dfrac{\\cos R}{\\cos S}\\)",
          "\\(\\dfrac{\\tan S}{\\tan R}\\)"
        ],
        "correct": 0,
        "sol": "<p>The angle-bisector theorem and sine rule give \\(RT/TS=QR/QS=\\sin S/\\sin R\\).</p>",
        "estimatedDifficulty": 5.5,
        "topics": [
          "Geometry",
          "Trigonometry"
        ]
      },
      {
        "n": 6,
        "stem": "<div class=\"official-paper-content\"><p>A translation by \\(\\begin{pmatrix}k\\\\k\\end{pmatrix}\\) is applied to the curve with equation</p>\\[\ny=x^3-\\frac54x.\n\\]<p>Which of the following gives the complete set of values of \\(k\\) for which the translated curve has at least one point in common with the original curve?</p></div>",
        "opts": [
          "\\(-\\sqrt5\\leq k\\leq\\sqrt5\\)",
          "\\(-\\sqrt5<k<\\sqrt5\\)",
          "\\(-3\\leq k<0\\)",
          "\\(-3\\leq k\\leq3\\)",
          "\\(k\\geq3\\)",
          "\\(k\\geq\\sqrt5\\)",
          "\\(3\\leq k\\leq9\\)"
        ],
        "correct": 3,
        "sol": "<p>For \\(k\\ne0\\), intersection requires \\(3(x-k/2)^2+(k^2-9)/4=0\\). Include \\(k=0\\), when the curves coincide.</p>",
        "estimatedDifficulty": 7.0,
        "topics": [
          "Functions and Graphs",
          "General algebra"
        ]
      },
      {
        "n": 7,
        "stem": "<div class=\"official-paper-content\"><p>A polynomial has the form \\(x^3+px^2+qx-27\\). When it is divided by \\((x+2)\\) it leaves a remainder of \\(-27\\). When it is divided by \\((x-1)\\) it leaves a remainder of \\(-15\\).</p><p>What is the value of \\(2p+13q\\)?</p></div>",
        "opts": [
          "\\(10\\)",
          "\\(88\\)",
          "\\(112\\)",
          "\\(308\\)",
          "\\(304\\)",
          "\\(46\\)",
          "\\(78\\)"
        ],
        "correct": 1,
        "sol": "<p>The remainder conditions give \\(2p-q=4\\) and \\(p+q=11\\). Thus \\(p=5\\), \\(q=6\\), and \\(2p+13q=88\\).</p>",
        "estimatedDifficulty": 4.0,
        "topics": [
          "General algebra"
        ]
      },
      {
        "n": 8,
        "stem": "<div class=\"official-paper-content\"><p>A circle \\(C\\) has radius \\(4\\) and is tangent to the \\(x\\)-axis at \\((2,0)\\). The line with equation \\(y=\\sqrt3x-2\\sqrt3\\) intersects \\(C\\) at two distinct points \\(P\\) and \\(Q\\).</p><p>What is the length of the minor arc \\(PQ\\)?</p></div>",
        "opts": [
          "\\(\\dfrac{2\\pi}{3}\\)",
          "\\(\\dfrac{4\\pi}{3}\\)",
          "\\(4\\sqrt3\\)",
          "\\(\\dfrac{8\\pi}{3}\\)",
          "\\(4\\pi\\)",
          "\\(\\dfrac{16\\pi}{3}\\)",
          "\\(8\\pi\\)"
        ],
        "correct": 3,
        "sol": "<p>The centre is distance \\(2\\) from the line. The minor central angle is \\(2\\pi/3\\), giving arc length \\(8\\pi/3\\).</p>",
        "estimatedDifficulty": 6.0,
        "topics": [
          "Geometry",
          "Trigonometry"
        ]
      },
      {
        "n": 9,
        "stem": "<div class=\"official-paper-content\"><p>What is the value of</p>\\[\nS=\\sqrt{10}+\\sqrt{100}+\\sqrt{1000}+\\cdots+\\sqrt{1\\,000\\,000\\,000}\\,?\n\\]</div>",
        "opts": [
          "\\(1111(\\sqrt{10}+1)-1\\)",
          "\\(11111\\sqrt{10}+1111\\)",
          "\\(11111(\\sqrt{10}+1)\\)",
          "\\(11111(\\sqrt{10}+1)-1\\)",
          "\\(11110(\\sqrt{10}+1)\\)"
        ],
        "correct": 3,
        "sol": "<p>Grouping odd and even powers gives \\(11111\\sqrt{10}+11110\\).</p>",
        "estimatedDifficulty": 4.5,
        "topics": [
          "General algebra",
          "Sequences and Series"
        ]
      },
      {
        "n": 10,
        "stem": "<div class=\"official-paper-content\"><p>A differentiable function satisfies</p>\\[\nf'(x)=(x-1)(x-2)(x-3).\n\\]<p>Each of the equations \\(f(x)=a\\) and \\(f(x)=b\\) has exactly three distinct real solutions.</p><p>How many distinct real solutions does</p>\\[\nf(x)=\\frac{a+b}{2}\n\\]<p>have?</p></div>",
        "opts": [
          "\\(0\\)",
          "\\(1\\)",
          "\\(2\\)",
          "\\(3\\)",
          "\\(4\\)",
          "\\(6\\)"
        ],
        "correct": 3,
        "sol": "<p>With \\(t=x-2\\), \\(f(x)=t^4/4-t^2/2+C\\). Only the level \\(C\\) has exactly three roots; hence \\(a=b=C\\).</p>",
        "estimatedDifficulty": 6.5,
        "topics": [
          "Functions and Graphs",
          "Integration"
        ]
      },
      {
        "n": 11,
        "stem": "<div class=\"official-paper-content\"><p>Real numbers \\(x\\) and \\(y\\) satisfy</p>\\[\n\\sqrt y+\\sqrt{y+1}=\\left(\\sqrt x+\\sqrt{x+1}\\right)^2.\n\\]<p>Which of the following gives \\(y\\) explicitly as a function of \\(x\\), together with the complete domain of \\(x\\)?</p></div>",
        "opts": [
          "\\(y=x(x+1)\\), \\(x\\geq0\\)",
          "\\(y=2x(x+1)\\), \\(x\\geq0\\)",
          "\\(y=4x(x+1)\\), \\(x\\geq0\\)",
          "\\(y=4x(x+1)\\), \\(x\\geq-1\\)",
          "\\(y=(2x+1)^2\\), \\(x\\geq0\\)"
        ],
        "correct": 2,
        "sol": "<p>Let \\(A=\\sqrt x+\\sqrt{x+1}\\). Subtract the reciprocal relation to obtain \\(2\\sqrt y=A^2-A^{-2}=4\\sqrt{x(x+1)}\\).</p>",
        "estimatedDifficulty": 6.0,
        "topics": [
          "General algebra",
          "Functions and Graphs"
        ]
      },
      {
        "n": 12,
        "stem": "<div class=\"official-paper-content\"><p>Which of the following graphs represents \\(y=3^{\\sin x}\\)?</p><p>Each graph is shown for \\(-2\\pi\\leq x\\leq2\\pi\\).</p></div>",
        "opts": [
          "<img class=\"official-source-fig\" src=\"p1-q12-a.png\" alt=\"Graph A\" width=\"310\">",
          "<img class=\"official-source-fig\" src=\"p1-q12-b.png\" alt=\"Graph B\" width=\"310\">",
          "<img class=\"official-source-fig\" src=\"p1-q12-c.png\" alt=\"Graph C\" width=\"310\">",
          "<img class=\"official-source-fig\" src=\"p1-q12-d.png\" alt=\"Graph D\" width=\"310\">",
          "<img class=\"official-source-fig\" src=\"p1-q12-e.png\" alt=\"Graph E\" width=\"310\">"
        ],
        "correct": 1,
        "sol": "<p>The graph is always positive, has period \\(2\\pi\\), passes through \\((0,1)\\) increasing, and has range \\([1/3,3]\\).</p>",
        "estimatedDifficulty": 4.0,
        "topics": [
          "Trigonometry",
          "Functions and Graphs",
          "Exponentials and Logarithms"
        ],
        "optionLayout": "graphs"
      },
      {
        "n": 13,
        "stem": "<div class=\"official-paper-content\"><p>The graph of</p>\\[\ny=2^{|\\log_2 x|}\n\\]<p>is drawn for \\(x>0\\).</p><p>Which row gives the correct expression for \\(y\\) on each of the indicated intervals?</p></div>",
        "opts": [
          "\\(x\\), \\(x\\)",
          "\\(x\\), \\(\\dfrac1x\\)",
          "\\(\\dfrac1x\\), \\(\\dfrac1x\\)",
          "\\(\\dfrac1x\\), \\(x\\)",
          "\\(-\\dfrac1x\\), \\(x\\)"
        ],
        "correct": 3,
        "sol": "<p>For \\(0<x<1\\), \\(2^{|\\log_2x|}=1/x\\); for \\(x\\geq1\\), it equals \\(x\\).</p>",
        "estimatedDifficulty": 4.5,
        "topics": [
          "Exponentials and Logarithms",
          "Functions and Graphs"
        ],
        "optionTableHeaders": [
          "\\(0<x<1\\)",
          "\\(x\\geq1\\)"
        ],
        "optionTableCells": [
          [
            "\\(x\\)",
            "\\(x\\)"
          ],
          [
            "\\(x\\)",
            "\\(\\dfrac1x\\)"
          ],
          [
            "\\(\\dfrac1x\\)",
            "\\(\\dfrac1x\\)"
          ],
          [
            "\\(\\dfrac1x\\)",
            "\\(x\\)"
          ],
          [
            "\\(-\\dfrac1x\\)",
            "\\(x\\)"
          ]
        ]
      },
      {
        "n": 14,
        "stem": "<div class=\"official-paper-content\"><p>How many distinct real solutions does the equation</p>\\[\n\\cos^2(x^2+x-12)=1\n\\]<p>have in the interval \\(-\\pi<x<\\pi\\)?</p></div>",
        "opts": [
          "\\(3\\)",
          "\\(4\\)",
          "\\(5\\)",
          "\\(6\\)",
          "\\(7\\)",
          "\\(8\\)"
        ],
        "correct": 3,
        "sol": "<p>Write \\(x^2+x-12=k\\pi\\). The cases \\(k=-3,-2,-1,0\\) give respectively \\(2,2,1,1\\) roots in \\((-\\pi,\\pi)\\).</p>",
        "estimatedDifficulty": 7.0,
        "topics": [
          "Trigonometry",
          "General algebra",
          "Functions and Graphs"
        ]
      },
      {
        "n": 15,
        "stem": "<div class=\"official-paper-content\"><p>Consider the following functions on \\(2\\leq x\\leq2.5\\):</p><div class=\"paper-proof\"><div class=\"paper-proof-step\"><span class=\"paper-step-label\">I</span><div>\\(f(x)=|\\cos x|\\)</div></div><div class=\"paper-proof-step\"><span class=\"paper-step-label\">II</span><div>\\(f(x)=-\\tan x\\)</div></div><div class=\"paper-proof-step\"><span class=\"paper-step-label\">III</span><div>\\(f(x)=\\log_{1/3}x\\)</div></div></div><p>For which functions does the trapezium rule give an underestimate of</p>\\[\n\\int_2^{2.5} f(x)\\,dx\\,?\n\\]</div>",
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
        "sol": "<p>On this interval, the second derivative is negative for I and positive for II and III. Only I is underestimated.</p>",
        "estimatedDifficulty": 6.0,
        "topics": [
          "Integration",
          "Trigonometry",
          "Exponentials and Logarithms"
        ]
      },
      {
        "n": 16,
        "stem": "<div class=\"official-paper-content\"><p>The graph of</p>\\[\ny=\\bigl|x-|x-1|\\bigr|\n\\]<p>is drawn for all real \\(x\\).</p><p>Which of the following gives its \\(x\\)-intercept, its \\(y\\)-intercept and its equation for \\(x\\geq1\\)?</p></div>",
        "opts": [
          "\\((1,0)\\), \\((0,1)\\), \\(y=1\\)",
          "\\((\\frac12,0)\\), \\((0,-1)\\), \\(y=1\\)",
          "\\((\\frac12,0)\\), \\((0,1)\\), \\(y=2x-1\\)",
          "\\((-\\frac12,0)\\), \\((0,1)\\), \\(y=1\\)",
          "\\((\\frac12,0)\\), \\((0,1)\\), \\(y=1\\)"
        ],
        "correct": 4,
        "sol": "<p>The expression is \\(1-2x\\) for \\(x\\leq1/2\\), \\(2x-1\\) for \\(1/2<x<1\\), and \\(1\\) for \\(x\\geq1\\).</p>",
        "estimatedDifficulty": 4.5,
        "topics": [
          "Functions and Graphs",
          "General algebra"
        ],
        "optionTableHeaders": [
          "\\(x\\)-intercept",
          "\\(y\\)-intercept",
          "Equation for \\(x\\geq1\\)"
        ],
        "optionTableCells": [
          [
            "\\((1,0)\\)",
            "\\((0,1)\\)",
            "\\(y=1\\)"
          ],
          [
            "\\((\\frac12,0)\\)",
            "\\((0,-1)\\)",
            "\\(y=1\\)"
          ],
          [
            "\\((\\frac12,0)\\)",
            "\\((0,1)\\)",
            "\\(y=2x-1\\)"
          ],
          [
            "\\((-\\frac12,0)\\)",
            "\\((0,1)\\)",
            "\\(y=1\\)"
          ],
          [
            "\\((\\frac12,0)\\)",
            "\\((0,1)\\)",
            "\\(y=1\\)"
          ]
        ]
      },
      {
        "n": 17,
        "stem": "<div class=\"official-paper-content\"><p>For a real number \\(x\\), let \\(\\{x\\}\\) denote its fractional part, so that \\(\\{x\\}=x-\\lfloor x\\rfloor\\), where \\(\\lfloor x\\rfloor\\) is the greatest integer less than or equal to \\(x\\).</p><p>What is the value of</p>\\[\n\\int_0^5\\bigl(2\\{x\\}-x\\bigr)\\,dx\\,?\n\\]</div>",
        "opts": [
          "\\(-\\dfrac{25}{2}\\)",
          "\\(-10\\)",
          "\\(-\\dfrac{15}{2}\\)",
          "\\(-5\\)",
          "\\(0\\)",
          "\\(\\dfrac{15}{2}\\)"
        ],
        "correct": 2,
        "sol": "<p>The fractional-part integral is \\(5/2\\), so the result is \\(2(5/2)-25/2=-15/2\\).</p>",
        "estimatedDifficulty": 5.5,
        "topics": [
          "Integration",
          "Functions and Graphs"
        ]
      },
      {
        "n": 18,
        "stem": "<div class=\"official-paper-content\"><p>Let \\(f(x)=x^2-6x+9\\).</p><p>How many distinct real solutions does</p>\\[\nf\\bigl(f(f(x))\\bigr)=0\n\\]<p>have?</p></div>",
        "opts": [
          "\\(1\\)",
          "\\(2\\)",
          "\\(3\\)",
          "\\(4\\)",
          "\\(6\\)",
          "\\(8\\)"
        ],
        "correct": 3,
        "sol": "<p>The roots are \\(3\\pm\\sqrt{3+\\sqrt3}\\) and \\(3\\pm\\sqrt{3-\\sqrt3}\\): four distinct values.</p>",
        "estimatedDifficulty": 5.5,
        "topics": [
          "Functions and Graphs",
          "General algebra"
        ]
      },
      {
        "n": 19,
        "stem": "<div class=\"official-paper-content\"><p>How many distinct real roots does the equation</p>\\[\n\\left(\\left(\\left((x-1)^2-1\\right)^2-1\\right)^2-1\\right)^2=1\n\\]<p>have?</p></div>",
        "opts": [
          "\\(3\\)",
          "\\(4\\)",
          "\\(5\\)",
          "\\(6\\)",
          "\\(7\\)"
        ],
        "correct": 2,
        "sol": "<p>Put \\(h(x)=(x-1)^2\\). Inverting \\(h^{\\circ4}(x)=1\\) gives \\(h(x)\\in\\{0,2,1+\\sqrt{1+\\sqrt2}\\}\\), hence five roots.</p>",
        "estimatedDifficulty": 6.5,
        "topics": [
          "Functions and Graphs",
          "General algebra"
        ]
      },
      {
        "n": 20,
        "stem": "<div class=\"official-paper-content\"><p>Let \\(a\\), \\(b\\) and \\(c\\) be real numbers with \\(a<b<c\\).</p><p>Consider the following statements:</p><div class=\"paper-proof\"><div class=\"paper-proof-step\"><span class=\"paper-step-label\">I</span><div>\\(b^2<a^2\\)</div></div><div class=\"paper-proof-step\"><span class=\"paper-step-label\">II</span><div>\\(b^2<c^2\\)</div></div></div><p>Which of the following must be true?</p></div>",
        "opts": [
          "Statement I is true.",
          "Statement II is true.",
          "Both statements are true.",
          "At least one of the two statements is true.",
          "Exactly one of the two statements is true.",
          "Neither statement is true."
        ],
        "correct": 3,
        "sol": "<p>If \\(b<0\\), then \\(a^2>b^2\\); if \\(b\\geq0\\), then \\(c^2>b^2\\). Both inequalities can also hold.</p>",
        "estimatedDifficulty": 4.5,
        "topics": [
          "General algebra",
          "Logic"
        ]
      }
    ]
  },
  {
    "id": "tmua2026reconstructedp2",
    "title": "TMUA October 2026 reconstruction · Paper 2",
    "sub": "Mathematical Reasoning",
    "type": 2,
    "group": 4,
    "year": 2026,
    "officialTyped": true,
    "reconstructed": true,
    "url": "TMUA-2026-reconstructed-question-paper.pdf#page=22",
    "solutionUrl": "TMUA-2026-reconstructed-answer-key.pdf#page=3",
    "questions": [
      {
        "n": 1,
        "stem": "<div class=\"official-paper-content\"><p>A fair six-sided die is tossed twice. Let \\(A_m\\) be the event that the first toss lands on \\(m\\), where \\(1\\leq m\\leq6\\). Let \\(S_n\\) be the event that the sum of the results is \\(n\\), where \\(2\\leq n\\leq12\\).</p><p>For how many pairs \\((m,n)\\) is</p>\\[\n\\mathrm P(A_m\\text{ and }S_n)=\\mathrm P(A_m)\\times\\mathrm P(S_n)\\,?\n\\]</div>",
        "opts": [
          "\\(0\\)",
          "\\(1\\)",
          "\\(6\\)",
          "\\(11\\)",
          "\\(30\\)",
          "\\(36\\)",
          "\\(66\\)"
        ],
        "correct": 2,
        "sol": "<p>Independence requires \\(n=7\\). Each of the six values of \\(m\\) then works.</p>",
        "estimatedDifficulty": 5.5,
        "topics": [
          "Probability and Statistics"
        ]
      },
      {
        "n": 2,
        "stem": "<div class=\"official-paper-content\"><p>For \\(x,y\\in\\mathbb R\\) with \\(x>1\\) and \\(y>1\\), statements \\(P\\) and \\(Q\\) are defined as follows:</p>\\[\\begin{aligned}\nP:\\quad &\\log_x y>2,\\\\\nQ:\\quad &\\log_{xy}(y^3)>2.\n\\end{aligned}\\]<p>Which statement is true?</p></div>",
        "opts": [
          "\\(P\\) is necessary but not sufficient for \\(Q\\).",
          "\\(P\\) is sufficient but not necessary for \\(Q\\).",
          "\\(P\\) is necessary and sufficient for \\(Q\\).",
          "\\(P\\) is neither necessary nor sufficient for \\(Q\\)."
        ],
        "correct": 2,
        "sol": "<p>Writing \\(t=\\log_x y>0\\), the second inequality becomes \\(3t/(1+t)>2\\), equivalent to \\(t>2\\).</p>",
        "estimatedDifficulty": 5.0,
        "topics": [
          "Exponentials and Logarithms",
          "Logic"
        ]
      },
      {
        "n": 3,
        "stem": "<div class=\"official-paper-content\"><p>The diagram shows infinitely many squares \\(S_n\\), with \\(n\\) increasing from left to right. The leftmost and rightmost vertices of \\(S_n\\) have \\(x\\)-coordinates \\(x_n\\) and \\(x_{n+1}\\), respectively.</p><img class=\"official-source-fig\" src=\"p2-q3.png\" alt=\"Squares S1, S2, S3 and smaller squares along the x-axis, with vertices x1, x2 and x3.\" width=\"540\"><p>Given that</p>\\[\nx_{n+1}=x_n+2^{3-n},\\qquad x_1=0,\n\\]<p>what is the sum of the areas of all the squares?</p></div>",
        "opts": [
          "\\(8\\)",
          "\\(\\dfrac{32}{3}\\)",
          "\\(16\\)",
          "\\(\\dfrac{64}{3}\\)",
          "\\(\\dfrac{128}{3}\\)",
          "\\(\\dfrac83\\)"
        ],
        "correct": 1,
        "sol": "<p>The square areas form \\(8+2+1/2+\\cdots\\), with sum \\(32/3\\).</p>",
        "estimatedDifficulty": 5.0,
        "topics": [
          "Geometry",
          "Sequences and Series"
        ]
      },
      {
        "n": 4,
        "stem": "<div class=\"official-paper-content\"><p>Which triple \\((\\ell,m,n)\\), where \\(\\ell\\), \\(m\\) and \\(n\\) are all positive integers, provides a counterexample to the statement</p>\\[\n\\text{``If }\\ell\\mid mn,\\text{ then }\\ell\\mid m\\text{ or }\\ell\\mid n\\text{''}\\,?\n\\]</div>",
        "opts": [
          "\\(\\ell=4,\\quad m=3,\\quad n=8\\)",
          "\\(\\ell=6,\\quad m=5,\\quad n=12\\)",
          "\\(\\ell=6,\\quad m=4,\\quad n=10\\)",
          "\\(\\ell=6,\\quad m=8,\\quad n=9\\)"
        ],
        "correct": 3,
        "sol": "<p>\\(6\\mid8\\cdot9\\), but \\(6\\nmid8\\) and \\(6\\nmid9\\).</p>",
        "estimatedDifficulty": 3.5,
        "topics": [
          "Number Theory",
          "Logic"
        ]
      },
      {
        "n": 5,
        "stem": "<div class=\"official-paper-content\"><p>Given that the statement</p><blockquote><p>There exists some real number \\(t\\) (positive, negative or zero) such that</p>\\[\n\\int_{-t}^{t}f(x)\\,dx>0\n\\]</blockquote><p>is false, which of statements I, II and III must be true? Assume that all the integrals below exist.</p><div class=\"paper-proof\"><div class=\"paper-proof-step\"><span class=\"paper-step-label\">I</span><div><p>There exists some real number \\(u\\) such that \\(\\displaystyle\\int_{-u}^{u}f(x)\\,dx\\leq0\\).</p></div></div><div class=\"paper-proof-step\"><span class=\"paper-step-label\">II</span><div><p>For all real numbers \\(v\\), \\(\\displaystyle\\int_{-v}^{v}f(x)\\,dx<0\\).</p></div></div><div class=\"paper-proof-step\"><span class=\"paper-step-label\">III</span><div><p>\\(\\displaystyle\\int_{-1}^{1}f(x)\\,dx=0\\).</p></div></div></div></div>",
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
        "correct": 5,
        "sol": "<p>If \\(I(t)=\\int_{-t}^{t}f(x)\\,dx\\leq0\\) for all \\(t\\), then \\(I(-t)=-I(t)\\) forces \\(I(t)=0\\) for all \\(t\\).</p>",
        "estimatedDifficulty": 6.0,
        "topics": [
          "Integration",
          "Logic"
        ]
      },
      {
        "n": 6,
        "stem": "<div class=\"official-paper-content\"><p>The diagram shows the graph of \\(y=ax^2+bx+c\\), where \\(a\\), \\(b\\) and \\(c\\) are non-zero real numbers.</p><img class=\"official-source-fig\" src=\"p2-q6.png\" alt=\"An upward-opening parabola crossing the positive x-axis twice; the axes have no numerical scale.\" width=\"346\"><p>Which of the following statements must be true?</p><div class=\"paper-proof\"><div class=\"paper-proof-step\"><span class=\"paper-step-label\">I</span><div>\\(b^2-4ac>0\\)</div></div><div class=\"paper-proof-step\"><span class=\"paper-step-label\">II</span><div>\\(abc>0\\)</div></div><div class=\"paper-proof-step\"><span class=\"paper-step-label\">III</span><div>\\(a+b+c>0\\)</div></div></div></div>",
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
        "sol": "<p>There are two positive roots, so \\(b^2-4ac>0\\), \\(a,c>0\\) and \\(b<0\\). The sketch does not determine \\(f(1)\\).</p>",
        "estimatedDifficulty": 4.5,
        "topics": [
          "Functions and Graphs",
          "General algebra",
          "Logic"
        ]
      },
      {
        "n": 7,
        "stem": "<div class=\"official-paper-content\"><p>The numbers \\(a\\), \\(b\\) and \\(c\\) are positive integers. Consider the following statements:</p>\\[\\begin{aligned}\nP:\\quad &abc\\text{ is divisible by }4.\\\\\nQ:\\quad &ab+bc+ac\\text{ is even.}\n\\end{aligned}\\]<p>Which of the following is true?</p></div>",
        "opts": [
          "\\(P\\) is necessary but not sufficient for \\(Q\\).",
          "\\(P\\) is sufficient but not necessary for \\(Q\\).",
          "\\(P\\) is necessary and sufficient for \\(Q\\).",
          "\\(P\\) is neither necessary nor sufficient for \\(Q\\)."
        ],
        "correct": 0,
        "sol": "<p>\\(Q\\) holds exactly when at least two of \\(a,b,c\\) are even, so \\(Q\\Rightarrow P\\). The converse fails for \\((4,1,1)\\).</p>",
        "estimatedDifficulty": 5.5,
        "topics": [
          "Number Theory",
          "Logic"
        ]
      },
      {
        "n": 8,
        "stem": "<div class=\"official-paper-content\"><p>Which of the following are square numbers?</p><div class=\"paper-proof\"><div class=\"paper-proof-step\"><span class=\"paper-step-label\">I</span><div>\\(63!\\times64!\\)</div></div><div class=\"paper-proof-step\"><span class=\"paper-step-label\">II</span><div>\\(64!\\)</div></div><div class=\"paper-proof-step\"><span class=\"paper-step-label\">III</span><div>\\(64!\\times65!\\)</div></div></div></div>",
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
        "sol": "<p>I is \\((8\\cdot63!)^2\\). In II, the prime \\(61\\) has odd exponent; III is \\(65(64!)^2\\), also not a square.</p>",
        "estimatedDifficulty": 5.5,
        "topics": [
          "Number Theory"
        ]
      },
      {
        "n": 9,
        "stem": "<div class=\"official-paper-content\"><p>The diagram shows the graphs of \\(y=f(x)\\) (dashed for clarity) and \\(y=g(x)\\). The two curves intersect at \\(x=a,b,c,d\\) as shown and do not meet anywhere else.</p><img class=\"official-source-fig\" src=\"p2-q9.png\" alt=\"The dashed curve y=f(x) and solid curve y=g(x) intersect at a, b, c and d.\" width=\"514\"><p>Which of the following gives the area of the region bounded between the two curves?</p></div>",
        "opts": [
          "\\(\\displaystyle\\int_a^d\\bigl(g(x)-f(x)\\bigr)\\,dx\\)",
          "\\(\\displaystyle\\int_a^d\\bigl(f(x)-g(x)\\bigr)\\,dx\\)",
          "\\(\\displaystyle\\int_a^d\\bigl(g(x)-f(x)\\bigr)\\,dx-2\\int_b^c\\bigl(f(x)-g(x)\\bigr)\\,dx\\)",
          "\\(\\displaystyle\\int_a^d\\bigl(f(x)-g(x)\\bigr)\\,dx+\\int_b^c\\bigl(g(x)-f(x)\\bigr)\\,dx\\)",
          "\\(\\displaystyle\\int_a^d\\bigl(g(x)-f(x)\\bigr)\\,dx+\\int_b^c\\bigl(f(x)-g(x)\\bigr)\\,dx\\)",
          "\\(\\displaystyle\\int_a^d\\bigl(g(x)-f(x)\\bigr)\\,dx+2\\int_b^c\\bigl(f(x)-g(x)\\bigr)\\,dx\\)",
          "\\(\\displaystyle\\int_a^d\\bigl(f(x)-g(x)\\bigr)\\,dx+2\\int_b^c\\bigl(g(x)-f(x)\\bigr)\\,dx\\)"
        ],
        "correct": 5,
        "sol": "<p>Start with \\(\\int_a^d(g-f)\\,dx\\) and reverse its sign on \\((b,c)\\) by adding \\(2\\int_b^c(f-g)\\,dx\\).</p>",
        "estimatedDifficulty": 5.5,
        "topics": [
          "Integration",
          "Functions and Graphs"
        ]
      },
      {
        "n": 10,
        "stem": "<div class=\"official-paper-content\"><p>For a real number \\(p\\), consider the following statements:</p><div class=\"paper-proof\"><div class=\"paper-proof-step\"><span class=\"paper-step-label\">S</span><div><p>\\(\\cos x=-\\sin(x-p)\\) for all real \\(x\\) if \\(p\\) is an odd multiple of \\(\\dfrac\\pi2\\).</p></div></div><div class=\"paper-proof-step\"><span class=\"paper-step-label\">T</span><div><p>\\(\\cos x=-\\cos(x-p)\\) for all real \\(x\\) if and only if \\(p\\) is an odd multiple of \\(\\pi\\).</p></div></div></div><p>Which of the following must be true?</p><div class=\"paper-proof\"><div class=\"paper-proof-step\"><span class=\"paper-step-label\">I</span><div>\\(S\\)</div></div><div class=\"paper-proof-step\"><span class=\"paper-step-label\">II</span><div><p>The converse of \\(S\\)</p></div></div><div class=\"paper-proof-step\"><span class=\"paper-step-label\">III</span><div>\\(T\\)</div></div></div></div>",
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
        "correct": 6,
        "sol": "<p>The first identity holds exactly when \\(p=\\pi/2+2j\\pi\\), not at every odd multiple of \\(\\pi/2\\). Its converse and \\(T\\) are true.</p>",
        "estimatedDifficulty": 6.0,
        "topics": [
          "Trigonometry",
          "Logic"
        ]
      },
      {
        "n": 11,
        "stem": "<div class=\"official-paper-content\"><p>A differentiable function satisfies</p>\\[\n\\int_0^x f(t)\\,dt=x^3-2x^2+x\n\\]<p>for all real \\(x\\).</p><p>Which of the following gives the complete range of values of \\(x\\) for which \\(f'(x)>0\\)?</p></div>",
        "opts": [
          "\\(x<\\dfrac13\\) or \\(x>1\\)",
          "\\(\\dfrac13<x<1\\)",
          "\\(x<\\dfrac23\\)",
          "\\(x>\\dfrac32\\)",
          "\\(x>\\dfrac23\\)",
          "\\(x>\\dfrac13\\)",
          "\\(x>1\\)",
          "No real value of \\(x\\) satisfies the condition."
        ],
        "correct": 4,
        "sol": "<p>\\(f(x)=3x^2-4x+1\\), so \\(f'(x)=6x-4>0\\) exactly when \\(x>2/3\\).</p>",
        "estimatedDifficulty": 4.5,
        "topics": [
          "Integration",
          "Differentiation"
        ]
      },
      {
        "n": 12,
        "stem": "<div class=\"official-paper-content\"><p>For some real number \\(k\\), consider the lines with equations</p>\\[\ny=2^kx,\\qquad y=x+k.\n\\]<p>Which of the following best describes the behaviour of the two lines?</p></div>",
        "opts": [
          "The two lines have exactly one point of intersection for every real value of \\(k\\).",
          "The two lines have no point of intersection for one value of \\(k\\), and exactly one point of intersection for every other value of \\(k\\).",
          "The two lines meet at infinitely many points for one value of \\(k\\), and have exactly one point of intersection for every other value of \\(k\\).",
          "The two lines have exactly one point of intersection when \\(k>0\\), and no point of intersection when \\(k\\leq0\\)."
        ],
        "correct": 2,
        "sol": "<p>At \\(k=0\\) both lines are \\(y=x\\). Otherwise \\(2^k\\ne1\\), so the two slopes differ and there is one intersection.</p>",
        "estimatedDifficulty": 4.0,
        "topics": [
          "Functions and Graphs",
          "Exponentials and Logarithms"
        ]
      },
      {
        "n": 13,
        "stem": "<div class=\"official-paper-content\"><p>Consider an arithmetic sequence with first term \\(a\\), common difference \\(d\\), number of terms \\(n\\), and sum \\(S\\), where \\(a\\) and \\(d\\) are integers and \\(n\\) is a positive integer.</p><p>We are told whether \\(a\\) is even or odd, whether \\(d\\) is even or odd, and whether \\(n\\) is even or odd. Which of the following statements is correct?</p></div>",
        "opts": [
          "We can always determine whether \\(S\\) is even or odd.",
          "We cannot always determine whether \\(S\\) is even or odd, but we can if the value of \\(n\\) is also given.",
          "We cannot always determine whether \\(S\\) is even or odd, but we can if the value of \\(a\\) is also given.",
          "We cannot always determine whether \\(S\\) is even or odd, but we can if the value of \\(d\\) is also given."
        ],
        "correct": 1,
        "sol": "<p>\\(S=na+dn(n-1)/2\\). If \\(d\\) is odd, the parity may depend on \\(n\\) modulo \\(4\\), which the value of \\(n\\) determines.</p>",
        "estimatedDifficulty": 5.5,
        "topics": [
          "Sequences and Series",
          "Number Theory",
          "Logic"
        ]
      },
      {
        "n": 14,
        "stem": "<div class=\"official-paper-content\"><p>All points on the curve \\((x-p)^2+(y-q)^2=5\\) satisfy \\(y+2x\\leq10\\).</p><p>What is the maximum possible value of \\(2p+q\\)?</p></div>",
        "opts": [
          "\\(10-\\sqrt5\\)",
          "\\(2\\sqrt5\\)",
          "\\(\\sqrt5\\)",
          "\\(5\\)",
          "\\(10\\)"
        ],
        "correct": 3,
        "sol": "<p>The maximum of \\(2x+y\\) on the circle is \\(2p+q+5\\). Therefore \\(2p+q\\leq5\\), with equality attainable.</p>",
        "estimatedDifficulty": 6.0,
        "topics": [
          "Geometry"
        ]
      },
      {
        "n": 15,
        "stem": "<div class=\"official-paper-content\"><p>Three distinct integers \\(a\\), \\(b\\) and \\(c\\) are chosen from \\(1,2,\\ldots,10\\) and are such that exactly one of them is even and exactly one is a multiple of \\(3\\).</p><p>How many triples \\((a,b,c)\\) are possible? Order does not matter: for example, \\((3,1,2)\\) and \\((3,2,1)\\) count as the same triple.</p></div>",
        "opts": [
          "\\(15\\)",
          "\\(27\\)",
          "\\(50\\)",
          "\\(66\\)",
          "\\(68\\)",
          "\\(162\\)"
        ],
        "correct": 1,
        "sol": "<p>Choose \\(6\\) and two of \\(1,5,7\\) in \\(3\\) ways, or one of \\(2,4,8,10\\), one of \\(3,9\\), and one of \\(1,5,7\\) in \\(24\\) ways.</p>",
        "estimatedDifficulty": 5.5,
        "topics": [
          "Combinatorics"
        ]
      },
      {
        "n": 16,
        "stem": "<div class=\"official-paper-content\"><p>Consider the infinite series</p>\\[\n\\frac{x}{1+|x|}+\\frac{x}{(1+|x|)^2}+\\frac{x}{(1+|x|)^3}+\\cdots,\n\\]<p>where \\(x\\) is real. Let its sum be \\(a\\).</p><p>What is the complete set of values that \\(a\\) can take?</p></div>",
        "opts": [
          "\\(\\{-1,0,1\\}\\)",
          "\\(\\{-1,1\\}\\)",
          "\\((-1,1)\\)",
          "\\([-1,1]\\)",
          "\\(\\{0,1\\}\\)",
          "\\(\\{0\\}\\cup(1,\\infty)\\)"
        ],
        "correct": 0,
        "sol": "<p>For \\(x\\ne0\\), the sum is \\(x/|x|\\); for \\(x=0\\), it is \\(0\\). Thus the set is \\(\\{-1,0,1\\}\\).</p>",
        "estimatedDifficulty": 5.5,
        "topics": [
          "Sequences and Series",
          "General algebra"
        ]
      },
      {
        "n": 17,
        "stem": "<div class=\"official-paper-content\"><p>A student attempts to solve the equation</p>\\[\n(\\log_2x)^2-5\\log_2x+6=0.\n\\]<p>Their working is shown below:</p><div class=\"paper-proof\"><div class=\"paper-proof-step\"><span class=\"paper-step-label\">I</span><div><p>Rewrite the equation as \\((\\log_2x)^2-5\\log_2x=-6\\).</p></div></div><div class=\"paper-proof-step\"><span class=\"paper-step-label\">II</span><div><p>Then \\(2\\log_2x-5\\log_2x=-6\\).</p></div></div><div class=\"paper-proof-step\"><span class=\"paper-step-label\">III</span><div><p>So \\(\\log_2x=2\\).</p></div></div><div class=\"paper-proof-step\"><span class=\"paper-step-label\">IV</span><div><p>Therefore \\(x=4\\).</p></div></div></div><p>Which of the following correctly describes the student's solution?</p></div>",
        "opts": [
          "The solution is completely correct.",
          "The solution is incorrect, and \\(x=4\\) is the unique solution to the equation.",
          "The solution is incorrect, and \\(x=4\\) is a solution to the equation but there is at least one other solution.",
          "The solution is incorrect, and \\(x=4\\) is not a solution to the equation."
        ],
        "correct": 2,
        "sol": "<p>The working is invalid at step II. The original equation gives \\(\\log_2x=2\\) or \\(3\\), so \\(x=4\\) or \\(8\\).</p>",
        "estimatedDifficulty": 4.0,
        "topics": [
          "Exponentials and Logarithms",
          "Logic"
        ]
      },
      {
        "n": 18,
        "stem": "<div class=\"official-paper-content\"><p>A teacher writes the equation \\(x^2+bx+c=0\\) on the board.</p><p>Student A copies \\(b\\) correctly but \\(c\\) incorrectly, obtaining an equation with roots \\(-4\\) and \\(8\\).</p><p>Student B copies \\(c\\) correctly but \\(b\\) incorrectly, obtaining an equation with roots \\(4\\) and \\(-3\\).</p><p>What are the roots of the teacher's equation?</p></div>",
        "opts": [
          "\\(4\\) and \\(-3\\)",
          "\\(-4\\) and \\(8\\)",
          "\\(6\\) and \\(-2\\)",
          "\\(-6\\) and \\(2\\)",
          "\\(12\\) and \\(-4\\)",
          "The equation has no real roots."
        ],
        "correct": 2,
        "sol": "<p>The first copy gives \\(b=-4\\), and the second gives \\(c=-12\\). Hence the original roots are \\(6\\) and \\(-2\\).</p>",
        "estimatedDifficulty": 4.5,
        "topics": [
          "General algebra"
        ]
      },
      {
        "n": 19,
        "stem": "<div class=\"official-paper-content\"><p>A biased six-sided die has faces numbered \\(1\\) to \\(6\\).</p><p>The probability of rolling \\(1\\) is \\(0.2\\).</p><p>The probability of rolling an even number is \\(0.4\\).</p><p>The probability of rolling a prime number is \\(0.7\\).</p><p>What is the probability of rolling \\(2\\)?</p></div>",
        "opts": [
          "\\(0.1\\)",
          "\\(0.2\\)",
          "\\(0.3\\)",
          "\\(0.4\\)",
          "\\(0.5\\)",
          "There is insufficient information to determine the probability."
        ],
        "correct": 2,
        "sol": "<p>Inclusion-exclusion gives \\(\\mathrm P(2)=0.4+0.7-(1-0.2)=0.3\\).</p>",
        "estimatedDifficulty": 5.0,
        "topics": [
          "Probability and Statistics"
        ]
      },
      {
        "n": 20,
        "stem": "<div class=\"official-paper-content\"><p>Consider the following conditions on real numbers \\(a\\), \\(b\\) and \\(c\\):</p><div class=\"paper-proof\"><div class=\"paper-proof-step\"><span class=\"paper-step-label\">I</span><div>\\(2a>b\\)</div></div><div class=\"paper-proof-step\"><span class=\"paper-step-label\">II</span><div>\\(a^2+b^2\\leq c^2\\)</div></div><div class=\"paper-proof-step\"><span class=\"paper-step-label\">III</span><div>\\(0<a<b<c\\)</div></div><div class=\"paper-proof-step\"><span class=\"paper-step-label\">IV</span><div>\\(a+c=2b\\)</div></div></div><p>Which three conditions together guarantee that \\(a\\), \\(b\\) and \\(c\\), in that order, form an arithmetic sequence and are the side lengths of a triangle?</p></div>",
        "opts": [
          "I, II and III",
          "I, II and IV",
          "I, III and IV",
          "II, III and IV",
          "None of these combinations"
        ],
        "correct": 2,
        "sol": "<p>IV gives \\(c=2b-a\\); with III, the triangle inequality \\(a+b>c\\) is equivalent to I, namely \\(2a>b\\).</p>",
        "estimatedDifficulty": 5.5,
        "topics": [
          "Logic",
          "Geometry",
          "Sequences and Series"
        ]
      }
    ]
  }
];
