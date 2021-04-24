//Helpful functions

export function constrain(value, min, max) {
    //Constrain the value between min and max
    if(value < min) {
        return min;
    } else if(value > max) {
        return max;
    } else {
        return value;
    }
}
export function constrainLoop(value, min, max) {
    //Constrain the value between min (inclusive) and max (exclusive) additional offset loops
    //ie.   (2, 0, 3) => 2     (3, 0, 3) => 0       (16, 0, 10) => 6  
    if(value < min) {
        value = max + (value - min);
    }
    return min + ((value - min) % (max - min));
}


export function random(min, max) {
    //Selects a random value between min and max
    return(Math.random() * (max-min) + min);
}

export function randomExcluding(min, max, minExclude, maxExclude) {
    //Selects a random value between min and max, but not between minExclude and maxExclude
    //ie. (0, 10, 2, 5) produces a number between 0-10 but not 2-5  
    var number = (Math.random() * ((max - min) - (maxExclude - minExclude))) + min;
    if(number > minExclude) {
        number += maxExclude - minExclude;
    }
    return number;
}