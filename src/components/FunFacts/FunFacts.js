import React, { useState, useEffect } from "react";
import { Row, Col, Container, Button, ButtonGroup } from "reactstrap";
import { ReactComponent as LinkedIn } from "../../assets/linkedin.svg"
import { ReactComponent as GitHub } from "../../assets/github.svg"
import { ReactComponent as Facebook } from "../../assets/facebook.svg"
import { ReactComponent as Instagram } from "../../assets/instagram.svg"
import emailjs from 'emailjs-com';
import './style.css';
import { constrainLoop, random } from "../../function/MathFunction";

export const FunFacts = ({ darkModeClass, eventState }) => {

    const facts = [
        ["I play the violin.", "(would love to be able to play Czardas by Monti one day)"],
        "I lived in Ireland from ages 2-4, but I don't remember it.",
        "I played the concert bells in highschool band.",
        ["I wanted to be a paleontologist when I was younger.", "(what kid doesn't love dinosaurs)"],
        "My favourite Hogwarts house is Hufflepuff.",
        "'Friends' is my favourite sitcom.",
        ["My favourite strange word is 'jentacular.'", "(jen-TAK-yuh-luhr) adjective: Relating to breakfast."],
        ["My name is 01001100 01110101 01101011 01100101 in binary.", "(using ASCII)"],
        ["When I started learning to program I learnt JavaScript thinking it was Java.", "(Wow, how far we've come)"],
        "My first pet was named Danny and he was a small white dog.",
        "I was born in South Africa. But moved when I was only 2 years old.",
        "I am constantly surprised by how good the 'Measure' app is on iOS.",
        "I am on the cusp of aquarius and pisces.",
        "I find brushing my teeth to be quite therapeutic."
    ];
    const [currentFactIndex, setCurrentFactIndex] = useState(Math.floor(random(0, facts.length)));

    useEffect(() => {
        setCurrentFactIndex(constrainLoop(currentFactIndex + 1, 0, facts.length));
    }, [eventState]);

    return (
        <div>
            <p>
                Fun Fact: 
                <br />
                {(facts[currentFactIndex].length === 2) ?
                    <div id={currentFactIndex} className="fun-facts-text">
                        {facts[currentFactIndex][0]}
                        <br />
                        {facts[currentFactIndex][1]}
                    </div>
                    :
                    <div id={currentFactIndex} className="fun-facts-text">
                        {facts[currentFactIndex]}
                    </div>
                }
            </p>
        </div>
    );
}