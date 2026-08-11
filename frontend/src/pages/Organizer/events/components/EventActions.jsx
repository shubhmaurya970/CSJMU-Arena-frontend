import {
    Edit3,
    Trash2,
    Check,
    X,
    ShieldCheck,
} from "lucide-react";

function EventActions({
    event,
    user,
    isOwner,
    actionLoading,
    actionError,
    onEdit,
    onDelete,
    onApprove,
    onReject,
}) {

    const isAdmin =
        user?.role === "ADMIN";

    const canModify =
        isOwner &&
        (
            event.status === "PENDING" ||
            event.status === "REJECTED"
        );

    const canReview =
        isAdmin &&
        event.status === "PENDING";


    if (
        !canModify &&
        !canReview &&
        !actionError
    ) {
        return null;
    }


    return (
        <section
            className="
                mt-8
                overflow-hidden
                rounded-[24px]
                border
                border-white/[0.08]
                bg-[#15120F]
            "
        >

            <div
                className="
                    flex
                    flex-col
                    gap-6
                    p-6
                    sm:p-7
                    lg:flex-row
                    lg:items-center
                    lg:justify-between
                "
            >

                {/* LEFT */}

                <div className="flex items-start gap-4">

                    <div
                        className="
                            flex
                            h-11
                            w-11
                            shrink-0
                            items-center
                            justify-center
                            rounded-xl
                            bg-[#F4C542]/[0.08]
                            text-[#F4C542]
                        "
                    >
                        {isAdmin ? (
                            <ShieldCheck size={21} />
                        ) : (
                            <Edit3 size={21} />
                        )}
                    </div>


                    <div>

                        <h3
                            className="
                                text-lg
                                font-semibold
                                text-white
                            "
                        >
                            {isAdmin
                                ? "Event Review"
                                : "Event Management"}
                        </h3>

                        <p
                            className="
                                mt-1
                                text-sm
                                text-white/40
                            "
                        >
                            {isAdmin
                                ? "Review this event before it becomes public."
                                : "You can manage this event while it is awaiting approval."
                            }
                        </p>

                    </div>

                </div>


                {/* ACTIONS */}

                <div className="flex flex-wrap gap-3">

                    {canModify && (

                        <>

                            <button
                                onClick={onEdit}
                                disabled={actionLoading}
                                className="
                                    inline-flex
                                    items-center
                                    gap-2
                                    rounded-xl
                                    border
                                    border-[#F4C542]/50
                                    px-5
                                    py-3
                                    text-sm
                                    font-medium
                                    text-[#F4C542]
                                    transition
                                    hover:bg-[#F4C542]/10
                                    disabled:opacity-40
                                "
                            >
                                <Edit3 size={17} />

                                Edit Event
                            </button>


                            <button
                                onClick={onDelete}
                                disabled={actionLoading}
                                className="
                                    inline-flex
                                    items-center
                                    gap-2
                                    rounded-xl
                                    border
                                    border-red-500/40
                                    px-5
                                    py-3
                                    text-sm
                                    font-medium
                                    text-red-400
                                    transition
                                    hover:bg-red-500/10
                                    disabled:opacity-40
                                "
                            >
                                <Trash2 size={17} />

                                Delete Event
                            </button>

                        </>

                    )}


                    {canReview && (

                        <>

                            <button
                                onClick={onReject}
                                disabled={actionLoading}
                                className="
                                    inline-flex
                                    items-center
                                    gap-2
                                    rounded-xl
                                    border
                                    border-red-500/40
                                    px-5
                                    py-3
                                    text-sm
                                    font-medium
                                    text-red-400
                                    transition
                                    hover:bg-red-500/10
                                    disabled:opacity-40
                                "
                            >
                                <X size={17} />

                                Reject
                            </button>


                            <button
                                onClick={onApprove}
                                disabled={actionLoading}
                                className="
                                    inline-flex
                                    items-center
                                    gap-2
                                    rounded-xl
                                    bg-[#F4C542]
                                    px-5
                                    py-3
                                    text-sm
                                    font-medium
                                    text-black
                                    transition
                                    hover:bg-[#FFD95A]
                                    disabled:opacity-40
                                "
                            >
                                <Check size={17} />

                                Approve
                            </button>

                        </>

                    )}

                </div>

            </div>


            {actionError && (

                <div
                    className="
                        border-t
                        border-red-500/10
                        bg-red-500/[0.04]
                        px-6
                        py-3
                        text-sm
                        text-red-400
                    "
                >
                    {actionError}
                </div>

            )}

        </section>
    );
}

export default EventActions;