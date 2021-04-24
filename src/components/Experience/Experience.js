import React, { useState, useEffect } from "react";
import { Row, Col, Container, Button, ButtonGroup } from "reactstrap";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { ReactComponent as ArrowLeft } from "../../assets/arrow-left.svg"
import { ReactComponent as ArrowRight } from "../../assets/arrow-right.svg"
import { constrainLoop } from "../../function/MathFunction";

import './style.css';

export const Experience = () => {

    const [transitioning, setTransitioning] = useState(false);
    const [currentTopic, setCurrentTopic] = useState(0);
    const topics = [
        [
            "HONORS PROJECT", 
            "Pre-Trained Neural Language Models for Source Code Error Detection",
            [
                "Used language models to detect errors in source code.",
                "Trained and tested state-of-the-art transformer models.",
                "Evaluated the effectiveness of models as well as the boundaries between experimental models and models in application."
            ]
        ], 
        [
            "PART-TIME JUNIOR WEB DEVELOPER", 
            "Oracast",
            [
                "Created web solutions to fit a clients needs, as well as improve efficiency and accessibility.",
                "Front-end design and development.",
                "Testing and bug fixing."
            ]
        ],
        [
            "PART-TIME BRAND AMBASSADOR", 
            "American Eagle Outfitters",
            [
                "Communicated with guests to help them find garments and accessories.",
                "Used POS systems to handle transactions.",
                "Organization and cleaning to ensure the best guest experience."
            ]
        ]
    ];

    function nextTopic() {
        setCurrentTopic(constrainLoop(currentTopic + 1, 0, topics.length));
        setTransitioning(true);
    }

    function prevTopic() {
        setCurrentTopic(constrainLoop(currentTopic - 1, 0, topics.length));
        setTransitioning(true);
    }

    useEffect(() => {
        //When Transitioning return to the non-transitioning state
        if(transitioning) {
            setTransitioning(false);
        }
    }, [transitioning]);

    return (
        <TransitionGroup component={null}>
            {!transitioning && 
                <CSSTransition classNames="sliding-carousel-experience" timeout={1000}>
                    <Row className="sliding-carousel-experience">
                        <Col>
                            <h2>{topics[currentTopic][0]}</h2>
                            <h3>{topics[currentTopic][1]}</h3>
                            <ul>
                                {topics[currentTopic][2].map((item, index) => 
                                    <li key={index}>{item}</li>
                                )}
                            </ul>
                        </Col>
                    </Row>
                </CSSTransition>
            }
            <Row className="experience-navigation-drawer">
                <Col className="experience-navigation-left">
                    <ArrowLeft className="experience-navigation-arrow-left" onClick={prevTopic} />
                </Col>
                <Col className="experience-navigation-right">
                    <ArrowRight className="experience-navigation-arrow-right" onClick={nextTopic} />
                </Col>
            </Row>
        </TransitionGroup>
    );
}