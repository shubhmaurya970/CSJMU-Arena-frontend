import { motion } from "framer-motion";

function SectionHeader() {
    return (
        <div className="text-center">

            <motion.p
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{
    once: false,
    amount: 0.35,
}}
                transition={{
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                }}
                className="text-[2.2rem] text-[#F4C542]"
                style={{
                    fontFamily: "Kaushan Script, cursive",
                }}
            >
                Campus Life
            </motion.p>

            <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{
    once: false,
    amount: 0.35,
}}
                transition={{
                    duration: 0.8,
                    delay: 0.15,
                    ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-2 text-7xl font-extrabold tracking-[-3px] text-white"
            >
                Upcoming Events
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
               viewport={{
    once: false,
    amount: 0.35,
}}
                transition={{
                    duration: 0.8,
                    delay: 0.3,
                    ease: [0.22, 1, 0.36, 1],
                }}
                className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/60"
            >
                From hackathons to cultural festivals,
                discover everything happening around CSJMU.
            </motion.p>

        </div>
    );
}

export default SectionHeader;