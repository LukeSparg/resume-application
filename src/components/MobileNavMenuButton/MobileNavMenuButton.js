import React, { useState, useEffect } from "react";
import { Row, Col, Container, Button, ButtonGroup } from "reactstrap";
import { ReactComponent as BackToTop } from "../../assets/arrow-bar-up.svg"
import './style.css';

export const MobileNavMenuButton = ({ mobileNavMenu, setMobileNavMenu }) => {


    function handleClick() {
        document.getElementById("main-profile-info").scrollIntoView({ block: 'center',  behavior: 'smooth' });
    }

    return (
        <div className="mobile-nav-menu-button">
            <BackToTop className="mobile-nav-menu-button-icon" onClick={handleClick} />
        </div>
    );
}