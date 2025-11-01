interface ICalculator {
    calculate(items: { name: string; price: number }[]): number;
}

class PriceCalculator implements ICalculator {
    calculate(items: { name: string; price: number }[]): number {
        return items.reduce((t, i) => t + i.price, 0);
    }
}

class DiscountService {
    constructor(private discountRate: number) { }
    applyDiscount(amount: number): number {
        if (amount > 500_000) {
            return amount - (amount * this.discountRate / 100);
        }
        return amount;
    }
}

class Order {
    constructor(
        public items: { name: string; price: number }[],
        private calculator: ICalculator,
        private discountService: DiscountService
    ) { }

    finalizeOrder(): string {
        const total = this.calculator.calculate(this.items);
        const discounted = this.discountService.applyDiscount(total);
        return `Order finalized. Final amount: ${discounted}`;
    }
}

const calculator = new PriceCalculator()

const discountService = new DiscountService(10)

const order = new Order([{ name: "laptop", price: 10000 }], calculator, discountService)

console.log(order.finalizeOrder())