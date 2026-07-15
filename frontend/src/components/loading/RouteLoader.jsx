import PageLoader from "./PageLoader";

function RouteLoader({ show }) {

    if (!show) return null;

    return <PageLoader />;

}

export default RouteLoader;