import React, { useState, useEffect } from "react";
import { Row, Col, Container, Button, ButtonGroup } from "reactstrap";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { ReactComponent as ArrowLeft } from "../../assets/arrow-left.svg"
import { ReactComponent as ArrowRight } from "../../assets/arrow-right.svg"
import { constrainLoop } from "../../function/MathFunction";
import { useSpring, animated } from 'react-spring'

import './style.css';

export const Experience = ({ darkModeClass }) => {

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
    //Slow pulse animation to be used by multiple divs in render
    const pulseAnimation = useSpring({
        from: {
            opacity: 1
        },
        to: async (next, cancel) => {
            let toggle = 1;
            while (true) {
                    await next({
                        opacity: toggle
                    });
                    toggle = toggle === 1 ? 0.4 : 1;
            }
        }
    });

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
            <Row className="experience-navigation-drawer">
                <Col className="experience-navigation-left">
                    <animated.div className="script-box" style={ pulseAnimation }>
                        <ArrowLeft className="experience-navigation-arrow-left" onClick={prevTopic} />
                    </animated.div>
                </Col>
                <Col>
                    <div className="experience-navigation-center">
                        {topics.map((item, index) => 
                            (index === currentTopic) ?
                                <div className={"experience-navigation-center-icon-fill" + darkModeClass} key={index} />
                                :
                                <div className={"experience-navigation-center-icon-unfill" + darkModeClass} key={index} />
                                
                        )}
                    </div>
                </Col>
                <Col className="experience-navigation-right">
                    <animated.div className="script-box" style={ pulseAnimation }>
                        <ArrowRight className="experience-navigation-arrow-right" onClick={nextTopic} />
                    </animated.div>
                </Col>
            </Row>
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
        </TransitionGroup>
    );
}