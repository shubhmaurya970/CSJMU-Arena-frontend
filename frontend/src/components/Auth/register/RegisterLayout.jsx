import React, { useState } from "react";
import GlowLayer from "./background/GlowLayer";
import ArcBackground from "./background/ArcBackground";
import GridPattern from "./background/GridPattern";
import AuthBackground from "../../../assets/auth/AuthBackground.svg";

function RegisterLayout({ children }) {

    const [accountType, setAccountType] = useState("STUDENT");

    return (

        <section
            className="
                relative
                flex
                min-h-screen
                items-center
                justify-center

                overflow-hidden

                bg-gradient-to-br
from-[#161616]
via-[#101010]
to-[#090909]

                px-6
                py-5
            "
        >

             {/* <img
                src={AuthBackground}
                alt=""
                className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                    pointer-events-none
                    select-none
                "
            /> */}

            <div
                className="
                    relative
                    relative
flex

                    flex

                    h-[88vh]
                    max-h-[860px]

                    w-full
                    max-w-[1500px]

                    overflow-hidden

                    rounded-[32px]

                    border
                    border-[#F4C542]/25

                    bg-gradient-to-br
                    from-[#161616]
                    via-[#101010]
                    to-[#090909]

                    shadow-[0_45px_140px_rgba(0,0,0,.82),0_0_1px_rgba(244,197,66,.12)]
                "
            >
                <GlowLayer />
                <ArcBackground />
                <GridPattern />
                

              
                <>
    {/* Glow */}

    <div
        className="
            absolute

            left-[42%]
            top-0

            h-full
            w-[10px]

            -translate-x-1/2

            bg-gradient-to-b
            from-transparent
            via-[#F4C542]/25
            to-transparent

            blur-md

            opacity-70

            pointer-events-none

            z-0
        "
    />

    {/* Main Divider */}

    <div
        className="
            absolute

            left-[42%]
            top-0

            h-full
            w-px

            -translate-x-1/2

            bg-gradient-to-b
            from-transparent
            via-[#F4C542]/45
            to-transparent

            z-10
        "
    />
</>

                {React.Children.map(children, (child) =>
                    React.cloneElement(child, {
                        accountType,
                        setAccountType,
                    })
                )}

            </div>
            

        </section>

    );

}

export default RegisterLayout;