import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {

    const token = localStorage.getItem('token');

    if (!token) {
        return <Navigate to="/notfound" />;
    }

    const getUserRoleFromToken = (token) => {
        const payload = JSON.parse(atob(token.split('.')[1])); 
        return payload.role; 
    };
    
    const role = getUserRoleFromToken(token); 

    // return alert(role);

    if (role === 'admin') {
        return children.find(child => child.type.name === 'DashboardAdmin') || <Navigate to="/notfound" />;
    } else if (role === 'subscriber') {
        return children.find(child => child.type.name === 'DashboardUser') || <Navigate to="/notfound" />;
    }

    return <Navigate to="/notfound" />;
};

export default ProtectedRoute;
