import Hero from "./Hero";
import FeaturedEvents from "./FeaturedEvents";
import UpcomingEvents from "../../components/UpcomingEvents/UpcomingEvents";
import WhyArena from "../../components/WhyArena/WhyArena";
import Footer from "../../components/Footer/Footer";

function Home() {
    return (
        <main className="relative  ">

            <Hero />

            <FeaturedEvents />

            <div className="bg-[#FFFDF8]">
    <UpcomingEvents />
</div>
        <div className="bg-[#0F0C09]">
            <WhyArena />
        </div>
            <div className="bg-[#EFE9DC]">
                <Footer />
            </div>
            

        </main>
    );
}

export default Home;