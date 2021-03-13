import React, { useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Row, Col, Container, Button, ButtonGroup } from "reactstrap";
import BackgroundPhoto from "../../assets/black-square.png";
import { Polygon } from "../../components/Polygon/Polygon";
import { Animate } from "react-move";
import './style.css';
import randomColor from "randomcolor";

export const LukeSparg = () => {

    //Current catagory
    const [catagorySelected, setCatagorySelected] = useState();

    //List of all Polygons
    const [polygons, setPolygons] = useState([]);
    const numberOfPolygons = 150;

    //Called when a catagory is clicked
    function handleCatagorySelector(event) {

        //Moves all polygons to the left
        for(var i = 0; i < polygons.length; i++) {
            polygons[i].slide();
        }

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
                transform: "scale(" + ((2 - (position[0]) / 75)) + ")"
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
        <div className="main-container" style={{backgroundImage: "url(" + BackgroundPhoto + ")"}}>
            <div className="polygon-container">
                {createPolygons()}
                {polygons.map((polygon, index) => (
                    renderPolygon(polygon, index)
                ))}
            </div>
            <Container>
                <Row>
                    <Col sm={{ size: 8, offset: 1 }}>
                        <Row>
                            <Col sm="12">
                                <h1>
                                    Luke Sparg
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
                        <Row className="divider" />
                        <Row className="catagory-selector">
                            <Col sm="12">
                                <button onClick={function(event) {handleCatagorySelector(event)}}>Education</button>
                                <button onClick={function(event) {handleCatagorySelector(event)}}>Experience</button>
                                <button onClick={function(event) {handleCatagorySelector(event)}}>Skills</button>
                            </Col>
                        </Row>
                        <Row className="carousel">
                            <Col sm="12">
                                <TransitionGroup component={null}>
                                    {catagorySelected === "Education" &&
                                    <CSSTransition classNames="sliding-carousel" timeout={1000}>
                                        <div className="sliding-carousel">
                                            <p>Education</p>
                                            <p>Larger</p>
                                            <p>And</p>
                                            <p>Bigger</p>
                                        </div>
                                    </CSSTransition>
                                    }
                                    {catagorySelected === "Experience" &&
                                    <CSSTransition classNames="sliding-carousel" timeout={1000}>
                                        <div className="sliding-carousel">Experience</div>
                                    </CSSTransition>
                                    }
                                    {catagorySelected === "Skills" &&
                                    <CSSTransition classNames="sliding-carousel" timeout={1000}>
                                        <div className="sliding-carousel">Skills</div>
                                    </CSSTransition>
                                    }
                                </TransitionGroup>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}