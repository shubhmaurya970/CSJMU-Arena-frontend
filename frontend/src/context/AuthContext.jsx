import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

function AuthProvider({ children }) {

    const savedUser = localStorage.getItem("user");
const token = localStorage.getItem("token");

const [isLoggedIn, setIsLoggedIn] = useState(!!token);

const [user, setUser] = useState(
    savedUser ? JSON.parse(savedUser) : null
);

    // App start hote hi check karo token hai ya nahi

    // Login
    const login = (loginData) => {

        localStorage.setItem("token", loginData.token);

        localStorage.setItem(
            "user",
            JSON.stringify({
                name: loginData.name,
                email: loginData.email,
                role: loginData.role,
            })
        );

        setUser({
            name: loginData.name,
            email: loginData.email,
            role: loginData.role,
        });

        setIsLoggedIn(true);

    };

    // Logout
    const logout = () => {
        localStorage.removeItem("token");

        localStorage.removeItem("user");

        setUser(null);

        setIsLoggedIn(false);
    };

    return (
        <AuthContext.Provider
    value={{
        isLoggedIn,
        user,
        login,
        logout,
    }}
> 
        
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;