import LeftPanel from "./LeftPanel";
import FeaturedCard from "./FeaturedCard";
import { motion } from "framer-motion";

function FeaturedEvents() {
    return (
        <section className="relative rounded-t-[48px] bg-[#FFFDF8] py-28">

            <motion.div
                className="mx-auto flex max-w-[1600px] items-start gap-10 px-10"

                initial={{
                    y: 120,
                    opacity: .8,
                }}

                whileInView={{
                    y: 0,
                    opacity: 1,
                }}

                viewport={{
                    once: true,
                    amount: .3,
                }}

                transition={{
                    duration: 1,
                    ease: [0.22, 1, 0.36, 1],
                }}
            >

                <LeftPanel />

                <FeaturedCard />

            </motion.div>

        </section>
    );
}

export default FeaturedEvents;