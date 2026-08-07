import {
    PencilRuler,
    Hourglass,
    ShieldCheck,
    ShieldX,
} from "lucide-react";

const lifecycle = [
    {
        title: "Draft",
        count: "03",
        icon: PencilRuler,
        border: "border-zinc-500/40",
        iconColor: "text-zinc-300",
    },
    {
        title: "Pending",
        count: "02",
        icon: Hourglass,
        border: "border-amber-400/50",
        iconColor: "text-amber-400",
    },
    {
        title: "Approved",
        count: "12",
        icon: ShieldCheck,
        border: "border-emerald-400/50",
        iconColor: "text-emerald-400",
    },
];

function EventLifecycle() {
    return (
        <section className="mt-20 w-full">

            {/* Heading */}

            <div className="mb-14">

                <p className="text-xs uppercase tracking-[0.35em] text-amber-400">
                    ORGANIZER WORKFLOW
                </p>

                <h2 className="mt-3 text-4xl font-bold text-white">
                    Event Lifecycle
                </h2>

                <p className="mt-3 max-w-xl text-zinc-400">
                    Track every event from creation to approval and monitor
                    events requiring revisions.
                </p>

            </div>

            {/* Timeline */}

            <div className="relative">

                {/* Horizontal Line */}

                <div
                    className="
                        absolute
                        top-8
                        left-[8%]
                        right-[8%]
                        h-[2px]
                        rounded-full

                        bg-gradient-to-r
                        from-[#6F5318]
                        via-[#D8A93B]
                        to-[#6F5318]

                        shadow-[0_0_12px_rgba(216,169,59,.18)]
                    "
                />

                {/* Nodes */}

                <div className="relative flex justify-between">

                    {lifecycle.map((item) => {

                        const Icon = item.icon;

                        return (

                            <div
                                key={item.title}
                                className="
                                    group
                                    flex
                                    flex-col
                                    items-center
                                    transition-all
                                    duration-300
                                    hover:-translate-y-1
                                "
                            >

                                <div
                                    className={`
                                        flex
                                        h-16
                                        w-16
                                        items-center
                                        justify-center
                                        rounded-full

                                        border
                                        ${item.border}

                                        bg-transparent
                                        backdrop-blur-md

                                        transition-all
                                        duration-300
                                    `}
                                >
                                    <Icon
                                        size={35}
                                        className={item.iconColor}
                                    />
                                </div>

                                <h3
                                    className="
                                        mt-5
                                        text-4xl
                                        font-bold
                                        tracking-tight
                                        text-white
                                        transition-colors
                                        duration-300
                                        group-hover:text-amber-300
                                    "
                                >
                                    {item.count}
                                </h3>

                                <p
                                    className="
                                        mt-3
                                        text-sm
                                        font-medium
                                        uppercase
                                        tracking-[0.22em]
                                        text-zinc-400
                                        transition-colors
                                        duration-300
                                        group-hover:text-white
                                    "
                                >
                                    {item.title}
                                </p>

                            </div>

                        );

                    })}

                </div>

                {/* Rejected Branch */}

                <div
                    className="
                        absolute
                        left-1/2
                        -translate-x-1/2
                        top-45
                        flex
                        flex-col
                        items-center
                    "
                >

                    <div
                        className="
                            h-18
                            w-[2px]

                            bg-gradient-to-b
                            from-[#D8A93B]
                            to-[#7B5D1A]
                        "
                    />

                    <div
                        className="
                            group
                            
                            flex
                            h-16
                            w-16
                            items-center
                            justify-center

                            rounded-full

                            border
                            border-red-400/50

                            bg-transparent

                            transition-all
                            duration-300

                            hover:-translate-y-1
                        "
                    >
                        <ShieldX
                            size={26}
                            className="text-red-400"
                        />
                    </div>

                    <h3
                        className="
                            mt-7
                            text-4xl
                            font-bold
                            tracking-tight
                            text-white
                        "
                    >
                        01
                    </h3>

                    <p
                        className="
                            mt-3
                            text-sm
                            font-medium
                            uppercase
                            tracking-[0.22em]
                            text-zinc-400
                        "
                    >
                        Rejected
                    </p>

                </div>

            </div>

            {/* Bottom Space */}

            <div className="h-56" />

        </section>
    );
}

export default EventLifecycle;