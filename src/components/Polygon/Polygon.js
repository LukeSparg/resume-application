import React, { useState } from "react";
import './style.css';

export class Polygon {

    constructor() {
        this.vertex1 = [this.random(20, 100), this.random(0, 30)];
        this.vertex2 = [this.random(80, 120), this.random(80, 120)];
        this.vertex3 = [this.random(0, 80), this.random(80, 120)];
        this.position = [this.random(-50, 500), this.randomExluding(-10, 100, 7, 70)]
        this.display = "inline";
    }

    random(min, max) {
        return(Math.random() * (max-min) + min);
    }

    randomExluding(min, max, minExclude, maxExclude) {
        var number = Math.random() * ((max - min) - (maxExclude - minExclude)) + min;
        if(number > minExclude) {
            number += maxExclude - minExclude;
        }
        return number;
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
        if(this.position[0] < -10) {
            this.display = "none";
        } else {
            this.display = "inline";
        }
        if(this.position[0] < -30) {

            this.position[0] = 200 + this.random(10, 150);
        } else {
            this.position[0] = this.position[0] - (20 + (this.position[0] / 4));
        }
    }

}