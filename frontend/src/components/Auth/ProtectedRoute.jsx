import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function ProtectedRoute({ children }) {

    const { isLoggedIn } = useContext(AuthContext);

    console.log("ProtectedRoute:", isLoggedIn);

    if (!isLoggedIn) {
        return <Navigate to="/login" replace />;
    }

    return (
        <>

            {children}
        </>
    );
}

export default ProtectedRoute;