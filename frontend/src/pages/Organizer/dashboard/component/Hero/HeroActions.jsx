import { motion } from "framer-motion";
function HeroActions() {

    return (

        <motion.div
    initial={{
        opacity: 0,
        y: 10
    }}
    animate={{
        opacity: 1,
        y: 0
    }}
    transition={{
        delay: 0.50,
        duration: 0.45
    }}
    className="
        flex
        items-center
        gap-6
        mt-6
    "
>
        

            <button
                className="
                    rounded-xl

                    bg-[#D8A93B]

                    px-5
                    py-3

                    text-[14px]

                    font-medium

                    text-black

                    transition-all

                    hover:scale-[1.02]
                "
            >

                Create Event

            </button>

            <button
                className="
                    rounded-xl

                    border
                    border-white/10

                    px-5
                    py-3

                    text-[14px]

                    text-white

                    transition-all

                    hover:border-white/20
                "
            >

                My Events

            </button>

        </motion.div>

    );

}

export default HeroActions;