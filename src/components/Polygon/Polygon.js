import React, { useState } from "react";
import './style.css';
import { random, randomExcluding, constrain } from "../../function/MathFunction";

export class Polygon {
    //Stores and manipulates data for a triangle

    constructor() {
        const { innerWidth: width, innerHeight: height } = window;

        //Randomizes triangle vertices
        this.vertex1 = [random(20, 100), random(0, 30)];
        this.vertex2 = [random(80, 120), random(80, 120)];
        this.vertex3 = [random(0, 80), random(80, 120)];
        if(height > width) {
            //For portrait orientation, we want more room in the middle
            this.position = [random(-50, 500), randomExcluding(-15, 100, -10, 95)]
        } else {
            //For landscape orientation, we want more polygon room
            this.position = [random(-50, 500), randomExcluding(-10, 100, 0, 80)]
        }
        this.display = "inline";
    }

    getVertices() {
        return([this.vertex1, this.vertex2, this.vertex3]);
    }

    getPosition() {
        return(this.position);
    }
    getDisplay() {
        return(this.display);
    }

    slide() {
        //moves the position of all triangle to the left

        const { innerWidth: width, innerHeight: height } = window;
        if((this.position[0] * width) / 100 < -300) {
            //makes triangles become invisible before moving them to the far right
            this.display = "none";
        } else {
            //makes triangles visible otherwise
            this.display = "inline";
        }
        if((this.position[0] * width) / 100 < -350) {
            //moves triangles to the far right, when they have moved left offscreen
            this.position[0] = 200 + random(10, 150);
        } else {
            //moves triangles to the left (more quickly the farther right they are)
            this.position[0] = this.position[0] - constrain((20 + (this.position[0] / 3)), 10, 75);
        }
    }

}