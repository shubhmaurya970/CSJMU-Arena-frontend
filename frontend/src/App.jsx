import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home/Home";

import { Routes, Route, useLocation } from "react-router-dom";

import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import About from "./pages/About/About";
import Organizer from "./pages/Organizer/Organizer";
import Admin from "./pages/Admin/Admin";
import EventDetails from "./pages/EventDetails/EventDetails";
import ProtectedRoute from "./components/auth/ProtectedRoute";

function App() {

    const location = useLocation();

    const hideNavbar =
        location.pathname === "/login" ||
        location.pathname === "/register";

    return (
        <>
            {!hideNavbar && <Navbar />}

            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/login" element={<Login />} />

                <Route path="/register" element={<Register />} />

                <Route path="/about" element={<About />} />

                <Route
    path="/organizer"
    element={
        <ProtectedRoute>
            <Organizer />
        </ProtectedRoute>
    }
/>
                <Route
    path="/admin"
    element={
        <ProtectedRoute>
            <Admin />
        </ProtectedRoute>
    }
/>
                <Route path="/event/:id" element={<EventDetails />} />
            </Routes>
        </>
    );
}

export default App;