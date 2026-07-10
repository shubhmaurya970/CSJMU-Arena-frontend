import { motion } from "framer-motion";
import TimelineNode from "./TimelineNode";
import EventCard from "./EventCard";

function Timeline() {
    return (
        <div className="relative mt-24">

            {/* Center Line */}

            <motion.div
                className="absolute left-1/2 top-0 h-full w-[3px] -translate-x-1/2 bg-gradient-to-b from-[#F4C542] via-[#C99B2E] to-[#5C4320]"
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

            {/* Event 1 */}

            <div className="grid grid-cols-[minmax(0,1fr)_180px_minmax(0,1fr)] items-center py-16">

                <div></div>

                <div className="relative flex justify-center">

                    <TimelineNode
                        month="JUL"
                        day="18"
                        year="2026"
                    />

                    {/* Connector */}

                    <div className="absolute left-[90px] top-1/2 flex items-center">

                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{
                                once: true,
                                amount: 0.5,
                            }}
                            transition={{
                                delay: 0.45,
                                duration: 0.45,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            style={{
                                transformOrigin: "left",
                            }}
                            className="h-[3px] w-20 bg-[#F4C542]"
                        />

                        <motion.div
                            initial={{
                                scale: 0,
                                opacity: 0,
                            }}
                            whileInView={{
                                scale: 1,
                                opacity: 1,
                            }}
                            viewport={{
                                once: true,
                                amount: 0.5,
                            }}
                            transition={{
                                delay: 0.8,
                                duration: 0.3,
                            }}
                            className="h-3 w-3 rounded-full bg-[#F4C542] shadow-[0_0_18px_#F4C542]"
                        />

                    </div>

                </div>

                <div className="min-w-0 pl-8">

                    <EventCard />

                </div>

            </div>

            {/* Event 2 */}

            <div className="grid grid-cols-[minmax(0,1fr)_180px_minmax(0,1fr)] items-center py-16">

                <div className="min-w-0 pr-8">

                    <div className="h-[260px] rounded-[30px] border border-[#F4C542]/10 bg-[#1A1713]"></div>

                </div>

                <div className="relative flex justify-center">

                    <TimelineNode
                        month="JUL"
                        day="22"
                        year="2026"
                    />

                    {/* Connector */}

                    <div className="absolute right-[90px] top-1/2 flex items-center">

                        <motion.div
                            initial={{
                                scale: 0,
                                opacity: 0,
                            }}
                            whileInView={{
                                scale: 1,
                                opacity: 1,
                            }}
                            viewport={{
                                once: true,
                                amount: 0.5,
                            }}
                            transition={{
                                delay: 0.8,
                                duration: 0.3,
                            }}
                            className="h-3 w-3 rounded-full bg-[#F4C542] shadow-[0_0_18px_#F4C542]"
                        />

                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{
                                once: true,
                                amount: 0.5,
                            }}
                            transition={{
                                delay: 0.45,
                                duration: 0.45,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            style={{
                                transformOrigin: "right",
                            }}
                            className="h-[3px] w-20 bg-[#F4C542]"
                        />

                    </div>

                </div>

                <div></div>

            </div>

        </div>
    );
}

export default Timeline;