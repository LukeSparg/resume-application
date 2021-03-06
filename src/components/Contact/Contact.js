import React, { useState, useEffect } from "react";
import { Row, Col, Container, Button, ButtonGroup } from "reactstrap";
import { ReactComponent as LinkedIn } from "../../assets/linkedin.svg"
import { ReactComponent as GitHub } from "../../assets/github.svg"
import { ReactComponent as Facebook } from "../../assets/facebook.svg"
import { ReactComponent as Instagram } from "../../assets/instagram.svg"
import emailjs from 'emailjs-com';
import './style.css';

export const Contact = ({ darkModeClass, isMobile }) => {

    const [formInfo, setFormInfo] = useState("");
    const [formSubmitMessage, setFormSubmitMessage] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        emailjs.send(
            'service_77gbuba', 'template_s184sru',
            { message: formInfo}, "user_eMTatA4BoHGt8OFMNZ4bw"
            ).then(res => {
                setFormSubmitMessage("Message Sent. I'll get back to you as soon as possible!");
            })
            // Handle errors here however you like, or use a React error boundary
            .catch(
                err => {
                    console.error('Oh well, you failed. Here some thoughts on the error that occured:', err)
                    setFormSubmitMessage("Message could not send! Please you one of the above links to contact me.");
                }
        );
    };

    return (
        <div className={"contact-info" + darkModeClass}>
            <Row>
                <Col xs="12" md="6">
                    <a href="https://linkedin.com/in/luke-sparg" target="_blank">
                        <LinkedIn className={"contact-info-link-icon" + darkModeClass} />
                        LinkedIn
                    </a>
                </Col>
                <Col xs="12" md="6" className="contact-info-link-right">
                    <a href="https://www.instagram.com/lukesparg/" target="_blank">
                        <Instagram className={"contact-info-link-icon" + darkModeClass} />
                        Instagram
                    </a>
                </Col>
            </Row>
            <Row>
                <Col xs="12" md="6">
                    <a href="https://github.com/LukeSparg" target="_blank">
                        <GitHub className={"contact-info-link-icon" + darkModeClass} />
                        GitHub
                    </a>
                </Col>
                <Col xs="12" md="6" className="contact-info-link-right">
                    <a href="https://www.facebook.com/luke.sparg" target="_blank">
                        <Facebook className={"contact-info-link-icon" + darkModeClass} />
                        Facebook
                    </a>
                </Col>
            </Row>
            <Row>
                <Col xs="12">
                    <Row className={"divider" + darkModeClass} />
                </Col>
            </Row>
            <Row>
                <Col xs="12">
                    <form onSubmit={handleSubmit}>
                        <h3 className="shrink-mobile-text-sm">Or send me a message here:</h3>
                        <p className="shrink-mobile-text-xs">Please include the best way for me to contact you.</p>
                        <textarea className="contact-info-text-area" onChange={e => setFormInfo(e.target.value)} />
                        <button className="contact-info-submit-button" type="submit">Send Message</button>
                        {formSubmitMessage && <p className="contact-info-submit-message">{formSubmitMessage}</p>}
                    </form>
                </Col>
            </Row>
        </div>
    );
}