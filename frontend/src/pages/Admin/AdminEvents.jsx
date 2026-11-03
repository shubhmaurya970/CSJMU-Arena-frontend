import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminEventCard from "./components/AdminEventCard";

function AdminEvents() {
    const navigate = useNavigate();

    const [events, setEvents] = useState([]);
    const [updateRequests, setUpdateRequests] = useState([]);

    const [loading, setLoading] = useState(true);
    const [updateLoading, setUpdateLoading] = useState(true);

    const [actionLoading, setActionLoading] = useState(null);
    const [error, setError] = useState("");
    const [updateError, setUpdateError] = useState("");

    // Decision modal
    const [decision, setDecision] = useState(null);
    const [message, setMessage] = useState("");

    const token = localStorage.getItem("token");
    const [approvedEvents, setApprovedEvents] = useState([]);
const [rejectedEvents, setRejectedEvents] = useState([]);
const [takenDownEvents, setTakenDownEvents] = useState([]);
const [statusLoading, setStatusLoading] = useState(true);
const [activeSection, setActiveSection] = useState("requests");


    // =========================
    // FETCH PENDING EVENTS
    // =========================

    const fetchPendingEvents = async () => {
        try {
            setLoading(true);
            setError("");

            const response = await fetch(
                "/api/admin/events/pending",
                {
                    method: "GET",
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
                    `Failed to fetch pending events. (${response.status})`
                );
            }

            setEvents(data?.data || []);

        } catch (error) {
            console.error(
                "Admin events error:",
                error
            );

            setError(error.message);

        } finally {
            setLoading(false);
        }
    };


const fetchEventSections = async () => {
    try {
        setStatusLoading(true);

        const headers = {
            Authorization: `Bearer ${token}`,
        };

        const [
            approvedResponse,
            rejectedResponse,
            takenDownResponse,
        ] = await Promise.all([
            fetch("/api/admin/events/approved", { headers }),
            fetch("/api/admin/events/rejected", { headers }),
            fetch("/api/admin/events/taken-down", { headers }),
        ]);

        // Read response bodies
        const approvedText = await approvedResponse.text();
        const rejectedText = await rejectedResponse.text();
        const takenDownText = await takenDownResponse.text();

        // Convert JSON strings into JavaScript objects
        const approvedData = approvedText
            ? JSON.parse(approvedText)
            : null;

        const rejectedData = rejectedText
            ? JSON.parse(rejectedText)
            : null;

        const takenDownData = takenDownText
            ? JSON.parse(takenDownText)
            : null;

        console.log("Approved:", approvedResponse.status, approvedData);
        console.log("Rejected:", rejectedResponse.status, rejectedData);
        console.log("Taken Down:", takenDownResponse.status, takenDownData);

        // Check response status
        if (!approvedResponse.ok) {
            throw new Error(
                approvedData?.message || "Failed to fetch approved events."
            );
        }

        if (!rejectedResponse.ok) {
            throw new Error(
                rejectedData?.message || "Failed to fetch rejected events."
            );
        }

        if (!takenDownResponse.ok) {
            throw new Error(
                takenDownData?.message || "Failed to fetch taken down events."
            );
        }

        // Update states
        setApprovedEvents(approvedData?.data || []);
        setRejectedEvents(rejectedData?.data || []);
        setTakenDownEvents(takenDownData?.data || []);

    } catch (error) {
        console.error("Event sections error:", error);
    } finally {
        setStatusLoading(false);
    }
};
    // =========================
    // FETCH UPDATE REQUESTS
    // =========================

    const fetchUpdateRequests = async () => {
        try {
            setUpdateLoading(true);
            setUpdateError("");

            const response = await fetch(
                "/api/admin/event-update-requests",
                {
                    method: "GET",
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
                    `Failed to fetch update requests. (${response.status})`
                );
            }

            setUpdateRequests(data?.data || []);

        } catch (error) {
            console.error(
                "Update requests error:",
                error
            );

            setUpdateError(error.message);

        } finally {
            setUpdateLoading(false);
        }
    };


    useEffect(() => {
    fetchPendingEvents();
    fetchUpdateRequests();
    fetchEventSections();
    
   
}, []);


    // =========================
    // OPEN DECISION MODAL
    // =========================

    const openDecision = (
        type,
        id,
        target = "event"
    ) => {

        setDecision({
            type,
            id,
            target,
        });

        setMessage("");
        setError("");
        setUpdateError("");
    };


    // =========================
    // CLOSE DECISION MODAL
    // =========================

    const closeDecision = () => {

        if (actionLoading) return;

        setDecision(null);
        setMessage("");
    };


    // =========================
    // SUBMIT DECISION
    // =========================

    const submitDecision = async () => {

        if (!decision) return;

        const {
            type,
            id,
            target,
        } = decision;

        try {

            setActionLoading(
                `${target}-${type}-${id}`
            );

            const body =
                message.trim()
                    ? { message: message.trim() }
                    : {};


            let endpoint = "";

            // EVENT
            if (target === "event") {

                endpoint =
                    `/api/admin/events/${id}/${type}`;

            }

            // UPDATE REQUEST
            if (target === "update") {

                endpoint =
                    `/api/admin/event-update-requests/${id}/${type}`;

            }


            const response = await fetch(
                endpoint,
                {
                    method: "PATCH",

                    headers: {
                        Authorization:
                            `Bearer ${token}`,

                        "Content-Type":
                            "application/json",
                    },

                    body: JSON.stringify(body),
                }
            );


            const rawResponse =
                await response.text();

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
                    `Action failed. (${response.status})`
                );

            }


            // Remove event from pending list
            if (target === "event") {

                setEvents((currentEvents) =>
                    currentEvents.filter(
                        (event) =>
                            event.id !== id
                    )
                );

            }


            // Remove update request from pending list
            if (target === "update") {

                setUpdateRequests(
                    (currentRequests) =>
                        currentRequests.filter(
                            (request) =>
                                request.id !== id
                        )
                );

            }

await Promise.all([
    fetchPendingEvents(),
    fetchUpdateRequests(),
    fetchEventSections(),
    
]);
            closeDecision();

        } catch (error) {

            console.error(
                "Decision error:",
                error
            );

            if (target === "event") {
                setError(error.message);
            } else {
                setUpdateError(error.message);
            }

        } finally {

            setActionLoading(null);
        }
    };


    return (
        <div className="min-h-screen bg-[#0F0C09] px-6 py-12 text-white">

            <div className="mx-auto max-w-[1200px]">

                {/* =========================
                    HEADER
                ========================= */}

                <div className="mb-12">

                    <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[#F4C542]/70">
                        Admin Control
                    </p>

                    <h1 className="text-4xl font-semibold tracking-tight">
                        Event Management
                    </h1>

                    <p className="mt-3 max-w-xl text-sm leading-6 text-white/40">
                        Review event submissions and manage
                        requested changes before they affect
                        published events.
                    </p>

                </div>

                {/* =========================
    SECTION NAVIGATION
========================= */}

<div className="mb-12 flex flex-wrap gap-2 border-b border-white/[0.06] pb-4">

    <button
        onClick={() => setActiveSection("requests")}
        className={`
            rounded-full
            px-6
            py-3
            text-sm
            transition
            ${
                activeSection === "requests"
                    ? "bg-[#F4C542] text-black shadow-lg shadow-[#F4C542]/10"
                    : "border border-white/[0.08] bg-white/[0.02] text-white/50 hover:bg-white/[0.05] hover:text-white"
            }
        `}
    >
        All Requests
    </button>

    <button
        onClick={() => setActiveSection("approved")}
        className={`
            rounded-full
            px-6
            py-3
            text-sm
            transition
            ${
                activeSection === "approved"
                    ? "bg-[#F4C542] text-black shadow-lg shadow-[#F4C542]/10"
                    : "border border-white/[0.08] bg-white/[0.02] text-white/50 hover:bg-white/[0.05] hover:text-white"
            }
        `}
    >
        Approved
    </button>

    <button
        onClick={() => setActiveSection("rejected")}
        className={`
            rounded-full
            px-6
            py-3
            text-sm
            transition
            ${
                activeSection === "rejected"
                    ? "bg-[#F4C542] text-black shadow-lg shadow-[#F4C542]/10"
                    : "border border-white/[0.08] bg-white/[0.02] text-white/50 hover:bg-white/[0.05] hover:text-white"
            }
        `}
    >
        Rejected
    </button>

    <button
        onClick={() => setActiveSection("taken-down")}
        className={`
            rounded-full
            px-6
            py-3
            text-sm
            transition
            ${
                activeSection === "taken-down"
                    ? "bg-[#F4C542] text-black shadow-lg shadow-[#F4C542]/10"
                    : "border border-white/[0.08] bg-white/[0.02] text-white/50 hover:bg-white/[0.05] hover:text-white"
            }
        `}
    >
        Taken Down
    </button>

</div>

                {activeSection === "requests" && (
    <>
                {/* =========================
                    EVENT REQUESTS
                ========================= */}
            
                <section>
                    

                    <div className="mb-6 flex items-end justify-between">

                        <div>

                            <p className="text-[10px] uppercase tracking-[0.2em] text-[#F4C542]/60">
                                New Submissions
                            </p>

                            <h2 className="mt-2 text-2xl font-semibold">
                                Event Requests
                            </h2>

                        </div>

                        <span className="text-xs text-white/25">
                            {events.length} pending
                        </span>

                    </div>


                    {loading ? (

                        <div className="flex min-h-[250px] items-center justify-center rounded-2xl border border-white/[0.07] bg-white/[0.02]">

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

    onApprove={(id) =>
        openDecision("approve", id, "event")
    }

    onReject={(id) =>
        openDecision("reject", id, "event")
    }

    onTakeDown={(id) =>
        openDecision("take-down", id, "event")
    }

    isProcessing={
        actionLoading !== null
    }
/>

                            ))}

                        </div>

                    )}

                </section>
                    

                {/* =========================
                    UPDATE REQUESTS
                ========================= */}

                <section className="mt-20">

                    <div className="mb-6 flex items-end justify-between">

                        <div>

                            <p className="text-[10px] uppercase tracking-[0.2em] text-[#F4C542]/60">
                                Changes Requested
                            </p>

                            <h2 className="mt-2 text-2xl font-semibold">
                                Event Update Requests
                            </h2>

                        </div>

                        <span className="text-xs text-white/25">
                            {updateRequests.length} pending
                        </span>

                    </div>


                    {updateLoading ? (

                        <div className="flex min-h-[200px] items-center justify-center rounded-2xl border border-white/[0.07] bg-white/[0.02]">

                            <p className="text-sm text-white/40">
                                Loading update requests...
                            </p>

                        </div>

                    ) : updateError ? (

                        <div className="rounded-2xl border border-red-400/10 bg-red-400/[0.03] p-6">

                            <p className="text-sm text-red-400/80">
                                {updateError}
                            </p>

                        </div>

                    ) : updateRequests.length === 0 ? (

                        <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-12 text-center">

                            <p className="text-sm text-white/40">
                                No pending update requests.
                            </p>

                        </div>

                    ) : (

                        <div className="space-y-5">

                            {updateRequests.map(
                                (request) => (

                                    <article
                                        key={request.id}
                                        className="
                                            rounded-2xl
                                            border
                                            border-white/[0.07]
                                            bg-[#15120F]
                                            p-6
                                        "
                                    >

                                        <div className="flex flex-col gap-6">

                                            {/* REQUEST HEADER */}

                                            <div className="flex items-start justify-between gap-4">

                                                <div>

                                                    <p className="text-[10px] uppercase tracking-[0.18em] text-[#F4C542]/60">
                                                        Update Request #{request.id}
                                                    </p>

                                                    <h3 className="mt-2 text-xl font-semibold text-white">
                                                        {request.title}
                                                    </h3>

                                                    <p className="mt-1 text-xs text-white/30">
                                                        Event #{request.eventId}
                                                        {" · "}
                                                        {request.organizerName}
                                                    </p>

                                                </div>

                                                <span className="
                                                    rounded-full
                                                    border
                                                    border-[#F4C542]/20
                                                    bg-[#F4C542]/[0.06]
                                                    px-3
                                                    py-1.5
                                                    text-[10px]
                                                    uppercase
                                                    tracking-[0.15em]
                                                    text-[#F4C542]
                                                ">
                                                    Pending
                                                </span>

                                            </div>


                                            {/* REQUESTED VALUES */}

                                            <div className="
                                                grid
                                                grid-cols-2
                                                gap-5
                                                border-y
                                                border-white/[0.06]
                                                py-5
                                                sm:grid-cols-4
                                            ">

                                                <div>

                                                    <p className="text-[10px] uppercase tracking-[0.14em] text-white/25">
                                                        Venue
                                                    </p>

                                                    <p className="mt-1 text-sm text-white/65">
                                                        {request.venue}
                                                    </p>

                                                </div>

                                                <div>

                                                    <p className="text-[10px] uppercase tracking-[0.14em] text-white/25">
                                                        Date
                                                    </p>

                                                    <p className="mt-1 text-sm text-white/65">
                                                        {request.eventDate}
                                                    </p>

                                                </div>

                                                <div>

                                                    <p className="text-[10px] uppercase tracking-[0.14em] text-white/25">
                                                        Participants
                                                    </p>

                                                    <p className="mt-1 text-sm text-white/65">
                                                        {request.maxParticipants}
                                                    </p>

                                                </div>

                                                <div>

                                                    <p className="text-[10px] uppercase tracking-[0.14em] text-white/25">
                                                        Fee
                                                    </p>

                                                    <p className="mt-1 text-sm text-white/65">
                                                        ₹{request.registrationFee || 0}
                                                    </p>

                                                </div>

                                            </div>


                                            {/* DESCRIPTION */}

                                            <div>

                                                <p className="text-[10px] uppercase tracking-[0.14em] text-white/25">
                                                    Requested Description
                                                </p>

                                                <p className="mt-2 text-sm leading-6 text-white/45">
                                                    {request.description}
                                                </p>

                                            </div>


                                            {/* ACTIONS */}

                                            

<div className="mt-auto flex items-center justify-end gap-3 pt-2">

    <button
        onClick={() =>
            openDecision(
                "reject",
                request.id,
                "update"
            )
        }
        disabled={actionLoading !== null}
        className="
            rounded-xl
            border
            border-red-500/20
            bg-red-500/[0.06]
            px-4
            py-2.5
            text-sm
            font-medium
            text-red-400
            transition
            hover:bg-red-500/10
            disabled:opacity-40
        "
    >
        Reject
    </button>

    <button
        onClick={() =>
            openDecision(
                "approve",
                request.id,
                "update"
            )
        }
        disabled={actionLoading !== null}
        className="
            rounded-xl
            bg-[#F4C542]
            px-5
            py-2.5
            text-sm
            font-semibold
            text-black
            transition
            hover:bg-[#FFD95A]
            disabled:opacity-40
        "
    >
        Approve
    </button>

</div>

                                        </div>

                                    </article>

                                )
                            )}

                        </div>

                    )}

                </section>
                </>
)}

                {/* =========================
    APPROVED EVENTS
========================= */}

{activeSection === "approved" && (
    <section className="mt-20">

    <div className="mb-6 flex items-end justify-between">

        <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-emerald-400/60">
                Live Events
            </p>

            <h2 className="mt-2 text-2xl font-semibold">
                Approved Events
            </h2>

            <p className="mt-2 text-sm text-white/30">
                Events currently visible to students.
            </p>
        </div>

        <span className="text-xs text-white/25">
            {approvedEvents.length} approved
        </span>

    </div>


    {statusLoading ? (

        <div className="
            flex
            min-h-[250px]
            items-center
            justify-center
            rounded-2xl
            border
            border-white/[0.07]
            bg-white/[0.02]
        ">
            <p className="text-sm text-white/40">
                Loading approved events...
            </p>
        </div>

    ) : approvedEvents.length === 0 ? (

        <div className="
            rounded-2xl
            border
            border-white/[0.07]
            bg-white/[0.02]
            p-12
            text-center
        ">
            <p className="text-sm text-white/40">
                No approved events.
            </p>
        </div>

    ) : (

        <div className="space-y-5">

            {approvedEvents.map((event) => (

                <AdminEventCard
                    key={event.id}
                    event={event}

                    onView={(id) =>
                        navigate(`/event/${id}`)
                    }

                    onApprove={(id) =>
                        openDecision(
                            "approve",
                            id,
                            "event"
                        )
                    }

                    onReject={(id) =>
                        openDecision(
                            "reject",
                            id,
                            "event"
                        )
                    }

                    onTakeDown={(id) =>
                        openDecision(
                            "take-down",
                            id,
                            "event"
                        )
                    }

                    isProcessing={
                        actionLoading !== null
                    }
                />

            ))}

        </div>

    )}
    </section>
)}


{/* =========================
    REJECTED EVENTS
========================= */}

{activeSection === "rejected" && (
    <section className="mt-20">

    <div className="mb-6 flex items-end justify-between">

        <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-red-400/60">
                Declined Events
            </p>

            <h2 className="mt-2 text-2xl font-semibold">
                Rejected Events
            </h2>

            <p className="mt-2 text-sm text-white/30">
                Events that were rejected during review.
            </p>
        </div>

        <span className="text-xs text-white/25">
            {rejectedEvents.length} rejected
        </span>

    </div>


    {statusLoading ? (

        <div className="
            flex
            min-h-[250px]
            items-center
            justify-center
            rounded-2xl
            border
            border-white/[0.07]
            bg-white/[0.02]
        ">
            <p className="text-sm text-white/40">
                Loading rejected events...
            </p>
        </div>

    ) : rejectedEvents.length === 0 ? (

        <div className="
            rounded-2xl
            border
            border-white/[0.07]
            bg-white/[0.02]
            p-12
            text-center
        ">
            <p className="text-sm text-white/40">
                No rejected events.
            </p>
        </div>

    ) : (

        <div className="space-y-5">

            {rejectedEvents.map((event) => (

                <AdminEventCard
                    key={event.id}
                    event={event}

                    onView={(id) =>
                        navigate(`/event/${id}`)
                    }

                    onTakeDown={(id) =>
                        openDecision(
                            "take-down",
                            id,
                            "event"
                        )
                    }

                    isProcessing={
                        actionLoading !== null
                    }
                />

            ))}

        </div>

    )}
    

</section>
)}

{/* =========================
    TAKEN DOWN EVENTS
========================= */}

{activeSection === "taken-down" && (
    <section className="mt-20">

    <div className="mb-6 flex items-end justify-between">

        <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-red-400/60">
                Removed Events
            </p>

            <h2 className="mt-2 text-2xl font-semibold">
                Taken Down Events
            </h2>

            <p className="mt-2 text-sm text-white/30">
                Events that have been taken down by an administrator.
            </p>
        </div>

        <span className="text-xs text-white/25">
            {takenDownEvents.length} taken down
        </span>

    </div>


    {statusLoading ? (

        <div className="
            flex
            min-h-[250px]
            items-center
            justify-center
            rounded-2xl
            border
            border-white/[0.07]
            bg-white/[0.02]
        ">
            <p className="text-sm text-white/40">
                Loading taken down events...
            </p>
        </div>

    ) : takenDownEvents.length === 0 ? (

        <div className="
            rounded-2xl
            border
            border-white/[0.07]
            bg-white/[0.02]
            p-12
            text-center
        ">
            <p className="text-sm text-white/40">
                No taken down events.
            </p>
        </div>

    ) : (

        <div className="space-y-5">

            {takenDownEvents.map((event) => (

                <AdminEventCard
                    key={event.id}
                    event={event}

                    onView={(id) =>
                        navigate(`/event/${id}`)
                    }

                    isProcessing={
                        actionLoading !== null
                    }
                />

            ))}

        </div>

    )}

</section>
)}
    


            </div>


            {/* =========================
                DECISION MODAL
            ========================= */}

            {decision && (

                <div className="
                    fixed
                    inset-0
                    z-50
                    flex
                    items-center
                    justify-center
                    bg-black/70
                    px-5
                    backdrop-blur-sm
                ">

                    <div className="
                        w-full
                        max-w-md
                        rounded-2xl
                        border
                        border-white/[0.08]
                        bg-[#17130F]
                        p-6
                        shadow-2xl
                    ">

                        <p className="text-[10px] uppercase tracking-[0.2em] text-[#F4C542]/70">
                            Admin Decision
                        </p>

                        <h3 className="mt-2 text-xl font-semibold">
                            {decision.type === "approve"
                                ? "Approve Request"
                                : decision.type === "reject"
                                ? "Reject Request"
                                : "Take Down Event"}
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-white/35">
                            Message is optional. Leave it blank if
                            you don't want to provide one.
                        </p>


                        <textarea
                            value={message}
                            onChange={(e) =>
                                setMessage(e.target.value)
                            }
                            placeholder="Add an optional message..."
                            rows={4}
                            className="
                                mt-5
                                w-full
                                resize-none
                                rounded-xl
                                border
                                border-white/[0.08]
                                bg-white/[0.025]
                                px-4
                                py-3
                                text-sm
                                text-white
                                outline-none
                                placeholder:text-white/20
                                focus:border-[#F4C542]/30
                            "
                        />


                        <div className="mt-5 flex justify-end gap-3">

                            <button
                                onClick={closeDecision}
                                disabled={
                                    actionLoading !== null
                                }
                                className="
                                    rounded-xl
                                    px-4
                                    py-2.5
                                    text-sm
                                    text-white/40
                                    transition
                                    hover:bg-white/[0.04]
                                    hover:text-white/70
                                    disabled:opacity-40
                                "
                            >
                                Cancel
                            </button>


                            <button
                                onClick={submitDecision}
                                disabled={
                                    actionLoading !== null
                                }
                                className={`
                                    rounded-xl
                                    px-5
                                    py-2.5
                                    text-sm
                                    font-semibold
                                    transition
                                    disabled:cursor-not-allowed
                                    disabled:opacity-40
                                    ${
                                        decision.type === "approve"
                                            ? "bg-[#F4C542] text-black hover:bg-[#FFD95A]"
                                            : "bg-red-500/10 text-red-400 hover:bg-red-500/15"
                                    }
                                `}
                            >
                                {actionLoading
                                    ? "Processing..."
                                    : decision.type === "approve"
                                    ? "Approve"
                                    : decision.type === "reject"
                                    ? "Reject"
                                    : "Take Down"}
                            </button>

                        </div>

                    </div>

                </div>

            )}

        </div>
    );
}

export default AdminEvents;