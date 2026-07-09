import { CalendarDays, Users, Award } from "lucide-react";
import { motion } from "framer-motion";

function LeftPanel() {
    return (

        <motion.div
            className="flex h-[500px] w-[460px] flex-col rounded-[32px] bg-white p-10 shadow-[0_10px_40px_rgba(0,0,0,.05)]"
            initial={{
                opacity: 0,
                x: -60,
            }}
            whileInView={{
                opacity: 1,
                x: 0,
            }}
            viewport={{
                once: false,
                amount: 0.4,
            }}
            transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
            }}
        >

            {/* Heading */}

            <p className="text-xs font-semibold uppercase tracking-[6px] text-[#F4C542]">
                CAMPUS LIFE
            </p>

            <h2 className="mt-6 text-[2.8rem] font-extrabold leading-[1.05] tracking-[-2px] text-[#111827]">
                What's Happening
                <br />
                This{" "}
                <span
                    className="text-[#F4C542]"
                    style={{
                        fontFamily: "Kaushan Script, cursive",
                        fontWeight: 400,
                    }}
                >
                    Week
                </span>
            </h2>

            {/* Description */}

            <p className="mt-5 max-w-[310px] text-[16px] leading-7 text-gray-500">
                Explore hackathons, workshops,
                cultural festivals and exciting
                events around CSJMU.
            </p>

            {/* Stats */}

            <div className="mt-10 grid grid-cols-3 border-t border-gray-100 pt-8">

                <div className="text-center">

                    <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#FFF8EB]">
                        <CalendarDays
                            size={22}
                            className="text-[#F4C542]"
                        />
                    </div>

                    <h3 className="text-[2rem] font-bold text-[#111827]">
                        25+
                    </h3>

                    <p className="mt-1 text-[15px] text-gray-500">
                        Events
                    </p>

                </div>

                <div className="border-x border-gray-200 text-center">

                    <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#FFF8EB]">
                        <Users
                            size={22}
                            className="text-[#F4C542]"
                        />
                    </div>

                    <h3 className="text-[2rem] font-bold text-[#111827]">
                        5K+
                    </h3>

                    <p className="mt-1 text-[15px] text-gray-500">
                        Students
                    </p>

                </div>

                <div className="text-center">

                    <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#FFF8EB]">
                        <Award
                            size={22}
                            className="text-[#F4C542]"
                        />
                    </div>

                    <h3 className="text-[2rem] font-bold text-[#111827]">
                        30+
                    </h3>

                    <p className="mt-1 text-[15px] text-gray-500">
                        Organizers
                    </p>

                </div>

            </div>

        </motion.div>

    );
}

export default LeftPanel;