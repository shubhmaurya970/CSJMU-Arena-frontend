import { FileText } from "lucide-react";

function EventSidebar({ event }) {

    return (
        <section
            className="
                relative
                min-h-[520px]
                overflow-hidden
                rounded-[28px]
                border
                border-[#F4C542]/25
                bg-[#15120F]
                p-8
                sm:p-10
                lg:min-h-[720px]
                lg:p-12
            "
        >

            {/* subtle background glow */}

            <div
                className="
                    pointer-events-none
                    absolute
                    -right-32
                    -bottom-32
                    h-[400px]
                    w-[400px]
                    rounded-full
                    bg-[#F4C542]/[0.04]
                    blur-[100px]
                "
            />


            {/* HEADER */}

            <div className="relative">

                <div className="flex items-center gap-4">

                    <div
                        className="
                            flex
                            h-12
                            w-12
                            items-center
                            justify-center
                            rounded-xl
                            bg-[#F4C542]/[0.08]
                            text-[#F4C542]
                        "
                    >
                        <FileText size={23} />
                    </div>


                    <h2
                        className="
                            text-3xl
                            font-semibold
                            tracking-[-0.03em]
                            text-[#F4C542]
                        "
                    >
                        About Event
                    </h2>

                </div>


                <div
                    className="
                        mt-5
                        h-[2px]
                        w-12
                        bg-[#F4C542]
                    "
                />

            </div>


            {/* DESCRIPTION */}

            <div
                className="
                    relative
                    mt-10
                    max-w-[800px]
                "
            >

                <p
                    className="
                        whitespace-pre-line
                        text-[17px]
                        leading-[1.9]
                        text-white/65
                    "
                >
                    {event.description ||
                        "No description has been provided for this event."}
                </p>

            </div>


            {/* decorative bottom wave */}

            <div
                className="
                    pointer-events-none
                    absolute
                    bottom-0
                    right-0
                    h-[180px]
                    w-[55%]
                    opacity-30
                "
            >

                <div
                    className="
                        absolute
                        bottom-[-70px]
                        right-[-80px]
                        h-[180px]
                        w-[420px]
                        rotate-[-12deg]
                        rounded-[50%]
                        border-t
                        border-[#F4C542]/30
                    "
                />

                <div
                    className="
                        absolute
                        bottom-[-50px]
                        right-[-50px]
                        h-[150px]
                        w-[380px]
                        rotate-[-12deg]
                        rounded-[50%]
                        border-t
                        border-[#F4C542]/20
                    "
                />

            </div>

        </section>
    );
}

export default EventSidebar;