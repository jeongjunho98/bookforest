"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';

interface AuthContextType {
  isLoggedIn: boolean;
  userRole: string | null;
  userName: string | null;
  login: (id: string, role: string, name: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState<string | null>(null);
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    const role = localStorage.getItem('userRole');
    const name = localStorage.getItem('userName');
    if (role && name) {
      setIsLoggedIn(true);
      setUserRole(role);
      setUserName(name);
    }
  }, []);

  const login = (id: string, role: string, name: string) => {
    localStorage.setItem('userRole', role);
    localStorage.setItem('userName', name);
    setIsLoggedIn(true);
    setUserRole(role);
    setUserName(name);
  };

  const logout = () => {
    localStorage.removeItem('userRole');
    localStorage.removeItem('userName');
    setIsLoggedIn(false);
    setUserRole(null);
    setUserName(null);
    window.location.href = '/';
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, userRole, userName, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
