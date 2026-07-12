function FooterBrand() {
    return (
        <div>
            <h2
                className="
                    text-6xl
                    font-black
                    tracking-[-2px]
                    text-white
                "
            >
                CSJMU
            </h2>

            <h1
                className="
                    -mt-2
                    text-7xl
                    font-black
                    tracking-[-5px]
                    text-[#F4C542]
                "
            >
                ARENA
            </h1>

            <p
                className="
                    mt-5
                    max-w-[340px]
                    text-lg
                    leading-8
                    text-white/60
                "
            >
                Every Event. One Arena.
            </p>

            <button
                className="
                    mt-7

                    flex
                    items-center
                    gap-3

                    rounded-full

                    border
                    border-[#F4C542]/60

                    px-8
                    py-4

                    text-lg
                    font-semibold
                    text-[#F4C542]

                    transition-all
                    duration-300

                    hover:bg-[#F4C542]
                    hover:text-black
                    hover:shadow-[0_0_30px_rgba(244,197,66,.25)]
                "
            >
                Find Your Event

                <span className="text-2xl">→</span>
            </button>
        </div>
    );
}

export default FooterBrand;