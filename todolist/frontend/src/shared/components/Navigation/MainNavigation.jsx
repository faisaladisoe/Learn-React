import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Backdrop from '../UIElements/Backdrop';
import NavLinks from './NavLinks';
import MainHeader from './MainHeader';
import SideDrawer from './SideDrawer';
import './MainNavigation.css';

const MainNavigation = props => {
    const [drawerController, setDrawerController] = useState(false);

    const openDrawer = () => {
        setDrawerController(true);
    };

    const closeDrawer = () => {
        setDrawerController(false);
    };

    return (
        <React.Fragment>
            {drawerController ? <Backdrop onClick={closeDrawer} /> : null}
            <SideDrawer show={drawerController} onClick={closeDrawer}>
                <nav className='main-navigation__drawer-nav'>
                    <NavLinks />
                </nav>
            </SideDrawer>
            <MainHeader>
            <button className="main-navigation__menu-btn" onClick={openDrawer}>
                <span />
                <span />
                <span />
            </button>
            <h1 className="main-navigation__title">
                <Link to="/">YourPlaces</Link>
            </h1>
            <nav className='main-navigation__header-nav'>
                <NavLinks />
            </nav>
            </MainHeader>
        </React.Fragment>
  );
};

export default MainNavigation;
