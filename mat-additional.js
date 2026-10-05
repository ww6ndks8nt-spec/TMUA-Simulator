// Transcribed from the user-supplied Oxford additional MAT papers and checked against their solution PDFs.
const MAT_ADDITIONAL_PAPERS=[
  {
    "id": "mat2023additional",
    "title": "MAT 2023 additional paper · Multiple choice",
    "sub": "November 2023 · Additional test before shortlisting following technical disruption",
    "type": 1,
    "group": 5,
    "mat": true,
    "matAdditional": true,
    "companion": false,
    "originalTimeSeconds": 3600,
    "url": "mat-additional/mat-2023-additional.pdf",
    "solutionUrl": "mat-additional/mat-2023-additional-solutions.pdf",
    "questions": [
      {
        "stem": "The function \\(p(x)=x^3\\) is an example of a polynomial with the property that there is a point on the graph \\(y=p(x)\\) with zero derivative which is neither a local maximum nor a local minimum. Which one of the following polynomials has the same property?",
        "opts": [
          "\\(y=x^3-3x^2+x\\)",
          "\\(y=x^3-3x^2+2x\\)",
          "\\(y=x^3-3x^2+3x\\)",
          "\\(y=x^3-3x^2+4x\\)",
          "\\(y=x^3-3x^2+5x\\)"
        ],
        "topics": [
          "Differentiation"
        ],
        "n": 1,
        "mat": true,
        "companion": false,
        "sourcePart": "A",
        "correct": 2,
        "sol": "<a class=\"official-solution-link\" href=\"mat-additional/mat-2023-additional-solutions.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Oxford solutions · PDF ↗</a>"
      },
      {
        "stem": "Which of the following numbers is the smallest?",
        "opts": [
          "\\(\\log_{10}\\left(\\sqrt[10]{10^{11}}\\right)\\)",
          "\\(\\frac\\pi2\\)",
          "\\(\\frac{11}{9}\\)",
          "\\(\\sqrt{\\frac32}\\)",
          "\\(\\sqrt3\\cos(44^\\circ)\\)"
        ],
        "topics": [
          "General algebra"
        ],
        "n": 2,
        "mat": true,
        "companion": false,
        "sourcePart": "B",
        "correct": 0,
        "sol": "<a class=\"official-solution-link\" href=\"mat-additional/mat-2023-additional-solutions.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Oxford solutions · PDF ↗</a>"
      },
      {
        "stem": "The sum \\(\\displaystyle\\sum_{k=1}^n k^3=\\dfrac{n^2(n+1)^2}{4}\\). It follows that \\[1^3+3^3+5^3+7^3+\\cdots+19^3\\] is equal to",
        "opts": [
          "\\(19{,}800\\)",
          "\\(19{,}900\\)",
          "\\(20{,}000\\)",
          "\\(20{,}100\\)",
          "\\(20{,}200\\)"
        ],
        "topics": [
          "Sequences and Series"
        ],
        "n": 3,
        "mat": true,
        "companion": false,
        "sourcePart": "C",
        "correct": 1,
        "sol": "<a class=\"official-solution-link\" href=\"mat-additional/mat-2023-additional-solutions.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Oxford solutions · PDF ↗</a>"
      },
      {
        "stem": "All even square numbers are multiples of \\(4\\). All odd square numbers are one more than a multiple of \\(4\\). It follows that the number of positive integer solutions \\((x,y)\\) to the equation \\[x^2+3y^2=4442\\] is",
        "opts": [
          "\\(0\\)",
          "\\(1\\)",
          "\\(2\\)",
          "\\(3\\)",
          "\\(4442\\)"
        ],
        "topics": [
          "Logic and Proof"
        ],
        "n": 4,
        "mat": true,
        "companion": false,
        "sourcePart": "D",
        "correct": 0,
        "sol": "<a class=\"official-solution-link\" href=\"mat-additional/mat-2023-additional-solutions.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Oxford solutions · PDF ↗</a>"
      },
      {
        "stem": "Let \\(d(n)\\) be the number of digits in a positive integer \\(n\\) (with \\(n\\) written in the usual decimal notation). For example \\(d(2)=1\\), \\(d(103)=3\\), and \\(d(10^6)=7\\). Define the sequence \\(s_n=20^{-d(n)}\\). What is the sum \\(\\displaystyle\\sum_{n=1}^{\\infty}s_n\\) equal to?",
        "opts": [
          "\\(\\frac12\\)",
          "\\(\\frac45\\)",
          "\\(\\frac9{10}\\)",
          "\\(1\\)",
          "\\(\\frac95\\)"
        ],
        "topics": [
          "Sequences and Series"
        ],
        "n": 5,
        "mat": true,
        "companion": false,
        "sourcePart": "E",
        "correct": 2,
        "sol": "<a class=\"official-solution-link\" href=\"mat-additional/mat-2023-additional-solutions.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Oxford solutions · PDF ↗</a>"
      },
      {
        "stem": "For two vectors \\(\\begin{pmatrix}a\\\\b\\end{pmatrix}\\) and \\(\\begin{pmatrix}c\\\\d\\end{pmatrix}\\) with integer components (positive or negative or zero), we define the function \\[f\\left(\\begin{pmatrix}a\\\\b\\end{pmatrix},\\begin{pmatrix}c\\\\d\\end{pmatrix}\\right)=\\begin{pmatrix}ac+bd\\\\ad+bc+2bd\\end{pmatrix}.\\] How many vectors \\(\\begin{pmatrix}a\\\\b\\end{pmatrix}\\) with integer components are there such that \\[f\\left(\\begin{pmatrix}a\\\\b\\end{pmatrix},\\begin{pmatrix}a\\\\b\\end{pmatrix}\\right)=\\begin{pmatrix}2\\\\0\\end{pmatrix}?\\]",
        "opts": [
          "\\(0\\)",
          "\\(1\\)",
          "\\(2\\)",
          "\\(3\\)",
          "Infinitely many."
        ],
        "topics": [
          "General algebra"
        ],
        "n": 6,
        "mat": true,
        "companion": false,
        "sourcePart": "F",
        "correct": 2,
        "sol": "<a class=\"official-solution-link\" href=\"mat-additional/mat-2023-additional-solutions.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Oxford solutions · PDF ↗</a>"
      },
      {
        "stem": "For a pair of integers \\(x\\) and \\(y\\) with \\(x\\ge0\\) and \\(y&gt;0\\), we define \\[f(x,y)=\\frac12(x+y)(x+y+1)+y.\\] What is the set of possible values that \\(f(x,y)\\) can take?",
        "opts": [
          "All positive integers.",
          "All positive even integers.",
          "All positive integers except for odd prime numbers.",
          "All positive integers that are triangular numbers (those which are the sum of the first \\(k\\) positive integers for some \\(k\\ge1\\)).",
          "All positive integers except for the triangular numbers."
        ],
        "topics": [
          "Sequences and Series"
        ],
        "n": 7,
        "mat": true,
        "companion": false,
        "sourcePart": "G",
        "correct": 4,
        "sol": "<a class=\"official-solution-link\" href=\"mat-additional/mat-2023-additional-solutions.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Oxford solutions · PDF ↗</a>"
      },
      {
        "stem": "Let \\(p(x)=2x^4-3x^3-5x^2+2x+2\\). Given that the line \\(y=mx\\), with \\(m\\) a real number, crosses the curve \\(y=p(x)\\) at four distinct points, let the \\(x\\)-coordinates of those points be \\(x_1,x_2,x_3,x_4\\). The product \\(x_1x_2x_3x_4\\) is equal to",
        "opts": [
          "\\(0\\)",
          "\\(1\\)",
          "\\(2\\)",
          "\\(3\\)",
          "Not enough information."
        ],
        "topics": [
          "General algebra"
        ],
        "n": 8,
        "mat": true,
        "companion": false,
        "sourcePart": "H",
        "correct": 1,
        "sol": "<a class=\"official-solution-link\" href=\"mat-additional/mat-2023-additional-solutions.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Oxford solutions · PDF ↗</a>"
      },
      {
        "stem": "Consider the nine lines \\(y=2x+1,\\ y=2x+2,\\ \\ldots,\\ y=2x+9\\) and the seven lines \\(y=-x+1,\\ y=-x+2,\\ \\ldots,\\ y=-x+7\\). How many distinct points are there at which the line \\(y=1-10x\\) crosses one or more of the other lines?",
        "opts": [
          "\\(12\\)",
          "\\(13\\)",
          "\\(14\\)",
          "\\(15\\)",
          "\\(16\\)"
        ],
        "topics": [
          "Geometry"
        ],
        "n": 9,
        "mat": true,
        "companion": false,
        "sourcePart": "I",
        "correct": 1,
        "sol": "<a class=\"official-solution-link\" href=\"mat-additional/mat-2023-additional-solutions.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Oxford solutions · PDF ↗</a>"
      },
      {
        "stem": "Which of the following is the graph of \\(y(y^3+4y^2x+4x^3)=x^2(1-x^2-6y^2)\\)?<figure class=\"mat-extra-figure\"><img src=\"mat-additional/2023-J.png\" alt=\"Five graph options labelled (a) to (e), reproduced from the original paper.\" width=\"960\" loading=\"lazy\"></figure>",
        "opts": [
          "Graph (a)",
          "Graph (b)",
          "Graph (c)",
          "Graph (d)",
          "Graph (e)"
        ],
        "topics": [
          "Functions and Graphs"
        ],
        "n": 10,
        "mat": true,
        "companion": false,
        "sourcePart": "J",
        "correct": 3,
        "sol": "<a class=\"official-solution-link\" href=\"mat-additional/mat-2023-additional-solutions.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Oxford solutions · PDF ↗</a>"
      }
    ]
  },
  {
    "id": "mat2022additional",
    "title": "MAT 2022 additional paper · Multiple choice",
    "sub": "December 2022 · Additional test before interviews",
    "type": 1,
    "group": 5,
    "mat": true,
    "matAdditional": true,
    "companion": false,
    "originalTimeSeconds": 3600,
    "url": "mat-additional/mat-2022-additional.pdf",
    "solutionUrl": "mat-additional/mat-2022-additional-solutions.pdf",
    "questions": [
      {
        "stem": "Whenever I toss a particular coin, it lands on heads with probability \\(\\cos^2\\alpha\\) for some fixed real number \\(\\alpha\\) (and the outcome is independent of other tosses). I toss the coin three times. The probability that the coin lands on heads two or more times is equal to",
        "opts": [
          "\\(1+3\\sin^4\\alpha-2\\sin^6\\alpha\\)",
          "\\(1-3\\sin^4\\alpha-2\\sin^6\\alpha\\)",
          "\\(1+3\\sin^4\\alpha+2\\sin^6\\alpha\\)",
          "\\(1-3\\sin^4\\alpha+2\\sin^6\\alpha\\)",
          "\\(1+8\\sin^6\\alpha\\)"
        ],
        "topics": [
          "Probability"
        ],
        "n": 1,
        "mat": true,
        "companion": false,
        "sourcePart": "A",
        "correct": 3,
        "sol": "<a class=\"official-solution-link\" href=\"mat-additional/mat-2022-additional-solutions.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Oxford solutions · PDF ↗</a>"
      },
      {
        "stem": "Which of the following graphs is a sketch of \\(e^{-x/2}-e^{-x}\\) for \\(x&gt;0\\)?<figure class=\"mat-extra-figure\"><img src=\"mat-additional/2022-B.png\" alt=\"Five graph options labelled (a) to (e), reproduced from the original paper.\" width=\"960\" loading=\"lazy\"></figure>",
        "opts": [
          "Graph (a)",
          "Graph (b)",
          "Graph (c)",
          "Graph (d)",
          "Graph (e)"
        ],
        "topics": [
          "Functions and Graphs"
        ],
        "n": 2,
        "mat": true,
        "companion": false,
        "sourcePart": "B",
        "correct": 0,
        "sol": "<a class=\"official-solution-link\" href=\"mat-additional/mat-2022-additional-solutions.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Oxford solutions · PDF ↗</a>"
      },
      {
        "stem": "For precisely which non-zero real values of \\(x\\) is it true that \\[x^2-3x+2&lt;\\frac{x-1}{x}?\\]",
        "opts": [
          "\\(x&lt;1-\\sqrt2\\text{ or }x&gt;1+\\sqrt2\\)",
          "\\(1-\\sqrt2&lt;x&lt;0\\text{ or }1&lt;x&lt;1+\\sqrt2\\)",
          "\\(1&lt;x&lt;1+\\sqrt2\\)",
          "\\(1-\\sqrt2&lt;x&lt;1+\\sqrt2\\)",
          "\\(1-\\sqrt2&lt;x&lt;0\\)"
        ],
        "topics": [
          "General algebra"
        ],
        "n": 3,
        "mat": true,
        "companion": false,
        "sourcePart": "C",
        "correct": 1,
        "sol": "<a class=\"official-solution-link\" href=\"mat-additional/mat-2022-additional-solutions.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Oxford solutions · PDF ↗</a>"
      },
      {
        "stem": "Consider the two inequalities \\[1\\le x^2+y^2\\le4\\quad\\text{and}\\quad x^2\\ge3y^2.\\] The total area of all regions of the \\((x,y)\\)-plane where both inequalities hold is",
        "opts": [
          "\\(\\pi\\sqrt3\\)",
          "\\(\\pi\\)",
          "\\(2\\pi\\)",
          "\\(\\frac\\pi2\\)",
          "\\(\\frac{\\pi^2}{6}\\)"
        ],
        "topics": [
          "Geometry"
        ],
        "n": 4,
        "mat": true,
        "companion": false,
        "sourcePart": "D",
        "correct": 1,
        "sol": "<a class=\"official-solution-link\" href=\"mat-additional/mat-2022-additional-solutions.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Oxford solutions · PDF ↗</a>"
      },
      {
        "stem": "The points \\((0,1)\\) and \\((p,q)\\) are on opposite ends of the diameter of circle \\(C\\). The \\(x\\)-axis is a tangent to the circle \\(C\\) if and only if",
        "opts": [
          "\\(p=1+q\\)",
          "\\(pq=1\\)",
          "\\(p^2=4q\\)",
          "\\(p^2+(q-1)^2=1\\)",
          "\\(p+q=1\\)"
        ],
        "topics": [
          "Geometry"
        ],
        "n": 5,
        "mat": true,
        "companion": false,
        "sourcePart": "E",
        "correct": 2,
        "sol": "<a class=\"official-solution-link\" href=\"mat-additional/mat-2022-additional-solutions.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Oxford solutions · PDF ↗</a>"
      },
      {
        "stem": "The series \\[1+(1+x-x^2)+(1+x-x^2)^2+(1+x-x^2)^3+\\cdots\\] converges to \\(\\dfrac1{x(x-1)}\\) for precisely which real values of \\(x\\)?",
        "opts": [
          "If and only if \\(-1&lt;x&lt;1\\).",
          "If and only if we have both \\(x\\ne0\\) and \\(x\\ne1\\).",
          "If and only if either \\(-1&lt;x&lt;0\\) or \\(1&lt;x&lt;2\\).",
          "If and only if either \\(-2&lt;x&lt;-1\\) or \\(0&lt;x&lt;1\\).",
          "For all real \\(x\\)."
        ],
        "topics": [
          "Sequences and Series"
        ],
        "n": 6,
        "mat": true,
        "companion": false,
        "sourcePart": "F",
        "correct": 2,
        "sol": "<a class=\"official-solution-link\" href=\"mat-additional/mat-2022-additional-solutions.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Oxford solutions · PDF ↗</a>"
      },
      {
        "stem": "Given that \\(y=f(x)\\) is a solution to \\(\\dfrac{dy}{dx}=y^{1/4}\\), it follows that one of the following functions is a solution to \\(\\dfrac{dy}{dx}=2y^{1/4}\\). Which one?",
        "opts": [
          "\\(y=2^{-4}f(x)\\)",
          "\\(y=2^3f(x)\\)",
          "\\(y=2^{4/3}f(x)\\)",
          "\\(y=2^{-3}f(x)\\)",
          "\\(y=2^4f(x)\\)"
        ],
        "topics": [
          "Differentiation"
        ],
        "n": 7,
        "mat": true,
        "companion": false,
        "sourcePart": "G",
        "correct": 2,
        "sol": "<a class=\"official-solution-link\" href=\"mat-additional/mat-2022-additional-solutions.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Oxford solutions · PDF ↗</a>"
      },
      {
        "stem": "Suppose that a function \\(f(n)\\) on the positive integers is defined such that \\(f(1)=1\\) and then for \\(n\\ge1\\) \\[f(2n)=f(n)\\quad\\text{and}\\quad f(2n+1)=f(n)+f(n+1).\\] How many values of \\(n\\) are there such that \\(f(n)=3\\) and also \\(n\\) is a multiple of \\(35\\)?",
        "opts": [
          "\\(0\\)",
          "\\(1\\)",
          "\\(2\\)",
          "\\(3\\)",
          "Infinitely many."
        ],
        "topics": [
          "Sequences and Series"
        ],
        "n": 8,
        "mat": true,
        "companion": false,
        "sourcePart": "H",
        "correct": 0,
        "sol": "<a class=\"official-solution-link\" href=\"mat-additional/mat-2022-additional-solutions.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Oxford solutions · PDF ↗</a>"
      },
      {
        "stem": "The number of positive solutions \\(x\\) to the equation \\[\\log_2x=\\log_2(x+a)+b,\\] where \\(a\\) and \\(b\\) are non-zero real numbers, is",
        "opts": [
          "zero if \\(ab&lt;1\\), or one if \\(ab&gt;1\\).",
          "one if \\(ab&lt;1\\), or two if \\(ab&gt;1\\).",
          "one if \\(ab&lt;0\\), or zero if \\(ab&gt;0\\).",
          "zero if \\(ab&lt;0\\), or one if \\(ab&gt;0\\).",
          "one if \\(ab&lt;1\\), or zero if \\(ab&gt;1\\)."
        ],
        "topics": [
          "Logarithms"
        ],
        "n": 9,
        "mat": true,
        "companion": false,
        "sourcePart": "I",
        "correct": 2,
        "sol": "<a class=\"official-solution-link\" href=\"mat-additional/mat-2022-additional-solutions.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Oxford solutions · PDF ↗</a>"
      },
      {
        "stem": "Given that \\(\\displaystyle\\int_1^2\\frac{x^2}{1+x^4}\\,dx=A\\) where \\(A\\) is some positive real number (which you should not attempt to determine), it follows that the value of \\(\\displaystyle\\int_1^2\\frac{x^{-2}}{1+x^4}\\,dx\\) is equal to",
        "opts": [
          "\\(1-A\\)",
          "\\(-A\\)",
          "\\(\\frac1A\\)",
          "\\(A-1\\)",
          "\\(\\frac12-A\\)"
        ],
        "topics": [
          "Integration"
        ],
        "n": 10,
        "mat": true,
        "companion": false,
        "sourcePart": "J",
        "correct": 4,
        "sol": "<a class=\"official-solution-link\" href=\"mat-additional/mat-2022-additional-solutions.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Oxford solutions · PDF ↗</a>"
      }
    ]
  },
  {
    "id": "mat2021additional",
    "title": "MAT 2021 additional paper · Multiple choice",
    "sub": "December 2021 · Additional test before interviews",
    "type": 1,
    "group": 5,
    "mat": true,
    "matAdditional": true,
    "companion": false,
    "originalTimeSeconds": 3600,
    "url": "mat-additional/mat-2021-additional.pdf",
    "solutionUrl": "mat-additional/mat-2021-additional-solutions.pdf",
    "questions": [
      {
        "stem": "Which of the following expressions has the largest value? Note that all angles are given in degrees.",
        "opts": [
          "\\(\\cos(10^\\circ)\\)",
          "\\(\\sin(115^\\circ)\\)",
          "\\(\\cos(375^\\circ)\\)",
          "\\(\\sin(85^\\circ)\\)",
          "\\(\\cos(-20^\\circ)\\)"
        ],
        "topics": [
          "Trigonometry"
        ],
        "n": 1,
        "mat": true,
        "companion": false,
        "sourcePart": "A",
        "correct": 3,
        "sol": "<a class=\"official-solution-link\" href=\"mat-additional/mat-2021-additional-solutions.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Oxford solutions · PDF ↗</a>"
      },
      {
        "stem": "In the expansion of \\((x^2+xy+y^2)^n\\), where \\(n\\) is a positive whole number, the coefficient of \\(x^3y^{2n-3}\\) is",
        "opts": [
          "\\(\\binom n3\\)",
          "\\(\\binom n3\\times\\binom n2\\)",
          "\\(\\binom n3+2\\times\\binom n2\\)",
          "\\(2\\times\\binom n2\\)",
          "\\(\\binom n3+\\binom n2\\)"
        ],
        "topics": [
          "Combinatorics"
        ],
        "n": 2,
        "mat": true,
        "companion": false,
        "sourcePart": "B",
        "correct": 2,
        "sol": "<a class=\"official-solution-link\" href=\"mat-additional/mat-2021-additional-solutions.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Oxford solutions · PDF ↗</a>"
      },
      {
        "stem": "Given a real number \\(c\\) with \\(0&lt;c&lt;1\\), the line \\(y=c\\) intersects the circle \\(x^2+y^2=1\\) at two points. These two points, together with \\((1,0)\\) and \\((-1,0)\\), form a quadrilateral. Which of the following graphs is a plot of the area of that quadrilateral against \\(c\\)?<figure class=\"mat-extra-figure\"><img src=\"mat-additional/2021-C.png\" alt=\"Five graph options labelled (a) to (e), reproduced from the original paper.\" width=\"960\" loading=\"lazy\"></figure>",
        "opts": [
          "Graph (a)",
          "Graph (b)",
          "Graph (c)",
          "Graph (d)",
          "Graph (e)"
        ],
        "topics": [
          "Functions and Graphs"
        ],
        "n": 3,
        "mat": true,
        "companion": false,
        "sourcePart": "C",
        "correct": 3,
        "sol": "<a class=\"official-solution-link\" href=\"mat-additional/mat-2021-additional-solutions.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Oxford solutions · PDF ↗</a>"
      },
      {
        "stem": "A particle moves along the \\(x\\)-axis. At time \\(t=0\\) the particle starts at \\((0,0)\\) with initial speed \\(1\\), moving towards \\(x=1\\). When the particle reaches \\(x=n\\) for any positive integer \\(n\\), its speed immediately changes to \\(2^{-n}\\) but its direction is unchanged. What is the particle’s position at time \\(t=100\\)?",
        "opts": [
          "\\(x=\\frac{89}{16}\\)",
          "\\(x=\\frac{105}{16}\\)",
          "\\(x=\\frac{3200}{32}\\)",
          "\\(x=\\frac{421}{64}\\)",
          "The particle has escaped to infinity."
        ],
        "topics": [
          "Sequences and Series"
        ],
        "n": 4,
        "mat": true,
        "companion": false,
        "sourcePart": "D",
        "correct": 3,
        "sol": "<a class=\"official-solution-link\" href=\"mat-additional/mat-2021-additional-solutions.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Oxford solutions · PDF ↗</a>"
      },
      {
        "stem": "The polynomial equation \\(x^4-(2k+1)x^2+2x+k^2-1=0\\) has exactly four real solutions \\(x\\) if and only if",
        "opts": [
          "\\(k&gt;1\\)",
          "\\(k&gt;-\\frac54\\)",
          "\\(k&gt;\\frac34\\)",
          "\\(k&lt;-\\frac54\\text{ or }k&gt;\\frac34\\)",
          "\\(\\frac34&lt;k&lt;1\\text{ or }k&gt;1\\)"
        ],
        "topics": [
          "General algebra"
        ],
        "n": 5,
        "mat": true,
        "companion": false,
        "sourcePart": "E",
        "correct": 4,
        "sol": "<a class=\"official-solution-link\" href=\"mat-additional/mat-2021-additional-solutions.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Oxford solutions · PDF ↗</a>"
      },
      {
        "stem": "The point \\(A\\) has coordinates \\((3,4)\\). The origin \\((0,0)\\) and the point \\(A\\) both lie on the circumference of a circle \\(C\\). The diameter of \\(C\\) through \\(A\\) also meets \\(C\\) at another point \\(B\\). The distance between \\(B\\) and the origin is \\(10\\). It follows that the coordinates of \\(B\\) could be either",
        "opts": [
          "\\((-5\\sqrt2,5\\sqrt2)\\text{ or }(5\\sqrt2,-5\\sqrt2)\\)",
          "\\((-4,3)\\text{ or }(4,-3)\\)",
          "\\((-5,5\\sqrt3)\\text{ or }(5,-5\\sqrt3)\\)",
          "\\((-8,6)\\text{ or }(8,-6)\\)",
          "\\((-5\\sqrt3,5)\\text{ or }(5\\sqrt3,-5)\\)"
        ],
        "topics": [
          "Geometry"
        ],
        "n": 6,
        "mat": true,
        "companion": false,
        "sourcePart": "F",
        "correct": 3,
        "sol": "<a class=\"official-solution-link\" href=\"mat-additional/mat-2021-additional-solutions.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Oxford solutions · PDF ↗</a>"
      },
      {
        "stem": "Without calculating it directly, which of the following numbers is the square of \\(123{,}456{,}789\\)?",
        "opts": [
          "\\(15{,}241{,}578{,}710{,}190{,}521\\)",
          "\\(15{,}241{,}578{,}730{,}190{,}521\\)",
          "\\(15{,}241{,}578{,}750{,}190{,}521\\)",
          "\\(15{,}241{,}578{,}770{,}190{,}521\\)",
          "\\(15{,}241{,}578{,}790{,}190{,}521\\)"
        ],
        "topics": [
          "General algebra"
        ],
        "n": 7,
        "mat": true,
        "companion": false,
        "sourcePart": "G",
        "correct": 2,
        "sol": "<a class=\"official-solution-link\" href=\"mat-additional/mat-2021-additional-solutions.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Oxford solutions · PDF ↗</a>"
      },
      {
        "stem": "A function \\(f(x)\\) satisfies the following equation \\[f(x)+f(y)=\\frac1{f(xy)}\\] for any real positive numbers \\(x\\) and \\(y\\), and also satisfies \\(f(x)&gt;0\\) for all real positive numbers \\(x\\). It follows that \\(f(2021)\\) is<p>[Hint: try substituting \\(x=1\\) and \\(y=1\\) into the given expression.]</p>",
        "opts": [
          "\\(1\\)",
          "\\(2021\\)",
          "\\(\\log_e2021\\)",
          "\\(\\frac1{\\sqrt2}\\)",
          "\\(\\frac1{\\log_e2021}\\)"
        ],
        "topics": [
          "Functions and Graphs"
        ],
        "n": 8,
        "mat": true,
        "companion": false,
        "sourcePart": "H",
        "correct": 3,
        "sol": "<a class=\"official-solution-link\" href=\"mat-additional/mat-2021-additional-solutions.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Oxford solutions · PDF ↗</a>"
      },
      {
        "stem": "Given that there are positive real numbers \\(a,b,c\\) that satisfy \\[\\int_a^b\\log_c(\\sin^4x\\tan^2x)\\,dx=1\\quad\\text{and}\\quad\\int_a^b\\log_c(\\sin^2x\\cos^2x)\\,dx=3,\\] it follows that the value of \\[\\int_a^b\\log_c(\\sin^4x\\cos^2x)\\,dx\\] must be equal to<p>[Note that \\(\\sin^4x\\) means \\((\\sin x)^4\\).]</p>",
        "opts": [
          "\\(4\\)",
          "\\(5\\)",
          "\\(6\\)",
          "\\(7\\)",
          "\\(8\\)"
        ],
        "topics": [
          "Logarithms"
        ],
        "n": 9,
        "mat": true,
        "companion": false,
        "sourcePart": "I",
        "correct": 0,
        "sol": "<a class=\"official-solution-link\" href=\"mat-additional/mat-2021-additional-solutions.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Oxford solutions · PDF ↗</a>"
      },
      {
        "stem": "There is a straight line that is normal to the curve \\(y=x^3-kx\\) at two different points if and only if",
        "opts": [
          "\\(k\\ge\\sqrt3\\)",
          "\\(k^2\\ge3\\)",
          "\\(k^2\\ge1\\)",
          "\\(k\\ge1\\)",
          "\\(k\\ge\\sqrt3\\text{ or }k\\le-1\\)"
        ],
        "topics": [
          "Differentiation"
        ],
        "n": 10,
        "mat": true,
        "companion": false,
        "sourcePart": "J",
        "correct": 0,
        "sol": "<a class=\"official-solution-link\" href=\"mat-additional/mat-2021-additional-solutions.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Oxford solutions · PDF ↗</a>"
      }
    ]
  },
  {
    "id": "mat2020additional",
    "title": "MAT 2020 additional paper · Multiple choice",
    "sub": "December 2020 · Additional test before interviews",
    "type": 1,
    "group": 5,
    "mat": true,
    "matAdditional": true,
    "companion": false,
    "originalTimeSeconds": 3600,
    "url": "mat-additional/mat-2020-additional.pdf",
    "solutionUrl": "mat-additional/mat-2020-additional-solutions.pdf",
    "questions": [
      {
        "stem": "The distance between opposite corners of a cube is \\(2\\). The surface area of the cube equals",
        "opts": [
          "\\(4\\)",
          "\\(6\\)",
          "\\(8\\)",
          "\\(12\\)",
          "\\(24\\)"
        ],
        "topics": [
          "Geometry"
        ],
        "n": 1,
        "mat": true,
        "companion": false,
        "sourcePart": "A",
        "correct": 2,
        "sol": "<a class=\"official-solution-link\" href=\"mat-additional/mat-2020-additional-solutions.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Oxford solutions · PDF ↗</a>"
      },
      {
        "stem": "If \\(x\\) is a very large positive real number, then the product \\[2^x\\times3^{-x}\\times4^x\\times5^{-x}\\times\\cdots\\times18^x\\times19^{-x}\\times20^x\\times21^{-x}\\] is",
        "opts": [
          "very close to zero.",
          "slightly larger than 1.",
          "equal to 1.",
          "very close to 2.",
          "very large."
        ],
        "topics": [
          "Exponentials and Logarithms"
        ],
        "n": 2,
        "mat": true,
        "companion": false,
        "sourcePart": "B",
        "correct": 0,
        "sol": "<a class=\"official-solution-link\" href=\"mat-additional/mat-2020-additional-solutions.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Oxford solutions · PDF ↗</a>"
      },
      {
        "stem": "Using degrees, the number of real solutions \\(x\\) to the equation \\[\\cos\\left(\\frac{240x}{x^2+4}\\right)=\\frac12\\] is",
        "opts": [
          "\\(0\\)",
          "\\(1\\)",
          "\\(2\\)",
          "\\(3\\)",
          "infinite."
        ],
        "topics": [
          "Trigonometry"
        ],
        "n": 3,
        "mat": true,
        "companion": false,
        "sourcePart": "C",
        "correct": 2,
        "sol": "<a class=\"official-solution-link\" href=\"mat-additional/mat-2020-additional-solutions.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Oxford solutions · PDF ↗</a>"
      },
      {
        "stem": "Let \\[y=2x+3x^2+5x^3+\\cdots\\] so that the coefficient of \\(x^n\\) is the \\(n\\)th prime number. Then the value of \\(\\dfrac{d^5y}{dx^5}\\) at \\(x=0\\) is",
        "opts": [
          "\\(0\\)",
          "\\(120\\)",
          "\\(840\\)",
          "\\(1080\\)",
          "\\(1320\\)"
        ],
        "topics": [
          "Differentiation"
        ],
        "n": 4,
        "mat": true,
        "companion": false,
        "sourcePart": "D",
        "correct": 4,
        "sol": "<a class=\"official-solution-link\" href=\"mat-additional/mat-2020-additional-solutions.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Oxford solutions · PDF ↗</a>"
      },
      {
        "stem": "The curve \\[x^{20}-y^{20}=1\\] is sketched in<figure class=\"mat-extra-figure\"><img src=\"mat-additional/2020-E.png\" alt=\"Five graph options labelled (a) to (e), reproduced from the original paper.\" width=\"960\" loading=\"lazy\"></figure>",
        "opts": [
          "Graph (a)",
          "Graph (b)",
          "Graph (c)",
          "Graph (d)",
          "Graph (e)"
        ],
        "topics": [
          "Functions and Graphs"
        ],
        "n": 5,
        "mat": true,
        "companion": false,
        "sourcePart": "E",
        "correct": 3,
        "sol": "<a class=\"official-solution-link\" href=\"mat-additional/mat-2020-additional-solutions.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Oxford solutions · PDF ↗</a>"
      },
      {
        "stem": "The following are statements about a real number \\(x\\). \\[P:\\ \\frac{x^2-1}{x+2}&lt;0,\\qquad Q:\\ \\frac{1+x}{1-x}&gt;0.\\] Then it follows that",
        "opts": [
          "\\(P\\) implies \\(Q\\) but \\(Q\\) does not imply \\(P\\).",
          "\\(Q\\) implies \\(P\\) but \\(P\\) does not imply \\(Q\\).",
          "\\(P\\) and \\(Q\\) are equivalent.",
          "If \\(P\\) is true then \\(Q\\) is false.",
          "If \\(Q\\) is true then \\(P\\) is false."
        ],
        "topics": [
          "Logic and Proof"
        ],
        "n": 6,
        "mat": true,
        "companion": false,
        "sourcePart": "F",
        "correct": 1,
        "sol": "<a class=\"official-solution-link\" href=\"mat-additional/mat-2020-additional-solutions.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Oxford solutions · PDF ↗</a>"
      },
      {
        "stem": "The functions \\(S\\) and \\(T\\) are defined by \\[S(x)=x+1,\\qquad T(x)=\\frac12x-1.\\] Beginning with \\(x=0\\) the functions \\(S\\) and \\(T\\) are repeatedly applied in some order. For example, \\(SSTS(0)=\\frac32\\). The set of possible outputs is",
        "opts": [
          "all positive rational numbers.",
          "all rational numbers greater than \\(-1\\) with denominator a power of \\(2\\) when written in lowest terms.",
          "all rational numbers with denominator a power of \\(2\\) when written in lowest terms.",
          "all positive rational numbers with denominator a power of \\(2\\) when written in lowest terms.",
          "all rational numbers greater than \\(-2\\) with denominator a power of \\(2\\) when written in lowest terms."
        ],
        "topics": [
          "Functions and Graphs"
        ],
        "n": 7,
        "mat": true,
        "companion": false,
        "sourcePart": "G",
        "correct": 4,
        "sol": "<a class=\"official-solution-link\" href=\"mat-additional/mat-2020-additional-solutions.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Oxford solutions · PDF ↗</a>"
      },
      {
        "stem": "A sequence \\(a_n\\) is defined by \\(a_0=A\\) and \\(a_k=(a_{k-1})^2\\) for \\(k&gt;0\\), where \\(A&gt;1\\). The sequence \\(b_n\\) is defined by \\(b_n=\\log_2 a_n\\). The sequence \\(b_n\\) is",
        "opts": [
          "constant.",
          "an arithmetic progression.",
          "a geometric progression.",
          "all of the above.",
          "none of the above."
        ],
        "topics": [
          "Sequences and Series"
        ],
        "n": 8,
        "mat": true,
        "companion": false,
        "sourcePart": "H",
        "correct": 2,
        "sol": "<a class=\"official-solution-link\" href=\"mat-additional/mat-2020-additional-solutions.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Oxford solutions · PDF ↗</a>"
      },
      {
        "stem": "An equilateral triangle is drawn in the \\(xy\\)-plane. Two of its vertices are at \\((0,0)\\) and \\((1000,0)\\). The number of points \\((x,y)\\) inside the triangle, where \\(x\\) and \\(y\\) are both whole numbers, equals<p>[Note that \\(\\sqrt3=1.7321\\) to 4 decimal places.]</p>",
        "opts": [
          "\\(866{,}025\\)",
          "\\(866{,}026\\)",
          "\\(866{,}027\\)",
          "\\(432{,}512\\)",
          "\\(432{,}513\\)"
        ],
        "topics": [
          "Geometry"
        ],
        "n": 9,
        "mat": true,
        "companion": false,
        "sourcePart": "I",
        "correct": 3,
        "sol": "<a class=\"official-solution-link\" href=\"mat-additional/mat-2020-additional-solutions.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Oxford solutions · PDF ↗</a>"
      },
      {
        "stem": "Let \\(R\\) be the region where all four of the following inequalities hold \\[x^2&lt;2+y,\\quad x^2&lt;2-y,\\quad y^2&lt;2+x,\\quad y^2&lt;2-x.\\] What is the area of \\(R\\)?",
        "opts": [
          "\\(0\\)",
          "\\(\\frac{28}{3}\\)",
          "\\(4+2\\pi\\)",
          "\\(\\frac43(8\\sqrt2-7)\\)",
          "infinite."
        ],
        "topics": [
          "Integration"
        ],
        "n": 10,
        "mat": true,
        "companion": false,
        "sourcePart": "J",
        "correct": 3,
        "sol": "<a class=\"official-solution-link\" href=\"mat-additional/mat-2020-additional-solutions.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Oxford solutions · PDF ↗</a>"
      }
    ]
  }
];
Object.assign(MAT_DIFFICULTY_REVIEWS,{
  "mat2020additional": [
    {
      "estimatedDifficulty": 4.5,
      "difficultyRationale": "Find the space diagonal in terms of the side length, then the surface area.",
      "difficultySource": "mat-editorial-review",
      "difficultyReviewVersion": "mat-additional-2026-10-05"
    },
    {
      "estimatedDifficulty": 4.0,
      "difficultyRationale": "Pair adjacent powers to recognise a fixed base strictly between zero and one.",
      "difficultySource": "mat-editorial-review",
      "difficultyReviewVersion": "mat-additional-2026-10-05"
    },
    {
      "estimatedDifficulty": 6.5,
      "difficultyRationale": "Bound the rational angle or use a discriminant to eliminate all other periods of cosine.",
      "difficultySource": "mat-editorial-review",
      "difficultyReviewVersion": "mat-additional-2026-10-05"
    },
    {
      "estimatedDifficulty": 4.5,
      "difficultyRationale": "Only the fifth-degree term survives evaluation of the fifth derivative at zero.",
      "difficultySource": "mat-editorial-review",
      "difficultyReviewVersion": "mat-additional-2026-10-05"
    },
    {
      "estimatedDifficulty": 5.5,
      "difficultyRationale": "Use even symmetry, the excluded strip and the large-coordinate behaviour to distinguish the graphs.",
      "difficultySource": "mat-editorial-review",
      "difficultyReviewVersion": "mat-additional-2026-10-05"
    },
    {
      "estimatedDifficulty": 6.0,
      "difficultyRationale": "Solve both rational sign inequalities, respecting poles, then compare their solution sets.",
      "difficultySource": "mat-editorial-review",
      "difficultyReviewVersion": "mat-additional-2026-10-05"
    },
    {
      "estimatedDifficulty": 7.0,
      "difficultyRationale": "Track the invariant lower bound and dyadic denominators, and establish which values are reachable.",
      "difficultySource": "mat-editorial-review",
      "difficultyReviewVersion": "mat-additional-2026-10-05"
    },
    {
      "estimatedDifficulty": 4.5,
      "difficultyRationale": "Taking logarithms turns repeated squaring into a simple geometric recurrence.",
      "difficultySource": "mat-editorial-review",
      "difficultyReviewVersion": "mat-additional-2026-10-05"
    },
    {
      "estimatedDifficulty": 7.5,
      "difficultyRationale": "Combine lattice-point counting, reflection symmetry and a size estimate to distinguish very close answers.",
      "difficultySource": "mat-editorial-review",
      "difficultyReviewVersion": "mat-additional-2026-10-05"
    },
    {
      "estimatedDifficulty": 7.5,
      "difficultyRationale": "Identify the intersection of four parabolic regions, exploit symmetry and integrate the correct boundary.",
      "difficultySource": "mat-editorial-review",
      "difficultyReviewVersion": "mat-additional-2026-10-05"
    }
  ],
  "mat2021additional": [
    {
      "estimatedDifficulty": 4.5,
      "difficultyRationale": "Reduce all expressions to cosine of an acute angle and compare monotonically.",
      "difficultySource": "mat-editorial-review",
      "difficultyReviewVersion": "mat-additional-2026-10-05"
    },
    {
      "estimatedDifficulty": 6.5,
      "difficultyRationale": "Count both ways to obtain total x-degree three without omitting the mixed contribution.",
      "difficultySource": "mat-editorial-review",
      "difficultyReviewVersion": "mat-additional-2026-10-05"
    },
    {
      "estimatedDifficulty": 6.5,
      "difficultyRationale": "Form the trapezium area and inspect its behaviour near both endpoints to distinguish similar sketches.",
      "difficultySource": "mat-editorial-review",
      "difficultyReviewVersion": "mat-additional-2026-10-05"
    },
    {
      "estimatedDifficulty": 6.0,
      "difficultyRationale": "Sum successive travel times geometrically, then account for a partly completed interval.",
      "difficultySource": "mat-editorial-review",
      "difficultyReviewVersion": "mat-additional-2026-10-05"
    },
    {
      "estimatedDifficulty": 7.5,
      "difficultyRationale": "Spot a difference of squares, test two discriminants and exclude the shared-root parameter.",
      "difficultySource": "mat-editorial-review",
      "difficultyReviewVersion": "mat-additional-2026-10-05"
    },
    {
      "estimatedDifficulty": 5.5,
      "difficultyRationale": "Use the angle in a semicircle and a perpendicular direction of the specified length.",
      "difficultySource": "mat-editorial-review",
      "difficultyReviewVersion": "mat-additional-2026-10-05"
    },
    {
      "estimatedDifficulty": 5.0,
      "difficultyRationale": "A divisibility test separates the otherwise nearly identical large numbers.",
      "difficultySource": "mat-editorial-review",
      "difficultyReviewVersion": "mat-additional-2026-10-05"
    },
    {
      "estimatedDifficulty": 5.5,
      "difficultyRationale": "Use the supplied substitution, then fix one input at one and select the positive quadratic root.",
      "difficultySource": "mat-editorial-review",
      "difficultyReviewVersion": "mat-additional-2026-10-05"
    },
    {
      "estimatedDifficulty": 6.5,
      "difficultyRationale": "Apply logarithm and tangent identities to reduce the integrals to two simultaneous linear equations.",
      "difficultySource": "mat-editorial-review",
      "difficultyReviewVersion": "mat-additional-2026-10-05"
    },
    {
      "estimatedDifficulty": 8.0,
      "difficultyRationale": "Combine equal tangent gradients, symmetry, normal slopes and a discriminant while checking real distinct contact points.",
      "difficultySource": "mat-editorial-review",
      "difficultyReviewVersion": "mat-additional-2026-10-05"
    }
  ],
  "mat2022additional": [
    {
      "estimatedDifficulty": 6.0,
      "difficultyRationale": "Count two and three heads, then rewrite and simplify in powers of sine.",
      "difficultySource": "mat-editorial-review",
      "difficultyReviewVersion": "mat-additional-2026-10-05"
    },
    {
      "estimatedDifficulty": 5.0,
      "difficultyRationale": "Determine the sign, starting value and limiting value of the difference of exponentials.",
      "difficultySource": "mat-editorial-review",
      "difficultyReviewVersion": "mat-additional-2026-10-05"
    },
    {
      "estimatedDifficulty": 6.5,
      "difficultyRationale": "Factor the rational inequality and track sign changes at three zeros and the pole.",
      "difficultySource": "mat-editorial-review",
      "difficultyReviewVersion": "mat-additional-2026-10-05"
    },
    {
      "estimatedDifficulty": 6.0,
      "difficultyRationale": "Interpret an annulus intersected by angular sectors and find the correct fraction of its area.",
      "difficultySource": "mat-editorial-review",
      "difficultyReviewVersion": "mat-additional-2026-10-05"
    },
    {
      "estimatedDifficulty": 6.0,
      "difficultyRationale": "Relate the centre-to-axis distance to the radius, or impose a repeated intersection root.",
      "difficultySource": "mat-editorial-review",
      "difficultyReviewVersion": "mat-additional-2026-10-05"
    },
    {
      "estimatedDifficulty": 6.0,
      "difficultyRationale": "Apply both sides of the geometric convergence condition to the quadratic common ratio.",
      "difficultySource": "mat-editorial-review",
      "difficultyReviewVersion": "mat-additional-2026-10-05"
    },
    {
      "estimatedDifficulty": 6.0,
      "difficultyRationale": "Substitute a constant multiple of the given function and compare scaling powers; no integration is needed.",
      "difficultySource": "mat-editorial-review",
      "difficultyReviewVersion": "mat-additional-2026-10-05"
    },
    {
      "estimatedDifficulty": 8.0,
      "difficultyRationale": "Classify the inputs giving one, two and three using the recursion, then impose divisibility by 35.",
      "difficultySource": "mat-editorial-review",
      "difficultyReviewVersion": "mat-additional-2026-10-05"
    },
    {
      "estimatedDifficulty": 6.0,
      "difficultyRationale": "Exponentiate to a linear equation and combine positivity with the logarithm domain.",
      "difficultySource": "mat-editorial-review",
      "difficultyReviewVersion": "mat-additional-2026-10-05"
    },
    {
      "estimatedDifficulty": 5.5,
      "difficultyRationale": "Add the two integrands to obtain a single elementary power before integrating.",
      "difficultySource": "mat-editorial-review",
      "difficultyReviewVersion": "mat-additional-2026-10-05"
    }
  ],
  "mat2023additional": [
    {
      "estimatedDifficulty": 5.0,
      "difficultyRationale": "Identify a repeated zero of the derivative and verify a stationary inflection.",
      "difficultySource": "mat-editorial-review",
      "difficultyReviewVersion": "mat-additional-2026-10-05"
    },
    {
      "estimatedDifficulty": 5.0,
      "difficultyRationale": "Simplify the logarithm and compare the remaining quantities using squares and a standard angle.",
      "difficultySource": "mat-editorial-review",
      "difficultyReviewVersion": "mat-additional-2026-10-05"
    },
    {
      "estimatedDifficulty": 5.5,
      "difficultyRationale": "Subtract eight times the first ten cubes from the first twenty cubes and simplify accurately.",
      "difficultySource": "mat-editorial-review",
      "difficultyReviewVersion": "mat-additional-2026-10-05"
    },
    {
      "estimatedDifficulty": 4.5,
      "difficultyRationale": "Use the supplied square-residue facts to rule out the right-hand side modulo four.",
      "difficultySource": "mat-editorial-review",
      "difficultyReviewVersion": "mat-additional-2026-10-05"
    },
    {
      "estimatedDifficulty": 6.0,
      "difficultyRationale": "Group terms by digit count to reveal a geometric series with the correct first term.",
      "difficultySource": "mat-editorial-review",
      "difficultyReviewVersion": "mat-additional-2026-10-05"
    },
    {
      "estimatedDifficulty": 5.5,
      "difficultyRationale": "Translate the defined vector operation into two integer equations and count the valid pairs.",
      "difficultySource": "mat-editorial-review",
      "difficultyReviewVersion": "mat-additional-2026-10-05"
    },
    {
      "estimatedDifficulty": 7.0,
      "difficultyRationale": "Fix x+y and determine the full interval of attained integers between successive triangular numbers.",
      "difficultySource": "mat-editorial-review",
      "difficultyReviewVersion": "mat-additional-2026-10-05"
    },
    {
      "estimatedDifficulty": 5.5,
      "difficultyRationale": "Factor the intersection polynomial abstractly and compare the leading and constant coefficients.",
      "difficultySource": "mat-editorial-review",
      "difficultyReviewVersion": "mat-additional-2026-10-05"
    },
    {
      "estimatedDifficulty": 6.5,
      "difficultyRationale": "Count the intersections with two parallel families and remove coincident intersections using an integer relation.",
      "difficultySource": "mat-editorial-review",
      "difficultyReviewVersion": "mat-additional-2026-10-05"
    },
    {
      "estimatedDifficulty": 7.0,
      "difficultyRationale": "Recognise a fourth-power expansion, then check the branches and their large-coordinate behaviour.",
      "difficultySource": "mat-editorial-review",
      "difficultyReviewVersion": "mat-additional-2026-10-05"
    }
  ]
});
