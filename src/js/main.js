class Circle {
    constructor(radius) {
        this.circRadius = radius;
    }

    get radius() {
        return this.circRadius;
    }

    set radius(numR) {
        if (numR == 0) {
            console.log('The radius number is incorrect');
        } else {
            this.circRadius += numR;
        }  
    }

    get diameter() {
        return this.circRadius * 2;
    }

    circArea() {
        return (this.circRadius ** 2) * Math.PI;
    }

    circLength() {
        return 2 * Math.PI * this.circRadius;
    }
}

let circOne = new Circle(7);

console.log(circOne);
console.log(circOne.radius);
console.log(circOne.diameter);
console.log(circOne.circArea());
console.log(circOne.circLength());
