import FeatureItem from "./FeatureItem";

function FeaturesSection() {

    const features = [
        {
            number: "01",
            title: "Never Miss an Event",
            description:
                "Stay updated with every opportunity across campus.",
        },
        {
            number: "02",
            title: "Register Instantly",
            description:
                "Secure your spot with just a few clicks.",
        },
        {
            number: "03",
            title: "Trusted Organizers",
            description:
                "Every event is reviewed before publishing.",
        },
        {
            number: "04",
            title: "One Connected Campus",
            description:
                "Students, clubs and organizers, together on one platform.",
        },
    ];

    return (
        <div className="space-y-8">

            {features.map((feature, index) => (

                <FeatureItem
                    key={feature.number}
                    number={feature.number}
                    title={feature.title}
                    description={feature.description}
                    delay={index * 0.12}
                />

            ))}

        </div>
    );
}

export default FeaturesSection;