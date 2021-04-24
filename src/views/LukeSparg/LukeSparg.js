import React, { useState, useEffect } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Row, Col, Container, Button, ButtonGroup } from "reactstrap";
import BackgroundPhoto from "../../assets/black-square.png";
import ProfilePhoto from "../../assets/Oyama_Lookout_Cropped.png";
import { Polygon } from "../../components/Polygon/Polygon";
import { Animate } from "react-move";
import './style.css';
import randomColor from "randomcolor";
import { DarkModeButton } from "../../components/DarkModeButton/DarkModeButton";
import { Experience } from "../../components/Experience/Experience";
import { Contact } from "../../components/Contact/Contact";
import { Education } from "../../components/Education/Education";

export const LukeSparg = () => {

    //Current catagory
    const [catagorySelected, setCatagorySelected] = useState("Contact");
    const [darkModeClass, setDarkModeClass] = useState("");

    //List of all Polygons
    const [polygons, setPolygons] = useState([]);
    const numberOfPolygons = 100;

    //Detect if system is in Dark Mode
    useEffect(() => {
        const mq = window.matchMedia('(prefers-color-scheme: dark)');
        const useDarkMode = mq.matches;
        if(useDarkMode) {
            setDarkModeClass("-dark");
        }
    }, []);

    useEffect(() => {
        //Moves all polygons to the left
        for(var i = 0; i < polygons.length; i++) {
            polygons[i].slide();
        }
    }, [catagorySelected, darkModeClass]);

    function toggleDarkMode() {
        // When the dark mode setting is change update the className
        if(darkModeClass) {
            setDarkModeClass("");
        } else {
            setDarkModeClass("-dark");
        }
    };

    //Called when a catagory is clicked
    function handleCatagorySelector(event) {

        //Changes the selected catagory
        setCatagorySelected(event.target.innerHTML);
    }

    //Generates polygons based on numberOfPolygons defined earlier
    function createPolygons() {
        if(polygons.length < numberOfPolygons) {
            var newPolygons = polygons;
            for(var i = polygons.length; i < numberOfPolygons; i++) {
                newPolygons[i] = new Polygon();
            }
            setPolygons(newPolygons);
        }
    }

    //Visual effects and polygon animations
    function renderPolygon(polygon, index) {
        var vertex = polygon.getVertices();
        var position = polygon.getPosition();
        var display = polygon.getDisplay();

        //Each polygon has an svg container that has its position and scale moved
        //The inner polygon element has its colour changed
        return(
            <svg
            key={index}
            height="120"
            width="120"
            style={{
                top: position[1] + "%",
                left: position[0] + "%",
                display: display,
                transform: "scale(" + ((2 - (position[0]) / 75)) + ")",
                opacity: (100 - position[0]) / 100,
            }}>
                <polygon
                style={{
                    fill: randomColor({luminosity: "bright", hue:"monochrome"})
                }}
                points={
                    vertex[0][0] + "," + vertex[0][1] + " " + 
                    vertex[1][0] + "," + vertex[1][1] + " " +
                    vertex[2][0] + "," + vertex[2][1]
                }/>
            </svg>
        );
    }

    return (
        <div className={"main-container" + darkModeClass}>
            <div className="polygon-container">
                {createPolygons()}
                {polygons.map((polygon, index) => (
                    renderPolygon(polygon, index)
                ))}
            </div>
            <div className="content-container">
                <Row>
                    <Col sm={{ size: 5 }} className="sub-content-container-justified">
                        <Row>
                            <Col sm="12" md="8">
                                <Row>
                                    <Col sm="12">
                                        <h1>
                                            LUKE SPARG
                                        </h1>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm="12">
                                        <h2>
                                            Software Developer
                                        </h2>
                                    </Col>
                                </Row>
                            </Col>
                            <Col sm="12" md="4" className="profile-picture-container">
                                <img className={"profile-picture" + darkModeClass} src={ProfilePhoto} />
                            </Col>
                        </Row>
                        <Row className={"divider" + darkModeClass} />
                        <Row className="catagory-selector">
                            <Col sm="12">
                                    <button className={"carousel-button" + darkModeClass} onClick={function(event) {handleCatagorySelector(event)}}>Education</button>
                                    <button className={"carousel-button" + darkModeClass} onClick={function(event) {handleCatagorySelector(event)}}>Experience</button>
                                    <button className={"carousel-button" + darkModeClass} onClick={function(event) {handleCatagorySelector(event)}}>Skills</button>
                                    <button className={"carousel-button" + darkModeClass} onClick={function(event) {handleCatagorySelector(event)}}>Contact</button>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm={{ size: 5 }} className="sub-content-container">
                        <Row className="carousel">
                            <Col sm="12">
                                <TransitionGroup component={null}>
                                    {catagorySelected === "Education" &&
                                    <CSSTransition classNames="sliding-carousel" timeout={1000}>
                                        <div className="sliding-carousel">
                                            <Education />
                                        </div>
                                    </CSSTransition>
                                    }
                                    {catagorySelected === "Experience" &&
                                    <CSSTransition classNames="sliding-carousel" timeout={1000}>
                                        <div className="sliding-carousel">
                                            <Experience />
                                        </div>
                                    </CSSTransition>
                                    }
                                    {catagorySelected === "Skills" &&
                                    <CSSTransition classNames="sliding-carousel" timeout={1000}>
                                        <div className="sliding-carousel">Skills</div>
                                    </CSSTransition>
                                    }
                                    {catagorySelected === "Contact" &&
                                    <CSSTransition classNames="sliding-carousel" timeout={1000}>
                                        <div className="sliding-carousel">
                                            <Contact darkModeClass={darkModeClass} />
                                        </div>
                                    </CSSTransition>
                                    }
                                </TransitionGroup>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
            <DarkModeButton toggleDarkMode={toggleDarkMode} darkModeClass={darkModeClass} />
        </div>
    );
}