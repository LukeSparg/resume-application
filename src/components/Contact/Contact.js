import React, { useState, useEffect } from "react";
import { Row, Col, Container, Button, ButtonGroup } from "reactstrap";
import emailjs from 'emailjs-com';
import './style.css';

export const Contact = ({ darkModeClass }) => {

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
                <Col>
                    <a href="https://linkedin.com/in/luke-sparg">LinkedIn</a>
                </Col>
            </Row>
            <Row className={"divider" + darkModeClass} sm="12" />
            <Row>
                <Col>
                    <a href="https://github.com/LukeSparg">GitHub</a>
                </Col>
            </Row>
            <Row className={"divider" + darkModeClass} sm="12" />
            <form onSubmit={handleSubmit}>
                <h3>Send me a message here:</h3>
                <p>Please include the best way for me to contact you.</p>
                <textarea className="contact-info-text-area" onChange={e => setFormInfo(e.target.value)} />
                <button className="contact-info-submit-button" type="submit">Send Message</button>
                {formSubmitMessage && <p className="contact-info-submit-message">{formSubmitMessage}</p>}
            </form>
        </div>
    );
}