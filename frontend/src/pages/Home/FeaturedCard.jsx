import featuredVideo from "../../assets/videos/featured.mp4";
import { motion } from "framer-motion";
import {
    CalendarDays,
    MapPin,
    Users
} from "lucide-react";

function FeaturedCard() {
    return (
<motion.div
    initial={{
    opacity:0,
    scale:0.96
}}
    whileInView={{
    opacity:1,
    scale:1
}}
    viewport={{
        once:false,
        amount:.35
    }}
    transition={{
        duration:.9,
        delay:.15,
        ease:[0.22,1,0.36,1]
    }}
    className="relative h-[520px] flex-1 overflow-hidden rounded-[32px] shadow-[0_15px_50px_rgba(0,0,0,.15)]"
>

            {/* Background */}

            <video
    className="absolute inset-0 h-full w-full object-cover scale-105"
    autoPlay
    muted
    loop
    playsInline
    preload="auto"
>
    <source src={featuredVideo} type="video/mp4" />
</video>

            {/* Overlay */}

            <div
                className="absolute inset-0"
                style={{
                    background:
                        "linear-gradient(90deg, rgba(0,0,0,.90) 0%, rgba(0,0,0,.82) 25%, rgba(0,0,0,.55) 48%, rgba(0,0,0,.18) 72%, rgba(0,0,0,0) 100%)",
                }}
            />

            {/* Content */}

            <div className="relative z-10 flex h-full items-center">

                <div className="max-w-[470px] px-12">

                    {/* Badge */}

                    

                    {/* Heading */}

                    <h2 className="mt-6 text-[3rem] font-extrabold leading-[1.02] tracking-[-2px] text-white">

                        National
                        <br />
                        Hackathon 2026

                    </h2>

                    {/* Yellow Line */}

                    <div className="mt-5 h-[4px] w-16 rounded-full bg-[#F4C542]" />

                    {/* Description */}

                    <p className="mt-5 max-w-[410px] text-[16px] leading-7 text-white/75">

                        Code. Innovate. Impact. Build real-world
                        solutions with the brightest minds and
                        compete for exciting prizes.

                    </p>

                    {/* Info */}

                    <div className="mt-7 flex flex-col gap-4 text-[15px] text-white/90">

                        <div className="flex items-center gap-3">

                            <CalendarDays size={18} />

                            <span>18 July 2026</span>

                        </div>

                        <div className="flex items-center gap-3">

                            <MapPin size={18} />

                            <span>CSJMU Auditorium</span>

                        </div>

                        <div className="flex items-center gap-3">

                            <Users size={18} />

                            <span>500+ Participants</span>

                        </div>

                    </div>

                    {/* Button */}

                    <button className="mt-8 rounded-full bg-[#F4C542] px-7 py-3 font-semibold text-black transition-all duration-300 hover:scale-105">

                        Explore Event →

                    </button>

                </div>

            </div>

        </motion.div>

    );
}

export default FeaturedCard;