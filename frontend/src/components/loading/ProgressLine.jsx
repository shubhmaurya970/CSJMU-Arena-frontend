import { motion } from "framer-motion";

function ProgressLine() {
    return (

        <div
            className="
                relative

                mt-12

                h-6
                w-[320px]

                flex
                items-center
            "
        >

            {/* Base Line */}

            <div
                className="
                    absolute

                    h-px
                    w-full

                    bg-white/10
                "
            />

            {/* Golden Glow */}

            <div
                className="
                    absolute

                    h-px
                    w-full

                    bg-gradient-to-r
                    from-transparent
                    via-[#F4C542]/30
                    to-transparent

                    blur-sm
                "
            />

            {/* Moving Orb */}

            <motion.div

                animate={{
                    x: [0, 304, 0],
                }}

                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}

                className="
                    absolute

                    flex
                    items-center
                    justify-center
                "
            >

                <div
                    className="
                        h-3
                        w-3

                        rounded-full

                        bg-[#F4C542]

                        shadow-[0_0_22px_rgba(244,197,66,1)]
                    "
                />

            </motion.div>

        </div>

    );
}

export default ProgressLine;