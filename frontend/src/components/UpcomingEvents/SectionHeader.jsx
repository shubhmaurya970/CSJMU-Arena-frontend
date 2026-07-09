function SectionHeader() {
    return (
        <div className="text-center">

            <p
                className="text-[2.2rem] text-[#F4C542]"
                style={{
                    fontFamily: "Kaushan Script, cursive",
                }}
            >
                Campus Life
            </p>

            <h2 className="mt-2 text-7xl font-extrabold tracking-[-3px] text-white">

                Upcoming Events

            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/60">

                From hackathons to cultural festivals,
                discover everything happening around CSJMU.

            </p>

        </div>
    );
}

export default SectionHeader;