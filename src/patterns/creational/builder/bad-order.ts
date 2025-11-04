class Order {
    constructor(
        private userId: number,
        private items: { name: string, price: number }[],
        private address?: string,
        private discount?: number,
        private notes?: string,
        private isPaid: boolean = false,
    ) { }

    finalizeOrder() {
        console.log("Order finalized success.")
        return { userId: this.userId, items: this.items, address: this.address, discount: this.discount, notes: this.notes, isPaid: this.isPaid }
    }
}

const order = new Order(1, [{ name: "laptop", price: 10000 }], undefined, 20, undefined, true)

console.log(order.finalizeOrder())