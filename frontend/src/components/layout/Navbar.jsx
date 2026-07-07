function Navbar() {
    return (
        <nav className="fixed top-6 left-0 w-full z-50">

            <div className="max-w-7xl mx-auto px-6">

                <div className="h-16 rounded-2xl flex items-center justify-between px-8 bg-[#F4C542]/5 backdrop-blur-md border border-white/10">

                    {/* Logo */}
                    <h1 className="text-xl font-bold tracking-tight text-white cursor-pointer">
                        CSJMU ARENA
                    </h1>

                    {/* Navigation */}
                    <ul className="flex items-center gap-8 text-sm font-medium text-white">

                        <li className="cursor-pointer hover:text-[#F4C542] transition-colors duration-300">
                            Events
                        </li>

                        <li className="cursor-pointer hover:text-[#F4C542] transition-colors duration-300">
                            Categories
                        </li>

                        <li className="cursor-pointer hover:text-[#F4C542] transition-colors duration-300">
                            Organizers
                        </li>

                        <li className="cursor-pointer hover:text-[#F4C542] transition-colors duration-300">
                            Community
                        </li>

                    </ul>

                    {/* Buttons */}
                    <div className="flex items-center gap-4">

                        <button className="text-white hover:text-[#F4C542] transition-colors duration-300">
                            Login
                        </button>

                        <button className="rounded-full bg-[#F4C542] px-6 py-2 font-semibold text-black transition duration-300 hover:scale-105">
                            Become Organizer
                        </button>

                    </div>

                </div>

            </div>

        </nav>
    );
}

export default Navbar;