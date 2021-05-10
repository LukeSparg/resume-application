import React from "react";
import { Col, Row } from "reactstrap";
import './style.css';

export const Education = ({ darkModeClass }) => {

    return (
        <Row>
            <Col xs="12">
                <h2 className={"text-shadow" + darkModeClass}>UNIVERSITY OF BRITISH COLUMBIA</h2>
                <h3 className="shrink-mobile-text-sm">BSc. (Hons.) in Computer Science</h3>
                <p className="shrink-mobile-text-sm">Since 2017, I have been completing a BSc. majoring in computer science. Throughout my education I have finished coursework in a variety of topics, some examples include:</p>
                <ul className="shrink-mobile-text-xs">
                    <li>Algorithm Design</li>
                    <li>Applying A.I.</li>
                    <li>Data Analysis and Interpretation</li>
                    <li>Data Structures</li>
                    <li>Database Creation and Management</li>
                    <li>Object Oriented Programming</li>
                    <li>Parallel Computing</li>
                    <li>Software Engineering Principles</li>
                    <li>Statistical Approaches to Machine Learning</li>
                    <li>Single and Multi Variable Calculus</li>
                    <li>Web Programming and Design</li>
                </ul>
            </Col>
        </Row>
    );
}