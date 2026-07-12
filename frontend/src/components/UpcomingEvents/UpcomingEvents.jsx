import { useState } from "react";
import SectionHeader from "./SectionHeader";
import FilterTabs from "./FilterTabs";
import Timeline from "./Timeline";
import events from "./events";
import SearchBar from "./SearchBar";
import { motion, AnimatePresence } from "framer-motion";


function UpcomingEvents() {

    const [showAllEvents, setShowAllEvents] = useState(false);

    const [searchQuery, setSearchQuery] = useState("");

    const [selectedCategory, setSelectedCategory] = useState("ALL");

    const filteredEvents = events.filter((event) => {

        const matchesCategory =
            selectedCategory === "ALL" ||
            event.category === selectedCategory;

        const query = searchQuery.toLowerCase();

        const matchesSearch =
            event.title.toLowerCase().includes(query) ||
            event.venue.toLowerCase().includes(query);

        return matchesCategory && matchesSearch;

    });
    

    const visibleEvents = showAllEvents
        ? filteredEvents
        : filteredEvents.slice(0, 2);

    return (
        <section
            className="
        relative
        isolate
        overflow-hidden
        rounded-t-[68px]
        bg-[#0F0C09]
        pt-20
pb-20
    "
        >


            {/* Background */}

            <div className="absolute inset-0 z-0 bg-[#0F0C09]" />

            {/* Top Left Glow */}

            <div className="absolute -left-48 -top-24 h-[700px] w-[700px] rounded-full bg-[#F4C542]/10 blur-[180px]" />


            {/* Bottom Right Glow */}

            <div className="absolute -right-32 bottom-0 h-[500px] w-[500px] rounded-full bg-[#F4C542]/5 blur-[180px]" />

            {/* Content */}

            <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 xl:px-10">

                <SectionHeader />

                <div
                    className="
        mt-10
        flex
        items-center
        justify-center
        gap-4
    "
                >

                    <div className="w-full max-w-[420px]">

                        <SearchBar
                            searchQuery={searchQuery}
                            setSearchQuery={setSearchQuery}
                        />

                    </div>

                    <FilterTabs
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                    />

                </div>

                <Timeline events={visibleEvents} />

                {filteredEvents.length > 2 && (
                    <div className="mt-20 flex justify-center">

                        <motion.button
                            onClick={() => setShowAllEvents(!showAllEvents)}

                            whileHover={{
                                scale: 1.05,
                            }}

                            whileTap={{
                                scale: 0.96,
                            }}

                            transition={{
                                duration: 0.2,
                            }}

                            className="
        rounded-full
        border
        border-[#F4C542]/30
        bg-[#F4C542]/10
        px-8
        py-4
        text-lg
        font-medium
        text-[#F4C542]
        transition-all
        duration-300
        hover:bg-[#F4C542]
        hover:text-black
    "
                        >
                            {showAllEvents ? "Show Less ↑" : "View All Events →"}
                        </motion.button>

                    </div>
                )}

            </div>

        </section>

    );
}

export default UpcomingEvents;