import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Logout () {

    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    

    const handleLogout = () => {

        if (!token) {
            console.error('No token found, please log in again');
            alert('the token not exist');
        }

        axios.post('http://localhost:5000/api/user/logout', {}, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(response => {
            console.log(response.data.message); 
            localStorage.removeItem('token');
            navigate('/'); 
        })
        .catch(error => {
            console.error('Error logging out:', error);
        });
    };
    

    return <>
        <button onClick={ handleLogout } className=" flex justify-center items-center gap-3 bg-gray-100 bg-opacity-30 hover:bg-opacity-45 px-8 py-1 rounded-lg" >
            <svg width="25" height="25" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.0774 23.3332V26.2498C15.0774 27.0234 15.3805 27.7653 15.9201 28.3122C16.4596 28.8592 17.1913 29.1665 17.9543 29.1665H28.0235C28.7865 29.1665 29.5182 28.8592 30.0578 28.3122C30.5973 27.7653 30.9004 27.0234 30.9004 26.2498L30.9004 8.74984C30.9004 7.97629 30.5973 7.23442 30.0578 6.68744C29.5182 6.14046 28.7865 5.83317 28.0235 5.83317H17.9543C17.1913 5.83317 16.4596 6.14046 15.9201 6.68744C15.3805 7.23442 15.0774 7.97629 15.0774 8.74984V11.6665" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22.2695 17.5H5.00813M5.00813 17.5L9.32348 21.875M5.00813 17.5L9.32348 13.125" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <h1 className=" font-bold text-lg text-white">Log out</h1>
        </button>
    </>
}