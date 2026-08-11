import { formatCategory } from "../components/eventFormatting";

function EventHero({ event, imageUrl }) {

    const statusLabel = {
        PENDING: "Pending Approval",
        APPROVED: "Approved",
        REJECTED: "Rejected",
    };

    return (
        <section>

            <div className="mb-5">

                <span
                    className="
                        inline-flex
                        rounded-full
                        border
                        border-[#F4C542]/30
                        bg-[#F4C542]/[0.06]
                        px-4
                        py-1.5
                        text-[11px]
                        font-medium
                        uppercase
                        tracking-[0.2em]
                        text-[#F4C542]
                    "
                >
                    {formatCategory(event.category)}
                </span>

            </div>


            <h1
                className="
                    max-w-[600px]
                    text-4xl
                    font-semibold
                    leading-[1.05]
                    tracking-[-0.04em]
                    text-white
                    sm:text-5xl
                "
            >
                {event.title}
            </h1>


            {/* IMAGE */}

            <div
                className="
                    group
                    relative
                    mt-7
                    aspect-[1.15/1]
                    overflow-hidden
                    rounded-[24px]
                    border
                    border-[#F4C542]/25
                    bg-[#15120F]
                "
            >

                {imageUrl ? (

                    <img
                        src={imageUrl}
                        alt={event.title}
                        className="
                            h-full
                            w-full
                            object-cover
                            transition-transform
                            duration-700
                            group-hover:scale-[1.03]
                        "
                    />

                ) : (

                    <div
                        className="
                            flex
                            h-full
                            items-center
                            justify-center
                            text-xs
                            uppercase
                            tracking-[0.25em]
                            text-white/20
                        "
                    >
                        Event cover
                    </div>

                )}


                <div
                    className="
                        absolute
                        inset-x-0
                        bottom-0
                        h-32
                        bg-gradient-to-t
                        from-black/80
                        to-transparent
                    "
                />


                {/* STATUS */}

                <div
                    className="
                        absolute
                        bottom-4
                        left-4
                        rounded-full
                        border
                        border-[#F4C542]/30
                        bg-[#0F0C09]/80
                        px-4
                        py-2
                        backdrop-blur-md
                    "
                >

                    <div className="flex items-center gap-2">

                        <span className="h-2 w-2 rounded-full bg-[#F4C542]" />

                        <span
                            className="
                                text-xs
                                font-medium
                                uppercase
                                tracking-[0.12em]
                                text-[#F4C542]
                            "
                        >
                            {statusLabel[event.status]}
                        </span>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default EventHero;