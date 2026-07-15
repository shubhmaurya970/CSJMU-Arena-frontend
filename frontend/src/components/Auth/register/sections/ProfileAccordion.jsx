import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

import StudentDetails from "../StudentDetails";
import OrganizerDetails from "../OrganizerDetails";

function ProfileAccordion({ accountType }) {

    const [showProfileFields, setShowProfileFields] =
        useState(false);

    return (

        <>

            <div className="mt-8">

                <button
                    type="button"
                    onClick={() =>
                        setShowProfileFields(
                            !showProfileFields
                        )
                    }
                    className="
                        flex
                        w-full
                        items-center
                        justify-between

                        rounded-2xl

                        border
                        border-white/10

                        bg-white/5

                        px-6
                        py-4

                        transition-all
                        duration-300

                        hover:border-[#F4C542]/30
                    "
                >

                    <span
                        className="
                            font-medium
                            text-white/80
                        "
                    >
                        Complete Your Profile (Optional)
                    </span>

                    <motion.div
                        animate={{
                            rotate: showProfileFields
                                ? 180
                                : 0,
                        }}
                        transition={{
                            duration: 0.25,
                        }}
                    >

                        <ChevronDown
                            size={20}
                            className="
                                text-[#F4C542]
                            "
                        />

                    </motion.div>

                </button>

            </div>

            <AnimatePresence>

                {showProfileFields && (

                    <motion.div

                        initial={{
                            opacity: 0,
                            height: 0,
                            y: -10,
                        }}

                        animate={{
                            opacity: 1,
                            height: "auto",
                            y: 0,
                        }}

                        exit={{
                            opacity: 0,
                            height: 0,
                            y: -10,
                        }}

                        transition={{
                            duration: 0.35,
                            ease: "easeInOut",
                        }}

                        className="
                            mt-8
                           
                        "
                    >

                        {accountType === "STUDENT"
                            ? (
                                <StudentDetails />
                            )
                            : (
                                <OrganizerDetails />
                            )}

                    </motion.div>

                )}

            </AnimatePresence>

        </>

    );

}

export default ProfileAccordion;