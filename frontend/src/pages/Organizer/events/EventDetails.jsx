import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import { AuthContext } from "../../../context/AuthContext";
import { getEventImage } from "../../../utils/eventImageStorage";

import EventHero from "./components/EventHero";
import EventInfo from "./components/EventInfo";
import EventSidebar from "./components/EventSidebar";
import EventActions from "./components/EventActions";

function EventDetails() {
    const { user } = useContext(AuthContext);
    const { id } = useParams();
    const navigate = useNavigate();

    const token = localStorage.getItem("token");

    const [event, setEvent] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const [actionLoading, setActionLoading] = useState(false);
    const [actionError, setActionError] = useState("");

    const isOwner =
        user?.role === "ORGANIZER" &&
        (
            event?.organizerId === user?.id ||
            event?.organizerEmail === user?.email ||
            event?.organizer?.email === user?.email
        );

    useEffect(() => {
        const fetchEvent = async () => {
            try {
                setLoading(true);
                setError("");

                const response = await fetch(
                    `/api/events/${id}`,
                    {
                        headers: token
                            ? {
                                  Authorization: `Bearer ${token}`,
                              }
                            : {},
                    }
                );

                const data = await response.json();

                if (!response.ok) {
                    throw new Error(
                        data?.message ||
                        "Failed to load event."
                    );
                }

                setEvent(data.data);

            } catch (err) {
                console.error(err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchEvent();
    }, [id, token]);


    useEffect(() => {
        let objectUrl;

        const loadImage = async () => {
            try {
                const file = await getEventImage(id);

                if (file) {
                    objectUrl = URL.createObjectURL(file);
                    setImageUrl(objectUrl);
                }
            } catch (err) {
                console.error(
                    "Event image error:",
                    err
                );
            }
        };

        loadImage();

        return () => {
            if (objectUrl) {
                URL.revokeObjectURL(objectUrl);
            }
        };
    }, [id]);


    const handleDelete = async () => {
        const confirmed = window.confirm(
            "Delete this event?"
        );

        if (!confirmed) return;

        try {
            setActionLoading(true);
            setActionError("");

            const response = await fetch(
                `/api/events/${id}`,
                {
                    method: "DELETE",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data?.message ||
                    "Failed to delete event."
                );
            }

            navigate("/organizer/my-events");

        } catch (err) {
            setActionError(err.message);
        } finally {
            setActionLoading(false);
        }
    };


    const handleApprove = async () => {
        try {
            setActionLoading(true);
            setActionError("");

            const response = await fetch(
                `/api/admin/events/${id}/approve`,
                {
                    method: "PATCH",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data?.message ||
                    "Failed to approve event."
                );
            }

            setEvent(
                data?.data || {
                    ...event,
                    status: "APPROVED",
                }
            );

        } catch (err) {
            setActionError(err.message);
        } finally {
            setActionLoading(false);
        }
    };


    const handleReject = async () => {
        try {
            setActionLoading(true);
            setActionError("");

            const response = await fetch(
                `/api/admin/events/${id}/reject`,
                {
                    method: "PATCH",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data?.message ||
                    "Failed to reject event."
                );
            }

            setEvent(
                data?.data || {
                    ...event,
                    status: "REJECTED",
                }
            );

        } catch (err) {
            setActionError(err.message);
        } finally {
            setActionLoading(false);
        }
    };


    if (loading) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-[#0F0C09] text-white">
                <span className="text-sm tracking-[0.25em] text-white/35">
                    LOADING EVENT
                </span>
            </div>
        );
    }


    if (error || !event) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-[#0F0C09] px-6 text-white">
                <div className="text-center">

                    <p className="text-sm text-red-400">
                        {error || "Event not found."}
                    </p>

                    <button
                        onClick={() => navigate(-1)}
                        className="mt-6 text-sm text-[#F4C542]"
                    >
                        ← Go back
                    </button>

                </div>
            </div>
        );
    }


    return (
        <main className="min-h-screen bg-[#0F0C09] text-white">

            <div className="mx-auto max-w-[1450px] px-5 py-8 sm:px-8 lg:px-10">

                {/* BACK */}

                <button
                    onClick={() => navigate(-1)}
                    className="
                        group
                        mb-8
                        flex
                        items-center
                        gap-2
                        text-sm
                        font-medium
                        text-[#F4C542]
                        transition
                        hover:text-[#FFD95A]
                    "
                >
                    <ArrowLeft
                        size={17}
                        className="
                            transition-transform
                            group-hover:-translate-x-1
                        "
                    />

                    Back to menu
                </button>


                {/* MAIN GRID */}

                <div
                    className="
                        grid
                        gap-8
                        lg:grid-cols-[540px_minmax(0,1fr)]
                        xl:grid-cols-[560px_minmax(0,1fr)]
                    "
                >

                    {/* LEFT */}

                    <div className="min-w-0">

                        <EventHero
                            event={event}
                            imageUrl={imageUrl}
                        />

                        <EventInfo
                            event={event}
                        />

                    </div>


                    {/* RIGHT */}

                    <EventSidebar
                        event={event}
                    />

                </div>


                {/* ACTIONS */}

                <EventActions
                    event={event}
                    user={user}
                    isOwner={isOwner}
                    actionLoading={actionLoading}
                    actionError={actionError}
                    onEdit={() =>
                        navigate(
                            `/organizer/events/${id}/edit`
                        )
                    }
                    onDelete={handleDelete}
                    onApprove={handleApprove}
                    onReject={handleReject}
                />

            </div>

        </main>
    );
}

export default EventDetails;