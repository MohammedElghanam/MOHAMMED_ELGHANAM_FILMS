// src/hooks/useLogin.js
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useLogin = () => {
    const [popup, setPopup] = useState(false);
    const navigate = useNavigate(); 

    const showPopup = (e) => {
        e.preventDefault();
        setPopup(true);
    };

    const closePopup = (e) => {
        e.preventDefault();
        setPopup(false);
    };

    const goToRegister = () => {
        navigate('/register'); 
    };

    const goToLogin = () => {
        navigate('/'); 
    };

    return {
        popup,
        showPopup,
        closePopup,
        goToRegister,
        goToLogin,
    };
};

export default useLogin;
