function AdminDecisionModal({
    decision,
    message,
    setMessage,
    onConfirm,
    onCancel,
    loading,
}) {
    if (!decision) return null;

    const title =
        decision.type === "approve"
            ? "Approve Request"
            : decision.type === "reject"
            ? "Reject Request"
            : "Take Down Event";

    return (
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

                <h3 className="mt-2 text-xl font-semibold text-white">
                    {title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/35">
                    Message is optional. Leave it blank if you
                    don't want to provide one.
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
                        onClick={onCancel}
                        disabled={loading}
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
                        onClick={onConfirm}
                        disabled={loading}
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
                        {loading
                            ? "Processing..."
                            : title}
                    </button>

                </div>

            </div>

        </div>
    );
}

export default AdminDecisionModal;