function FooterBottom() {
    return (
        <div
            className="
                mt-10

                border-t
                border-[#F4C542]/15

                pt-5
            "
        >
            <div
                className="
                    flex
                    items-center
                    justify-between
                "
            >
                {/* Left */}

                <p
                    className="
                        text-sm
                        tracking-wide
                        text-white/50
                    "
                >
                    © 2026 CSJMU ARENA
                </p>

                {/* Center */}

                <div
                    className="
                        flex
                        items-center
                        gap-3

                        text-sm
                        text-white/45
                    "
                >
                    <span className="text-[#F4C542]/60">•</span>

                    <span>
                        Uniting Campus. Celebrating Moments.
                    </span>

                    
                </div>

                {/* Right */}

                <p
                    className="
                        text-sm
                        text-white/50
                    "
                >
                    <span className="text-[#F4C542]/60">•  </span>
                    Designed & Developed by{" "}
                    <span
                        className="
                            font-semibold
                            text-[#F4C542]
                        "
                    >
                        Shubh Maurya
                    </span>
                </p>
            </div>
        </div>
    );
}

export default FooterBottom;