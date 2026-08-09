import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getEventImage } from "../../../utils/eventImageStorage";

function StatusBadge({ status }) {
    const styles = {
        PENDING:
            "border-[#D8A93B]/20 bg-[#D8A93B]/[0.07] text-[#D8A93B]",
        APPROVED:
            "border-emerald-400/15 bg-emerald-400/[0.06] text-emerald-400",
        REJECTED:
            "border-red-400/15 bg-red-400/[0.06] text-red-400",
    };

    return (
        <span
            className={`
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                px-3
                py-1.5
                text-[11px]
                font-medium
                tracking-wide
                ${styles[status] || styles.PENDING}
            `}
        >
            <span className="h-1.5 w-1.5 rounded-full bg-current" />

            {status
                ? status.charAt(0) + status.slice(1).toLowerCase()
                : "Pending"}
        </span>
    );
}

function EventCard({ event, onDeleted }) {
    const [deleting, setDeleting] = useState(false);
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
    const navigate = useNavigate();

    const [imageUrl, setImageUrl] = useState(null);

    useEffect(() => {
        let objectUrl = null;

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
    const handleDelete = async () => {
    try {
        setDeleting(true);

        const token = localStorage.getItem("token");

        const response = await fetch(
            `http://localhost:8080/api/events/${event.id}`,
            {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        const rawResponse = await response.text();

        let data = null;

        if (rawResponse) {
            try {
                data = JSON.parse(rawResponse);
            } catch {
                data = null;
            }
        }

        if (!response.ok) {
            throw new Error(
                data?.message ||
                    `Failed to delete event (${response.status})`
            );
        }

        // Remove local image as well
        try {
            const { deleteEventImage } = await import(
                "../../../utils/eventImageStorage"
            );

            await deleteEventImage(event.id);
        } catch (imageError) {
            console.error(
                "Failed to delete local event image:",
                imageError
            );
        }

        setShowDeleteConfirm(false);

        onDeleted(event.id);

    } catch (error) {
        console.error("Delete event error:", error);
        alert(error.message);
    } finally {
        setDeleting(false);
    }
};


    return (
        <div
            className="
                group
                overflow-hidden
                rounded-2xl
                border
                border-white/[0.07]
                bg-white/[0.018]
                transition-all
                duration-200
                hover:border-white/[0.11]
                hover:bg-white/[0.025]
            "
        >
            <div className="flex flex-col md:flex-row">

                {/* Event Cover */}
                <div className="relative h-48 shrink-0 overflow-hidden bg-[#111] md:h-auto md:w-56">

                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(216,169,59,0.12),transparent_55%)]" />

                    {imageUrl ? (
                        <img
                            src={imageUrl}
                            alt={event.title}
                            className="absolute inset-0 h-full w-full object-cover"
                        />
                    ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">

                                <div className="mx-auto mb-2 flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.025] text-[#D8A93B]/70">

                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <rect
                                            x="3"
                                            y="3"
                                            width="18"
                                            height="18"
                                            rx="2"
                                        />

                                        <circle
                                            cx="8.5"
                                            cy="8.5"
                                            r="1.5"
                                        />

                                        <path d="m21 15-5-5L5 21" />
                                    </svg>

                                </div>

                                <span className="text-[10px] uppercase tracking-[0.18em] text-white/20">
                                    Event Cover
                                </span>

                            </div>
                        </div>
                    )}

                    {/* Status */}
                    <div className="absolute left-4 top-4">
                        <StatusBadge status={event.status} />
                    </div>

                </div>

                {/* Event Content */}
                <div className="flex min-w-0 flex-1 flex-col p-6">

                    <div className="flex items-start justify-between gap-5">

                        <div className="min-w-0">

                            <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.18em] text-[#D8A93B]/70">
                                {event.category}
                            </p>

                            <h2 className="truncate text-xl font-semibold tracking-tight text-white">
                                {event.title}
                            </h2>

                        </div>

                        <div className="hidden items-center gap-2 md:flex">

    <button
        onClick={() =>
            navigate(`/organizer/events/${event.id}`)
        }
        className="
            rounded-lg
            border
            border-white/[0.07]
            px-3
            py-2
            text-xs
            font-medium
            text-white/45
            transition
            hover:border-white/[0.13]
            hover:text-white
        "
    >
        View
    </button>

    {(event.status === "PENDING" ||
        event.status === "REJECTED") && (
        <button
            onClick={() =>
                setShowDeleteConfirm(true)
            }
            className="
                rounded-lg
                border
                border-red-400/[0.12]
                px-3
                py-2
                text-xs
                font-medium
                text-red-400/60
                transition
                hover:border-red-400/25
                hover:bg-red-400/[0.05]
                hover:text-red-400
            "
        >
            Delete
        </button>
    )}

</div>

                    </div>

                    {/* Details */}
                    <div className="mt-6 grid grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-4">

                        <div>
                            <p className="text-[10px] uppercase tracking-[0.14em] text-white/25">
                                Date
                            </p>

                            <p className="mt-1.5 text-sm text-white/70">
                                {event.eventDate}
                            </p>
                        </div>

                        <div>
                            <p className="text-[10px] uppercase tracking-[0.14em] text-white/25">
                                Venue
                            </p>

                            <p className="mt-1.5 truncate text-sm text-white/70">
                                {event.venue}
                            </p>
                        </div>

                        <div>
                            <p className="text-[10px] uppercase tracking-[0.14em] text-white/25">
                                Participants
                            </p>

                            <p className="mt-1.5 text-sm text-white/70">
                                {event.maxParticipants}
                            </p>
                        </div>

                        <div>
                            <p className="text-[10px] uppercase tracking-[0.14em] text-white/25">
                                Fee
                            </p>

                            <p className="mt-1.5 text-sm text-white/70">
                                {event.registrationFee === 0
                                    ? "Free"
                                    : `₹${event.registrationFee}`}
                            </p>
                        </div>

                    </div>

                    {/* Bottom */}
                    <div className="mt-6 flex items-center justify-between border-t border-white/[0.06] pt-4">

                        <p className="text-xs text-white/25">
                            Registration closes{" "}
                            <span className="text-white/45">
                                {event.registrationDeadline}
                            </span>
                        </p>

                        <button
                            onClick={() =>
                                navigate(`/organizer/events/${event.id}`)
                            }
                            className="
                                text-xs
                                font-medium
                                text-[#D8A93B]/70
                                transition
                                hover:text-[#D8A93B]
                                md:hidden
                            "
                        >
                            View Event →
                        </button>

                    </div>

                </div>
                
            </div>
            {showDeleteConfirm && (
    <div className="border-t border-red-400/[0.08] bg-red-400/[0.025] px-6 py-5">

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

            <div>
                <p className="text-sm font-medium text-white/80">
                    Delete this event?
                </p>

                <p className="mt-1 text-xs text-white/30">
                    This action cannot be undone.
                </p>
            </div>

            <div className="flex items-center gap-2">

                <button
                    onClick={() => setShowDeleteConfirm(false)}
                    disabled={deleting}
                    className="
                        rounded-lg
                        px-3
                        py-2
                        text-xs
                        font-medium
                        text-white/40
                        transition
                        hover:bg-white/[0.04]
                        hover:text-white/70
                    "
                >
                    Cancel
                </button>

                <button
                    onClick={handleDelete}
                    disabled={deleting}
                    className="
                        rounded-lg
                        bg-red-500/[0.10]
                        px-4
                        py-2
                        text-xs
                        font-medium
                        text-red-400
                        transition
                        hover:bg-red-500/[0.15]
                        disabled:cursor-not-allowed
                        disabled:opacity-40
                    "
                >
                    {deleting ? "Deleting..." : "Delete Event"}
                </button>

            </div>

        </div>

    </div>
)}
        </div>
    );
}

function MyEvents() {
    const navigate = useNavigate();

    const [activeFilter, setActiveFilter] = useState("ALL");
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const handleEventDeleted = (deletedId) => {
    setEvents((currentEvents) =>
        currentEvents.filter(
            (event) => event.id !== deletedId
        )
    );
};

    // Fetch organizer's events
    useEffect(() => {
        const fetchMyEvents = async () => {
            try {
                const token = localStorage.getItem("token");

                const response = await fetch(
                    "http://localhost:8080/api/events/my-events",
                    {
                        method: "GET",
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                const data = await response.json();

                if (!response.ok) {
                    throw new Error(
                        data.message ||
                        "Failed to fetch your events."
                    );
                }

                setEvents(data.data || []);

            } catch (error) {
                console.error("My events error:", error);
                setError(error.message);

            } finally {
                setLoading(false);
            }
        };

        fetchMyEvents();
    }, []);

    // Filter events
    const filteredEvents =
        activeFilter === "ALL"
            ? events
            : events.filter(
                (event) =>
                    event.status === activeFilter
            );

    // Event counts
    const counts = {
        ALL: events.length,

        PENDING: events.filter(
            (event) => event.status === "PENDING"
        ).length,

        APPROVED: events.filter(
            (event) => event.status === "APPROVED"
        ).length,

        REJECTED: events.filter(
            (event) => event.status === "REJECTED"
        ).length,
    };

    return (
        <div className="min-h-screen bg-[#090909] px-6 py-10 text-white lg:px-10">

            <div className="mx-auto max-w-6xl">

                {/* Header */}
                <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">

                    <div>

                        <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D8A93B]/70">
                            Organizer
                        </p>

                        <h1 className="text-3xl font-semibold tracking-tight text-white">
                            My Events
                        </h1>

                        <p className="mt-2 max-w-lg text-sm leading-6 text-white/35">
                            Manage the events you've created and
                            keep track of their approval status.
                        </p>

                    </div>

                    <button
                        onClick={() =>
                            navigate("/organizer/create")
                        }
                        className="
                            inline-flex
                            h-11
                            items-center
                            justify-center
                            gap-2
                            rounded-xl
                            bg-[#D8A93B]
                            px-5
                            text-sm
                            font-semibold
                            text-black
                            transition-all
                            duration-200
                            hover:bg-[#E4B849]
                            hover:shadow-[0_0_28px_rgba(216,169,59,0.12)]
                        "
                    >
                        <span className="text-lg leading-none">
                            +
                        </span>

                        Create Event
                    </button>

                </div>

                {/* Filters */}
                <div className="mt-10 flex flex-wrap items-center gap-2 border-b border-white/[0.06] pb-4">

                    {[
                        ["ALL", "All"],
                        ["PENDING", "Pending"],
                        ["APPROVED", "Approved"],
                        ["REJECTED", "Rejected"],
                    ].map(([value, label]) => (

                        <button
                            key={value}
                            onClick={() =>
                                setActiveFilter(value)
                            }
                            className={`
                                rounded-lg
                                px-3.5
                                py-2
                                text-xs
                                font-medium
                                transition-all
                                ${activeFilter === value
                                    ? "bg-white/[0.07] text-white"
                                    : "text-white/35 hover:bg-white/[0.035] hover:text-white/65"
                                }
                            `}
                        >
                            {label}

                            <span
                                className={`
                                    ml-2
                                    ${activeFilter === value
                                        ? "text-[#D8A93B]"
                                        : "text-white/20"
                                    }
                                `}
                            >
                                {counts[value]}
                            </span>

                        </button>

                    ))}

                </div>

                {/* Events */}
                <div className="mt-6 space-y-4">

                    {loading ? (

                        <div className="rounded-2xl border border-white/[0.07] bg-white/[0.018] px-6 py-20 text-center">

                            <div className="mx-auto h-5 w-5 animate-spin rounded-full border-2 border-white/10 border-t-[#D8A93B]" />

                            <p className="mt-4 text-sm text-white/35">
                                Loading your events...
                            </p>

                        </div>

                    ) : error ? (

                        <div className="rounded-2xl border border-red-400/10 bg-red-400/[0.03] px-6 py-16 text-center">

                            <p className="text-sm font-medium text-red-400">
                                Unable to load your events
                            </p>

                            <p className="mt-2 text-xs text-white/30">
                                {error}
                            </p>

                        </div>

                    ) : filteredEvents.length > 0 ? (

                        filteredEvents.map((event) => (
    <EventCard
        key={event.id}
        event={event}
        onDeleted={handleEventDeleted}
    />
))

                    ) : (

                        <div className="rounded-2xl border border-dashed border-white/[0.08] px-6 py-20 text-center">

                            <p className="text-sm font-medium text-white/55">
                                No events found
                            </p>

                            <p className="mt-2 text-xs text-white/25">
                                Events matching this filter will appear here.
                            </p>

                        </div>

                    )}

                </div>

            </div>
            

        </div>
    );
}

export default MyEvents;