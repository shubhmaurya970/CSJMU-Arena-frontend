import HeroGreeting from "./HeroGreeting";
import HeroContent from "./HeroContent";
import HeroActions from "./HeroActions";

import DecorativeWave from "./DecorativeWave";
import { motion } from "framer-motion";

function HeroCard() {
    return (
        <motion.section
    initial={{
        opacity: 0,
        y: 20
    }}
    animate={{
        opacity: 1,
        y: 0
    }}
    transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1]
    }}
            className="
                relative
                overflow-hidden

                h-[300px]

                rounded-[24px]

                border border-white/5

                bg-[#181818]
[background-image:radial-gradient(circle_at_0%_30%,rgba(216,169,59,0.07),transparent_40%)]

                px-8
                py-6

                grid
                grid-cols-[1fr_320px]
                gap-10

                items-start
            "
        >
            {/* Top Glow */}

            <div
                className="
                    absolute

                    -top-24
                    -left-24

                    h-80
                    w-80

                    rounded-full

                    bg-[#D8A93B]/10

                    blur-[130px]

                    pointer-events-none

                    z-0
                "
            />

            {/* Bottom Right Glow */}

           <div
    className="
        absolute

        bottom-[-140px]
        right-[-120px]

        h-[320px]
        w-[320px]

        rounded-full

        bg-[#D8A93B]/8

        blur-[140px]

        z-0
    "
/>

            {/* Decorative Waves */}

           <motion.div
    initial={{
        opacity: 0,
        scale: 0.9
    }}
    animate={{
        opacity: 1,
        scale: 1
    }}
    transition={{
        delay: 0.15,
        duration: 0.9,
        ease: "easeOut"
    }}
    className="
        absolute
        inset-0
        overflow-hidden
        z-0
    "
/>
    
    <DecorativeWave />


            {/* Left Content */}

            <div
                className="
                    relative

                    z-10

                    flex
                    flex-col

                    justify-center

                    h-full
                "
            >
                <HeroGreeting />

                <HeroContent />

                <div className="mt-6">
                    <HeroActions />
                </div>
            </div>

            {/* Right Panel */}

            <div
                className="
                    relative

                    z-10

                    flex

                    justify-end
                "
            >
                {/* <HeroNextEvent /> */}
            </div>

            {/* Bottom Fade */}

            <div
                className="
                    absolute

                    bottom-0
                    left-0

                    h-24
                    w-full

                    bg-gradient-to-t
                    from-[#181818]
                    to-transparent

                    pointer-events-none

                    z-0
                "
            />
        </motion.section>
    );
}

export default HeroCard;