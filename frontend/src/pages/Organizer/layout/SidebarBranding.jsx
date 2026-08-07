import statue from "../../../assets/images/hero-artwork.png";
import DecorativeWave from "./DecorativeWave";

function SidebarBranding() {

    return (

        <div
            className="
                relative

                h-[240px]

                isolate

                overflow-hidden
            "
        >

            {/* Outer Glow */}

            <div
                
    className="
        absolute

        left-1/2
        bottom-[-120px]

        h-[420px]
        w-[420px]

        -translate-x-1/2

        rounded-full

        bg-[#F4C542]/10

        blur-[110px]
    "

            />

            {/* Inner Glow */}

           <div
    className="
        absolute

        left-1/2
        bottom-[-70px]

        h-[220px]
        w-[220px]

        -translate-x-1/2

        rounded-full

        bg-[#F4C542]/18

        blur-[55px]
    "
/>
            <DecorativeWave />

            <img
    src={statue}
    alt="CSJMU Statue"
    className="
    absolute

    bottom-[-15px]
    right-1

    -translate-x-1/2

    h-[240px]

    object-contain

    opacity-60

    pointer-events-none
    select-none

    z-20

    [mask-image:linear-gradient(to_top,transparent_0%,black_18%,black_100%)]
    [-webkit-mask-image:linear-gradient(to_top,transparent_0%,black_18%,black_100%)]
"
/>

<div
    className="
        absolute

        left-8
        bottom-8

        z-30

        select-none
    "
>

    <p
        className="
            text-[10px]

            uppercase

            tracking-[0.42em]

            leading-5

            text-white/45
        "
    >

        UNITY.

        <br />

        CULTURE.

        <br />

        <span
            className="
                text-[#D8A93B]

                font-medium
            "
        >

            CSJMU.

        </span>

    </p>

</div>
            

            {/* Fade */}

            <div
                className="
                    absolute

                    inset-0

                    pointer-events-none

                    bg-gradient-to-t

                    from-[#151515]

                    via-transparent

                    to-[#151515]
                "
            />

        </div>

    );

}

export default SidebarBranding;