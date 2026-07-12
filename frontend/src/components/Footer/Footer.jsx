import FooterBackground from "./FooterBackground";
import FooterBrand from "./FooterBrand";
import FooterLinks from "./FooterLinks";
import FooterSocial from "./FooterSocial";
import FooterBottom from "./FooterBottom";

function Footer() {
    return (
        <footer
            className="
                relative
                overflow-hidden

                rounded-t-[64px]

                bg-[#0F0C09]

                pt-12
                pb-6
            "
        >
            {/* Background Decoration */}

            <FooterBackground />

            {/* Main Content */}

            <div
                className="
                    relative
                    z-10

                    mx-auto
                    max-w-[1400px]

                    px-6
                    xl:px-10
                "
            >
                <div
                    className="
                        grid

                        grid-cols-[1.6fr_.7fr_.9fr]

                        gap-8

                        items-start
                    "
                >
                    <FooterBrand />

                    <FooterLinks />

                    <FooterSocial />
                </div>

                <FooterBottom />
            </div>
        </footer>
    );
}

export default Footer;