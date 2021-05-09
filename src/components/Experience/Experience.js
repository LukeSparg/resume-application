import React, { useState, useEffect } from "react";
import { Row, Col, Container, Button, ButtonGroup } from "reactstrap";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { ReactComponent as ArrowLeft } from "../../assets/arrow-left.svg"
import { ReactComponent as ArrowRight } from "../../assets/arrow-right.svg"
import { constrainLoop } from "../../function/MathFunction";
import { useSpring, animated } from 'react-spring'

import './style.css';

export const Experience = ({ darkModeClass, isMobile }) => {

    const [transitioning, setTransitioning] = useState(false);
    const [currentTopic, setCurrentTopic] = useState("honors");
    const topics = {
        "honors": [
            "HONORS PROJECT", 
            "Pre-Trained Neural Language Models for Source Code Error Detection",
            "2020 - 2021",
            "In my final year of university I have completed a honors project where I researched machine learning techniques for natural language and applied them to python source code.",
            [
                "Used language models to detect errors in source code.",
                "Trained and tested state-of-the-art transformer models.",
                "Evaluated the effectiveness of models as well as the boundaries between experimental models and models in application."
            ]
        ], 
        "web dev": [
            "PART-TIME JUNIOR WEB DEVELOPER", 
            "Oracast",
            "2018 - 2019",
            "During my first and second years in university, I gained experience creating webpages for clients at Oracast. This involved developing PHP+WordPress sites as well as creating custom solutions to fit individual clients needs.",
            [
                "Created web solutions to fit a clients needs, as well as improve efficiency and accessibility.",
                "Front-end design and development.",
                "Testing and bug fixing."
            ]
        ],
        "sales": [
            "PART-TIME BRAND AMBASSADOR", 
            "American Eagle Outfitters",
            "2018 - 2020",
            "After working with a fantastic team at Urban Planet for 2+ years I moved with my team members to American Eagle to continue providing excellent customer service to guests in the retail industry.",
            [
                "Communicated with guests to help them find garments and accessories.",
                "Used POS systems to handle transactions.",
                "Organization and cleaning to ensure the best guest experience."
            ]
        ]
    };
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
                    toggle = (toggle === 1) ? 0.3 : 1;
            }
        }
    });

    useEffect(() => {
        //When Transitioning return to the non-transitioning state
        if(transitioning) {
            setTransitioning(false);
        }
    }, [transitioning]);

    return (
        <>
        <Row>
            {!isMobile &&
            <Col sm="4">
                <Row>
                    {(currentTopic !== "honors") ?
                        <animated.div style={ pulseAnimation } onClick={() => setCurrentTopic("honors")} className={"experience-title-box" + darkModeClass}>
                            HONORS
                        </animated.div>
                        :
                        <div onClick={() => setCurrentTopic("honors")} className={"experience-title-box-active" + darkModeClass}>
                            HONORS
                        </div>
                    }
                </Row>
                <Row>
                    {(currentTopic !== "web dev") ?
                        <animated.div style={ pulseAnimation } onClick={() => setCurrentTopic("web dev")} className={"experience-title-box" + darkModeClass}>
                            WEB DEV
                        </animated.div>
                        :
                        <div onClick={() => setCurrentTopic("web dev")} className={"experience-title-box-active" + darkModeClass}>
                            WEB DEV
                        </div>
                    }
                </Row>
                <Row>
                    {(currentTopic !== "sales") ?
                        <animated.div style={ pulseAnimation } onClick={() => setCurrentTopic("sales")} className={"experience-title-box" + darkModeClass}>
                            SALES
                        </animated.div>
                        :
                        <div onClick={() => setCurrentTopic("sales")} className={"experience-title-box-active" + darkModeClass}>
                            SALES
                        </div>
                    }
                </Row>
            </Col>}
            {isMobile &&
            <Col xs="11" className="experience-title-box-container-mobile">
                {(currentTopic !== "honors") ?
                    <animated.div style={ pulseAnimation } onClick={() => setCurrentTopic("honors")} className={"experience-title-box" + darkModeClass}>
                        HONORS
                    </animated.div>
                    :
                    <div onClick={() => setCurrentTopic("honors")} className={"experience-title-box-active" + darkModeClass}>
                        HONORS
                    </div>
                }
                {(currentTopic !== "web dev") ?
                    <animated.div style={ pulseAnimation } onClick={() => setCurrentTopic("web dev")} className={"experience-title-box" + darkModeClass}>
                        WEB DEV
                    </animated.div>
                    :
                    <div onClick={() => setCurrentTopic("web dev")} className={"experience-title-box-active" + darkModeClass}>
                        WEB DEV
                    </div>
                }
                {(currentTopic !== "sales") ?
                    <animated.div style={ pulseAnimation } onClick={() => setCurrentTopic("sales")} className={"experience-title-box" + darkModeClass}>
                        SALES
                    </animated.div>
                    :
                    <div onClick={() => setCurrentTopic("sales")} className={"experience-title-box-active" + darkModeClass}>
                        SALES
                    </div>
                }
            </Col>
            }

            <Col xs="11" md="8">
                <h2>{topics[currentTopic][0]}</h2>
                <h4 className="shrink-mobile-text-sm">{topics[currentTopic][1]}</h4>
                <p>{topics[currentTopic][2]}</p>
                <p className="shrink-mobile-text-sm">{topics[currentTopic][3]}</p>
                <ul className="shrink-mobile-text-xs">
                    {topics[currentTopic][4].map((item, index) =>
                        <li key={index}>
                            {item}
                        </li>
                    )}
                </ul>
            </Col>
        </Row>
        </>
    );
}