// function wrapInArray<T>(value: T): T[] { return [value] }
class Car {
    constructor(brand, speed) {
        this.brand = brand,
            this.speed = speed;
    }
    drive() {
        console.log(`dirving ${this.brand} with speed ${this.speed}`);
    }
}
