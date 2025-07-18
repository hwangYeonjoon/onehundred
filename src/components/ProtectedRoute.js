import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function ProtectedRoute({ children }) {
    const { authenticated } = useAuth();

    if (!authenticated) {
        return <Navigate to="/" replace />;
    }

    return children;
}

export default ProtectedRoute;