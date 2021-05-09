import React, { useState, useEffect } from "react";
import { Row, Col, Container, Button, ButtonGroup } from "reactstrap";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { ReactComponent as ArrowLeft } from "../../assets/arrow-left.svg"
import { ReactComponent as ArrowRight } from "../../assets/arrow-right.svg"
import { constrainLoop } from "../../function/MathFunction";
import { useSpring, animated } from 'react-spring'

import './style.css';

export const Skills = ({ darkModeClass, isMobile }) => {

    const [activeSkill, setActiveSkill] = useState("data");
    const skillInfo = {
        "data": {
            "title": "Data Science and Analytics",
            "text": "I have strong knowledge of statistical principles for applications in data collection, manipulation and interpretation. Using these skills with machine learning I have created models for both prediction and inference. Some of these skills include:",
            "list": [
                "Python for data scripting inluding libraries like pandas, numpy, and sklearn.",
                "SQL for data storage and retrieval. I am also open to learn other relational and non-relational languages/systems.",
                "NLP techniques including tokenization, pre-training, finetuning and evaluation metrics.",
                "Understanding of bias, error, regression, trees, as well as other metrics and models."
            ]
        },
        "web": {
            "title": "Web and Application Developement", 
            "text": "I have interned and taken course work in web developement to help bridge the online gap between companies and clients. An example of this work is the webpage you are currently viewing. Some technologies I have worked with include:",
            "list": [
                "Javascript for frontend developement, using pure JS as well as frameworks like React.",
                "Javascript and Python backends to manage secure transfer of information",
                "PHP sites. Including Wordpress knowledge.",
                "Using HTML and CSS with design principles to create stunning UIs."
            ]
        },
        "extra": {
            "title": "Additional Skills",
            "text": "I have worked with various other technologies and concepts to complement my other skills, including:",
            "list": [
                "Git / Github / Bitbucket",
                "Strong understanding of Java and object oriented programming",
                "Software Developement Lifecycles",
                "Client and Customer Relations",
                "Container technology using Docker (Interested in equivalent technologies such as Kubernetes as well).",
                "Familiar using offsight servers to run jobs and applications."
            ]
        },
    };

    //Slow pulse animation to be used by multiple divs in render/return
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


    return (
        <Row>
            {!isMobile &&
            <Col sm="4">
                <Row>
                    {(activeSkill !== "data") ?
                        <animated.div style={ pulseAnimation } onClick={() => setActiveSkill("data")} className={"skill-title-box" + darkModeClass}>
                            DATA
                        </animated.div>
                        :
                        <div onClick={() => setActiveSkill("data")} className={"skill-title-box-active" + darkModeClass}>
                            DATA
                        </div>
                    }
                </Row>
                <Row>
                    {(activeSkill !== "web") ?
                        <animated.div style={ pulseAnimation } onClick={() => setActiveSkill("web")} className={"skill-title-box" + darkModeClass}>
                            WEB
                        </animated.div>
                        :
                        <div onClick={() => setActiveSkill("web")} className={"skill-title-box-active" + darkModeClass}>
                            WEB
                        </div>
                    }
                </Row>
                <Row>
                    {(activeSkill !== "extra") ?
                        <animated.div style={ pulseAnimation } onClick={() => setActiveSkill("extra")} className={"skill-title-box" + darkModeClass}>
                            EXTRA
                        </animated.div>
                        :
                        <div onClick={() => setActiveSkill("extra")} className={"skill-title-box-active" + darkModeClass}>
                            EXTRA
                        </div>
                    }
                </Row>
            </Col>}
            {isMobile &&
            <Col xs="11" className="skill-title-box-container-mobile">
                    {(activeSkill !== "data") ?
                        <animated.div style={ pulseAnimation } onClick={() => setActiveSkill("data")} className={"skill-title-box" + darkModeClass}>
                            DATA
                        </animated.div>
                        :
                        <div onClick={() => setActiveSkill("data")} className={"skill-title-box-active" + darkModeClass}>
                            DATA
                        </div>
                    }
                    {(activeSkill !== "web") ?
                        <animated.div style={ pulseAnimation } onClick={() => setActiveSkill("web")} className={"skill-title-box" + darkModeClass}>
                            WEB
                        </animated.div>
                        :
                        <div onClick={() => setActiveSkill("web")} className={"skill-title-box-active" + darkModeClass}>
                            WEB
                        </div>
                    }
                    {(activeSkill !== "extra") ?
                        <animated.div style={ pulseAnimation } onClick={() => setActiveSkill("extra")} className={"skill-title-box" + darkModeClass}>
                            EXTRA
                        </animated.div>
                        :
                        <div onClick={() => setActiveSkill("extra")} className={"skill-title-box-active" + darkModeClass}>
                            EXTRA
                        </div>
                    }
            </Col>}
            <Col xs="11" md="8">
                <h2>{skillInfo[activeSkill]["title"]}</h2>
                <p className="shrink-mobile-text">{skillInfo[activeSkill]["text"]}</p>
                <ul className="shrink-mobile-text">
                    {skillInfo[activeSkill]["list"].map((item, index) =>
                        <li key={index}>
                            {item}
                        </li>
                    )}
                </ul>
            </Col>
        </Row>
    );
}