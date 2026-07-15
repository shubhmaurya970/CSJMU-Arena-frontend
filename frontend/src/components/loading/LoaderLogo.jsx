import { motion } from "framer-motion";

function LoaderLogo() {
    return (

       <motion.div
    initial={{
        opacity: 0,
        scale: .92,
        y: 12,
    }}

    animate={{
        opacity: 1,
        scale: 1,
        y: 0,
    }}

    transition={{
        duration: .7,
    }}

    className="flex flex-col items-center"
>
            {/* CSJMU */}

            <p
                className="
                    text-sm

                    font-semibold

                    uppercase

                    tracking-[8px]

                    text-[#F4C542]
                "
            >
                CSJMU
            </p>

            {/* ARENA */}

           <motion.h1
    animate={{
        textShadow: [
            "0 0 0px rgba(244,197,66,0)",
            "0 0 25px rgba(244,197,66,.45)",
            "0 0 0px rgba(244,197,66,0)",
        ],
    }}

    transition={{
        duration: 2,
        repeat: Infinity,
    }}

    className="
        mt-3
        text-7xl
        font-black
        leading-none
        text-white
    "
>
    ARENA
</motion.h1>

            {/* Small Tagline */}

            <p
                className="
                    mt-6

                    text-sm

                    tracking-[3px]

                    text-white/45
                "
            >
                PREPARING YOUR EXPERIENCE
            </p>

        </motion.div>

    );
}

export default LoaderLogo;