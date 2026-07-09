import Hero from "./Hero";
import FeaturedEvents from "./FeaturedEvents";
import UpcomingEvents from "../../components/UpcomingEvents/UpcomingEvents";

function Home() {
    return (
        <main className="relative">

            <Hero />

            {/* Overlap */}
            <div className="-mt-28 relative z-20">
                <FeaturedEvents />
            </div>

            <UpcomingEvents />

        </main>
    );
}

export default Home;