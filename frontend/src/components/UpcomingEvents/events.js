import hackathonImage from "../../assets/images/hackathon.jpg";
import workshopImage from "../../assets/images/workshop.jpg";
import culturalImage from "../../assets/images/cultural.jpg";
import sportsImage from "../../assets/images/sports.jpg";

const events = [

    {
        id: 1,
        slug: "national-hackathon-2026",

        title: "National Hackathon 2026",

        description:
            "India's biggest 48-hour hackathon for innovators.",

        venue: "CSJMU Auditorium",

        eventDate: "2026-07-18",

        registrationDeadline: "2026-07-15",

        category: "HACKATHON",

        maxParticipants: 500,

        registrationFee: 0,

        imageUrl: hackathonImage,
    },

    {
        id: 2,
        slug: "ui-ux-design-workshop",

        title: "UI/UX Design Workshop",

        description:
            "Learn modern UI/UX design with hands-on sessions.",

        venue: "Seminar Hall",

        eventDate: "2026-07-21",

        registrationDeadline: "2026-07-19",

        category: "WORKSHOP",

        maxParticipants: 120,

        registrationFee: 99,

        imageUrl: workshopImage,
    },

    {
        id: 3,
        slug: "rangreza-2026",

        title: "Rangreza 2026",

        description:
            "Celebrate culture through music, dance and drama.",

        venue: "Open Ground",

        eventDate: "2026-07-25",

        registrationDeadline: "2026-07-23",

        category: "CULTURAL",

        maxParticipants: 2000,

        registrationFee: 0,

        imageUrl: culturalImage,
    },

    {
        id: 4,
        slug: "csjmu-premier-league",

        title: "CSJMU Premier League",

        description:
            "Inter-department cricket tournament.",

        venue: "Sports Ground",

        eventDate: "2026-08-03",

        registrationDeadline: "2026-08-01",

        category: "SPORTS",

        maxParticipants: 300,

        registrationFee: 199,

        imageUrl: sportsImage,
    }

];

export default events;