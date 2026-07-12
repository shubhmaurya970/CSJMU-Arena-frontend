import gateOutline from "../../assets/svg/gate-outline.svg";
function FooterBackground() {
    return (
        <>
            {/* Top Left Glow */}

            <div
                className="
                    absolute
                    -left-44
                    -top-32

                    h-[520px]
                    w-[520px]

                    rounded-full

                    bg-[#F4C542]/12

                    blur-[170px]

                    pointer-events-none
                "
            />

            {/* Bottom Right Glow */}

            <div
                className="
                    absolute
                    -right-44
                    -bottom-36

                    h-[420px]
                    w-[420px]

                    rounded-full

                    bg-[#F4C542]/10

                    blur-[160px]

                    pointer-events-none
                "
            />

            {/* Top Right Dots */}

            <div
                className="
                    absolute
                    top-16
                    right-16

                    h-32
                    w-32

                    pointer-events-none
                "
                style={{
                    backgroundImage:
                        "radial-gradient(rgba(244,197,66,.8) 1.8px, transparent 1.8px)",
                    backgroundSize: "18px 18px",
                    opacity: .25,
                }}
            />

            {/* Bottom Left Dots */}

            <div
                className="
                    absolute
                    bottom-16
                    left-16

                    h-28
                    w-28

                    pointer-events-none
                "
                style={{
                    backgroundImage:
                        "radial-gradient(rgba(244,197,66,.8) 1.8px, transparent 1.8px)",
                    backgroundSize: "18px 18px",
                    opacity: .18,
                }}
            />

            {/* Decorative Wave */}

            <svg
                className="
absolute

right-0
bottom-0

w-[760px]
h-[420px]

opacity-15

pointer-events-none

z-[1]
"
                viewBox="0 0 520 320"
                fill="none"
            >
                <path
                    d="
                        M520 320
                        C420 250 360 170 250 150
                        C180 140 120 90 0 0
                    "
                    stroke="#F4C542"
                    strokeWidth="2"
                />

                <path
                    d="
                        M520 280
                        C430 230 350 170 240 145
                        C150 120 90 80 20 0
                    "
                    stroke="#F4C542"
                    strokeOpacity=".4"
                    strokeWidth="1.5"
                />

                <path
                    d="
                        M520 240
                        C420 200 340 140 220 120
                        C120 100 60 60 0 0
                    "
                    stroke="#F4C542"
                    strokeOpacity=".2"
                    strokeWidth="1"
                />
            </svg>
            <img
    src={gateOutline}
    alt=""
    aria-hidden="true"
    className="
        absolute

        bottom-0
        right-10

        w-[540px]

        object-contain

        opacity-[0.08]

        pointer-events-none
        select-none

        z-[2]
    "
/>

            {/* Decorative Rings */}

            <div
                className="
                    absolute
                    -left-64
                    bottom-[-180px]

                    h-[520px]
                    w-[520px]

                    rounded-full

                    border
                    border-[#F4C542]/10

                    pointer-events-none
                "
            />

            <div
                className="
                    absolute
                    -left-36
                    bottom-[-140px]

                    h-[360px]
                    w-[360px]

                    rounded-full

                    border
                    border-[#F4C542]/10

                    pointer-events-none
                "
            />
        </>
    );
}

export default FooterBackground;