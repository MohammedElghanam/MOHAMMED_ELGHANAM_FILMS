import React from 'react';
import Logout from '../components/UI/logout';

export default function Client() {

    return <>
        <div className=" mt-20">
            <div className=" flex justify-between items-center mx-20">
                <h1>hello to CLIENT</h1>
                <Logout />
            </div>
        </div>
    </>
}