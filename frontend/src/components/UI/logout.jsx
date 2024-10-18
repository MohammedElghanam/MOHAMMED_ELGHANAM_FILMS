import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Logout () {

    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    if (!token) {
        return console.error('No token found, please log in again');
    }

    const handleLogout = () => {
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
        <button onClick={ handleLogout } className="inline-flex items-center px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium rounded-md"> logout </button>
    </>
}