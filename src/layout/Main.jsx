import React from 'react';
import { Outlet } from 'react-router-dom';
import SideNav from './SideNav';

const Main = () => {
    return (
        <div className='flex'>
            <SideNav />
            <Outlet />
        </div>
    );
};

export default Main;