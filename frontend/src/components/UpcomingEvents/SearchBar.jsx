import { Search } from "lucide-react";

function SearchBar({ searchQuery, setSearchQuery }) {
    return (

        <div
            className="
                flex
                h-14
                items-center
                rounded-full
                border
                border-white/10
                bg-white/5
                px-5
                backdrop-blur-xl
                transition-all
                duration-300

                focus-within:border-[#F4C542]
                focus-within:shadow-[0_0_25px_rgba(244,197,66,.18)]
            "
        >

            <Search
                size={18}
                className="text-white/50"
            />

            <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search events, clubs or venue..."
                className="
                    ml-3
                    w-full
                    bg-transparent
                    text-white
                    placeholder:text-white/40
                    outline-none
                "
            />

        </div>

    );
}

export default SearchBar;