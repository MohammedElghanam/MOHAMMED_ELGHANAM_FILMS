import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const [active, setActive] = useState(false);
    const [role, setRole] = useState(null);

    const token = localStorage.getItem('token');

    // تحقق من وجود توكن
    // لن نفعل أي شيء هنا إذا لم يكن هناك توكن
    if (!token) {
        return <Navigate to="/notfound" />;
    }

    const getUserRoleFromToken = (token) => {
        const payload = JSON.parse(atob(token.split('.')[1])); 
        return payload.role; 
    };

    // استخدم useEffect بدون شروط
    useEffect(() => {
        const userRole = getUserRoleFromToken(token);
        setRole(userRole);

        // تفعيل الرسالة لثلاث ثواني
        setActive(true);
        const timer = setTimeout(() => {
            setActive(false);
        }, 3000);

        // تنظيف المؤقت
        return () => clearTimeout(timer);
    }, [token]); // التأكد من استخدام التوكن فقط

    // اجراء التصحيح باستخدام useEffect بدون تكرار الكود
    const renderChild = () => {
        if (role === 'admin') {
            const dashboardAdmin = children.find(child => child.type.name === 'DashboardAdmin');
            return dashboardAdmin ? React.cloneElement(dashboardAdmin, { active }) : <Navigate to="/notfound" />;
        } else if (role === 'subscriber') {
            const dashboardUser = children.find(child => child.type.name === 'DashboardUser');
            return dashboardUser ? React.cloneElement(dashboardUser, { active }) : <Navigate to="/notfound" />;
        }
        return <Navigate to="/notfound" />;
    };

    return role ? renderChild() : null; // تأكد من عدم عودة null قبل أن يتم تعيين الدور
};

export default ProtectedRoute;
