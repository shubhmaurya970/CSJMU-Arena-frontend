import Hero from "./Hero";
import FeaturedEvents from "./FeaturedEvents";
import UpcomingEvents from "../../components/UpcomingEvents/UpcomingEvents";
import WhyArena from "../../components/WhyArena/WhyArena";

function Home() {
    return (
        <main className="relative">

            <Hero />

            <FeaturedEvents />

            <div className="bg-[#FFFDF8]">
    <UpcomingEvents />
</div>

            <WhyArena />

        </main>
    );
}

export default Home;