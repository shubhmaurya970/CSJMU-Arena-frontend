import LeftSection from "./LeftSection";
import FeaturesList from "./FeaturesList";
import CampusImage from "./CampusImage";

function WhyArena() {
    return (
        <section
            className="
                relative
                overflow-hidden
                bg-[#0F0C09]
                py-32
            "
        >
            {/* Background Glow */}

            <div className="absolute -left-44 top-20 h-[500px] w-[500px] rounded-full bg-[#F4C542]/10 blur-[180px]" />

            <div className="absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-[#F4C542]/5 blur-[180px]" />

            <div
                className="
                    relative
                    z-10
                    mx-auto
                    grid
                    max-w-[1450px]
                    grid-cols-[0.9fr_1.2fr_1fr]
                    gap-16
                    px-8
                    items-center
                "
            >
                <LeftSection />

                <FeaturesList />

                <CampusImage />
            </div>
        </section>
    );
}

export default WhyArena;