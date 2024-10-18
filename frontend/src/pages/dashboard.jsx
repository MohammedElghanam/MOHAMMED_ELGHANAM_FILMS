import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Users from '../components/UI/users';
import Logout from '../components/UI/logout';

export default function Dashboard () {

    const [users, setUsers] = useState([]);

    useEffect(() => {

        getUsers();

    }, []) 

    const getUsers = () => {
        const token = localStorage.getItem('token');
        axios.get('http://localhost:5000/api/user/getusers', {
            headers: {
                'Authorization': `Bearer ${token}` 
            }
        })
        .then(response => {
            setUsers(response.data);
            console.log("Data fetched:", response.data);
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
    }

    const displayUsers = () => {
        return users.map(user => (
            <Users key={user.id} user= {user} />
        ))
    }

    return <>
        <div className=" mt-24">
            <div className=" flex justify-between items-center mx-20">
                <h1>hello to Dashboard</h1>
                <Logout />
            </div>
            <div className=" w-full h-screen bg-blue-300 grid grid-cols-12 justify-center items-center gap-4">
                { displayUsers() }
            </div>
        </div>
    </>
}