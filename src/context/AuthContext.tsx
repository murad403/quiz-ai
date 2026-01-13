// contexts/AuthContext.tsx
"use client"
import { createContext, useContext, ReactNode } from 'react';

interface AuthContextType {
    accessToken: string | undefined;
    refreshToken: string | undefined;
    isAuth: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children, accessToken, refreshToken}: { children: ReactNode; accessToken?: string; refreshToken?: string;}) => {
    const isAuth = !!accessToken;
    return (
        <AuthContext.Provider value={{ accessToken, refreshToken, isAuth }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within AuthProvider');
    }
    return context;
};