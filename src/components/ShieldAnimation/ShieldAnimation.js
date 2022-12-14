import './ShieldAnimation.css';
import { motion } from 'framer-motion';

export default function App() {
  const drawPath = {
    hidden: { opacity: 0, scale: 0.4 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delay: .05, duration: 0.515 },
    },
  }
  return (
    <motion.svg
      width="325"
      height="325"
      viewBox="0 0 325 325"
      fill="none"
      initial="hidden"
      animate="visible"
      className="animation-logo"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)"
        fill="#000000" stroke="none">
        <motion.path
            d="M1395 2683 c-309 -77 -658 -143 -805 -151 l-115 -7 0 -650 c0 -716
            -1 -691 65 -863 110 -287 459 -602 860 -778 98 -43 89 -44 262 42 471 235 764
            559 827 918 7 38 11 296 11 698 l0 638 -75 0 c-125 0 -455 59 -805 143 l-135
            32 -90 -22z m157 -24 c53 -11 64 -14 83 -19 18 -6 79 -21 105 -26 296 -63 551
            -109 662 -120 49 -5 59 -9 63 -27 4 -12 4 -308 3 -657 -4 -693 -1 -660 -64
            -798 -13 -29 -24 -55 -24 -58 0 -8 -116 -180 -142 -210 -46 -52 -135 -140
            -172 -169 -21 -16 -55 -44 -75 -62 -20 -18 -47 -38 -61 -45 -14 -7 -33 -20
            -43 -29 -9 -9 -30 -22 -45 -30 -15 -8 -45 -26 -68 -41 -70 -47 -254 -128 -289
            -128 -69 0 -413 197 -550 315 -54 46 -177 168 -200 197 -61 79 -95 127 -95
            136 0 5 -3 12 -7 14 -12 5 -65 108 -56 108 4 0 3 4 -3 8 -7 4 -22 39 -35 77
            l-24 70 -3 663 c-3 629 -2 662 15 663 10 1 43 3 74 5 31 2 91 10 133 19 43 8
            81 14 84 14 4 -1 9 -1 12 0 4 2 343 73 405 85 11 2 47 11 80 19 33 9 78 18 99
            22 22 3 42 8 45 10 7 8 35 6 93 -6z"
            fill="#3F76F8"
            variants={drawPath}
        />
        <motion.path
            d="M1399 2589 c-42 -10 -87 -20 -100 -22 -13 -2 -31 -6 -39 -9 -8 -3
            -44 -11 -80 -18 -36 -6 -74 -14 -85 -17 -11 -3 -27 -6 -35 -8 -8 -1 -22 -5
            -30 -8 -19 -7 -287 -54 -360 -62 -30 -4 -65 -13 -78 -21 l-23 -15 3 -612 3
            -612 32 -91 c31 -89 48 -124 98 -205 64 -100 206 -251 295 -312 25 -17 47 -34
            50 -37 3 -4 20 -15 38 -25 17 -11 32 -23 32 -27 0 -4 5 -8 11 -8 6 0 29 -13
            52 -28 23 -16 58 -37 77 -46 19 -10 61 -32 94 -48 99 -50 125 -57 171 -43 37
            12 144 61 190 88 117 68 237 151 324 222 120 100 258 280 300 393 13 34 28 62
            33 62 5 0 7 4 4 8 -3 5 4 42 14 83 18 69 20 114 20 652 0 662 8 609 -96 621
            -86 10 -326 54 -424 77 -47 12 -107 25 -135 30 -50 9 -80 16 -80 19 0 1 -14 3
            -31 5 -17 3 -60 11 -95 20 -35 8 -66 14 -69 14 -3 -1 -39 -9 -81 -20z m282
            -53 c244 -56 475 -101 602 -116 l98 -13 -3 -601 c-4 -667 -2 -643 -74 -795
            -85 -182 -248 -354 -478 -505 -86 -57 -312 -176 -334 -176 -20 0 -161 68 -255
            124 -334 196 -553 445 -617 703 -18 72 -20 120 -22 664 l-3 586 128 17 c135
            18 416 74 627 125 69 16 128 30 131 30 4 1 94 -19 200 -43z"
            fill="#3F76F8"
            variants={drawPath}
        />
        <motion.path
            d="M1265 2409 c-115 -26 -277 -60 -360 -74 -82 -15 -160 -29 -173 -31
            l-23 -5 3 -537 3 -537 28 -80 c86 -244 296 -454 638 -635 l108 -57 98 51 c306
            161 528 366 619 572 52 118 54 139 54 701 l0 523 -22 4 c-13 2 -111 21 -218
            41 -107 20 -271 54 -365 76 -93 21 -172 39 -175 38 -3 -1 -99 -23 -215 -50z
            m335 -5 c96 -23 170 -40 275 -64 85 -19 112 -24 270 -49 38 -6 73 -17 77 -24
            4 -6 8 -233 8 -504 0 -397 -3 -505 -15 -562 -15 -73 -71 -197 -99 -220 -9 -8
            -16 -19 -16 -25 0 -30 -286 -296 -318 -296 -6 0 -12 -4 -14 -9 -5 -13 -224
            -141 -258 -151 -26 -8 -44 -2 -118 37 -75 39 -257 154 -272 172 -3 3 -32 29
            -65 56 -33 28 -70 61 -81 75 -12 14 -32 36 -44 50 -77 86 -127 173 -168 290
            -22 63 -31 1070 -10 1088 8 6 41 15 73 21 33 6 87 15 120 21 33 6 85 15 115
            21 30 5 134 29 230 53 96 24 182 44 190 45 8 0 62 -11 120 -25z"
            fill="#3F76F8"
            variants={drawPath}
        />
        <motion.path
            d="M1427 2354 c-7 -8 -282 -68 -402 -89 -123 -21 -153 -27 -177 -36 -15
            -6 -29 -19 -32 -28 -3 -9 -8 -191 -12 -406 -5 -289 -3 -401 5 -434 12 -42 14
            -43 46 -38 30 5 146 72 153 90 2 4 8 7 12 7 15 0 1084 717 1109 744 14 14 22
            28 19 32 -3 3 -298 -190 -654 -428 -357 -238 -652 -434 -656 -436 -5 -2 -8
            192 -8 432 l0 436 23 4 c12 3 128 25 257 51 129 25 267 53 305 63 67 17 73 17
            145 0 158 -38 520 -108 552 -108 30 1 32 2 15 15 -11 7 -38 16 -60 20 -23 3
            -62 10 -87 15 -25 5 -94 19 -155 31 -60 12 -146 30 -190 41 -76 20 -198 32
            -208 22z"
            fill="#3F76F8"
            variants={drawPath}
        />
        <motion.path
            d="M2077 2044 c-21 -14 -51 -33 -67 -42 -15 -9 -62 -41 -105 -69 -42
            -29 -81 -53 -86 -53 -5 0 -9 -4 -9 -8 0 -5 -12 -15 -27 -23 -16 -8 -30 -16
            -33 -19 -13 -15 -161 -110 -170 -110 -5 0 -10 -4 -10 -10 0 -5 -7 -10 -15 -10
            -8 0 -15 -4 -15 -9 0 -5 -8 -11 -17 -15 -10 -3 -34 -17 -53 -31 -19 -14 -43
            -31 -54 -38 -10 -6 -29 -20 -41 -29 -13 -10 -28 -18 -34 -18 -6 0 -11 -4 -11
            -8 0 -5 -12 -15 -27 -23 -16 -8 -30 -16 -33 -19 -13 -14 -162 -110 -170 -110
            -6 0 -10 -4 -10 -10 0 -5 -7 -10 -15 -10 -8 0 -15 -4 -15 -10 0 -5 -7 -10 -15
            -10 -8 0 -15 -4 -15 -8 0 -5 -19 -19 -42 -32 -24 -13 -45 -26 -48 -29 -3 -3
            -23 -19 -46 -34 -63 -42 -69 -62 -44 -129 11 -31 34 -75 51 -98 27 -38 34 -42
            61 -36 28 6 121 61 178 106 14 11 30 20 37 20 6 0 13 3 15 8 5 11 155 112 166
            112 6 0 12 4 14 8 2 5 53 41 113 80 61 39 115 75 120 80 30 24 197 132 205
            132 6 0 10 5 10 10 0 6 6 10 14 10 8 0 16 4 18 8 2 5 53 41 113 80 222 145
            205 123 205 271 0 95 -3 123 -16 135 -21 21 -32 20 -77 -10z m63 -119 l0 -125
            -586 -391 c-322 -215 -591 -392 -597 -395 -14 -5 -60 68 -87 135 l-18 46 642
            427 c352 236 642 428 644 428 1 0 2 -56 2 -125z"
            fill="#3F76F8"
            variants={drawPath}
        />
        <motion.path
            d="M1071 1944 l-61 -74 57 -74 c32 -41 60 -75 63 -75 3 0 31 33 63 74
            l58 74 -60 75 -59 75 -61 -75z m98 -23 c17 -21 31 -45 31 -53 0 -13 -60 -88
            -71 -88 -3 0 -20 18 -39 41 -28 36 -31 44 -21 65 11 26 51 72 63 73 3 1 20
            -17 37 -38z"
            fill="#3F76F8"
            variants={drawPath}
        />
        <motion.path
            d="M2095 1659 c-11 -5 -32 -17 -46 -27 -106 -71 -171 -112 -178 -112 -5
            0 -11 -4 -13 -9 -4 -11 -243 -171 -256 -171 -6 0 -12 -4 -14 -9 -1 -5 -120
            -86 -263 -181 -277 -184 -315 -213 -315 -242 0 -20 100 -128 119 -128 6 0 11
            -3 11 -8 0 -4 18 -18 40 -32 22 -14 40 -28 40 -32 0 -5 5 -8 11 -8 5 0 36 -17
            67 -38 65 -44 164 -92 190 -92 15 0 152 64 177 83 5 4 46 31 90 60 215 140
            357 319 400 500 18 74 21 407 5 438 -11 20 -33 23 -65 8z m45 -216 c-5 -190
            -9 -225 -27 -275 -71 -191 -270 -386 -545 -534 l-82 -44 -101 56 c-150 84
            -361 242 -353 265 3 8 1094 744 1108 748 3 0 3 -97 0 -216z"
            fill="#3F76F8"
            variants={drawPath}
        />
        <motion.path
            d="M1786 1231 c-31 -39 -56 -73 -56 -76 0 -7 109 -145 115 -145 7 0 115
            137 115 145 0 8 -108 145 -114 145 -2 0 -29 -31 -60 -69z m107 -38 l30 -42
            -32 -40 c-37 -47 -48 -49 -76 -18 -52 58 -53 69 -1 124 28 31 45 26 79 -24z"
            fill="#3F76F8"
            variants={drawPath}
        />
      </g>
    </motion.svg>
  )
}
