import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(
        localStorage.getItem("isLoggedIn") === "true"
    );

    useEffect(() => {
        localStorage.setItem("isLoggedIn", isLoggedIn);
        // To be removed
        setIsLoggedIn(true);
    }, [isLoggedIn]);

    const value = { isLoggedIn, setIsLoggedIn };
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
