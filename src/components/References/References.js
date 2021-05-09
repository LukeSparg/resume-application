import React, { useState, useEffect } from "react";
import { Row, Col, Container, Button, ButtonGroup } from "reactstrap";
import './style.css';

export const References = ({ darkModeClass }) => {

    return (
        <div className="references-container">
            <Row>
                <Col xs="11" md="12" className="shrink-mobile-text-sm">
                    <p className="reference-quote">
                        "... I would highly recommend Luke to anyone.
                        He is a very well-rounded individual and is capable of working alone or in a team environment.
                        He was always a pleasure to work with and very easy going.
                        Luke will always ne one of those employees that stand out to me.
                        We have built an amazing relationship over the years and I am so grateful for everything he has supported me in to help me run two successful businesses."
                    </p>
                    <p className="reference-extra-info">
                        Heather Corth, May 2021
                        <br />
                        Luke's Team Lead For Over 5 Years.
                    </p>
                </Col>
            </Row>
            <Col xs="11" md="12">
                <Row className={"divider" + darkModeClass} />
            </Col>
            <Row>
                <Col xs="11" md="12">
                    <p>
                        For the full reference, as well as additional references, please contact me in the contact tab.
                    </p>
                </Col>
            </Row>
        </div>
    );
}