import React, { useState, useEffect } from "react";
import { Row, Col, Container, Button, ButtonGroup } from "reactstrap";
import { ReactComponent as Sun } from "../../assets/sun.svg"
import { ReactComponent as Moon } from "../../assets/moon.svg"
import './style.css';

export const DarkModeButton = ({ toggleDarkMode, darkModeClass }) => {

    return (
        <div className="dark-mode-button">
            {darkModeClass ?
                <Moon className="dark-mode-button-icon" onClick={toggleDarkMode} />
                :
                <Sun className="dark-mode-button-icon" onClick={toggleDarkMode} />
            }
        </div>
    );
}