function FilterTabs() {

    const filters = [
        "All Events",
        "Hackathons",
        "Workshops",
        "Sports",
        "Cultural",
        "Competitions",
    ];

    return (

        <div className="mt-12 flex justify-center gap-5">

            {filters.map((item, index) => (

                <button
                    key={index}
                    className={`
                    rounded-full
                    border
                    px-8
                    py-3
                    text-[15px]
                    transition-all
                    duration-300

                    ${
                        index === 0
                            ? "bg-[#F4C542] text-black shadow-[0_0_40px_rgba(244,197,66,.35)]"
                            : "border-white/10 bg-white/5 text-white/80 backdrop-blur-xl hover:border-[#F4C542] hover:text-[#F4C542]"
                    }
                `}
                >

                    {item}

                </button>

            ))}

        </div>

    );

}

export default FilterTabs;