class CarColor {
    constructor(public color: string) {}
}

class CarColorFactory {
    private static colors: Map<string, CarColor> = new Map();

    static getColor(name: string): CarColor {
        let color = this.colors.get(name);
        if (!color) {
            color = new CarColor(name);
            this.colors.set(name, color);
        }
        return color;
    }
}

class Car {
    constructor(public color: CarColor, public model: string, public make: string) {}
}

const cars: Car[] = [];

for (let i = 0; i < 1000; i++) {
    const make = `Make${i}`;
    const model = `Tesla${i}`;
    const color = `White`;
    const carColor = CarColorFactory.getColor(color);
    
    const car = new Car(carColor, model, make);
    cars.push(car);
}

console.log(`Total cars created: ${cars.length}`);