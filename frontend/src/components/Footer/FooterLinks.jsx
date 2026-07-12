const quickLinks = [
    "Home",
    "Events",
    "About",
    "Contact",
];

function FooterLinks() {
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
                Quick Links
            </h3>

            <div
                className="
                    mt-6
                    flex
                    flex-col
                    gap-4
                "
            >
                {quickLinks.map((item) => (
                    <a
                        key={item}
                        href="#"
                        className="
                            w-fit

                            text-[15px]
                            text-white/70

                            transition-all
                            duration-300

                            hover:text-[#F4C542]
                            hover:translate-x-1
                        "
                    >
                        {item}
                    </a>
                ))}
            </div>
        </div>
    );
}

export default FooterLinks;