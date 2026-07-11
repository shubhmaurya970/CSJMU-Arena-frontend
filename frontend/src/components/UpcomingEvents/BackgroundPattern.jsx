function BackgroundPattern({ position = "right" }) {
    return (
        <div
            className={`
                absolute
                top-1/2
                -translate-y-1/2
                pointer-events-none
                ${position === "right" ? "right-10" : "left-10"}
            `}
        >
            {/* Glow */}
            <div
                className="
                    absolute
                    left-1/2
                    top-1/2
                    h-64
                    w-64
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    bg-[#F4C542]/20
                    blur-[80px]
                "
            />

            {/* Grid */}
            <div
                className="
                    h-64
                    w-64
                    opacity-[0.16]
                "
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(244,197,66,.35) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(244,197,66,.35) 1px, transparent 1px)
                    `,
                    backgroundSize: "32px 32px",
                }}
            />
        </div>
    );
}

export default BackgroundPattern;