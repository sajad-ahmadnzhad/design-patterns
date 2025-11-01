class Order {
    private discountRate: number = 10; // percentage

    constructor(public items: { name: string, price: number }[]) { }

    calculateTotal(): number {
        return this.items.reduce((total, item) => total + item.price, 0);
    }

    finalizeOrder(): string {
        const total = this.calculateTotal();

        if (total > 500_000) {
            const discount = this.discountRate / 100 * total;
            const discountedTotal = total - discount;
            return `Order finalized. Total amount after ${this.discountRate}% discount: $${discountedTotal}`;
        }

        return `Order finalized. Total amount: $${total}`;
    }
}

const order = new Order([
    { name: 'Laptop', price: 500_000 },
    { name: 'Mouse', price: 100_000 },
]);

console.log(order.finalizeOrder());