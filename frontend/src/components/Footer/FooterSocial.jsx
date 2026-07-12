import {
    FaGithub,
    FaLinkedin,
    FaInstagram,
} from "react-icons/fa";

const socials = [
    {
        name: "GitHub",
        icon: FaGithub,
        href: "#",
    },
    {
        name: "LinkedIn",
        icon: FaLinkedin,
        href: "#",
    },
    {
        name: "Instagram",
        icon: FaInstagram,
        href: "#",
    },
];

function FooterSocial() {
    return (
        <div>
            <h3
                className="
                    text-lg
                    font-semibold
                    uppercase
                    tracking-[3px]
                    text-white
                "
            >
                Connect With Us
            </h3>

            <div
                className="
                    mt-6
                    flex
                    flex-col
                    gap-4
                "
            >
                {socials.map((social) => {
                    const Icon = social.icon;

                    return (
                        <a
                            key={social.name}
                            href={social.href}
                            className="
                                group
                                flex
                                w-fit
                                items-center
                                gap-3

                                text-[15px]
                                text-white/70

                                transition-all
                                duration-300

                                hover:text-[#F4C542]
                                hover:translate-x-1
                            "
                        >
                            <Icon
                                size={17}
                                className="
                                    transition-transform
                                    duration-300
                                    group-hover:scale-110
                                "
                            />

                            {social.name}
                        </a>
                    );
                })}
            </div>
        </div>
    );
}

export default FooterSocial;