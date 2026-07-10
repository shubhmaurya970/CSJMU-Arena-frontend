import { motion } from "framer-motion";

function FilterTabs({ selectedCategory, setSelectedCategory }) {

    const filters = [
        {
            label: "All Events",
            value: "ALL",
        },
        {
            label: "Hackathons",
            value: "HACKATHON",
        },
        {
            label: "Workshops",
            value: "WORKSHOP",
        },
        {
            label: "Sports",
            value: "SPORTS",
        },
        {
            label: "Cultural",
            value: "CULTURAL",
        },
    ];

    return (

        <div className="mt-12 flex justify-center gap-5">

            {filters.map((filter, index) => (

                <motion.div
                    key={filter.value}
                    initial={{
                        opacity: 0,
                        y: 25,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: false,
                        amount: 0.35,
                    }}
                    transition={{
                        duration: 0.6,
                        delay: index * 0.08,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                >

                    <button
                        onClick={() => setSelectedCategory(filter.value)}
                        className={`
                            rounded-full
                            border
                            px-8
                            py-3
                            text-[15px]
                            transition-all
                            duration-300

                            ${
                                selectedCategory === filter.value
                                    ? "bg-[#F4C542] text-black shadow-[0_0_40px_rgba(244,197,66,.35)]"
                                    : "border-white/10 bg-white/5 text-white/80 backdrop-blur-xl hover:border-[#F4C542] hover:text-[#F4C542]"
                            }
                        `}
                    >
                        {filter.label}
                    </button>

                </motion.div>

            ))}

        </div>

    );

}

export default FilterTabs;