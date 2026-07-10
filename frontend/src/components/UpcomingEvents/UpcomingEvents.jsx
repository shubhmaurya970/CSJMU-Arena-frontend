import { useState } from "react";

import SectionHeader from "./SectionHeader";
import FilterTabs from "./FilterTabs";
import Timeline from "./Timeline";
import events from "./events";

function UpcomingEvents() {

    const [selectedCategory, setSelectedCategory] = useState("ALL");

    const filteredEvents =
        selectedCategory === "ALL"
            ? events
            : events.filter(
                  (event) => event.category === selectedCategory
              );

    return (
        <section className="relative isolate overflow-hidden py-36">

            {/* Background */}

            <div className="absolute inset-0 z-0 bg-[#0F0C09]" />

            {/* Top Left Glow */}

            <div className="absolute -left-48 -top-24 h-[700px] w-[700px] rounded-full bg-[#F4C542]/10 blur-[180px]" />

            {/* Bottom Right Glow */}

            <div className="absolute -right-32 bottom-0 h-[500px] w-[500px] rounded-full bg-[#F4C542]/5 blur-[180px]" />

            {/* Content */}

            <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 xl:px-10">

                <SectionHeader />

                <FilterTabs
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                />

                <Timeline
                    events={filteredEvents}
                />

            </div>

        </section>
    );
}

export default UpcomingEvents;