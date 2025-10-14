interface DiscountStrategy {
    calculate(price: number, value: number): number
}

class CloseDiscount implements DiscountStrategy {
    calculate(price: number, value: number): number {
        const appliedDiscount = price -= value
        return appliedDiscount
    }
}

class NearDiscount implements DiscountStrategy {
    calculate(price: number, value: number): number {
        //This is test logic
        return price -= value - 10
    }
}

class AwayDiscount implements DiscountStrategy {
    calculate(price: number, value: number): number {
        //This is test logic
        return price -= value - 100
    }
}

const closedDiscount = new CloseDiscount()
const nearDiscount = new NearDiscount()
const awayDiscount = new AwayDiscount()

closedDiscount.calculate(120000, 20000)
nearDiscount.calculate(100000, 10000)
awayDiscount.calculate(300000, 90000)