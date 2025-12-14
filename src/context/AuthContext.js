// src/context/AuthContext.js
import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authenticated, setAuthenticated] = useState(() => {
        if (typeof window === 'undefined') return false;
        return localStorage.getItem('auth') === 'true';
    });

    useEffect(() => {
        if (typeof window === 'undefined') return;
        if (authenticated) {
            localStorage.setItem('auth', 'true');
        } else {
            localStorage.removeItem('auth');
        }
    }, [authenticated]);

    return (
        <AuthContext.Provider value={{ authenticated, setAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
