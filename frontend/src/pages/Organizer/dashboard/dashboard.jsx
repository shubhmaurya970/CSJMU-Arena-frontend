import HeroCard from "./component/Hero/HeroCard";
import EventLifecycle from "./component/EventLifecycle/EventLifecycle";
function Dashboard() {

    return (

        <div className="space-y-6">


            <HeroCard />
            <EventLifecycle />

        </div>

    );

}

export default Dashboard;