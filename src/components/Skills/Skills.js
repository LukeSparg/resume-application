import React, { useState, useEffect } from "react";
import { Row, Col, Container, Button, ButtonGroup } from "reactstrap";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { ReactComponent as ArrowLeft } from "../../assets/arrow-left.svg"
import { ReactComponent as ArrowRight } from "../../assets/arrow-right.svg"

import { constrainLoop } from "../../function/MathFunction";

import './style.css';

export const Skills = ({ darkModeClass }) => {

    const [activeSkill, setActiveSkill] = useState("data");
    const skillInfo = {
        "data": "Data Info",
        "web": "Web Info",
        "extra": "Extra Info",
    };


    return (
        <Row>
            <Col sm="4">
                <Row>
                    <div onClick={() => setActiveSkill("data")} className={"skill-title-circle" + ((activeSkill === "data") ? "-active" : "") + darkModeClass}>
                        DATA
                    </div>
                </Row>
                <Row>
                    <div onClick={() => setActiveSkill("web")} className={"skill-title-circle" + ((activeSkill === "web") ? "-active" : "") + darkModeClass}>
                        WEB
                    </div>
                </Row>
                <Row>
                    <div onClick={() => setActiveSkill("extra")} className={"skill-title-circle" + ((activeSkill === "extra") ? "-active" : "") + darkModeClass}>
                        EXTRA
                    </div>
                </Row>
            </Col>
            <Col sm="8">
                {skillInfo[activeSkill]}
            </Col>
        </Row>
    );
}