import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

function AuthProvider({ children }) {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // App start hote hi check karo token hai ya nahi
    useEffect(() => {
        const token = localStorage.getItem("token");

        if (token) {
            setIsLoggedIn(true);
        }
    }, []);

    // Login
    const login = (token) => {
        localStorage.setItem("token", token);
        setIsLoggedIn(true);
    };

    // Logout
    const logout = () => {
        localStorage.removeItem("token");
        setIsLoggedIn(false);
    };

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn,
                login,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;