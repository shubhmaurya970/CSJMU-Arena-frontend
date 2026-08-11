import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminEventCard from "./components/AdminEventCard";

function AdminEvents() {
    const navigate = useNavigate();
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [actionLoading, setActionLoading] = useState(null);
    const [error, setError] = useState("");

    const API_BASE_URL = "";

    const fetchPendingEvents = async () => {
        try {
            setLoading(true);
            setError("");

            const token = localStorage.getItem("token");

            const response = await fetch(
                `${API_BASE_URL}/api/admin/events/pending`,
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
                    data?.message ||
                        "Failed to fetch pending events."
                );
            }

            setEvents(data?.data || []);
        } catch (error) {
            console.error("Admin events error:", error);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPendingEvents();
    }, []);

    const handleApprove = async (eventId) => {
    try {
        setActionLoading(`approve-${eventId}`);

        const token = localStorage.getItem("token");

        const response = await fetch(
    `/api/admin/events/${eventId}/approve`,
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
                data?.message || "Failed to approve event."
            );
        }

        // Remove from pending list
        setEvents((currentEvents) =>
            currentEvents.filter(
                (event) => event.id !== eventId
            )
        );

    } catch (error) {
        console.error("Approve error:", error);
        setError(error.message);
    } finally {
        setActionLoading(null);
    }
};

const handleReject = async (eventId) => {
    try {
        setActionLoading(`reject-${eventId}`);

        const token = localStorage.getItem("token");

       const response = await fetch(
    `/api/admin/events/${eventId}/reject`,
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
                data?.message || "Failed to reject event."
            );
        }

        // Remove from pending list
        setEvents((currentEvents) =>
            currentEvents.filter(
                (event) => event.id !== eventId
            )
        );

    } catch (error) {
        console.error("Reject error:", error);
        setError(error.message);
    } finally {
        setActionLoading(null);
    }
};

    return (
    <div className="min-h-screen bg-[#0F0C09] px-6 py-12 text-white">

        <div className="mx-auto max-w-[1200px]">

            {/* HEADER */}

            <div className="mb-10">

                <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[#F4C542]/70">
                    Admin Control
                </p>

                <h1 className="text-4xl font-semibold tracking-tight">
                    Event Approvals
                </h1>

                <p className="mt-3 max-w-xl text-sm leading-6 text-white/40">
                    Review event submissions before they
                    become visible to students.
                </p>

            </div>


            {/* CONTENT */}

            {loading ? (

                <div className="flex min-h-[300px] items-center justify-center">
                    <p className="text-sm text-white/40">
                        Loading pending events...
                    </p>
                </div>

            ) : error ? (

                <div className="rounded-2xl border border-red-400/10 bg-red-400/[0.03] p-6">
                    <p className="text-sm text-red-400/80">
                        {error}
                    </p>
                </div>

            ) : events.length === 0 ? (

                <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-12 text-center">
                    <p className="text-sm text-white/40">
                        No pending events.
                    </p>
                </div>

            ) : (

                <div className="space-y-5">

                    {events.map((event) => (

                        <AdminEventCard
                            key={event.id}
                            event={event}

                            onView={(id) =>
                                navigate(`/event/${id}`)
                            }

                            onApprove={handleApprove}

                            onReject={handleReject}

                            isProcessing={
                                actionLoading !== null
                            }
                        />

                    ))}

                </div>

            )}

        </div>

    </div>
);
   
}

export default AdminEvents;