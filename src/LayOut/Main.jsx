import React from 'react';
import { Outlet } from 'react-router-dom';
import Navber from '../pages/Shared/Navber/Navber';
import Footer from '../pages/Shared/Footer/Footer';
import AboutNav from '../pages/Shared/AboutNav/AboutNav';

const Main = () => {
  return (
    <div>
        {/* <Navber></Navber> */}
        {/* <AboutNav></AboutNav> */}
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  );
};

export default Main;