function DecorativeWave() {

   const waves = [
    { y: 90, a: 0 },
    { y: 104, a: 6 },
    { y: 118, a: -4 },
    { y: 133, a: 8 },
    { y: 149, a: -6 },
    { y: 164, a: 5 },
];

    return (

        <svg
    className="
        absolute

        left-0
        bottom-[-20px]

        h-full
        w-full

        pointer-events-none
    "

    viewBox="0 0 420 260"

    fill="none"

    mask="url(#waveMask)"
>

            <defs>

                <linearGradient
                    id="goldWave"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                >

                    <stop offset="0%" stopColor="#D8A93B" stopOpacity="0" />

                    <stop offset="18%" stopColor="#D8A93B" stopOpacity=".10" />

                    <stop offset="50%" stopColor="#D8A93B" stopOpacity=".32" />

                    <stop offset="82%" stopColor="#D8A93B" stopOpacity=".10" />

                    <stop offset="100%" stopColor="#D8A93B" stopOpacity="0" />

                </linearGradient>

                <mask id="waveMask">

    {/* Show everything */}

    <rect
        width="100%"
        height="100%"
        fill="white"
    />

    {/* Hide the center where the statue is */}

    <ellipse
        cx="220"
        cy="180"
        rx="50"
        ry="99"
        fill="black"
    />

</mask>

            </defs>

            {

                waves.map((wave) => (

                   <path
    key={wave.y}

   d={`
    M-60 ${wave.y}

    C30 ${25 + wave.a},
    150 ${175 - wave.a},
    420 ${75 + wave.a}
`}

    stroke="url(#goldWave)"

    strokeWidth="1.5"

    strokeLinecap="round"

    fill="none"
/>

                ))

            }

        </svg>

    );

}

export default DecorativeWave;