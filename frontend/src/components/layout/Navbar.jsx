import { useEffect, useState } from "react";

function Navbar() {

    const [glass, setGlass] = useState(false);
    const [darkText, setDarkText] = useState(false);

    useEffect(() => {

        const hero = document.getElementById("hero");

        const handleScroll = () => {

            // Glass navbar after a little scroll
            setGlass(window.scrollY > 20);

            // Black text only after hero section ends
            if (hero) {

                const heroBottom = hero.getBoundingClientRect().bottom;

                setDarkText(heroBottom <= 80);

            }

        };

        window.addEventListener("scroll", handleScroll);

        handleScroll();

        return () => {

            window.removeEventListener("scroll", handleScroll);

        };

    }, []);

    return (

        <nav
            className={`fixed left-0 w-full z-50 transition-all duration-500 ${
                glass ? "top-5" : "top-10"
            }`}
        >

            <div className="mx-auto max-w-[1700px] px-8">

                <div
                    className={`flex items-center justify-between rounded-full px-10 transition-all duration-500 ${
                        glass
                            ? "h-14 bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl"
                            : "h-16 bg-transparent"
                    }`}
                >

                    {/* Logo */}

                    <h1
                        className={`cursor-pointer text-xl font-bold tracking-tight transition-colors duration-500 ${
                            darkText ? "text-black" : "text-white"
                        }`}
                    >
                        CSJMU ARENA
                    </h1>

                    {/* Navigation */}

                    <ul
                        className={`flex items-center gap-10 text-sm font-medium transition-colors duration-500 ${
                            darkText ? "text-black" : "text-white"
                        }`}
                    >

                        <li className="nav-link">Events</li>

                        <li className="nav-link">Categories</li>

                        <li className="nav-link">Organizers</li>

                        <li className="nav-link">Community</li>

                    </ul>

                    {/* Buttons */}

                    <div className="flex items-center gap-4">

                        <button
                            className={`transition-colors duration-500 ${
                                darkText
                                    ? "text-black hover:text-[#F4C542]"
                                    : "text-white hover:text-[#F4C542]"
                            }`}
                        >
                            Login
                        </button>

                        <button className="rounded-full bg-[#F4C542] px-6 py-2 font-semibold text-black transition-all duration-300 hover:scale-105">
                            Become Organizer
                        </button>

                    </div>

                </div>

            </div>

        </nav>

    );
}

export default Navbar;