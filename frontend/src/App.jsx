import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home/Home";
import { useEffect, useState } from "react";
import PageLoader from "./components/loading/PageLoader";
import { useLoading } from "./context/LoadingContext";
import CreateEvent from "./pages/Organizer/create-event/CreateEvent";

import { Routes, Route, useLocation } from "react-router-dom";

import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import About from "./pages/About/About";
import Organizer from "./pages/Organizer/Organizer";
import Admin from "./pages/Admin/AdminEvents";
import EventDetails from "./pages/EventDetails/EventDetails";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import Toast from "./components/toast/Toast";

import OrganizerLayout from "./pages/Organizer/layout/OrganizerLayout";
import EventCreated from "./pages/organizer/create-event/EventCreated";
import MyEvents from "./pages/organizer/create-event/MyEvents";

function App() {

    const { isLoading } = useLoading();
    const [showSplash, setShowSplash] = useState(true);

    useEffect(() => {

        const timer = setTimeout(() => {
            setShowSplash(false);
        }, 1200);

        return () => clearTimeout(timer);

    }, []);

    const location = useLocation();

    const hideNavbar =
        location.pathname === "/login" ||
        location.pathname === "/register" ||
        location.pathname.startsWith("/organizer");

    if (showSplash) {
        return <PageLoader />;
    }

    return (
        <>
            <Toast />

            {isLoading && <PageLoader />}

            {!hideNavbar && <Navbar />}

            <Routes>

                {/* Public Routes */}

                <Route
                    path="/"
                    element={<Home />}
                />

                <Route
                    path="/login"
                    element={<Login />}
                />
                <Route
                    path="/organizer/my-events"
                    element={<MyEvents />}
                />

                <Route
                    path="/register"
                    element={<Register />}
                />

                <Route
                    path="/about"
                    element={<About />}
                />
                <Route
                    path="/organizer/event-created"
                    element={<EventCreated />}
                />


                {/* Organizer Dashboard */}

                <Route
                    path="/organizer"
                    element={
                        <ProtectedRoute>
                            <Organizer />
                        </ProtectedRoute>
                    }
                />


                {/* Create Event */}

                <Route
                    path="/organizer/create"
                    element={
                        <ProtectedRoute>
                            <OrganizerLayout>
                                <CreateEvent />
                            </OrganizerLayout>
                        </ProtectedRoute>
                    }
                />


                {/* Admin */}

                <Route
                    path="/admin"
                    element={
                        <ProtectedRoute>
                            <Admin />
                        </ProtectedRoute>
                    }
                />


                {/* Event Details */}

                <Route
                    path="/event/:id"
                    element={<EventDetails />}
                />

            </Routes>
        </>
    );
}

export default App;