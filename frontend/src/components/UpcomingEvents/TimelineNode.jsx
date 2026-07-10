import { motion } from "framer-motion";

function TimelineNode({ month, day, year }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{
                once: false,
                amount: 0.5,
            }}
            transition={{
                duration: 0.65,
                ease: [0.34, 1.56, 0.64, 1],
            }}
            whileHover={{
                scale: 1.05,
            }}
            className="relative z-20 flex h-24 w-24 items-center justify-center"
        >
            <motion.div
                className="relative flex h-24 w-24 flex-col items-center justify-center rounded-full border-2 border-[#F4C542] bg-[#17130F]"
                initial={{
                    boxShadow: "0 0 0 rgba(244,197,66,0)",
                }}
                whileInView={{
                    boxShadow:
                        "0 0 35px rgba(244,197,66,.22), 0 0 80px rgba(244,197,66,.08)",
                }}
                viewport={{
                    once: false,
                    amount: 0.5,
                }}
                transition={{
                    delay: 0.15,
                    duration: 0.8,
                }}
            >
                <motion.span
                    initial={{ opacity: 0, y: -8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{
                        delay: 0.28,
                        duration: 0.35,
                    }}
                    className="text-[13px] font-bold tracking-[3px] text-[#F4C542]"
                >
                    {month}
                </motion.span>

                <motion.span
                    initial={{ opacity: 0, scale: 0.7 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false }}
                    transition={{
                        delay: 0.38,
                        duration: 0.4,
                    }}
                    className="mt-1 text-[2.2rem] font-extrabold leading-none text-white"
                >
                    {day}
                </motion.span>

                <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{
                        delay: 0.5,
                        duration: 0.3,
                    }}
                    className="mt-1 text-xs text-white/45"
                >
                    {year}
                </motion.span>
            </motion.div>
        </motion.div>
    );
}

export default TimelineNode;