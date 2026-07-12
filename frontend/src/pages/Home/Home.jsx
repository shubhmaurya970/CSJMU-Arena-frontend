import Hero from "./Hero";
import FeaturedEvents from "./FeaturedEvents";
import UpcomingEvents from "../../components/UpcomingEvents/UpcomingEvents";
import WhyArena from "../../components/WhyArena/WhyArena";
import Footer from "../../components/Footer/Footer";

function Home() {
    return (
        <main className="relative">

            <section id="hero">
                <Hero />
            </section>

            <section id="featured-events">
                <FeaturedEvents />
            </section>

            <section
                id="upcoming-events"
                className="bg-[#FFFDF8]"
            >
                <UpcomingEvents />
            </section>

            <section
                id="why-us"
                className="bg-[#0F0C09]"
            >
                <WhyArena />
            </section>

            <footer className="bg-[#EFE9DC]">
                <Footer />
            </footer>

        </main>
    );
}

export default Home;