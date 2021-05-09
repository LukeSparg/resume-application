import React, { useState, useEffect } from "react";
import { Row, Col, Container, Button, ButtonGroup } from "reactstrap";
import { ReactComponent as List } from "../../assets/list.svg"
import './style.css';

export const MobileNavMenuButton = ({ mobileNavMenu, setMobileNavMenu }) => {

    return (
        <div className="mobile-nav-menu-button">
            {!mobileNavMenu &&
                <List className="mobile-nav-menu-button-icon" onClick={() => (setMobileNavMenu(true))} />
            }
        </div>
    );
}