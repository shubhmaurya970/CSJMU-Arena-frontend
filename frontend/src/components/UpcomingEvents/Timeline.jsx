
import TimelineItem from "./TimelineItem";
import events from "./events";
import { motion, AnimatePresence } from "framer-motion";

function Timeline({ events }) {
    return (
        <div className="relative mt-12">

            {/* Center Line */}

            <motion.div

    className="
        absolute
        left-1/2
        top-0
        h-full
        w-[3px]
        -translate-x-1/2
        bg-gradient-to-b
        from-transparent
        via-[#F4C542]
        via-15%
        via-[#C99B2E]
        to-transparent
    "
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{
                    once: false,
                    amount: 0.2,
                }}
                transition={{
                    duration: 1.5,
                    ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                    transformOrigin: "top",
                }}
            />

           <AnimatePresence mode="popLayout">

    {events.map((event, index) => (

        <motion.div
            key={event.id}
            layout
            initial={{
                opacity: 0,
                y: 40,
            }}
            animate={{
                opacity: 1,
                y: 0,
            }}
            exit={{
                opacity: 0,
                y: -40,
            }}
            transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
            }}
        >

            <TimelineItem
                event={event}
                isLeft={index % 2 === 1}
            />

        </motion.div>

    ))}

</AnimatePresence>

            

        </div>
    );
}

export default Timeline;