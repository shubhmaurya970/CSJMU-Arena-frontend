function AuthLayout({ left, right }) {
    return (
        <section
            className="
                relative
                min-h-screen
                overflow-hidden
                bg-[#0F0C09]
                bg-[radial-gradient(circle_at_top_left,rgba(244,197,66,.08),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(244,197,66,.06),transparent_40%)]
            "
        >
            {/* Top Left Glow */}

            <div
                className="
                    absolute
                    -left-52
                    -top-44

                    h-[520px]
                    w-[520px]

                    rounded-full

                    bg-[#F4C542]/10

                    blur-[170px]
                "
            />

            {/* Bottom Right Glow */}

            <div
                className="
                    absolute
                    -right-52
                    -bottom-52

                    h-[520px]
                    w-[520px]

                    rounded-full

                    bg-[#F4C542]/8

                    blur-[180px]
                "
            />

            {/* Top Right Dot Pattern */}

            <div
                className="
                    absolute
                    top-20
                    right-20

                    h-40
                    w-40

                    pointer-events-none
                "
                style={{
                    backgroundImage:
                        "radial-gradient(rgba(244,197,66,.85) 1.6px, transparent 1.6px)",
                    backgroundSize: "22px 22px",
                    opacity: .22,
                    maskImage:
                        "radial-gradient(circle, black 40%, transparent 100%)",
                    WebkitMaskImage:
                        "radial-gradient(circle, black 40%, transparent 100%)",
                }}
            />

            {/* Bottom Left Dot Pattern */}

            <div
                className="
                    absolute
                    bottom-20
                    left-20

                    h-40
                    w-40

                    pointer-events-none
                "
                style={{
                    backgroundImage:
                        "radial-gradient(rgba(244,197,66,.85) 1.6px, transparent 1.6px)",
                    backgroundSize: "22px 22px",
                    opacity: .22,
                    maskImage:
                        "radial-gradient(circle, black 40%, transparent 100%)",
                    WebkitMaskImage:
                        "radial-gradient(circle, black 40%, transparent 100%)",
                }}
            />

            {/* Flowing Golden Arcs */}

            <svg
                className="
                    absolute
                    inset-0

                    w-full
                    h-full

                    pointer-events-none

                    z-[1]
                "
                viewBox="0 0 1600 900"
                preserveAspectRatio="none"
                fill="none"
            >
                {/* Main Arc */}

                <path
                    d="
                        M1650 830
                        C1460 690 1280 560 1130 390
                        C980 210 790 90 520 -120
                    "
                    stroke="#F4C542"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    opacity=".95"
                />

                {/* Second Arc */}

                <path
                    d="
                        M1650 770
                        C1440 640 1260 520 1110 360
                        C940 180 760 70 470 -150
                    "
                    stroke="#F4C542"
                    strokeWidth="1.4"
                    strokeOpacity=".35"
                    strokeLinecap="round"
                />

                {/* Third Arc */}

                <path
                    d="
                        M1650 720
                        C1420 600 1235 485 1085 330
                        C905 145 710 40 420 -170
                    "
                    stroke="#F4C542"
                    strokeWidth="1"
                    strokeOpacity=".18"
                    strokeLinecap="round"
                />

                {/* Glow */}

                <path
                    d="
                        M1650 830
                        C1460 690 1280 560 1130 390
                        C980 210 790 90 520 -120
                    "
                    stroke="#F4C542"
                    strokeWidth="10"
                    strokeOpacity=".08"
                    filter="url(#goldGlow)"
                />

                <defs>
                    <filter id="goldGlow">
                        <feGaussianBlur stdDeviation="8" />
                    </filter>
                </defs>
            </svg>

            {/* Content */}

            <div className="relative z-10 mx-auto flex min-h-screen max-w-[1600px]">
                <div className="flex w-[45%] items-center justify-center px-16">
                    {left}
                </div>

                <div className="flex w-[55%] items-center justify-center px-16">
                    {right}
                </div>
            </div>
        </section>
    );
}

export default AuthLayout;