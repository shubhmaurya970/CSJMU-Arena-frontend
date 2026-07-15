function GlowLayer() {
    return (
        <>
            {/* Top Left */}

            <div
                className="
                    absolute

                    -top-64
                    -left-64

                    h-[650px]
                    w-[650px]

                    rounded-full

                    pointer-events-none
                "
                style={{
                    background:
                        "radial-gradient(circle, rgba(244,197,66,.22) 0%, rgba(244,197,66,.08) 35%, transparent 72%)",
                    filter: "blur(80px)",
                }}
            />

            {/* Bottom Right */}

            <div
                className="
                    absolute

                    -bottom-80
                    -right-80

                    h-[850px]
                    w-[850px]

                    rounded-full

                    pointer-events-none
                "
                style={{
                    background:
                        "radial-gradient(circle, rgba(244,197,66,.06) 0%, rgba(244,197,66,.05) 40%, transparent 75%)",
                    filter: "blur(120px)",
                }}
            />
        </>
    );
}

export default GlowLayer;