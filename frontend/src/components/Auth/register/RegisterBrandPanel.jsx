import { GraduationCap, CalendarPlus, Info } from "lucide-react";

function RegisterBrandPanel({
    accountType,
    setAccountType,
}) {
    return (
        <div
            className="
                relative

                flex
                w-[42%]
                flex-col
                

                overflow-hidden

                bg-gradient-to-b
                from-[#18140D]
                via-[#100F0D]
                to-[#090909]

                px-12
                py-10
            "
        >
            {/* Ambient Glow */}

            <div
                className="
                    absolute

                    -left-32
                    -top-32

                    h-80
                    w-80

                    rounded-full

                    bg-[#F4C542]/20

                    blur-[140px]
                "
            />

            {/* Top Section */}

            <div className="relative z-10">

                <p
                    className="
                        text-sm
                        font-semibold
                        uppercase
                        tracking-[8px]
                        text-[#F4C542]
                    "
                >
                    CSJMU
                </p>

                <h1
                    className="
                        mt-4

                        text-7xl
                        font-black
                        leading-none

                        text-white
                    "
                >
                    ARENA
                </h1>

                {/* Accent */}

                <div className="mt-7 flex items-center gap-3">

                    <div
                        className="
                            h-[2px]
                            w-16

                            rounded-full

                            bg-[#F4C542]
                        "
                    />

                    <div
                        className="
                            h-2
                            w-2

                            rounded-full

                            bg-[#F4C542]

                            shadow-[0_0_12px_rgba(244,197,66,.8)]
                        "
                    />

                </div>

                <p
                    className="
                        mt-3

                        max-w-sm

                        text-[17px]
                        leading-8

                        text-white/65
                    "
                >
                    Every event begins with a community.
                    CSJMU ARENA helps students and organizers
                    connect through a modern campus event
                    experience.
                </p>

            </div>

            {/* Bottom */}

            <div className="relative z-10 mt-5">

                <h3
                    className="
                        text-xl
                        font-semibold
                        text-white
                    "
                >
                    Account Type
                </h3>


                {/* Cards */}

                <div className="mt-6 flex gap-4">

                    {/* Student */}

                    <button
                        type="button"
                        onClick={() => setAccountType("STUDENT")}
                        className={`
                            flex-1

                            rounded-3xl

                            border

                            px-6
                            py-5

                            text-left

                            transition-all
                            duration-300

                            ${
                                accountType === "STUDENT"
                                    ? "border-[#F4C542] bg-[#F4C542]/10 shadow-[0_0_30px_rgba(244,197,66,.16)]"
                                    : "border-white/10 bg-white/5 hover:border-[#F4C542]/40 hover:bg-white/8"
                            }
                        `}
                    >

                        <GraduationCap
                            size={26}
                            className="text-[#F4C542]"
                        />

                        <h4 className="mt-4 font-semibold text-white">
                            Student of CSJMU
                        </h4>

                        <p className="mt-1 text-sm text-white/45">
                            Join campus events
                        </p>

                    </button>

                    {/* Organizer */}

                    <button
                        type="button"
                        onClick={() => setAccountType("ORGANIZER")}
                        className={`
                            flex-1

                            rounded-3xl

                            border

                            px-6
                            py-5

                            text-left

                            transition-all
                            duration-300

                            ${
                                accountType === "ORGANIZER"
                                    ? "border-[#F4C542] bg-[#F4C542]/10 shadow-[0_0_30px_rgba(244,197,66,.16)]"
                                    : "border-white/10 bg-white/5 hover:border-[#F4C542]/40 hover:bg-white/8"
                            }
                        `}
                    >

                        <CalendarPlus
                            size={26}
                            className="text-[#F4C542]"
                        />

                        <h4 className="mt-4 font-semibold text-white">
                            Organizer
                        </h4>

                        <p className="mt-1 text-sm text-white/45">
                            Create events
                        </p>

                    </button>

                </div>

                {/* Note */}

                <div
                    className="
                        mt-5

                        flex
                        items-start
                        gap-3
                    "
                >

                    <Info
                        size={18}
                        className="
                            mt-1
                            shrink-0
                            text-[#F4C542]
                        "
                    />

                    <p
                        className="
                            text-[13px]
                            leading-7

                            text-white/45
                        "
                    >
                        Only affiliated members of CSJMU,
                        including recognized student clubs,
                        university departments and faculty
                        coordinators, are permitted to create
                        and manage events on the platform.
                    </p>

                </div>

            </div>

        </div>
    );
}

export default RegisterBrandPanel;