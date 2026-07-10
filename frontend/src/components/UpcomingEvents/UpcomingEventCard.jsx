import { ArrowRight } from "lucide-react";

function UpcomingEventCard({ event }) {

    
    const categoryNames = {
        HACKATHON: "Hackathon",
        WORKSHOP: "Workshop",
        CULTURAL: "Cultural",
        SPORTS: "Sports",
    };

    const categoryColors = {
        HACKATHON: "bg-[#F4C542]",
        WORKSHOP: "bg-[#4DA3FF]",
        CULTURAL: "bg-[#C86BFA]",
        SPORTS: "bg-[#4ADE80]",
    };

    return (
        <div
            className="
                group
                w-full
                max-w-[760px]
                overflow-hidden
                rounded-[36px]
                border
                border-white/5
                bg-[#15120F]
                transition-all
                duration-500

                hover:-translate-y-2
                hover:border-[#F4C542]/30
                hover:shadow-[0_20px_80px_rgba(244,197,66,.15)]
            "
        >
            {/* Image */}

           <div className="relative h-[240px] overflow-hidden rounded-t-[36px]">

    <div
        className="
            h-full
            w-full
            transform-gpu
            will-change-transform
            transition-transform
            duration-700
            group-hover:scale-110
        "
    >
        <img
            src={event.imageUrl}
            alt={event.title}
            className="
                h-full
                w-full
                object-cover
                select-none
                pointer-events-none
            "
            draggable="false"
        />
    </div>

    <div
        className="
            absolute
            inset-x-0
            bottom-0
            h-28
            bg-gradient-to-t
            from-[#15120F]
            via-[#15120F]/70
            to-transparent
            pointer-events-none
        "
    />

</div>
            {/* Content */}

           <div className="px-8 pb-8 pt-5">

                {/* Category */}

                <div className="flex items-center gap-3">

    <div
        className={`
            h-2
            w-2
            rounded-full
            ${categoryColors[event.category]}
        `}
    />

    <span
        className="
            text-[13px]
            font-medium
            uppercase
            tracking-[3px]
            text-white/55
        "
    >
        {categoryNames[event.category]}
    </span>

</div>

                {/* Title */}

                <h2
                    className="
                        mt-5
                        line-clamp-2
                        text-[2rem]
                        font-bold
                        leading-tight
                        text-white
                    "
                >
                    {event.title}
                </h2>

                {/* Bottom */}

                <div className="mt-8 flex items-center justify-between">

                    <p className="text-white/55">

                        {event.venue}

                    </p>

                    <div
    className="
        flex
        h-11
        w-11
        items-center
        justify-center
        rounded-full
        border
        border-white/10
        transition-all
        duration-300

        group-hover:border-[#F4C542]/40
        group-hover:bg-[#F4C542]/10
    "
>

    <ArrowRight
        size={20}
        className="
            translate-x-1
            text-[#F4C542]
            transition-transform
            duration-300
            group-hover:translate-x-2
        "
    />

</div>

                </div>

            </div>

        </div>
    );
}

export default UpcomingEventCard;