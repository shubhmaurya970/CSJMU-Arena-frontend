import TimelineNode from "./TimelineNode";

import EventCard from "./EventCard";

function Timeline() {
    return (
        <div className="relative mt-24">

            {/* Center Line */}

            <div className="absolute left-1/2 top-0 h-full w-[3px] -translate-x-1/2 bg-gradient-to-b from-[#F4C542] via-[#C99B2E] to-[#5C4320]" />

            {/* Event 1 */}

            <div className="grid grid-cols-[minmax(0,1fr)_180px_minmax(0,1fr)] items-center py-16">

                {/* Left Empty */}

                <div></div>

                {/* Timeline */}

<div className="relative flex justify-center">

    <TimelineNode
        month="JUL"
        day="18"
        year="2026"
    />

    {/* Connector */}

    <div className="absolute left-[90px] top-1/2 flex items-center">

        <div className="h-[3px] w-20 bg-[#F4C542]" />

        <div className="h-3 w-3 rounded-full bg-[#F4C542] shadow-[0_0_15px_#F4C542]" />

    </div>

</div>
               
                {/* Right Card */}

                <div className="pl-8 min-w-0">

                   <EventCard />

                </div>

            </div>

            {/* Event 2 */}

            <div className="grid grid-cols-[minmax(0,1fr)_180px_minmax(0,1fr)] items-center py-16">

                {/* Left Card */}

                <div className="pr-8 min-w-0">

                    <div className="h-[260px] rounded-[30px] border border-[#F4C542]/10 bg-[#1A1713]">

                    </div>

                </div>

                {/* Timeline */}

               <div className="relative flex justify-center">

    <TimelineNode
        month="JUL"
        day="22"
        year="2026"
    />

    {/* Connector */}

    <div className="absolute right-[90px] top-1/2 flex items-center">

        <div className="h-3 w-3 rounded-full bg-[#F4C542] shadow-[0_0_15px_#F4C542]" />

        <div className="h-[3px] w-20 bg-[#F4C542]" />

    </div>

</div>

                {/* Right Empty */}

                <div></div>

            </div>

        </div>
    );
}

export default Timeline;