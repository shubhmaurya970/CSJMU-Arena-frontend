import { useNavigate } from "react-router-dom";

function EventCreated() {
    const navigate = useNavigate();

    return (
        <div className="relative min-h-screen overflow-hidden bg-[#090909] text-white">

            {/* Ambient Gold Glow */}
            <div className="pointer-events-none absolute left-1/2 top-[-180px] h-[420px] w-[700px] -translate-x-1/2 rounded-full bg-[#D8A93B]/[0.045] blur-[120px]" />

            <div className="relative flex min-h-screen items-center justify-center px-6 py-16">

                <div className="w-full max-w-2xl text-center">

                    {/* Success Icon */}
                    <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full border border-[#D8A93B]/20 bg-[#D8A93B]/[0.07] shadow-[0_0_45px_rgba(216,169,59,0.08)]">

                        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#D8A93B]/30 bg-[#D8A93B]/10">

                            <svg
                                width="25"
                                height="25"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#D8A93B"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M20 6 9 17l-5-5" />
                            </svg>

                        </div>

                    </div>

                    {/* Eyebrow */}
                    <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#D8A93B]/80">
                        Event Submission
                    </p>

                    {/* Heading */}
                    <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
                        Your event has been created.
                    </h1>

                    <p className="mx-auto mt-5 max-w-lg text-[15px] leading-7 text-white/45">
                        Your event has been successfully submitted and is now
                        waiting for approval from the administrator.
                    </p>

                    {/* Status Card */}
                    <div className="mx-auto mt-10 max-w-xl rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6 text-left shadow-[0_20px_70px_rgba(0,0,0,0.25)]">

                        <div className="flex items-center gap-4">

                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#D8A93B]/10">

                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#D8A93B"
                                    strokeWidth="1.8"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <circle cx="12" cy="12" r="9" />
                                    <path d="M12 7v5l3 2" />
                                </svg>

                            </div>

                            <div>
                                <p className="text-sm font-medium text-white">
                                    Pending Admin Approval
                                </p>

                                <p className="mt-1 text-xs text-white/35">
                                    Your event is currently under review.
                                </p>
                            </div>

                        </div>

                        {/* Divider */}
                        <div className="my-6 h-px bg-white/[0.06]" />

                        {/* Information */}
                        <div className="space-y-4">

                            <div className="flex gap-3">
                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D8A93B]" />

                                <p className="text-sm leading-6 text-white/50">
                                    An administrator will review the event
                                    details before publishing it.
                                </p>
                            </div>

                            <div className="flex gap-3">
                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D8A93B]" />

                                <p className="text-sm leading-6 text-white/50">
                                    Once approved, your event will become
                                    visible to students.
                                </p>
                            </div>

                            <div className="flex gap-3">
                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D8A93B]" />

                                <p className="text-sm leading-6 text-white/50">
                                    You can track the status of your event from
                                    your events dashboard.
                                </p>
                            </div>

                        </div>

                    </div>

                    {/* Actions */}
                    <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

                        <button
                            onClick={() =>
                                navigate("/organizer/my-events")
                            }
                            className="
                                rounded-xl
                                border
                                border-white/[0.08]
                                bg-white/[0.025]
                                px-6
                                py-3
                                text-sm
                                font-medium
                                text-white/65
                                transition-all
                                duration-200
                                hover:border-white/[0.14]
                                hover:bg-white/[0.05]
                                hover:text-white
                            "
                        >
                            View My Events
                        </button>

                        <button
                            onClick={() =>
                                navigate("/organizer/create")
                            }
                            className="
                                rounded-xl
                                bg-[#D8A93B]
                                px-6
                                py-3
                                text-sm
                                font-semibold
                                text-black
                                transition-all
                                duration-200
                                hover:bg-[#E4B849]
                                hover:shadow-[0_0_30px_rgba(216,169,59,0.15)]
                            "
                        >
                            Create Another Event
                        </button>

                    </div>

                </div>

            </div>
        </div>
    );
}

export default EventCreated;