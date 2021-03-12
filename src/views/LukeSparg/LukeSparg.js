import React, { useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Row, Col, Container, Button, ButtonGroup } from "reactstrap";
import BackgroundPhoto from "../../assets/black-square.png";
import { Polygon } from "../../components/Polygon/Polygon";
import { Animate } from "react-move";
import './style.css';
import randomColor from "randomcolor";

export const LukeSparg = () => {

    const [catagorySelected, setCatagorySelected] = useState();
    const [polygons, setPolygons] = useState([]);
    const [polygonX, setPolygonX] = useState();
    const carouselHeight = "10em";
    const numberOfPolygons = 200;

    function handleCatagorySelector(event) {
        for(var i = 0; i < polygons.length; i++) {
            polygons[i].slide();
            setPolygonX(polygons[0].getPosition()[0]);
        }
        setCatagorySelected(event.target.innerHTML);
    }
    function createPolygons() {
        if(polygons.length < numberOfPolygons) {
            var newPolygons = polygons;
            for(var i = polygons.length; i < numberOfPolygons; i++) {
                newPolygons[i] = new Polygon();
            }
            setPolygons(newPolygons);
        }
    }
    function renderPolygon(polygon, index) {
        var vertex = polygon.getVertices();
        var position = polygon.getPosition();
        var display = polygon.getDisplay();
        return(
            <svg
            height="120"
            width="120"
            style={{
                top: position[1] + "%",
                left: position[0] + "%",
                display: display,
                transform: "scale(" + ((2 - (position[0]) / 50)) + ")"
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
        <div className="main-content" style={{backgroundImage: "url(" + BackgroundPhoto + ")"}}>
            <div>
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
                        <Row>
                            <Col sm="12">
                                <button onClick={function(event) {handleCatagorySelector(event)}}>Education</button>
                                <button onClick={function(event) {handleCatagorySelector(event)}}>Experience</button>
                                <button onClick={function(event) {handleCatagorySelector(event)}}>Skills</button>
                            </Col>
                        </Row>
                        <Row style={{height: carouselHeight}}>
                            <Col sm="12">
                                <TransitionGroup component={null}>
                                    {catagorySelected === "Education" &&
                                    <CSSTransition classNames="sliding-carousel" timeout={600}>
                                        <div className="sliding-carousel">
                                            <p>Education</p>
                                            <p>Larger</p>
                                            <p>And</p>
                                            <p>Bigger</p>
                                        </div>
                                    </CSSTransition>
                                    }
                                    {catagorySelected === "Experience" &&
                                    <CSSTransition classNames="sliding-carousel" timeout={600}>
                                        <div className="sliding-carousel">Experience</div>
                                    </CSSTransition>
                                    }
                                    {catagorySelected === "Skills" &&
                                    <CSSTransition classNames="sliding-carousel" timeout={600}>
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