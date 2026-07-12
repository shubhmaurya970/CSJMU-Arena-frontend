import { motion } from "framer-motion";

function LeftSection() {
    return (
        <div className="max-w-[360px]">

            {/* Small Label */}

            <motion.p
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.35 }}
                transition={{ duration: 0.7 }}
                className="
                    text-sm
                    font-bold
                    tracking-[6px]
                    uppercase
                    text-[#D8A81D]
                "
            >
                WHY CHOOSE US
            </motion.p>

            {/* Heading */}

            <motion.h2
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.35 }}
                transition={{
                    duration: 0.8,
                    delay: 0.15,
                    ease: [0.22, 1, 0.36, 1],
                }}
                className="
                    mt-6
                    text-[4rem]
                    font-black
                    leading-[0.95]
                    tracking-[-3px]
                    text-[#111111]
                "
            >
                Every Event.
                <br />
                One Arena.
            </motion.h2>

            {/* Description */}

            <motion.p
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.35 }}
                transition={{
                    duration: 0.8,
                    delay: 0.3,
                    ease: [0.22, 1, 0.36, 1],
                }}
                className="
                    mt-8
                    text-[18px]
                    leading-8
                    text-black/65
                "
            >
                From hackathons to cultural festivals, CSJMU ARENA helps
                you discover, join and organize every campus experience
                with ease.
            </motion.p>

            {/* CTA */}

            <motion.button
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.35 }}
                transition={{
                    duration: 0.8,
                    delay: 0.45,
                }}
                whileHover={{
                    scale: 1.05,
                }}
                whileTap={{
                    scale: 0.97,
                }}
                className="
                    mt-12
                    rounded-full
                    bg-[#111111]
                    px-8
                    py-4
                    text-[16px]
                    font-semibold
                    text-white
                    transition-all
                    duration-300
                    hover:bg-[#D8A81D]
                    hover:text-black
                "
            >
                Find Your Event →
            </motion.button>

        </div>
    );
}

export default LeftSection;