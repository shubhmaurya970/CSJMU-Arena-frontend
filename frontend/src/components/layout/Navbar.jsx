import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../context/AuthContext";
import UserMenu from "./UserMenu";
import { useLoading } from "../../context/LoadingContext";

function Navbar() {
    const { isLoggedIn } = useContext(AuthContext);

    const [glass, setGlass] = useState(false);
    const [darkText, setDarkText] = useState(false);

    const navigate = useNavigate();
    const { showLoader, hideLoader } = useLoading();

    const scrollToSection = (id) => {
        const section = document.getElementById(id);

        if (!section) return;

        section.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };
const handleNavigation = (path) => {

    showLoader("Opening page...");

    setTimeout(() => {

        navigate(path);

    }, 800);

};
    useEffect(() => {
        const featured = document.getElementById("featured-events");
        const upcoming = document.getElementById("upcoming-events");
        const whyUs = document.getElementById("why-us");

        const handleScroll = () => {
            setGlass(window.scrollY > 20);

            const featuredTop =
                featured?.getBoundingClientRect().top ?? Infinity;

            const upcomingTop =
                upcoming?.getBoundingClientRect().top ?? Infinity;

            const whyUsTop =
                whyUs?.getBoundingClientRect().top ?? Infinity;

            if (featuredTop > 120) {
                setDarkText(false);
                return;
            }

            if (featuredTop <= 120 && upcomingTop > 120) {
                setDarkText(true);
                return;
            }

            if (upcomingTop <= 120 && whyUsTop > 120) {
                setDarkText(false);
                return;
            }

            setDarkText(true);
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
                            ? "h-14 border border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl"
                            : "h-16 bg-transparent"
                    }`}
                >
                    {/* Logo */}

                    <h1
                        onClick={() => scrollToSection("hero")}
                        className={`cursor-pointer text-xl font-bold tracking-tight transition-colors duration-500 ${
                            darkText ? "text-black" : "text-white"
                        }`}
                    >
                        CSJMU ARENA
                    </h1>

                    {/* Navigation */}

                    <ul
                        className={`absolute left-1/2 flex -translate-x-1/2 items-center gap-10 text-sm font-medium transition-colors duration-500 ${
                            darkText ? "text-black" : "text-white"
                        }`}
                    >
                        <li>
                            <button
                                onClick={() => scrollToSection("hero")}
                                className="transition-colors duration-300 hover:text-[#F4C542]"
                            >
                                Home
                            </button>
                        </li>

                        <li>
                            <button
                                onClick={() =>
                                    scrollToSection("featured-events")
                                }
                                className="transition-colors duration-300 hover:text-[#F4C542]"
                            >
                                Events
                            </button>
                        </li>

                        <li>
                            <button
                                onClick={() =>
                                    scrollToSection("upcoming-events")
                                }
                                className="transition-colors duration-300 hover:text-[#F4C542]"
                            >
                                Upcoming
                            </button>
                        </li>

                        <li>
                            <button
                                onClick={() => scrollToSection("why-us")}
                                className="transition-colors duration-300 hover:text-[#F4C542]"
                            >
                                Why Us
                            </button>
                        </li>
                    </ul>

                    {/* Right Side */}

                    <div className="flex items-center gap-5">
                        {!isLoggedIn ? (
                            <>
                                <button
                                    onClick={() => handleNavigation("/login")}
                                    className={`transition-colors duration-300 ${
                                        darkText
                                            ? "text-black hover:text-[#F4C542]"
                                            : "text-white hover:text-[#F4C542]"
                                    }`}
                                >
                                    Login
                                </button>

                                <button
                                    onClick={() => handleNavigation("/register")}
                                    className="rounded-full bg-[#F4C542] px-6 py-2 font-semibold text-black transition-all duration-300 hover:scale-105"
                                >
                                    Become Organizer
                                </button>
                            </>
                        ) : (
                            <UserMenu />
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;