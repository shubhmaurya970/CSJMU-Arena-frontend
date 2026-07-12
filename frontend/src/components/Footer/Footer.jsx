import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer() {
    return (
        <footer
            className="
                relative
                overflow-hidden

                bg-[#0F0C09]
                rounded-t-[64px]
                pt-16
                pb-8
            "
        >

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



{/* Top Right Dot Pattern */}

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
        opacity: 0.25,
    }}
/>

{/* Bottom Left Dot Pattern */}

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
        opacity: 0.18,
    }}
/>

{/* Bottom Right Decorative Wave */}

<svg
    className="
        absolute
        right-0
        bottom-0

        w-[520px]
        h-[320px]

        opacity-20

        pointer-events-none
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

{/* Left Decorative Ring */}

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

            <div
                className="
                    mx-auto
                    max-w-[1400px]
                    px-6
                    xl:px-10
                "
            >
                <div
    className="
    grid
    grid-cols-[1.6fr_.7fr_.9fr]

    gap-8

    items-start
"
>
    {/* LEFT */}

    <div>
        <h2
            className="
                text-6xl
                font-black
                tracking-[-2px]
                text-white
            "
        >
            CSJMU
        </h2>

        <h1
            className="
                -mt-2
                text-6xl
                font-black
                tracking-[-3px]
                text-[#F4C542]
            "
        >
            ARENA
        </h1>

        <button
    className="
        mt-10

        flex
        items-center
        gap-3

        rounded-2xl

        border
        border-[#F4C542]/60

        px-8
        py-4

        text-lg
        font-semibold
        text-[#F4C542]

        transition-all
        duration-300

        hover:bg-[#F4C542]
        hover:text-black
        hover:shadow-[0_0_30px_rgba(244,197,66,.25)]
    "
>
    Find Your Event

    <span className="text-2xl">→</span>
</button>
    </div>

    {/* CENTER */}

    <div>

        <h3
            className="
                text-xl
                font-bold
                text-white
            "
        >
            Quick Links
        </h3>

        <div
            className="
                mt-5
                flex
                flex-col
                gap-4
            "
        >
            {["Home", "Events", "About", "Contact"].map((item) => (

                <a
                    key={item}
                    href="#"
                    className="
                        text-white/70
                        transition-all
                        duration-300
                        hover:text-[#F4C542]
                    "
                >
                    {item}
                </a>

            ))}
        </div>

    </div>

    {/* RIGHT */}

    <div>

        <h3
            className="
                text-xl
                font-bold
                text-white
            "
        >
            Connect With Us
        </h3>

        <div
            className="
                mt-8
                flex
                flex-col
                gap-5
            "
        >
            <div className="flex flex-col gap-5">

    <a
        href="#"
        className="
            flex
            items-center
            gap-3

            text-white/70

            transition-all
            duration-300

            hover:text-[#F4C542]
            hover:translate-x-1
        "
    >
        <FaGithub size={18} />
        GitHub
    </a>

    <a
        href="#"
        className="
            flex
            items-center
            gap-3

            text-white/70

            transition-all
            duration-300

            hover:text-[#F4C542]
            hover:translate-x-1
        "
    >
        <FaLinkedin size={18} />
        LinkedIn
    </a>

    <a
        href="#"
        className="
            flex
            items-center
            gap-3

            text-white/70

            transition-all
            duration-300

            hover:text-[#F4C542]
            hover:translate-x-1
        "
    >
        <FaInstagram size={18} />
        Instagram
    </a>

</div>

        </div>

    </div>

</div>
{/* Bottom Divider */}

<div
    className="
        mt-16
        border-t
        border-[#F4C542]/20
    "
/>

{/* Bottom Bar */}

<div
    className="
        mt-8

        flex
        items-center
        justify-between

        text-sm
        text-white/55
    "
>

    <p>
        © 2026 CSJMU ARENA. All Rights Reserved.
    </p>

    <div
        className="
            flex
            items-center
            gap-4
        "
    >
        <span className="text-[#F4C542]">•</span>

        <span>
            Uniting Campus. Celebrating Moments.
        </span>

        <span className="text-[#F4C542]">•</span>

        <span>
            Designed & Developed by
            <span className="ml-2 font-semibold text-[#F4C542]">
                Shubh Maurya
            </span>
        </span>
    </div>

</div>
            </div>
        </footer>
    );
}

export default Footer;