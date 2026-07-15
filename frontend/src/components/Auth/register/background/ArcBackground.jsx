function ArcBackground() {
    return (
        <svg
            className="absolute inset-0 h-full w-full pointer-events-none"
            viewBox="0 0 1600 900"
            preserveAspectRatio="none"
        >
            {/* Top Left */}

            <path
                d="M-250 380 C120 60 520 -120 980 120"
                fill="none"
                stroke="rgba(244,197,66,.14)"
                strokeWidth="1.5"
            />

            <path
                d="M-320 460 C80 120 520 -80 1040 180"
                fill="none"
                stroke="rgba(244,197,66,.1)"
                strokeWidth="1"
            />

            {/* Bottom Right */}

            <path
                d="M700 920 C1050 650 1380 520 1850 760"
                fill="none"
                stroke="rgba(244,197,66,.20)"
                strokeWidth="1.5"
            />

            <path
                d="M650 980 C1040 720 1450 580 1900 840"
                fill="none"
                stroke="rgba(244,197,66,.06)"
                strokeWidth="1"
            />
        </svg>
    );
}

export default ArcBackground;