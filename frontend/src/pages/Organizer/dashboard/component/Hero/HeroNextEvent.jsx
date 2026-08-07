function HeroNextEvent() {
    return (
        <div
            className="
                relative

                overflow-hidden

                h-[180px]
                w-full

                rounded-2xl

                border border-white/8

                bg-white/[0.03]

                backdrop-blur-md

                p-6
            "
        >
            {/* Gold Glow */}

            <div
                className="
                    absolute

                    -right-10
                    -top-10

                    h-32
                    w-32

                    rounded-full

                    bg-[#D8A93B]/10

                    blur-[70px]
                "
            />

            <div className="relative z-10">

                <p
                    className="
                        text-[11px]
                        uppercase
                        tracking-[0.22em]
                        text-[#C9A14A]
                    "
                >
                    Organizer Workspace
                </p>

                <div className="mt-6 space-y-2">

                    <h3 className="text-white font-semibold text-lg">
                        Create
                    </h3>

                    <h3 className="text-white/70 font-medium">
                        Manage
                    </h3>

                    <h3 className="text-white/45">
                        Celebrate
                    </h3>

                </div>

                <p
                    className="
                        absolute

                        bottom-0
                        right-0

                        text-sm

                        tracking-[0.15em]

                        text-white/30
                    "
                >
                    CSJMU ARENA
                </p>

            </div>

        </div>
    );
}

export default HeroNextEvent;