import React from 'react';
import Logout from '../component/UI/logout';

export default function DashboardUser() {

    return <>
        <div className=" mt-20">
            <div className=" flex justify-between items-center mx-20">
                <h1>hello to CLIENT</h1>
                <Logout />
            </div>
        </div>
    </>
}