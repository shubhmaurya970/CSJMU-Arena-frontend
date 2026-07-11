import { motion } from "framer-motion";

function SectionHeader() {
    return (
        <div className="text-center">

            {/* Top Label */}

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{
                    once: false,
                    amount: 0.35,
                }}
                transition={{
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                }}
                className="flex items-center justify-center gap-6"
            >

                <div className="h-px w-28 bg-[#F4C542]/35" />

                <span
                    className="
                        text-sm
                        font-bold
                        uppercase
                        tracking-[10px]
                        text-[#F4C542]
                    "
                >
                    Upcoming Events
                </span>

                <div className="h-px w-28 bg-[#F4C542]/35" />

            </motion.div>

            {/* Heading */}

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{
                    once: false,
                    amount: 0.35,
                }}
                transition={{
                    duration: 0.8,
                    delay: 0.12,
                    ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-8"
            >

                <h2
                    className="
                        text-[5.3rem]
                        font-extrabold
                        leading-none
                        tracking-[-4px]
                        text-white
                    "
                >
                    Stay Ahead.
                </h2>

                <h2
                    className="
                        mt-1
                        text-[4.5rem]
                        font-extrabold
                        leading-none
                        tracking-[-3px]
                        text-[#F4C542]
                    "
                >
                    Join the Moment.
                </h2>

            </motion.div>

            {/* Description */}

            <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{
                    once: false,
                    amount: 0.35,
                }}
                transition={{
                    duration: 0.8,
                    delay: 0.25,
                    ease: [0.22, 1, 0.36, 1],
                }}
                className="
                    mx-auto
                    mt-6
                    max-w-3xl
                    text-[1.15rem]
                    leading-8
                    text-white/60
                "
            >
                Explore events, showcase your talent, and build the future together.
            </motion.p>

        </div>
    );
}

export default SectionHeader;