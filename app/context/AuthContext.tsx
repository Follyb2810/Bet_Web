"use client";
import { useRouter } from "next/navigation";
import { createContext, useContext, useState, useEffect } from "react";
// import { useRouter } from "next/router";

interface AuthContextType {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Example: Check if token exists in localStorage
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  const login = () => {
    localStorage.setItem("token", "your-token");
    setIsAuthenticated(true);
    router.push("/"); 
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    router.push("/login");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext)!;
// export function useAuth() {
//     const context = useContext(AuthContext);
//     if (context === undefined) {
//       throw new Error("useAuth must be used within an AuthProvider");
//     }
//     return context;
//   }
