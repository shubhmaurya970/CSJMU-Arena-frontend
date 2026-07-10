import { motion } from "framer-motion";
import TimelineItem from "./TimelineItem";

function Timeline({ events }) {
    return (
        <div className="relative mt-24">

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
                    once: true,
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

            {events.map((event, index) => (

                <TimelineItem
                    key={event.id}
                    event={event}
                    isLeft={index % 2 === 1}
                />

            ))}

        </div>
    );
}

export default Timeline;