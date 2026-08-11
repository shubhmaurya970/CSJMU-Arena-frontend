import { useEffect, useState } from "react";
import { Eye, Check, X, CalendarDays, MapPin, IndianRupee } from "lucide-react";
import { getEventImage } from "../../../utils/eventImageStorage";

function AdminEventCard({
    event,
    onView,
    onApprove,
    onReject,
    isProcessing,
}) {

    const [imageUrl, setImageUrl] = useState(null);

    useEffect(() => {

        let objectUrl;

        const loadImage = async () => {

            try {

                const file = await getEventImage(event.id);

                if (file) {
                    objectUrl = URL.createObjectURL(file);
                    setImageUrl(objectUrl);
                }

            } catch (error) {

                console.error(
                    "Failed to load event image:",
                    error
                );

            }

        };

        loadImage();

        return () => {

            if (objectUrl) {
                URL.revokeObjectURL(objectUrl);
            }

        };

    }, [event.id]);


    const categoryNames = {
        HACKATHON: "Hackathon",
        WORKSHOP: "Workshop",
        CULTURAL: "Cultural",
        SPORTS: "Sports",
    };


    const categoryColors = {
        HACKATHON: "bg-[#F4C542]/15 text-[#F4C542] border-[#F4C542]/20",
        WORKSHOP: "bg-blue-500/10 text-blue-400 border-blue-500/20",
        CULTURAL: "bg-purple-500/10 text-purple-400 border-purple-500/20",
        SPORTS: "bg-green-500/10 text-green-400 border-green-500/20",
    };


    return (
        <article
            className="
                group
                overflow-hidden
                rounded-[28px]
                border
                border-white/[0.07]
                bg-[#15120F]
                transition-all
                duration-500
                hover:border-[#F4C542]/20
                hover:shadow-[0_20px_70px_rgba(0,0,0,.3)]
            "
        >

            <div className="flex min-h-[270px]">

                {/* IMAGE */}

                <div className="relative w-[280px] shrink-0 overflow-hidden">

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
                                group-hover:scale-105
                            "
                        />

                    ) : (

                        <div
                            className="
                                flex
                                h-full
                                w-full
                                items-center
                                justify-center
                                bg-[#1C1814]
                                text-sm
                                tracking-wide
                                text-white/20
                            "
                        >
                            No Image
                        </div>

                    )}

                    {/* Image overlay */}

                    <div
                        className="
                            pointer-events-none
                            absolute
                            inset-0
                            bg-gradient-to-r
                            from-transparent
                            via-transparent
                            to-[#15120F]
                        "
                    />

                </div>


                {/* CONTENT */}

                <div className="flex min-w-0 flex-1 flex-col p-7">

                    {/* TOP */}

                    <div className="flex items-start justify-between gap-5">

                        <div className="min-w-0">

                            <div className="flex items-center gap-3">

                                <span
                                    className={`
                                        rounded-full
                                        border
                                        px-3
                                        py-1
                                        text-[10px]
                                        font-semibold
                                        uppercase
                                        tracking-[2px]
                                        ${categoryColors[event.category]}
                                    `}
                                >
                                    {categoryNames[event.category]}
                                </span>


                                <span
                                    className="
                                        flex
                                        items-center
                                        gap-2
                                        text-[10px]
                                        font-semibold
                                        uppercase
                                        tracking-[2px]
                                        text-amber-400
                                    "
                                >
                                    <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                                    Pending Review
                                </span>

                            </div>


                            <h2
                                className="
                                    mt-4
                                    line-clamp-2
                                    text-2xl
                                    font-semibold
                                    leading-tight
                                    text-white
                                "
                            >
                                {event.title}
                            </h2>

                        </div>

                    </div>


                    {/* DESCRIPTION */}

                    <p
                        className="
                            mt-4
                            line-clamp-2
                            max-w-3xl
                            text-sm
                            leading-6
                            text-white/45
                        "
                    >
                        {event.description}
                    </p>


                    {/* META */}

                    <div
                        className="
                            mt-6
                            flex
                            flex-wrap
                            items-center
                            gap-x-6
                            gap-y-3
                            text-sm
                            text-white/45
                        "
                    >

                        <span className="flex items-center gap-2">
                            <CalendarDays size={15} />
                            {event.eventDate}
                        </span>

                        <span className="flex items-center gap-2">
                            <MapPin size={15} />
                            {event.venue}
                        </span>

                        <span className="flex items-center gap-2">
                            <IndianRupee size={15} />
                            {event.registrationFee || 0}
                        </span>

                    </div>


                    {/* ACTIONS */}

                    <div
                        className="
                            mt-auto
                            flex
                            items-center
                            justify-end
                            gap-3
                            pt-7
                        "
                    >

                        <button
                            onClick={() => onView(event.id)}
                            disabled={isProcessing}
                            className="
                                flex
                                items-center
                                gap-2
                                rounded-xl
                                border
                                border-white/10
                                bg-white/[0.03]
                                px-4
                                py-2.5
                                text-sm
                                font-medium
                                text-white/70
                                transition-all
                                hover:border-white/20
                                hover:bg-white/[0.07]
                                hover:text-white
                                disabled:cursor-not-allowed
                                disabled:opacity-40
                            "
                        >
                            <Eye size={16} />
                            View
                        </button>


                        <button
                            onClick={() => onReject(event.id)}
                            disabled={isProcessing}
                            className="
                                flex
                                items-center
                                gap-2
                                rounded-xl
                                border
                                border-red-500/20
                                bg-red-500/[0.06]
                                px-4
                                py-2.5
                                text-sm
                                font-medium
                                text-red-400
                                transition-all
                                hover:border-red-500/30
                                hover:bg-red-500/10
                                disabled:cursor-not-allowed
                                disabled:opacity-40
                            "
                        >
                            <X size={16} />
                            Reject
                        </button>


                        <button
                            onClick={() => onApprove(event.id)}
                            disabled={isProcessing}
                            className="
                                flex
                                items-center
                                gap-2
                                rounded-xl
                                bg-[#F4C542]
                                px-5
                                py-2.5
                                text-sm
                                font-semibold
                                text-black
                                transition-all
                                hover:bg-[#FFD95A]
                                hover:shadow-[0_8px_30px_rgba(244,197,66,.18)]
                                disabled:cursor-not-allowed
                                disabled:opacity-40
                            "
                        >
                            <Check size={16} />
                            Approve
                        </button>

                    </div>

                </div>

            </div>

        </article>
    );
}

export default AdminEventCard;