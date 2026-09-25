// Source: user-supplied tmuamock1.pdf, 湫云数竞. Question text and option order retained.
const QIUYUN_MOCK01_PAPERS=[
  {
    "id": "qiuyunmock01p1",
    "title": "湫云数竞 Mock 01 · Paper 1",
    "sub": "Original Mock Examination 01 · Transcribed from the supplied student edition · independently derived solutions",
    "type": 1,
    "group": 7,
    "companion": false,
    "url": "papers/tmuamock1.pdf#page=1",
    "questions": [
      {
        "n": 1,
        "stem": "What is the product of all real solutions of \\[|x-2|+|x+2|=x+6?\\]",
        "opts": [
          "\\(-4\\)",
          "\\(-12\\)",
          "\\(4\\)",
          "\\(12\\)",
          "\\(24\\)"
        ],
        "correct": 1,
        "sol": "<p><b>Independently derived solution.</b></p>The left side is \\(-2x\\) for \\(x<-2\\), \\(4\\) for \\(-2\\le x\\le2\\), and \\(2x\\) for \\(x>2\\). The valid distinct roots are \\(-2\\) and \\(6\\), whose product is \\(-12\\).",
        "estimatedDifficulty": 5.0,
        "source": "湫云数竞 · Original Mock Examination 01",
        "sourcePage": 3,
        "difficultySource": "community-editorial-review",
        "difficultyReviewVersion": "qiuyun-timed-review-2026-09-25",
        "difficultyRationale": "Three modulus regions, with a boundary root counted only once; short enough that the existing rating should remain. Comparator: TMUA 2020 Paper 1 Q2 (4.5, user spreadsheet H4).",
        "difficultyComparator": {
          "paperId": "tmua2020p1",
          "question": 2,
          "rating": 4.5,
          "sourceCell": "H4"
        }
      },
      {
        "n": 2,
        "stem": "An arithmetic progression has an odd number \\(N\\) of terms and a non-zero sum. The sum of the terms in odd-numbered positions is \\(\\frac59\\) of the sum of all \\(N\\) terms. What is the value of \\(N\\)?",
        "opts": [
          "\\(9\\)",
          "\\(7\\)",
          "\\(5\\)",
          "\\(11\\)",
          "\\(13\\)"
        ],
        "correct": 0,
        "sol": "<p><b>Independently derived solution.</b></p>Both the whole progression and its odd-position subsequence have the same mean, namely the middle term. Their sum ratio is therefore \\((N+1)/(2N)=5/9\\). Hence \\(9N+9=10N\\), so \\(N=9\\). The non-zero sum permits cancellation of the common mean.",
        "estimatedDifficulty": 5.5,
        "source": "湫云数竞 · Original Mock Examination 01",
        "sourcePage": 4,
        "difficultySource": "community-editorial-review",
        "difficultyReviewVersion": "qiuyun-timed-review-2026-09-25",
        "difficultyRationale": "The candidate must discover that the odd-position subsequence has the same mean as the full progression; the ratio is not a routine sum substitution. Comparator: TMUA 2018 Paper 1 Q8 (5.0, user spreadsheet L10).",
        "difficultyComparator": {
          "paperId": "tmua2018p1",
          "question": 8,
          "rating": 5,
          "sourceCell": "L10"
        }
      },
      {
        "n": 3,
        "stem": "Two parallel chords of a circle have lengths \\(6\\) and \\(8\\). The perpendicular distance between the lines containing the chords is \\(7\\). What is the radius of the circle?",
        "opts": [
          "\\(4\\)",
          "\\(\\sqrt{21}\\)",
          "\\(5\\)",
          "\\(\\sqrt{29}\\)",
          "\\(7\\)"
        ],
        "correct": 2,
        "sol": "<p><b>Independently derived solution.</b></p>Let their distances from the centre be \\(u\\ge v\\ge0\\). Then \\(u^2+9=v^2+16\\), so \\((u-v)(u+v)=7\\). They cannot be on the same side: \\(u-v=7\\) would give \\(u+v=1\\). Thus \\(u+v=7\\), \\(u-v=1\\), giving \\(u=4,v=3\\). The radius is \\(\\sqrt{4^2+3^2}=5\\).",
        "estimatedDifficulty": 6.5,
        "source": "湫云数竞 · Original Mock Examination 01",
        "sourcePage": 5,
        "difficultySource": "community-editorial-review",
        "difficultyReviewVersion": "qiuyun-timed-review-2026-09-25",
        "difficultyRationale": "The diagram is not supplied, and both same-side and opposite-side chord configurations need consideration before the radius follows. Comparator: TMUA 2020 Paper 1 Q16 (6.5, user spreadsheet H18).",
        "difficultyComparator": {
          "paperId": "tmua2020p1",
          "question": 16,
          "rating": 6.5,
          "sourceCell": "H18"
        }
      },
      {
        "n": 4,
        "stem": "Positive integers \\(x\\) and \\(y\\) satisfy \\[31x+14y=1000.\\] What is the least possible value of \\(x+y\\)?",
        "opts": [
          "\\(32\\)",
          "\\(33\\)",
          "\\(34\\)",
          "\\(35\\)",
          "\\(36\\)"
        ],
        "correct": 3,
        "sol": "<p><b>Independently derived solution.</b></p>Modulo \\(14\\), \\(3x\\equiv6\\), so \\(x\\equiv2\\pmod{14}\\). Positivity gives \\(x\\le31\\), leaving \\(x=2,16,30\\). Since \\(x+y=(1000-17x)/14\\), choose \\(x=30\\); then \\(y=5\\), and the minimum is \\(35\\).",
        "estimatedDifficulty": 5.5,
        "source": "湫云数竞 · Original Mock Examination 01",
        "sourcePage": 6,
        "difficultySource": "community-editorial-review",
        "difficultyReviewVersion": "qiuyun-timed-review-2026-09-25",
        "difficultyRationale": "A small congruence plus positivity identifies the largest admissible x; the existing rating already allows for that insight. Comparator: TMUA 2023 Paper 1 Q6 (6.0, user spreadsheet B8).",
        "difficultyComparator": {
          "paperId": "tmua2023p1",
          "question": 6,
          "rating": 6,
          "sourceCell": "B8"
        }
      },
      {
        "n": 5,
        "stem": "The equation \\(\\sin x=k\\) has two distinct solutions \\(u\\) and \\(v\\) in the interval \\(0<x<\\pi\\). Given that \\[u^2+v^2=\\frac{5\\pi^2}{8},\\] what is the value of \\(k\\)?",
        "opts": [
          "\\(\\frac{\\sqrt2}{4}\\)",
          "\\(\\frac12\\)",
          "\\(1\\)",
          "\\(\\frac{\\sqrt3}{2}\\)",
          "\\(\\frac{\\sqrt2}{2}\\)"
        ],
        "correct": 4,
        "sol": "<p><b>Independently derived solution.</b></p>The roots satisfy \\(u+v=\\pi\\), so \\(uv=3\\pi^2/16\\). They are \\(\\pi/4\\) and \\(3\\pi/4\\). Hence \\(k=\\sqrt2/2\\).",
        "estimatedDifficulty": 5.5,
        "source": "湫云数竞 · Original Mock Examination 01",
        "sourcePage": 7,
        "difficultySource": "community-editorial-review",
        "difficultyReviewVersion": "qiuyun-timed-review-2026-09-25",
        "difficultyRationale": "Root symmetry gives u+v=pi and a quadratic determines the two angles; this is a manageable pair of standard steps. Comparator: TMUA 2020 Paper 1 Q9 (6.0, user spreadsheet H11).",
        "difficultyComparator": {
          "paperId": "tmua2020p1",
          "question": 9,
          "rating": 6,
          "sourceCell": "H11"
        }
      },
      {
        "n": 6,
        "stem": "For a real number \\(k\\), the equation \\[\\log_2(\\log_2 x)+\\log_2\\left(\\log_2\\frac{16}{x}\\right)=k\\] has two real solutions \\(x_1<x_2\\) satisfying \\(x_2=4x_1\\). What is \\(k\\)?",
        "opts": [
          "\\(0\\)",
          "\\(1\\)",
          "\\(\\log_2 3\\)",
          "\\(2\\)",
          "\\(3\\)"
        ],
        "correct": 2,
        "sol": "<p><b>Independently derived solution.</b></p>Put \\(t=\\log_2 x\\); the domain is \\(0<t<4\\), and \\(t(4-t)=2^k\\). The two roots in \\(t\\) sum to \\(4\\) and differ by \\(\\log_2 4=2\\), so they are \\(1,3\\). Their product is \\(3\\), giving \\(k=\\log_2 3\\).",
        "estimatedDifficulty": 6.5,
        "source": "湫云数竞 · Original Mock Examination 01",
        "sourcePage": 8,
        "difficultySource": "community-editorial-review",
        "difficultyReviewVersion": "qiuyun-timed-review-2026-09-25",
        "difficultyRationale": "Nested logarithms require a domain check and a new variable; the ratio of the original roots must then be translated into a difference of transformed roots. Comparator: TMUA 2020 Paper 1 Q15 (6.0, user spreadsheet H17).",
        "difficultyComparator": {
          "paperId": "tmua2020p1",
          "question": 15,
          "rating": 6,
          "sourceCell": "H17"
        }
      },
      {
        "n": 7,
        "stem": "A fair coin is tossed six times. The tosses are independent.<br>What is the probability that, in exactly two of the five pairs of consecutive tosses, the two outcomes are the same?",
        "opts": [
          "\\(\\frac5{16}\\)",
          "\\(\\frac{15}{64}\\)",
          "\\(\\frac5{32}\\)",
          "\\(\\frac12\\)",
          "\\(\\frac58\\)"
        ],
        "correct": 0,
        "sol": "<p><b>Independently derived solution.</b></p>Choose the two matching transitions in \\(\\binom52=10\\) ways. Once the first toss is chosen, all subsequent tosses are forced by the match/change pattern. There are \\(2\\times10=20\\) suitable sequences out of \\(64\\), giving \\(5/16\\).",
        "estimatedDifficulty": 7.0,
        "source": "湫云数竞 · Original Mock Examination 01",
        "sourcePage": 9,
        "difficultySource": "community-editorial-review",
        "difficultyReviewVersion": "qiuyun-timed-review-2026-09-25",
        "difficultyRationale": "Counting overlapping equal-adjacent events needs a change to match/change patterns; a short binomial answer conceals the main modelling difficulty. Comparator: TMUA 2022 Paper 1 Q19 (7.0, user spreadsheet D21).",
        "difficultyComparator": {
          "paperId": "tmua2022p1",
          "question": 19,
          "rating": 7,
          "sourceCell": "D21"
        }
      },
      {
        "n": 8,
        "stem": "A monic quartic polynomial \\(p(x)\\) satisfies \\[p(x)=x^4p\\left(\\frac1x\\right)\\] for every non-zero \\(x\\). Given that \\(p(2)=p(-3)=0\\), find \\(p(1)\\).",
        "opts": [
          "\\(-\\frac{10}{3}\\)",
          "\\(-\\frac83\\)",
          "\\(-2\\)",
          "\\(\\frac83\\)",
          "\\(\\frac{10}{3}\\)"
        ],
        "correct": 1,
        "sol": "<p><b>Independently derived solution.</b></p>Reciprocal roots give the four distinct roots \\(2,1/2,-3,-1/3\\). Monicity fixes \\(p(x)=(x-2)(x-1/2)(x+3)(x+1/3)\\), so \\(p(1)=(-1)(1/2)(4)(4/3)=-8/3\\).",
        "estimatedDifficulty": 6.0,
        "source": "湫云数竞 · Original Mock Examination 01",
        "sourcePage": 10,
        "difficultySource": "community-editorial-review",
        "difficultyReviewVersion": "qiuyun-timed-review-2026-09-25",
        "difficultyRationale": "The reciprocal-root property must be extracted from a functional identity before monicity determines the polynomial; slightly harder than direct root transformations. Comparator: TMUA 2020 Paper 1 Q9 (6.0, user spreadsheet H11).",
        "difficultyComparator": {
          "paperId": "tmua2020p1",
          "question": 9,
          "rating": 6,
          "sourceCell": "H11"
        }
      },
      {
        "n": 9,
        "stem": "Let \\(\\lfloor t\\rfloor\\) denote the greatest integer less than or equal to \\(t\\). The sequence \\((a_n)\\) is defined by \\[a_n=\\lfloor n\\sqrt2\\rfloor-\\lfloor(n-1)\\sqrt2\\rfloor.\\] How many of \\(a_1,a_2,\\ldots,a_{100}\\) are equal to \\(2\\)?",
        "opts": [
          "\\(39\\)",
          "\\(40\\)",
          "\\(43\\)",
          "\\(42\\)",
          "\\(41\\)"
        ],
        "correct": 4,
        "sol": "<p><b>Independently derived solution.</b></p>Every difference is either \\(1\\) or \\(2\\). The sum telescopes to \\(\\lfloor100\\sqrt2\\rfloor=141\\), since \\(141^2<20000<142^2\\). If \\(m\\) terms are \\(2\\), the sum is \\(100+m\\); hence \\(m=41\\).",
        "estimatedDifficulty": 6.5,
        "source": "湫云数竞 · Original Mock Examination 01",
        "sourcePage": 11,
        "difficultySource": "community-editorial-review",
        "difficultyReviewVersion": "qiuyun-timed-review-2026-09-25",
        "difficultyRationale": "The recurrence is not explicit: establish the two possible increments, telescope the floor differences and convert the total into a count. Comparator: TMUA 2017 Paper 1 Q11 (5.0, user spreadsheet N13).",
        "difficultyComparator": {
          "paperId": "tmua2017p1",
          "question": 11,
          "rating": 5,
          "sourceCell": "N13"
        }
      },
      {
        "n": 10,
        "stem": "The function \\(f\\) is defined by \\(f(x)=x^3+x\\) for all real \\(x\\), and \\(g\\) is its inverse. A real number \\(t\\) satisfies \\[g(t)+g(8-t)=2.\\] What is the value of \\(g(t)g(8-t)\\)?",
        "opts": [
          "\\(-\\frac13\\)",
          "\\(0\\)",
          "\\(\\frac23\\)",
          "\\(\\frac13\\)",
          "\\(1\\)"
        ],
        "correct": 3,
        "sol": "<p><b>Independently derived solution.</b></p>Write \\(u=g(t),v=g(8-t)\\). Then \\(u+v=2\\) and \\(u^3+v^3+u+v=8\\). Thus \\(8-6uv+2=8\\), so \\(uv=1/3\\).",
        "estimatedDifficulty": 6.0,
        "source": "湫云数竞 · Original Mock Examination 01",
        "sourcePage": 12,
        "difficultySource": "community-editorial-review",
        "difficultyReviewVersion": "qiuyun-timed-review-2026-09-25",
        "difficultyRationale": "Naming the two inverse values avoids solving a cubic, after which a standard symmetric identity finishes the task; retain the existing rating. Comparator: TMUA 2020 Paper 1 Q9 (6.0, user spreadsheet H11).",
        "difficultyComparator": {
          "paperId": "tmua2020p1",
          "question": 9,
          "rating": 6,
          "sourceCell": "H11"
        }
      },
      {
        "n": 11,
        "stem": "A monic polynomial \\(f(x)\\) of degree \\(4\\) satisfies \\[f(0)=0,\\quad f(1)=1,\\quad f(2)=4,\\quad f(3)=9.\\] Find \\(f(4)\\).",
        "opts": [
          "\\(16\\)",
          "\\(40\\)",
          "\\(32\\)",
          "\\(24\\)",
          "\\(48\\)"
        ],
        "correct": 1,
        "sol": "<p><b>Independently derived solution.</b></p>The monic quartic \\(f(x)-x^2\\) vanishes at \\(0,1,2,3\\), so it equals \\(x(x-1)(x-2)(x-3)\\). Therefore \\(f(4)=16+24=40\\).",
        "estimatedDifficulty": 6.0,
        "source": "湫云数竞 · Original Mock Examination 01",
        "sourcePage": 13,
        "difficultySource": "community-editorial-review",
        "difficultyReviewVersion": "qiuyun-timed-review-2026-09-25",
        "difficultyRationale": "Subtracting x squared is an unprompted interpolation insight; otherwise a candidate may spend time on four coefficient equations. Comparator: TMUA 2020 Paper 1 Q2 (4.5, user spreadsheet H4).",
        "difficultyComparator": {
          "paperId": "tmua2020p1",
          "question": 2,
          "rating": 4.5,
          "sourceCell": "H4"
        }
      },
      {
        "n": 12,
        "stem": "The real numbers \\(a\\) and \\(b\\) are such that the coefficient of \\(x\\) in the expansion of \\[(1+ax)^2(1+bx)\\] is \\(3\\).<br>What is the greatest possible value of the coefficient of \\(x^2\\) in the expansion of \\[(1+ax)^4(1+bx)?\\]",
        "opts": [
          "\\(9\\)",
          "\\(12\\)",
          "\\(18\\)",
          "\\(24\\)",
          "There is no greatest value."
        ],
        "correct": 2,
        "sol": "<p><b>Independently derived solution.</b></p>We have \\(2a+b=3\\). The required coefficient is \\(6a^2+4ab=12a-2a^2=18-2(a-3)^2\\). Its maximum is \\(18\\), attained at \\(a=3,b=-3\\).",
        "estimatedDifficulty": 5.5,
        "source": "湫云数竞 · Original Mock Examination 01",
        "sourcePage": 14,
        "difficultySource": "community-editorial-review",
        "difficultyReviewVersion": "qiuyun-timed-review-2026-09-25",
        "difficultyRationale": "Only two low-order coefficients and one concave quadratic are involved; the existing rating is sufficient. Comparator: TMUA 2021 Paper 1 Q16 (6.5, user spreadsheet F18).",
        "difficultyComparator": {
          "paperId": "tmua2021p1",
          "question": 16,
          "rating": 6.5,
          "sourceCell": "F18"
        }
      },
      {
        "n": 13,
        "stem": "An angle \\(\\theta\\) is chosen uniformly at random from \\[\\{0^\\circ,15^\\circ,30^\\circ,\\ldots,345^\\circ\\}.\\] Given that \\(\\sin\\theta>\\frac12\\), what is the probability that \\(\\cos\\theta<\\frac12\\)?",
        "opts": [
          "\\(\\frac5{24}\\)",
          "\\(\\frac23\\)",
          "\\(\\frac34\\)",
          "\\(\\frac57\\)",
          "\\(\\frac67\\)"
        ],
        "correct": 3,
        "sol": "<p><b>Independently derived solution.</b></p>The condition restricts \\(\\theta\\) to \\(45^\\circ,60^\\circ,75^\\circ,90^\\circ,105^\\circ,120^\\circ,135^\\circ\\). Of these, the five from \\(75^\\circ\\) onwards satisfy the strict cosine inequality. Thus the probability is \\(5/7\\).",
        "estimatedDifficulty": 5.0,
        "source": "湫云数竞 · Original Mock Examination 01",
        "sourcePage": 15,
        "difficultySource": "community-editorial-review",
        "difficultyReviewVersion": "qiuyun-timed-review-2026-09-25",
        "difficultyRationale": "A seven-angle conditional sample space with strict endpoints is substantially simpler than the official interval-sign comparison. Comparator: TMUA 2019 Paper 1 Q17 (7.0, user spreadsheet J19).",
        "difficultyComparator": {
          "paperId": "tmua2019p1",
          "question": 17,
          "rating": 7,
          "sourceCell": "J19"
        }
      },
      {
        "n": 14,
        "stem": "How many ordered pairs of integers \\((x,y)\\) satisfy both of the following inequalities? \\[x^2+2xy+y^2-10x-10y+9\\le0,\\] \\[x^2-2xy+y^2-10x+10y+16\\le0.\\]",
        "opts": [
          "\\(31\\)",
          "\\(28\\)",
          "\\(32\\)",
          "\\(56\\)",
          "\\(63\\)"
        ],
        "correct": 0,
        "sol": "<p><b>Independently derived solution.</b></p>Put \\(u=x+y,v=x-y\\). Completing squares gives \\(1\\le u\\le9\\) and \\(2\\le v\\le8\\). Integers \\(x=(u+v)/2,y=(u-v)/2\\) require matching parity. There are \\(4\\times4\\) even-even pairs and \\(5\\times3\\) odd-odd pairs, totalling \\(31\\).",
        "estimatedDifficulty": 7.0,
        "source": "湫云数竞 · Original Mock Examination 01",
        "sourcePage": 16,
        "difficultySource": "community-editorial-review",
        "difficultyReviewVersion": "qiuyun-timed-review-2026-09-25",
        "difficultyRationale": "Complete two squares in coupled variables, transform to a rectangle and impose a parity constraint; counting all transformed lattice points is a plausible trap. Comparator: TMUA 2022 Paper 1 Q20 (8.0, user spreadsheet D22).",
        "difficultyComparator": {
          "paperId": "tmua2022p1",
          "question": 20,
          "rating": 8,
          "sourceCell": "D22"
        }
      },
      {
        "n": 15,
        "stem": "A point \\(P\\) on the curve \\(y=x^3\\) has positive \\(x\\)-coordinate. The tangent at \\(P\\) meets the curve again at \\(Q\\), and the tangent at \\(Q\\) meets the curve again at \\(R\\). The \\(x\\)-coordinates of \\(P\\) and \\(R\\) differ by \\(3\\). What is the gradient of the tangent at \\(P\\)?",
        "opts": [
          "\\(\\frac13\\)",
          "\\(1\\)",
          "\\(27\\)",
          "\\(9\\)",
          "\\(3\\)"
        ],
        "correct": 4,
        "sol": "<p><b>Independently derived solution.</b></p>At abscissa \\(a\\), the tangent is \\(y=3a^2x-2a^3\\). Its intersections obey \\((x-a)^2(x+2a)=0\\); hence the next distinct abscissa is \\(-2a\\). The three abscissae are \\(a,-2a,4a\\). Since \\(a>0\\), \\(4a-a=3\\) implies \\(a=1\\). The gradient is \\(3a^2=3\\).",
        "estimatedDifficulty": 7.0,
        "source": "湫云数竞 · Original Mock Examination 01",
        "sourcePage": 17,
        "difficultySource": "community-editorial-review",
        "difficultyReviewVersion": "qiuyun-timed-review-2026-09-25",
        "difficultyRationale": "Derive the tangent intersection map from a repeated cubic root, apply it twice and then use the displacement condition. Comparator: TMUA 2023 Paper 1 Q14 (6.0, user spreadsheet B16).",
        "difficultyComparator": {
          "paperId": "tmua2023p1",
          "question": 14,
          "rating": 6,
          "sourceCell": "B16"
        }
      },
      {
        "n": 16,
        "stem": "A function \\(f\\) is integrable on every finite interval and satisfies \\(f(x+1)=f(x)+1\\) for all real \\(x\\). Given that \\[\\int_0^1 f(x)\\,dx=1,\\qquad\\int_0^1 f(x)^2\\,dx=2,\\] what is \\[\\int_0^3 f(x)^2\\,dx?\\]",
        "opts": [
          "\\(6\\)",
          "\\(17\\)",
          "\\(12\\)",
          "\\(15\\)",
          "\\(9\\)"
        ],
        "correct": 1,
        "sol": "<p><b>Independently derived solution.</b></p>On the interval \\([j,j+1]\\), substitute \\(x=t+j\\). Since \\(f(t+j)=f(t)+j\\), its squared integral is \\(2+2j+j^2\\). For \\(j=0,1,2\\), these are \\(2,5,10\\), whose sum is \\(17\\).",
        "estimatedDifficulty": 6.5,
        "source": "湫云数竞 · Original Mock Examination 01",
        "sourcePage": 18,
        "difficultySource": "community-editorial-review",
        "difficultyReviewVersion": "qiuyun-timed-review-2026-09-25",
        "difficultyRationale": "Recognise the shift relation must be applied to the square, not merely to f, and combine three interval integrals with cross terms. Comparator: TMUA 2018 Paper 1 Q12 (5.0, user spreadsheet L14).",
        "difficultyComparator": {
          "paperId": "tmua2018p1",
          "question": 12,
          "rating": 5,
          "sourceCell": "L14"
        }
      },
      {
        "n": 17,
        "stem": "Let \\(f(x)=x+\\sin x\\). The real numbers \\(a_1,a_2,\\ldots,a_7\\) form an arithmetic progression with common difference \\(\\pi/3\\). Given that \\[\\sum_{k=1}^7 f(a_k)=7\\pi,\\] what is the value of \\[[f(a_4)]^2-a_2a_6?\\]",
        "opts": [
          "\\(\\frac{4\\pi^2}{9}\\)",
          "\\(\\frac{\\pi^2}{9}\\)",
          "\\(\\frac{2\\pi^2}{9}\\)",
          "\\(0\\)",
          "\\(\\frac{5\\pi^2}{9}\\)"
        ],
        "correct": 0,
        "sol": "<p><b>Independently derived solution.</b></p>Let \\(a_4=t\\). Pairing the sines around \\(t\\) gives total \\(\\sin t[1+2(\\cos(\\pi/3)+\\cos(2\\pi/3)+\\cos\\pi)]=-\\sin t\\). Thus \\(7t-\\sin t=7\\pi\\). This expression is strictly increasing because its derivative is at least \\(6\\), so \\(t=\\pi\\). Therefore \\([f(t)]^2-(t-2\\pi/3)(t+2\\pi/3)=4\\pi^2/9\\).",
        "estimatedDifficulty": 7.5,
        "source": "湫云数竞 · Original Mock Examination 01",
        "sourcePage": 19,
        "difficultySource": "community-editorial-review",
        "difficultyReviewVersion": "qiuyun-timed-review-2026-09-25",
        "difficultyRationale": "Both progression symmetry and trigonometric cancellation are needed, followed by uniqueness of a scalar equation; more insight layers than the sine-square pairing anchor. Comparator: TMUA 2018 Paper 1 Q20 (6.0, user spreadsheet L22).",
        "difficultyComparator": {
          "paperId": "tmua2018p1",
          "question": 20,
          "rating": 6,
          "sourceCell": "L22"
        }
      },
      {
        "n": 18,
        "stem": "The graph of a cubic polynomial \\(f\\) has two distinct stationary points with \\(x\\)-coordinates \\(u\\) and \\(v\\). The line joining these two points has gradient \\(-4\\). What is the gradient of the tangent to the graph at \\(x=\\frac{u+v}{2}\\)?",
        "opts": [
          "\\(-8\\)",
          "\\(0\\)",
          "\\(-4\\)",
          "\\(-2\\)",
          "\\(-6\\)"
        ],
        "correct": 4,
        "sol": "<p><b>Independently derived solution.</b></p>Write \\(f'(x)=A(x-u)(x-v)\\) and \\(d=v-u\\ne0\\). Its average over the interval is \\(-Ad^2/6\\), the chord gradient. At the midpoint the derivative is \\(-Ad^2/4\\), which is \\(3/2\\) times the chord gradient. Hence it is \\(-6\\).",
        "estimatedDifficulty": 7.5,
        "source": "湫云数竞 · Original Mock Examination 01",
        "sourcePage": 20,
        "difficultySource": "community-editorial-review",
        "difficultyReviewVersion": "qiuyun-timed-review-2026-09-25",
        "difficultyRationale": "The chord-to-midpoint gradient relation is not supplied; deriving it for a general cubic while eliminating the stationary-point locations takes significant setup. Comparator: TMUA 2023 Paper 1 Q14 (6.0, user spreadsheet B16).",
        "difficultyComparator": {
          "paperId": "tmua2023p1",
          "question": 14,
          "rating": 6,
          "sourceCell": "B16"
        }
      },
      {
        "n": 19,
        "stem": "The function \\(f\\) is defined by \\[f(x)=\\frac{x^3-c^3}{x-c}\\qquad(x\\ge0),\\] where \\(c<0\\). The points \\(A\\), \\(B\\) and \\(C\\) on the graph have \\(x\\)-coordinates \\(0\\), \\(a\\) and \\(3\\), respectively, where \\(0<a<3\\). The chord \\(AB\\) is horizontal. The area enclosed by \\(AB\\) and the curve is eight times the area enclosed by the chord \\(BC\\) and the curve. What is \\(c\\)?",
        "opts": [
          "\\(-\\frac12\\)",
          "\\(-1\\)",
          "\\(-\\frac32\\)",
          "\\(-2\\)",
          "\\(-\\frac52\\)"
        ],
        "correct": 3,
        "sol": "<p><b>Independently derived solution.</b></p>Cancel to obtain \\(f(x)=x^2+cx+c^2\\). Horizontality gives \\(a^2+ca=0\\), so \\(a=-c\\). For a monic quadratic, the area between its graph and the chord over a horizontal span \\(L\\) is \\(\\int_0^L t(L-t)\\,dt=L^3/6\\). Thus \\(a^3=8(3-a)^3\\), giving \\(a=2\\) and \\(c=-2\\).",
        "estimatedDifficulty": 7.5,
        "source": "湫云数竞 · Original Mock Examination 01",
        "sourcePage": 21,
        "difficultySource": "community-editorial-review",
        "difficultyReviewVersion": "qiuyun-timed-review-2026-09-25",
        "difficultyRationale": "Reduce the rational expression to a parabola, infer its parameter from a horizontal chord and derive or recognise the cubic area-scaling law for two separate spans. Comparator: TMUA 2022 Paper 1 Q15 (7.0, user spreadsheet D17).",
        "difficultyComparator": {
          "paperId": "tmua2022p1",
          "question": 15,
          "rating": 7,
          "sourceCell": "D17"
        }
      },
      {
        "n": 20,
        "stem": "In triangle \\(ABC\\), the internal angle bisector from \\(A\\) meets the side \\(BC\\) at \\(E\\). The ray \\(AE\\) meets the circumcircle of \\(ABC\\) again at \\(D\\), beyond \\(E\\). If \\(AE=1\\), \\(ED=8\\) and \\(BC=6\\), what is the area of triangle \\(ABC\\)?",
        "opts": [
          "\\(\\frac{3\\sqrt7}{8}\\)",
          "\\(\\frac{3\\sqrt{15}}4\\)",
          "\\(\\frac{9\\sqrt7}{8}\\)",
          "\\(3\\)",
          "\\(\\frac{9\\sqrt7}{4}\\)"
        ],
        "correct": 2,
        "sol": "<p><b>Independently derived solution.</b></p>Intersecting chords give \\(BE\\cdot EC=AE\\cdot ED=8\\). As \\(BE+EC=6\\), the two segments are \\(2,4\\); interchange B and C if needed. Set \\(E=(0,0),B=(-2,0),C=(4,0),A=(t,h)\\). Then \\(t^2+h^2=1\\). The angle-bisector theorem gives \\(AB/AC=1/2\\), hence \\((5+4t)/(17-8t)=1/4\\). This gives \\(t=-1/8\\) and \\(|h|=3\\sqrt7/8\\). Area \\(=6|h|/2=9\\sqrt7/8\\).",
        "estimatedDifficulty": 8.0,
        "source": "湫云数竞 · Original Mock Examination 01",
        "sourcePage": 22,
        "difficultySource": "community-editorial-review",
        "difficultyReviewVersion": "qiuyun-timed-review-2026-09-25",
        "difficultyRationale": "Power of a point, the angle-bisector ratio and altitude reconstruction must be linked without a diagram; multiple geometry steps remain even after the first insight. Comparator: TMUA 2023 Paper 1 Q16 (7.5, user spreadsheet B18).",
        "difficultyComparator": {
          "paperId": "tmua2023p1",
          "question": 16,
          "rating": 7.5,
          "sourceCell": "B18"
        }
      }
    ]
  },
  {
    "id": "qiuyunmock01p2",
    "title": "湫云数竞 Mock 01 · Paper 2",
    "sub": "Original Mock Examination 01 · Transcribed from the supplied student edition · independently derived solutions",
    "type": 2,
    "group": 7,
    "companion": false,
    "url": "papers/tmuamock1.pdf#page=25",
    "questions": [
      {
        "n": 1,
        "stem": "Consider the following statement about a polynomial \\(p\\):<blockquote>If \\(p(n)\\ge0\\) for every integer \\(n\\), then \\(p(x)\\ge0\\) for every real \\(x\\).</blockquote>Which of the following polynomials is a counterexample to this statement?",
        "opts": [
          "\\(p(x)=x^2+1\\)",
          "\\(p(x)=x^2-x\\)",
          "\\(p(x)=x^2-x+1\\)",
          "\\(p(x)=(x-1)^2\\)",
          "\\(p(x)=x^4+x^2\\)"
        ],
        "correct": 1,
        "sol": "<p><b>Independently derived solution.</b></p>For every integer \\(n\\), \\(n(n-1)\\ge0\\), but \\(x(x-1)<0\\) for \\(0<x<1\\). The other polynomials are nonnegative everywhere.",
        "estimatedDifficulty": 4.5,
        "source": "湫云数竞 · Original Mock Examination 01",
        "sourcePage": 27,
        "difficultySource": "community-editorial-review",
        "difficultyReviewVersion": "qiuyun-timed-review-2026-09-25",
        "difficultyRationale": "One quadratic counterexample has to satisfy the integer hypothesis and fail between consecutive integers; the existing rating is adequate. Comparator: TMUA 2022 Paper 2 Q3 (4.0, user spreadsheet E5).",
        "difficultyComparator": {
          "paperId": "tmua2022p2",
          "question": 3,
          "rating": 4,
          "sourceCell": "E5"
        }
      },
      {
        "n": 2,
        "stem": "Let \\(a,b,c\\) be positive real numbers, none of which is equal to \\(1\\), such that \\[\\log_a b+\\log_b c=0.\\] Which statement must be true?",
        "opts": [
          "The numbers \\(a\\) and \\(c\\) are both greater than \\(1\\).",
          "The numbers \\(a\\) and \\(c\\) are both less than \\(1\\).",
          "Exactly one of \\(a\\) and \\(c\\) is greater than \\(1\\).",
          "The number \\(b\\) lies strictly between \\(a\\) and \\(c\\).",
          "\\(ac=1\\)."
        ],
        "correct": 2,
        "sol": "<p><b>Independently derived solution.</b></p>Changing bases and multiplying by \\(\\ln a\\ln b\\) gives \\((\\ln b)^2+\\ln a\\ln c=0\\). Since \\(b\\ne1\\), the product \\(\\ln a\\ln c\\) is strictly negative. Thus exactly one of \\(a,c\\) exceeds \\(1\\).",
        "estimatedDifficulty": 5.5,
        "source": "湫云数竞 · Original Mock Examination 01",
        "sourcePage": 28,
        "difficultySource": "community-editorial-review",
        "difficultyReviewVersion": "qiuyun-timed-review-2026-09-25",
        "difficultyRationale": "A change of base gives a sign condition on a product of logarithms; comparable to the official logarithm-relation anchor. Comparator: TMUA 2022 Paper 2 Q15 (5.5, user spreadsheet E17).",
        "difficultyComparator": {
          "paperId": "tmua2022p2",
          "question": 15,
          "rating": 5.5,
          "sourceCell": "E17"
        }
      },
      {
        "n": 3,
        "stem": "A circle passes through \\((0,0)\\) and \\((4,0)\\). Which of the following conditions is/are individually sufficient to determine the circle uniquely?<ol type=\"I\"><li>Its area is \\(9\\pi\\).</li><li>Its centre lies on the line \\(y=x\\).</li><li>Its radius is \\(2\\).</li></ol>",
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
        "sol": "<p><b>Independently derived solution.</b></p>The centre is \\((2,t)\\), and the radius squared is \\(4+t^2\\). I gives \\(t=\\pm\\sqrt5\\), two circles. II gives \\(t=2\\), one circle. III gives \\(t=0\\), one circle. Therefore II and III only are individually sufficient.",
        "estimatedDifficulty": 5.0,
        "source": "湫云数竞 · Original Mock Examination 01",
        "sourcePage": 29,
        "difficultySource": "community-editorial-review",
        "difficultyReviewVersion": "qiuyun-timed-review-2026-09-25",
        "difficultyRationale": "Three independent uniqueness checks add work beyond identifying the circle centre, but each follows from a simple one-parameter description. Comparator: TMUA 2022 Paper 2 Q4 (4.0, user spreadsheet E6).",
        "difficultyComparator": {
          "paperId": "tmua2022p2",
          "question": 4,
          "rating": 4,
          "sourceCell": "E6"
        }
      },
      {
        "n": 4,
        "stem": "Let \\(a\\) and \\(b\\) be fixed real constants. Consider the equation \\[a\\sin^2x+b\\cos^2x=1.\\] Which of the following pairs of values of \\(x\\) has the property that, if the equation holds at both values, it must hold for every real \\(x\\)?",
        "opts": [
          "\\(x=\\pi/6\\) and \\(x=5\\pi/6\\).",
          "\\(x=\\pi/4\\) and \\(x=3\\pi/4\\).",
          "\\(x=\\pi/3\\) and \\(x=2\\pi/3\\).",
          "\\(x=\\pi/6\\) and \\(x=\\pi/3\\).",
          "\\(x=\\pi/6\\) and \\(x=7\\pi/6\\)."
        ],
        "correct": 3,
        "sol": "<p><b>Independently derived solution.</b></p>The left side is \\(b+(a-b)\\sin^2x\\). It equals one identically if two distinct values of \\(\\sin^2x\\) give one, forcing \\(a=b=1\\). Only D gives distinct squared sine values, \\(1/4\\) and \\(3/4\\).",
        "estimatedDifficulty": 5.0,
        "source": "湫云数竞 · Original Mock Examination 01",
        "sourcePage": 30,
        "difficultySource": "community-editorial-review",
        "difficultyReviewVersion": "qiuyun-timed-review-2026-09-25",
        "difficultyRationale": "The candidate needs two distinct squared-sine values; the rest is a short linear-independence check, so no increase is justified. Comparator: TMUA 2023 Paper 2 Q5 (5.0, user spreadsheet C7).",
        "difficultyComparator": {
          "paperId": "tmua2023p2",
          "question": 5,
          "rating": 5,
          "sourceCell": "C7"
        }
      },
      {
        "n": 5,
        "stem": "A batch passes a test if every measurement in it is less than \\(10\\). Every batch that passes is labelled green. A particular batch is not labelled green.<br>Which statement must be true?",
        "opts": [
          "Every measurement in the batch is at least \\(10\\).",
          "At least one measurement in the batch is greater than \\(10\\).",
          "At least one measurement in the batch is at least \\(10\\).",
          "At least one measurement in the batch is less than \\(10\\).",
          "No measurement in the batch is equal to \\(10\\)."
        ],
        "correct": 2,
        "sol": "<p><b>Independently derived solution.</b></p>If all measurements were less than \\(10\\), the batch would pass and be green. The contrapositive therefore implies that not all measurements are less than \\(10\\): at least one is \\(\\ge10\\). Equality cannot be excluded.",
        "estimatedDifficulty": 4.5,
        "source": "湫云数竞 · Original Mock Examination 01",
        "sourcePage": 31,
        "difficultySource": "community-editorial-review",
        "difficultyReviewVersion": "qiuyun-timed-review-2026-09-25",
        "difficultyRationale": "A direct contrapositive and negation of a universal inequality; preserve the strict-versus-nonstrict endpoint distinction without overrating it. Comparator: TMUA 2022 Paper 2 Q3 (4.0, user spreadsheet E5).",
        "difficultyComparator": {
          "paperId": "tmua2022p2",
          "question": 3,
          "rating": 4,
          "sourceCell": "E5"
        }
      },
      {
        "n": 6,
        "stem": "The diagonals of a convex quadrilateral \\(ABCD\\) intersect at \\(P\\). Triangles \\(APB\\) and \\(CPD\\) have equal areas, and triangles \\(APD\\) and \\(BPC\\) have equal areas. Which of the following must be true?",
        "opts": [
          "\\(ABCD\\) is a rectangle.",
          "\\(ABCD\\) is a rhombus.",
          "\\(ABCD\\) is a parallelogram.",
          "The four vertices lie on a circle.",
          "\\(AC\\) is perpendicular to \\(BD\\)."
        ],
        "correct": 2,
        "sol": "<p><b>Independently derived solution.</b></p>Let \\(AP=a,CP=c,BP=b,DP=d\\), all positive. The equal-area equations give \\(ab=cd\\) and \\(ad=bc\\), because their included angles have equal sine. Dividing gives \\(b/d=d/b\\), hence \\(b=d\\) and then \\(a=c\\). The diagonals bisect each other, so the quadrilateral is a parallelogram; a generic parallelogram need have none of the other properties.",
        "estimatedDifficulty": 6.0,
        "source": "湫云数竞 · Original Mock Examination 01",
        "sourcePage": 32,
        "difficultySource": "community-editorial-review",
        "difficultyReviewVersion": "qiuyun-timed-review-2026-09-25",
        "difficultyRationale": "Two area equalities reduce to positive segment products and bisection of diagonals; this is harder than one geometric condition but still compact. Comparator: TMUA 2022 Paper 2 Q11 (5.0, user spreadsheet E13).",
        "difficultyComparator": {
          "paperId": "tmua2022p2",
          "question": 11,
          "rating": 5,
          "sourceCell": "E13"
        }
      },
      {
        "n": 7,
        "stem": "The sequence \\((a_n)\\) is defined by \\[a_n=a+(n-1)d,\\] where \\(a\\) and \\(d\\) are positive integers. The sequence is called <i>self-summing</i> if, for every positive integer \\(n\\), there is a positive integer \\(b_n\\) such that \\[a_{b_n}=a_1+a_2+\\cdots+a_n.\\] Consider the following statements.<ol type=\"I\"><li>The sequence is self-summing if and only if \\(d\\mid a\\).</li><li>If the sequence is self-summing, then \\(b_{n+1}-b_n=n+a/d\\).</li><li>If the sequence is self-summing, then \\((b_n)\\) is an arithmetic progression.</li></ol>Which of these statements must be true?",
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
        "sol": "<p><b>Independently derived solution.</b></p>The required index is \\(b_n=1+(n-1)a/d+n(n-1)/2\\). For \\(n=2\\), integrality forces \\(d\\mid a\\); conversely that condition makes every displayed index a positive integer. Subtraction gives \\(b_{n+1}-b_n=a/d+n\\), which varies with \\(n\\). Thus I and II are true, III false.",
        "estimatedDifficulty": 7.5,
        "source": "湫云数竞 · Original Mock Examination 01",
        "sourcePage": 33,
        "difficultySource": "community-editorial-review",
        "difficultyReviewVersion": "qiuyun-timed-review-2026-09-25",
        "difficultyRationale": "Parse an unfamiliar definition, solve for an integer index, prove both directions of divisibility and check successive differences; substantially more work than spotting one invariant. Comparator: TMUA 2023 Paper 2 Q16 (6.5, user spreadsheet C18).",
        "difficultyComparator": {
          "paperId": "tmua2023p2",
          "question": 16,
          "rating": 6.5,
          "sourceCell": "C18"
        }
      },
      {
        "n": 8,
        "stem": "Let \\(n\\) be a positive integer which is not a perfect square, and let \\[x=\\sqrt{n+1}-\\sqrt n.\\] Consider the following statements.<ol type=\"I\"><li>\\(x\\) is irrational.</li><li>\\(1/x\\) is irrational.</li><li>\\(x^2\\) is irrational.</li></ol>Which of these statements must be true?",
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
        "correct": 7,
        "sol": "<p><b>Independently derived solution.</b></p>If \\(x\\) were rational, \\(1/x=\\sqrt{n+1}+\\sqrt n\\) would also be rational, making \\(\\sqrt n=(1/x-x)/2\\) rational, a contradiction. This also proves II. Moreover \\(x^2=2n+1-2\\sqrt{n(n+1)}\\). Since \\(n^2<n(n+1)<(n+1)^2\\), the integer \\(n(n+1)\\) is not a square, so III holds.",
        "estimatedDifficulty": 7.0,
        "source": "湫云数竞 · Original Mock Examination 01",
        "sourcePage": 34,
        "difficultySource": "community-editorial-review",
        "difficultyReviewVersion": "qiuyun-timed-review-2026-09-25",
        "difficultyRationale": "Three irrationality claims require separate justification; the squared expression needs the extra consecutive-square argument, not just conjugate rationalisation. Comparator: TMUA 2023 Paper 2 Q3 (4.0, user spreadsheet C5).",
        "difficultyComparator": {
          "paperId": "tmua2023p2",
          "question": 3,
          "rating": 4,
          "sourceCell": "C5"
        }
      },
      {
        "n": 9,
        "stem": "Let \\(p(x)\\) be a polynomial of degree \\(n\\) with \\(p(0)\\ne0\\). The polynomial \\(q(x)\\) is obtained by expanding and simplifying \\[x^np\\left(\\frac1x\\right).\\] Consider the following statements.<ol type=\"I\"><li>\\(q(x)\\) is a polynomial of degree \\(n\\).</li><li>If \\(r\\) is a non-zero root of \\(p(x)\\), then \\(1/r\\) is a root of \\(q(x)\\) with the same multiplicity.</li><li>\\(q(x)\\) is monic if and only if \\(p(0)=1\\).</li></ol>Which of these statements must be true?",
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
        "correct": 7,
        "sol": "<p><b>Independently derived solution.</b></p>Reversing the coefficient list makes the leading coefficient of \\(q\\) equal to the nonzero constant \\(p(0)\\), proving I and III. A factor \\((x-r)^m\\) becomes a factor \\((1-rx)^m\\); the remaining factor is nonzero at \\(1/r\\), so the multiplicity is preserved. II also holds.",
        "estimatedDifficulty": 6.5,
        "source": "湫云数竞 · Original Mock Examination 01",
        "sourcePage": 35,
        "difficultySource": "community-editorial-review",
        "difficultyReviewVersion": "qiuyun-timed-review-2026-09-25",
        "difficultyRationale": "Coefficient reversal is quick, but the degree, nonzero constant term and exact root multiplicity must all be tracked to certify three statements. Comparator: TMUA 2023 Paper 2 Q18 (7.0, user spreadsheet C20).",
        "difficultyComparator": {
          "paperId": "tmua2023p2",
          "question": 18,
          "rating": 7,
          "sourceCell": "C20"
        }
      },
      {
        "n": 10,
        "stem": "The function \\(f:\\mathbb R\\to\\mathbb R\\) is strictly increasing, with \\(f(0)=0\\) and \\(f(1)=2\\). Which equation must have exactly one real solution?",
        "opts": [
          "\\(f(x)+f(1-x)=2\\)",
          "\\(f(x)+f(x+1)=2\\)",
          "\\(f(x)f(x+1)=0\\)",
          "\\(f(x)=2x\\)",
          "\\(f(f(x))=2\\)"
        ],
        "correct": 1,
        "sol": "<p><b>Independently derived solution.</b></p>For B, the left side is strictly increasing, and \\(x=0\\) gives \\(f(0)+f(1)=2\\). Thus exactly one solution exists without needing continuity. A and D both hold at \\(x=0,1\\); C holds at \\(x=0,-1\\). E would require \\(f(x)=1\\), which need not be in the range: for example, \\(f(x)=x\\) for \\(x<1\\) and \\(f(x)=x+1\\) for \\(x\\ge1\\) satisfies the assumptions but never equals one.",
        "estimatedDifficulty": 7.0,
        "source": "湫云数竞 · Original Mock Examination 01",
        "sourcePage": 36,
        "difficultySource": "community-editorial-review",
        "difficultyReviewVersion": "qiuyun-timed-review-2026-09-25",
        "difficultyRationale": "Separate uniqueness from existence and resist importing continuity into strict monotonicity; the guaranteed solution is easy only after choosing the right expression. Comparator: TMUA 2022 Paper 2 Q9 (6.0, user spreadsheet E11).",
        "difficultyComparator": {
          "paperId": "tmua2022p2",
          "question": 9,
          "rating": 6,
          "sourceCell": "E11"
        }
      },
      {
        "n": 11,
        "stem": "Let \\(a_1>0\\) and define \\[a_{n+1}=\\frac12\\left(a_n+\\frac1{a_n}\\right).\\] Consider the following statements.<ol type=\"I\"><li>\\(a_2\\ge1\\).</li><li>The sequence \\(a_2,a_3,a_4,\\ldots\\) is decreasing or constant.</li><li>The sequence \\((a_n)\\) converges to \\(1\\).</li></ol>Which of these statements must be true?",
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
        "correct": 7,
        "sol": "<p><b>Independently derived solution.</b></p>For positive \\(t\\), \\((t+1/t)/2\\ge1\\), proving I and giving the lower bound for all later terms. If \\(t\\ge1\\), then \\((t+1/t)/2\\le t\\), proving II. The tail is monotone and bounded, so has a limit \\(L\\ge1\\). Passing to the limit gives \\(2L=L+1/L\\), hence \\(L=1\\).",
        "estimatedDifficulty": 6.5,
        "source": "湫云数竞 · Original Mock Examination 01",
        "sourcePage": 37,
        "difficultySource": "community-editorial-review",
        "difficultyReviewVersion": "qiuyun-timed-review-2026-09-25",
        "difficultyRationale": "A lower bound, tail monotonicity and convergence to the positive fixed point are three linked checks; merely solving the fixed-point equation is insufficient. Comparator: TMUA 2023 Paper 2 Q16 (6.5, user spreadsheet C18).",
        "difficultyComparator": {
          "paperId": "tmua2023p2",
          "question": 16,
          "rating": 6.5,
          "sourceCell": "C18"
        }
      },
      {
        "n": 12,
        "stem": "Consider the following statement about positive real numbers \\(a\\) and \\(b\\):<blockquote>If \\(a+b\\le2\\), then \\(ab\\le1\\).</blockquote>Which pair \\((a,b)\\) is a counterexample to both the converse and the inverse of this statement?",
        "opts": [
          "\\((\\frac12,\\frac12)\\)",
          "\\((1,1)\\)",
          "\\((2,2)\\)",
          "\\((\\frac12,2)\\)",
          "\\((\\frac12,\\frac32)\\)"
        ],
        "correct": 3,
        "sol": "<p><b>Independently derived solution.</b></p>The converse is \\(ab\\le1\\Rightarrow a+b\\le2\\); the inverse is \\(a+b>2\\Rightarrow ab>1\\). Both fail when \\(a+b>2\\) but \\(ab\\le1\\). The pair \\((1/2,2)\\) has sum \\(5/2\\) and product \\(1\\).",
        "estimatedDifficulty": 5.0,
        "source": "湫云数竞 · Original Mock Examination 01",
        "sourcePage": 38,
        "difficultySource": "community-editorial-review",
        "difficultyReviewVersion": "qiuyun-timed-review-2026-09-25",
        "difficultyRationale": "Converse and inverse have the same counterexample condition; the offered pairs make the arithmetic immediate, so retain the existing rating. Comparator: TMUA 2022 Paper 2 Q5 (5.0, user spreadsheet E7).",
        "difficultyComparator": {
          "paperId": "tmua2022p2",
          "question": 5,
          "rating": 5,
          "sourceCell": "E7"
        }
      },
      {
        "n": 13,
        "stem": "A monic cubic polynomial has three distinct positive real zeros. A tangent is drawn at each of the three points where its graph meets the \\(x\\)-axis. How many of these tangents meet the positive \\(y\\)-axis?",
        "opts": [
          "\\(0\\)",
          "\\(1\\)",
          "\\(2\\)",
          "\\(3\\)",
          "The number cannot be determined."
        ],
        "correct": 1,
        "sol": "<p><b>Independently derived solution.</b></p>Write the roots as \\(0<a<b<c\\). The derivatives at the roots have signs \\(+,-,+\\), since they are respectively \\((a-b)(a-c),(b-a)(b-c),(c-a)(c-b)\\). The tangent intercept at a positive root \\(r\\) is \\(-r p'(r)\\), so only the middle-root tangent has positive intercept.",
        "estimatedDifficulty": 6.5,
        "source": "湫云数竞 · Original Mock Examination 01",
        "sourcePage": 39,
        "difficultySource": "community-editorial-review",
        "difficultyReviewVersion": "qiuyun-timed-review-2026-09-25",
        "difficultyRationale": "Link derivative signs at three ordered positive roots to the sign of the tangent intercept; graph shape alone does not finish the question. Comparator: TMUA 2023 Paper 1 Q14 (6.0, user spreadsheet B16).",
        "difficultyComparator": {
          "paperId": "tmua2023p1",
          "question": 14,
          "rating": 6,
          "sourceCell": "B16"
        }
      },
      {
        "n": 14,
        "stem": "Let \\(p(x)\\) be a monic polynomial with non-zero coefficients. Consider the following statements.<ol type=\"I\"><li>If all its roots are positive real numbers, then its coefficients alternate in sign.</li><li>If its coefficients alternate in sign, then it has no negative real root.</li><li>If its coefficients alternate in sign, then all its roots are positive real numbers.</li></ol>Which of these statements must be true?",
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
        "sol": "<p><b>Independently derived solution.</b></p>I follows by expanding the product of \\((x-r)\\) factors with positive roots: every elementary symmetric sum is positive. For II, at \\(x=-t\\), \\(t>0\\), all the polynomial terms have the same sign, so their sum cannot vanish. III is false: \\(x^2-x+1\\) has alternating nonzero coefficients but no real roots.",
        "estimatedDifficulty": 6.5,
        "source": "湫云数竞 · Original Mock Examination 01",
        "sourcePage": 40,
        "difficultySource": "community-editorial-review",
        "difficultyReviewVersion": "qiuyun-timed-review-2026-09-25",
        "difficultyRationale": "General coefficient signs, exclusion of negative roots and a complex-root counterexample must be distinguished; two true implications do not establish the third. Comparator: TMUA 2023 Paper 2 Q18 (7.0, user spreadsheet C20).",
        "difficultyComparator": {
          "paperId": "tmua2023p2",
          "question": 18,
          "rating": 7,
          "sourceCell": "C20"
        }
      },
      {
        "n": 15,
        "stem": "Start with the list \\(L_0=(1,3)\\). To obtain \\(L_{n+1}\\) from \\(L_n\\), insert the arithmetic mean of each pair of adjacent entries between those entries. Let \\(x_n\\) be the sum of all entries of \\(L_n\\), and define \\(y_n=x_n-1\\). Consider the following statements.<ol type=\"I\"><li>The list \\(L_4\\) contains \\(17\\) entries.</li><li>\\(x_{n+1}=2x_n-2\\) for every \\(n\\ge0\\).</li><li>The sequence \\((y_n)\\) is a geometric progression.</li></ol>Which of these statements must be true?",
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
        "sol": "<p><b>Independently derived solution.</b></p>The number of gaps doubles each time, so \\(L_n\\) has \\(2^n+1\\) entries, proving I. The inserted means sum to \\(x_n-(1+3)/2=x_n-2\\), proving II. The first sums are \\(x_0=4,x_1=6,x_2=10\\), giving \\(y_0=3,y_1=5,y_2=9\\), whose successive ratios differ. III is false.",
        "estimatedDifficulty": 6.5,
        "source": "湫云数竞 · Original Mock Examination 01",
        "sourcePage": 41,
        "difficultySource": "community-editorial-review",
        "difficultyReviewVersion": "qiuyun-timed-review-2026-09-25",
        "difficultyRationale": "Track growth in list length and derive the sum recurrence with endpoint corrections, then notice that the stated shift does not produce a geometric progression. Comparator: TMUA 2023 Paper 2 Q16 (6.5, user spreadsheet C18).",
        "difficultyComparator": {
          "paperId": "tmua2023p2",
          "question": 16,
          "rating": 6.5,
          "sourceCell": "C18"
        }
      },
      {
        "n": 16,
        "stem": "The functions \\(f\\) and \\(g\\) are continuous on \\([0,1]\\) and satisfy \\(f(x)\\ge g(x)\\) for every \\(x\\in[0,1]\\). It is also given that \\[\\int_0^1 f(x)^2\\,dx<\\int_0^1 g(x)^2\\,dx.\\] Which statement must be true?",
        "opts": [
          "\\(f(x)<0\\) for every \\(x\\in[0,1]\\).",
          "\\(g(x)<0\\) for every \\(x\\in[0,1]\\).",
          "There is an \\(x\\in[0,1]\\) such that \\(f(x)+g(x)<0\\).",
          "\\(f(x)\\le-g(x)\\) for every \\(x\\in[0,1]\\).",
          "\\(\\int_0^1 f(x)\\,dx<\\int_0^1 g(x)\\,dx\\)."
        ],
        "correct": 2,
        "sol": "<p><b>Independently derived solution.</b></p>The integral of \\((f-g)(f+g)\\) is negative. As \\(f-g\\ge0\\), it is impossible for \\(f+g\\) to be nonnegative everywhere. Thus C holds. For instance \\(f=0,g=-1\\) disproves A. Taking \\(g=x-3/4\\) and \\(f=g+1/10\\) gives squared-integral difference \\(-1/25<0\\), yet g is positive near one and f is greater than -g there, disproving B and D. E contradicts \\(f\\ge g\\).",
        "estimatedDifficulty": 7.0,
        "source": "湫云数竞 · Original Mock Examination 01",
        "sourcePage": 42,
        "difficultySource": "community-editorial-review",
        "difficultyReviewVersion": "qiuyun-timed-review-2026-09-25",
        "difficultyRationale": "Factor the squared-integral difference and infer a pointwise existential conclusion; this is more subtle than ordering everywhere-positive integrands. Comparator: TMUA 2022 Paper 2 Q12 (6.0, user spreadsheet E14).",
        "difficultyComparator": {
          "paperId": "tmua2022p2",
          "question": 12,
          "rating": 6,
          "sourceCell": "E14"
        }
      },
      {
        "n": 17,
        "stem": "A polynomial \\(f\\) of degree at most two maps \\([0,1]\\) into \\([0,1]\\), with \\(f(0)=1\\) and \\(f(1)=0\\). As \\(f\\) varies, what is the complete set of values of \\(c\\in[0,1]\\) satisfying \\(f(c)=c\\)?",
        "opts": [
          "\\([\\frac13,\\frac23]\\)",
          "\\([\\frac{3-\\sqrt5}{2},\\frac12]\\)",
          "\\([\\frac{3-\\sqrt5}{2},\\frac{\\sqrt5-1}{2}]\\)",
          "\\([\\frac12,\\frac{\\sqrt5-1}{2}]\\)",
          "\\((\\frac{3-\\sqrt5}{2},\\frac{\\sqrt5-1}{2})\\)"
        ],
        "correct": 2,
        "sol": "<p><b>Independently derived solution.</b></p>Write \\(f(x)=1-x+A x(x-1)\\). Remaining in \\([0,1]\\) near the endpoints requires \\(-1\\le A\\le1\\); this is also sufficient, since it places f between \\((1-x)^2\\) and \\(1-x^2\\). Thus at a fixed point, \\((1-c)^2\\le c\\le1-c^2\\), giving \\((3-\\sqrt5)/2\\le c\\le(\\sqrt5-1)/2\\). Conversely, for any c in this interval, choosing \\(A=(1-2c)/(c(1-c))\\) lies in \\([-1,1]\\) and gives \\(f(c)=c\\), so every point is attainable, including endpoints.",
        "estimatedDifficulty": 8.0,
        "source": "湫云数竞 · Original Mock Examination 01",
        "sourcePage": 43,
        "difficultySource": "community-editorial-review",
        "difficultyReviewVersion": "qiuyun-timed-review-2026-09-25",
        "difficultyRationale": "Parameterise every admissible quadratic, establish the full parameter range and find all attainable fixed points, with endpoints included; a complete-set problem with several necessary checks. Comparator: TMUA 2022 Paper 1 Q20 (8.0, user spreadsheet D22).",
        "difficultyComparator": {
          "paperId": "tmua2022p1",
          "question": 20,
          "rating": 8,
          "sourceCell": "D22"
        }
      },
      {
        "n": 18,
        "stem": "A real polynomial \\(p\\) has a strict local minimum at \\(x=0\\) and satisfies \\(p^{\\prime\\prime}(0)=0\\). It also has a stationary point at \\(x=1\\), with \\(p(1)<p(0)\\). What is the smallest possible degree of \\(p\\)?",
        "opts": [
          "\\(3\\)",
          "\\(4\\)",
          "\\(5\\)",
          "\\(6\\)",
          "\\(7\\)"
        ],
        "correct": 3,
        "sol": "<p><b>Independently derived solution.</b></p>The first nonconstant term at zero must have even degree at least four and positive coefficient. Degree four would give \\(p=p(0)+ax^4\\), \\(a>0\\), which is not stationary at one. In degree five, write \\(p=p(0)+ax^4+bx^5\\), \\(a>0\\). Stationarity at one gives \\(b=-4a/5\\), but then \\(p(1)-p(0)=a/5>0\\). Degree six is possible: \\(p(x)=x^6/6-3x^5/10+x^4/8\\) has derivative \\(x^3(x-1/2)(x-1)\\), a strict minimum at zero, second derivative zero there, and \\(p(1)=-1/120<0\\).",
        "estimatedDifficulty": 8.5,
        "source": "湫云数竞 · Original Mock Examination 01",
        "sourcePage": 44,
        "difficultySource": "community-editorial-review",
        "difficultyReviewVersion": "qiuyun-timed-review-2026-09-25",
        "difficultyRationale": "Prove impossibility in each lower degree and construct a degree-six example satisfying both local and global inequalities; root-count intuition alone is insufficient. Comparator: TMUA 2023 Paper 2 Q19 (7.5, user spreadsheet C21).",
        "difficultyComparator": {
          "paperId": "tmua2023p2",
          "question": 19,
          "rating": 7.5,
          "sourceCell": "C21"
        }
      },
      {
        "n": 19,
        "stem": "How many continuous functions \\(f:[0,2]\\to[0,1]\\) satisfy both \\[\\int_0^1 f(x)^2\\,dx=\\int_0^1 f(x)\\,dx,\\qquad\\int_0^2 f(x)\\,dx=1?\\]",
        "opts": [
          "None",
          "Exactly one",
          "Exactly two",
          "Exactly four",
          "Infinitely many"
        ],
        "correct": 0,
        "sol": "<p><b>Independently derived solution.</b></p>The continuous nonnegative function \\(f(1-f)\\) has zero integral on \\([0,1]\\), so it vanishes there. Continuity then makes f identically zero or identically one on that interval. In the first case the integral over \\([1,2]\\) must be one, forcing f identically one there; in the second it must be zero, forcing f identically zero there. Both contradict continuity at one. No such function exists.",
        "estimatedDifficulty": 8.0,
        "source": "湫云数竞 · Original Mock Examination 01",
        "sourcePage": 45,
        "difficultySource": "community-editorial-review",
        "difficultyReviewVersion": "qiuyun-timed-review-2026-09-25",
        "difficultyRationale": "A zero integral of a nonnegative function forces a discrete-valued restriction, continuity makes it constant, and the second integral forces a contradiction at the join. Comparator: TMUA 2023 Paper 2 Q20 (8.0, user spreadsheet C22).",
        "difficultyComparator": {
          "paperId": "tmua2023p2",
          "question": 20,
          "rating": 8,
          "sourceCell": "C22"
        }
      },
      {
        "n": 20,
        "stem": "Let \\[(1+ax)^n=c_0+c_1x+\\cdots+c_nx^n,\\] where \\(a>0\\) and \\(n\\) is an integer with \\(n\\ge4\\). Given that \\(c_2=c_3\\), which of the following must be true?",
        "opts": [
          "\\(c_1<c_4\\).",
          "\\(c_1=c_4\\).",
          "\\(c_1>c_4\\).",
          "No coefficient is greater than \\(c_2\\).",
          "No coefficient is smaller than \\(c_0\\)."
        ],
        "correct": 3,
        "sol": "<p><b>Independently derived solution.</b></p>The coefficient ratio is \\(c_{r+1}/c_r=a(n-r)/(r+1)\\), strictly decreasing with r. Equality \\(c_3/c_2=1\\) gives \\(a=3/(n-2)\\). The coefficients increase up to \\(c_2=c_3\\) and then decrease, proving D. The ratio \\(c_4/c_1=9(n-1)(n-3)/(8(n-2)^2)\\) is less than one at n=4 and greater at n=6, so A–C are not universal. At n=6, \\(c_6=(3/4)^6<c_0=1\\), disproving E.",
        "estimatedDifficulty": 7.5,
        "source": "湫云数竞 · Original Mock Examination 01",
        "sourcePage": 46,
        "difficultySource": "community-editorial-review",
        "difficultyReviewVersion": "qiuyun-timed-review-2026-09-25",
        "difficultyRationale": "Equality of two coefficients must be extended to a global unimodality argument using consecutive ratios; the problem asks about every coefficient, not just adjacent ones. Comparator: TMUA 2021 Paper 1 Q16 (6.5, user spreadsheet F18).",
        "difficultyComparator": {
          "paperId": "tmua2021p1",
          "question": 16,
          "rating": 6.5,
          "sourceCell": "F18"
        }
      }
    ]
  }
];
