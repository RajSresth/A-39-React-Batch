import { createContext, useState, useEffect } from "react";

// ! create authStore
const authStore = createContext();

// ! Auth Provider
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      throw new Error("User is not present");
    }
    setUser(storedUser);
  }, []);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <authStore.Provider
      value={{ user, isAuthenticate: !!user, login, logout, loading }}
    >
      {children}
    </authStore.Provider>
  );
};

export default authStore;
