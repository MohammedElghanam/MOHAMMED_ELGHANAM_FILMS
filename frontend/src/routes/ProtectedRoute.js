import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {

    const [active, setactive] = useState(false);

    const token = localStorage.getItem('token');

    if (!token) {
        return <Navigate to="/notfound" />;
    }

    const getUserRoleFromToken = (token) => {
        const payload = JSON.parse(atob(token.split('.')[1])); 
        return payload.role; 
    };

    const isActive = () => {
        setactive(true);
    }

    useEffect(() => {
        setTimeout(() => {
            setactive(false);
        }, 3000);
    }, [active]);
    
    const role = getUserRoleFromToken(token); 

    // return alert(role);

    if (role === 'admin') {
        isActive();
        const dashboardAdmin = children.find(child => child.type.name === 'DashboardAdmin');
        return dashboardAdmin ? React.cloneElement(dashboardAdmin, { active }) : <Navigate to="/notfound" />;
    } else if (role === 'subscriber') {
        return children.find(child => child.type.name === 'DashboardUser') || <Navigate to="/notfound" />;
    }

    return <Navigate to="/notfound" />;
};

export default ProtectedRoute;
