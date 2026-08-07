import { motion } from "framer-motion";
function HeroContent() {

    return (

        <motion.p
    initial={{
        opacity: 0,
        y: 12
    }}
    animate={{
        opacity: 1,
        y: 0
    }}
    transition={{
        delay: 0.35,
        duration: 0.45
    }}
     className="
                mt-1

                max-w-[620px]

                text-[15px]

                leading-6
                
                text-[#B8B8B8]
                text-white/55
            "
        >
           

            Create, manage and monitor campus events from one
            place with a fast and distraction-free workspace.

        </motion.p>

    );

}

export default HeroContent;