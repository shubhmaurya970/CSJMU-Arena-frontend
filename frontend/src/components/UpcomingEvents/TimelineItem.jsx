import { useState } from "react";
import { motion } from "framer-motion";
import TimelineNode from "./TimelineNode";
import UpcomingEventCard from "./UpcomingEventCard";

function TimelineItem({ event, isLeft }) {
    const [isHovered, setIsHovered] = useState(false);

    const Connector = ({ reverse = false }) => (
        <motion.div className="relative h-[3px] w-20 overflow-hidden rounded-full bg-[#C99B2E]">
            <div className="absolute inset-0 bg-[#C99B2E]" />

            <motion.div
                className="absolute inset-y-0 w-10 bg-[#FFD95A] blur-[3px]"
                initial={{
                    x: reverse ? 50 : -50,
                }}
                animate={
                    isHovered
                        ? {
                              x: reverse ? -90 : 90,
                          }
                        : {
                              x: reverse ? 50 : -50,
                          }
                }
                transition={
                    isHovered
                        ? {
                              duration: 0.8,
                              repeat: Infinity,
                              ease: "linear",
                          }
                        : {
                              duration: 0.3,
                          }
                }
            />
        </motion.div>
    );

    const Dot = () => (
        <motion.div
            animate={
                isHovered
                    ? {
                          scale: 1.35,
                          boxShadow:
                              "0 0 28px rgba(244,197,66,.9)",
                      }
                    : {
                          scale: 1,
                          boxShadow:
                              "0 0 0 rgba(244,197,66,0)",
                      }
            }
            transition={{
                duration: 0.35,
            }}
            className="h-3 w-3 rounded-full bg-[#FFD95A]"
        />
    );

    return (
        <div
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Background Glow */}

            <div
                className={`
                    absolute
                    inset-0
                    -z-10
                    pointer-events-none
                    transition-all
                    duration-500

                    ${isHovered ? "opacity-100" : "opacity-0"}
                `}
            >
                <div
                    className="
                        absolute
                        left-1/2
                        top-1/2
                        h-[520px]
                        w-[950px]
                        -translate-x-1/2
                        -translate-y-1/2
                        rounded-full
                        bg-[#F4C542]/10
                        blur-[140px]
                    "
                />
            </div>

            <div className="grid grid-cols-[minmax(0,1fr)_180px_minmax(0,1fr)] items-center py-16">

                {/* LEFT CARD */}

                {isLeft ? (
                    <div
                        className={`
                            pr-8
                            min-w-0
                            transition-all
                            duration-500

                            ${isHovered ? "-translate-y-2" : ""}
                        `}
                    >
                        <UpcomingEventCard event={event} />
                    </div>
                ) : (
                    <div />
                )}

                {/* TIMELINE */}

                <div className="relative flex justify-center">

                    <TimelineNode
                        eventDate={event.eventDate}
                        isHovered={isHovered}
                    />

                    {isLeft ? (
                        <div className="absolute right-[90px] top-1/2 flex items-center">

                            <Dot />

                            <Connector />

                        </div>
                    ) : (
                        <div className="absolute left-[90px] top-1/2 flex items-center">

                            <Connector reverse />

                            <Dot />

                        </div>
                    )}

                </div>

                {/* RIGHT CARD */}

                {!isLeft ? (
                    <div
                        className={`
                            pl-8
                            min-w-0
                            transition-all
                            duration-500

                            ${isHovered ? "-translate-y-2" : ""}
                        `}
                    >
                        <UpcomingEventCard event={event} />
                    </div>
                ) : (
                    <div />
                )}

            </div>
        </div>
    );
}

export default TimelineItem;