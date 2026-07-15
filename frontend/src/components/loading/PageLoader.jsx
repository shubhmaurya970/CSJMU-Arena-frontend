import { motion } from "framer-motion";
import LoaderLogo from "./LoaderLogo";
import ProgressLine from "./ProgressLine";

function PageLoader() {
    return (
        <section
            className="
                fixed
                inset-0

                z-[9999]

                flex
                items-center
                justify-center

                overflow-hidden

                bg-[#090909]
            "
        >
            {/* Left Golden Glow */}

            <div
                className="
                    absolute

                    -top-60
                    -left-60

                    h-[700px]
                    w-[700px]

                    rounded-full

                    bg-[#F4C542]/12

                    blur-[160px]
                "
            />

            {/* Bottom Right Glow */}

            <div
                className="
                    absolute

                    -bottom-72
                    -right-72

                    h-[850px]
                    w-[850px]

                    rounded-full

                    bg-[#F4C542]/8

                    blur-[180px]
                "
            />

            {/* Center Ambient Light */}

            <div
                className="
                    absolute

                    left-1/2
                    top-1/2

                    h-[600px]
                    w-[600px]

                    -translate-x-1/2
                    -translate-y-1/2

                    rounded-full

                    bg-white/[0.03]

                    blur-[180px]
                "
            />

            {/* Loader Content */}

            <motion.div
                initial={{
                    opacity: 0,
                    scale: 0.96,
                }}
                animate={{
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 0.7,
                    ease: "easeOut",
                }}
                className="
                    relative
                    z-10

                    flex
                    flex-col
                    items-center
                "
            >
                <LoaderLogo />

                <ProgressLine />
            </motion.div>
        </section>
    );
}

export default PageLoader;