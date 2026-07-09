import hackathonImage from "../../assets/images/hackathon.jpg";
import {
    CalendarDays,
    MapPin,
    Users,
    ArrowRight,
} from "lucide-react";

function EventCard() {
    return (

        <div className="group relative h-[300px] overflow-hidden rounded-[32px] border border-[#F4C542]/15">

            {/* Image */}

            <img
                src={hackathonImage}
                alt=""
                className="absolute inset-0 h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
            />

            {/* Overlay */}

            <div
                className="absolute inset-0"
                style={{
                    background:
                        "linear-gradient(180deg, rgba(0,0,0,.08) 0%, rgba(0,0,0,.15) 30%, rgba(0,0,0,.92) 100%)",
                }}
            />

            {/* Gold Glow */}

            <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">

                <div className="absolute bottom-0 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-[#F4C542]/20 blur-[90px]" />

            </div>

            {/* Content */}

            <div className="absolute bottom-0 left-0 right-0 p-8">

                <span className="rounded-full bg-[#F4C542] px-4 py-2 text-xs font-bold text-black">

                    HACKATHON

                </span>

                <h2 className="mt-4 text-[1.9rem] font-bold text-white">

                    National Hackathon 2026

                </h2>

                <div className="mt-4 flex flex-wrap gap-5 text-sm text-white/80">

                    <div className="flex items-center gap-2">

                        <CalendarDays size={15}/>

                        18 July

                    </div>

                    <div className="flex items-center gap-2">

                        <MapPin size={15}/>

                        Auditorium

                    </div>

                    <div className="flex items-center gap-2">

                        <Users size={15}/>

                        500 Seats

                    </div>

                </div>

                <button className="mt-6 flex items-center gap-2 font-semibold text-[#F4C542] transition-all duration-300 group-hover:gap-4">

                    Register Now

                    <ArrowRight size={18}/>

                </button>

            </div>

        </div>

    );
}

export default EventCard;