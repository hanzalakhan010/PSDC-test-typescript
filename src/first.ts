// function wrapInArray<T>(value: T): T[] { return [value] }

// class Animal {

//     name: string;

//     constructor(name: string) {

//         this.name = name;

//     }

// }

// class Dog extends Animal {

//     bark() {

//         console.log(this.name + " barks!");

//     }

// }

// let dog = new Dog('Doggy');

// dog.bark();

// function addNumbers(num1: number, num2: number): number {
//     return num1 + num2

// }

// type User = {
//     id:string,
//     name:string,
//     email?:string
// }

interface Vehicle {
    brand: string,
    speed: number,
    drive():void
}

class Car<Vehicle> {
    brand: string
    speed: number
    constructor(brand: string, speed: number) {
        this.brand = brand,
        this.speed = speed
    }
    drive(){
        console.log(`dirving ${this.brand} with speed ${this.speed}`)
    }
}