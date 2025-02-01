import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const MainLayouts = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='min-h-[calc(100vh-196px)]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayouts;