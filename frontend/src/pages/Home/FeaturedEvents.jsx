import LeftPanel from "./LeftPanel";
import FeaturedCard from "./FeaturedCard";
import { motion } from "framer-motion";

function FeaturedEvents() {

    return (

        <motion.section

            className="relative bg-[#FFFDF8] rounded-t-[48px] py-28"

            initial={{
                y:120,
                opacity:.8
            }}

            whileInView={{
                y:0,
                opacity:1
            }}

            viewport={{
                amount:.2
            }}

            transition={{
                duration:1,
                ease:[0.22,1,0.36,1]
            }}
            

        >

            <div className="mx-auto flex max-w-[1600px] items-start gap-10 px-10">

                <LeftPanel />

                <FeaturedCard />

            </div>

        </motion.section>

    );

}

export default FeaturedEvents;