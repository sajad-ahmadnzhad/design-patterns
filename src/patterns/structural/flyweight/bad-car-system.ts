class Car {
    constructor(public make: string, public model: string, public color: string) {}
}

const cars: Car[] = []

for (let i = 0; i < 1000; i++) {
    const make = `Make${i}`;
    const model = `Tesla${i}`;
    const color = `White`;
    const car = new Car(make, model, color);
    cars.push(car);
}

console.log(`Total cars created: ${cars.length}`);