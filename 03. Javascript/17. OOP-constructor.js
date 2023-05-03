// simplemente las funciones, tienen el prototipo (propiedades default) fuera
function Color(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
}
Color.prototype.default = "Black";

const color1 = new Color(255, 40, 100);



// usando clases
class Car {
    constructor (make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    turnOn() {
        return `${this.model} turned on the engines!`
    }
    color = "white"
}
const car1 = new Car ("Mercedes", "180 sport", 1999)