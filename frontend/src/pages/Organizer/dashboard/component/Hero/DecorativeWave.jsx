import { motion } from "framer-motion";
function DecorativeWave() {
    return (
        <svg
            className="
                absolute

                bottom-[-120px]
                right-[-80px]

                w-[620px]
                h-[420px]

                pointer-events-none
            "
            viewBox="0 0 620 420"
            fill="none"
        >
            <defs>

              <linearGradient
    id="flowGradient"
    x1="0%"
    y1="0%"
    x2="100%"
    y2="0%"
>
<stop offset="50%" stopColor="#FFD86A" stopOpacity="1">

    <animate
        attributeName="offset"
        from="0%"
        to="100%"
        dur="2s"
        fill="freeze"
    />

</stop>

    <stop offset="0%" stopColor="#D8A93B" stopOpacity="0" />
    <stop offset="35%" stopColor="#D8A93B" stopOpacity=".08" />
    <stop offset="50%" stopColor="#FFD86A" stopOpacity="1" />
    <stop offset="65%" stopColor="#D8A93B" stopOpacity=".08" />
    <stop offset="100%" stopColor="#D8A93B" stopOpacity="0" />
</linearGradient>


<filter
    id="goldGlow"
    x="-50%"
    y="-50%"
    width="200%"
    height="200%"
>
    <feGaussianBlur
        stdDeviation="3"
        result="blur"
    />

    <feMerge>
        <feMergeNode in="blur" />
        <feMergeNode in="SourceGraphic" />
    </feMerge>
</filter>

            </defs>
          
            <motion.g
                
    stroke="url(#flowGradient)"
    strokeWidth="1.1"
    strokeLinecap="round"
    fill="none"
    filter="url(#goldGlow)"

    initial={{
        x: 120,
        y: 120,
        opacity: 0
    }}

    animate={{
        x: 0,
        y: 0,
        opacity: 1
    }}

    transition={{
        duration: 1.6,
        ease: [0.22, 1, 0.36, 1]
    }}

            >

                <path
                    d="M600 380
                       C520 330 470 250 330 170
                       C240 120 190 90 120 40"
                />

                <path
                    d="M600 380
                       C535 340 485 270 350 190
                       C260 140 220 115 150 70"
                />

                <path
                    d="M600 380
                       C550 350 500 290 375 215
                       C290 165 245 145 180 100"
                />

                <path
                    d="M600 380
                       C565 360 520 310 400 240
                       C320 195 280 175 210 130"
                />

                <path
                    d="M600 380
                       C580 370 540 330 430 265
                       C355 220 315 205 245 165"
                />
                

            </motion.g>

        </svg>
    );
}

export default DecorativeWave;