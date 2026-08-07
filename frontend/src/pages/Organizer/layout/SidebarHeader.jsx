function SidebarHeader() {
    return (
        <div
            className="
                border-b
                border-white/5

                px-8
                pt-7
                pb-5
            "
        >
            <h1
                className="
                    text-[34px]
                    font-extrabold
                    tracking-[-0.03em]
                    leading-none
                "
            >
                <span className="text-white">
                    CSJMU
                </span>

                {" "}

                <span className="text-[#F4C542]">
                    ARENA
                </span>
            </h1>

            <p
                className="
                    mt-3

                    text-[11px]

                    uppercase

                    tracking-[0.18em]

                    leading-6

                    text-white/45
                "
            >
                Together We Create

                <br />

                Campus Memories
            </p>

            <div className="mt-5 flex items-center gap-4">

    <div
        className="
            relative
            h-[2px]
            w-14
            rounded-full
            bg-[#D8A93B]
        "
    >

        <div
            className="
                absolute
                inset-0

                rounded-full

                bg-[#D8A93B]

                blur-[3px]

                opacity-60
            "
        />

    </div>

   

</div>
        </div>
    );
}

export default SidebarHeader;