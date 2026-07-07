import Navbar from "../../components/layout/Navbar";
import heroImage from "../../assets/images/hero-bg.png";
import "../../styles/hero.css";

function Hero() {
    return (
        <section className="relative h-screen overflow-hidden">

            {/* Background Image */}

            <img
                src={heroImage}
                alt="CSJMU Gate"
                className="absolute inset-0 h-full w-full object-cover hero-image"
                style={{
                    objectPosition: "62% center",
                }}
            />

            {/* Dark Overlay */}

            <div
                className="absolute inset-0"
                style={{
                    background:
                        "linear-gradient(90deg, rgba(0,0,0,.92) 0%, rgba(0,0,0,.82) 28%, rgba(0,0,0,.45) 55%, rgba(0,0,0,.12) 82%, rgba(0,0,0,.05) 100%)",
                }}
            ></div>

            {/* Bottom Fade */}

            <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-black/80 to-transparent"></div>

            {/* Navbar */}

            <Navbar />

            {/* Hero Content */}

            <div className="relative z-10 flex h-full items-center">

                <div className="mx-auto w-full max-w-[1600px] px-24">

                    <div className="max-w-xl">

                        <h1 className="leading-[0.92] tracking-[-2px]">

                            <span className="block text-[4.8rem] font-[800] text-white">
                                Everything
                            </span>

                            <span className="block text-[4.8rem] font-[800] text-white">
                                happening.
                            </span>

                            <span
                                className="block mt-1 text-[4.2rem] text-[#F4C542] -rotate-2"
                                style={{
                                    fontFamily: "Kaushan Script, cursive",
                                    lineHeight: 1,
                                }}
                            >
                                One place.
                            </span>

                        </h1>

                        <p className="mt-8 max-w-md text-[1.2rem] leading-8 text-white/80">
                            From hackathons to cultural festivals,
                            discover everything your campus has to offer.
                        </p>

                        <button className="mt-12 rounded-full bg-[#F4C542] px-9 py-4 text-lg font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-[#FFD34D] shadow-xl">

                            Explore Events →

                        </button>

                    </div>

                </div>

            </div>

            {/* Bottom Glass Panel */}

           

        </section>
    );
}

export default Hero;