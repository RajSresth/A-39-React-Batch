import { createContext, useState,useEffect } from "react";

const authStore = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [isPending, setIsPending] = useState(false)

    useEffect(() => {}, [])

    const login = (userData) => {
        localStorage.setItem("user", JSON.stringify(userData));
        setUser(userData)
    }

    const logout = () => {
        localStorage.removeItem("user");
        setUser(null);
    }

    return (<authStore.Provider value={{
        isPending,
        isAuthenticated: !!user,
        login,
        logout
    }}>
        {children}
    </authStore.Provider>)
}
