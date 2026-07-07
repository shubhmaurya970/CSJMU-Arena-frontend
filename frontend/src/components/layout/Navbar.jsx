import { useEffect, useState } from "react";

function Navbar() {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {

        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };

    }, []);

    return (

        <nav
            className={`fixed left-0 w-full z-50 transition-all duration-500 ${scrolled ? "top-5" : "top-8"
                }`}
        >

            <div className="mx-auto max-w-[1700px] px-8">

                <div
                    className={`flex h-16 items-center justify-between rounded-full px-10 transition-all duration-500 ${scrolled
                            ? "border border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl"
                            : "bg-transparent"
                        }`}
                >

                    {/* Logo */}

                    <h1 className="cursor-pointer text-xl font-bold tracking-tight text-white">

                        CSJMU ARENA

                    </h1>

                    {/* Navigation */}

                   <ul className="flex items-center gap-10 text-sm font-medium">

    <li className="nav-link">Events</li>

    <li className="nav-link">Categories</li>

    <li className="nav-link">Organizers</li>

    <li className="nav-link">Community</li>

</ul>

                    {/* Buttons */}

                    <div className="flex items-center gap-4">

                        <button className="text-white transition-colors duration-300 hover:text-[#F4C542]">

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