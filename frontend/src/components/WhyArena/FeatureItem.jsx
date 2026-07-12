import { motion } from "framer-motion";

function FeatureItem({ number, title, description, delay }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.35 }}
            transition={{
                duration: 0.7,
                delay,
                ease: [0.22, 1, 0.36, 1],
            }}
            className="flex gap-6"
        >
            {/* Number */}

           <div
    className="
        min-w-[60px]
        text-6xl
        font-black
        leading-none
        text-[#D8A81D]/25
        select-none
    "
    style={{
        textShadow: "0 0 18px rgba(216,168,29,.15)",
    }}
>
                {number}
            </div>

            {/* Content */}

            <div className="pb-8 border-b border-black/8">

                <h3
                    className="
                        text-[22px]
                        font-bold
                        text-[#111111]
                    "
                >
                    {title}
                </h3>

                <p
                    className="
                        mt-2
                        max-w-md
                        text-[16px]
                        leading-7
                        text-black/60
                    "
                >
                    {description}
                </p>

            </div>
        </motion.div>
    );
}

export default FeatureItem;