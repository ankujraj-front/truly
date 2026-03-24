
import React, { useEffect, useState } from "react"
import { Outlet } from 'react-router';

import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import Header from '../Layout/header';
import FooterMain from "./footer";
// import MobileHeader from "./mobileheader";




const MainLayout = (props) => {
 
    return (
        <div> 
              <Header/>
              {/* <MobileHeader/> */}
            <div className="main_layout">
            <Outlet />
            </div>
            <FooterMain/>
        </div>
    )
}
export default MainLayout