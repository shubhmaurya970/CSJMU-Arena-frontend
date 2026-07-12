import LeftSection from "./LeftSection";
import FeaturesSection from "./FeaturesSection";
import CampusImage from "./CampusImage";
import ArcBackground from "./ArcBackground";

function WhyArena() {
    return (
        <section
            className="
                relative
                overflow-hidden
                bg-[#EFE9DC]
                rounded-t-[64px]
                py-32
            "
        >
            {/* Background Gradient */}

           <div
    className="absolute inset-0"
    style={{
        background: `
            radial-gradient(
                circle at 15% 20%,
                rgba(244,197,66,.10) 0%,
                transparent 32%
            ),

            radial-gradient(
                circle at 85% 75%,
                rgba(244,197,66,.06) 0%,
                transparent 30%
            ),

            linear-gradient(
                180deg,
                #F8F6F1 0%,
                #F4F0E8 55%,
                #EFE9DD 100%
            )
        `,
    }}
/>
<div
    className="
        absolute
        inset-0
        opacity-[0.1]
        pointer-events-none
    "
    style={{
        backgroundImage: `
            radial-gradient(circle, rgba(0,0,0,.22) 0.6px, transparent 0.7px)
        `,
        backgroundSize: "8px 8px",
    }}
/>


            {/* Main Glow */}

            <div
                className="
                    absolute
                    -left-52
                    top-24
                    h-[700px]
                    w-[700px]
                    rounded-full
                    pointer-events-none
                "
                style={{
                    background:
                        "radial-gradient(circle, rgba(244,197,66,.18) 0%, rgba(244,197,66,.08) 35%, transparent 75%)",
                }}
            />

            {/* Right Glow */}

            <div className="absolute -right-52 bottom-0 h-[450px] w-[450px] rounded-full bg-[#F4C542]/10 blur-[180px]" />

            {/* Top Left Dots */}

            <div
    className="
        absolute
        left-10
        top-12
        h-40
        w-40
        pointer-events-none
    "
    style={{
        backgroundImage:
            "radial-gradient(rgba(216,168,29,.75) 1.3px, transparent 1.3px)",
        backgroundSize: "18px 18px",
        maskImage:
            "radial-gradient(circle at center, black 25%, transparent 90%)",
        WebkitMaskImage:
            "radial-gradient(circle at center, black 25%, transparent 90%)",
        opacity: .70,
    }}
/>
            {/* Bottom Left Dots */}

           <div
    className="
    absolute
    left-[18%]
    bottom-[90px]
    h-52
    w-52
    pointer-events-none
"
    style={{
        backgroundImage:
            "radial-gradient(rgba(216,168,29,.7) 1.3px, transparent 1.3px)",
        backgroundSize: "18px 18px",
        maskImage:
            "radial-gradient(circle at center, black 30%, transparent 95%)",
        WebkitMaskImage:
            "radial-gradient(circle at center, black 30%, transparent 95%)",
        opacity: .45,
    }}
/>

            {/* Outer Arc

            <div
                className="
                    absolute
                    -left-[260px]
                    -bottom-[260px]
                    h-[520px]
                    w-[520px]
                    rounded-full
                    border
                    rotate-[-12deg]
                "
                style={{
                    borderColor: "rgba(244,197,66,.35)",
                }}
            />

            Inner Arc

            <div
                className="
                    absolute
                    -left-[210px]
                    -bottom-[210px]
                    h-[420px]
                    w-[420px]
                    rounded-full
                    border
                    rotate-[-12deg]
                "
                style={{
                    borderColor: "rgba(244,197,66,.18)",
                }}
            /> */}

            <ArcBackground 
            className="
absolute
-left-[340px]
-bottom-[340px]
"
/>

            

            {/* Content */}

            <div
                className="
                    relative
                    z-10
                    mx-auto
                    max-w-[1500px]
                    grid
                    grid-cols-[0.9fr_1.2fr_1fr]
                    items-center
                    
                    gap-20
                    px-10
                "
            >
                <LeftSection />

                <FeaturesSection />

                <CampusImage />
            </div>
        </section>
    );
}

export default WhyArena;