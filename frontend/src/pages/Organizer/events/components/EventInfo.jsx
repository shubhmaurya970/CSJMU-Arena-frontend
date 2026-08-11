import {
    CalendarDays,
    Clock3,
    MapPin,
    Users,
    IndianRupee,
} from "lucide-react";

function formatDate(date) {
    if (!date) return "Not specified";

    return new Date(date).toLocaleDateString(
        "en-IN",
        {
            day: "numeric",
            month: "long",
            year: "numeric",
        }
    );
}

function EventInfo({ event }) {

    const items = [
        {
            icon: CalendarDays,
            label: "Event Date",
            value: formatDate(event.eventDate),
        },
        {
            icon: Clock3,
            label: "Registration Deadline",
            value: formatDate(
                event.registrationDeadline
            ),
        },
        {
            icon: MapPin,
            label: "Venue",
            value: event.venue || "Not specified",
        },
        {
            icon: Users,
            label: "Participants",
            value:
                event.maxParticipants ??
                "Unlimited",
        },
        {
            icon: IndianRupee,
            label: "Registration Fee",
            value:
                event.registrationFee > 0
                    ? `₹${event.registrationFee}`
                    : "Free",
        },
    ];

    return (
        <div
            className="
                mt-5
                overflow-hidden
                rounded-[24px]
                border
                border-white/[0.08]
                bg-[#15120F]
            "
        >

            <div
                className="
                    grid
                    sm:grid-cols-2
                "
            >

                {items.map(
                    ({
                        icon: Icon,
                        label,
                        value,
                    }) => (

                        <div
                            key={label}
                            className="
                                flex
                                min-h-[92px]
                                items-center
                                gap-4
                                border-b
                                border-white/[0.07]
                                px-6
                                py-5

                                last:border-b-0

                                sm:[&:nth-last-child(2)]:border-b-0
                            "
                        >

                            <div
                                className="
                                    flex
                                    h-10
                                    w-10
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-xl
                                    bg-[#F4C542]/[0.07]
                                    text-[#F4C542]
                                "
                            >
                                <Icon size={20} />
                            </div>


                            <div className="min-w-0">

                                <p
                                    className="
                                        text-[11px]
                                        uppercase
                                        tracking-[0.14em]
                                        text-white/35
                                    "
                                >
                                    {label}
                                </p>

                                <p
                                    className="
                                        mt-1
                                        truncate
                                        text-sm
                                        font-medium
                                        text-white/80
                                    "
                                >
                                    {value}
                                </p>

                            </div>

                        </div>

                    )
                )}

            </div>

        </div>
    );
}

export default EventInfo;