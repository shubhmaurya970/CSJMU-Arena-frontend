function BrandPanel() {
    return (
        <div className="relative max-w-xl">

            {/* Glow */}

            <div
                className="
                    absolute
                    -left-32
                    -top-32

                    h-80
                    w-80

                    rounded-full

                    bg-[#F4C542]/10

                    blur-[120px]

                    -z-10
                "
            />

            {/* Logo */}

            <p
                className="
                    text-xl
                    font-bold
                    tracking-wide

                    text-[#F4C542]
                "
            >
                CSJMU ARENA
            </p>

            {/* Heading */}

            <h1
                className="
                    mt-8

                    text-6xl
                    font-black

                    leading-[1.05]

                    text-white
                "
            >
                One Campus.
                <br />
                Every Event.
            </h1>

            {/* Accent */}

            <h2
                className="
                    mt-2

                    text-5xl
                    font-black

                    text-[#F4C542]
                "
            >
                One Arena.
            </h2>

            {/* Description */}

            <p
                className="
                    mt-8

                    max-w-md

                    text-lg
                    leading-8

                    text-white/65
                "
            >
                Discover workshops, hackathons,
                cultural festivals, sports events,
                and every opportunity happening
                across the CSJMU campus.
            </p>

        </div>
    );
}

export default BrandPanel;