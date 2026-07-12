function ArcBackground() {
    return (
        <svg
            className="absolute -left-[520px] -bottom-[520px] pointer-events-none"
            width="1200"
            height="1200"
            viewBox="0 0 1200 1200"
            fill="none"
        >
            <defs>

                <filter
                    id="goldGlow"
                    x="-100%"
                    y="-100%"
                    width="300%"
                    height="300%"
                >
                    <feGaussianBlur stdDeviation="30" result="blur" />

                    <feColorMatrix
                        in="blur"
                        type="matrix"
                        values="
        1 0 0 0 0
        0 1 0 0 0
        0 0 1 0 0
        0 0 0 24 -8"
                    />

                    <feMerge>
                        <feMergeNode />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>

                {/* Glow only in middle */}

                <radialGradient id="arcGlow">

                    <stop offset="0%" stopColor="#F4C542" stopOpacity=".75" />

                    <stop offset="55%" stopColor="#F4C542" stopOpacity=".18" />

                    <stop offset="100%" stopColor="#F4C542" stopOpacity="0" />

                </radialGradient>
                <linearGradient
                    id="glowGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                >
                    <stop offset="0%" stopColor="#F4C542" stopOpacity="0" />

                    <stop offset="50%" stopColor="#F4C542" stopOpacity=".95" />

                    <stop offset="100%" stopColor="#F4C542" stopOpacity="0" />
                </linearGradient>

            </defs>

            {/* Middle Glow */}

            {/* Glow that follows the arc */}
            <circle
                cx="0"
                cy="1200"
                r="980"
                stroke="red"
                strokeWidth="40"
                strokeLinecap="round"
                strokeDasharray="500 7000"
                strokeDashoffset="0"
                fill="none"
            />

            {/* Glow Arc */}

            <circle
                cx="0"
                cy="1200"
                r="980"
                stroke="#F4C542"
                strokeWidth="8"
                opacity=".45"
                filter="url(#goldGlow)"
                fill="none"
            />

            {/* Main Arc */}

            <circle
                cx="0"
                cy="1200"
                r="980"
                stroke="#D8A81D"
                strokeWidth="3.5"
                fill="none"
            />

        </svg>
    );
}

export default ArcBackground;