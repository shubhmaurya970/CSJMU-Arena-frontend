function GridPattern() {
    return (
        <div
            className="
                absolute
                inset-0

                pointer-events-none

                opacity-[0.03]
            "
            style={{
                backgroundImage: `
                    linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)
                `,
                backgroundSize: "40px 40px",
            }}
        />
    );
}

export default GridPattern;