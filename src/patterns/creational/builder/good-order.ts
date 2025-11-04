class Order {
    userId!: number
    items: { name: string, price: number }[] = []
    address?: string
    discount?: number
    notes?: string
    isPaid: boolean = false
}

class OrderBuilder {
    private order = new Order()

    setUserId(userId: number): this {
        this.order.userId = userId
        return this
    }

    addItem(name: string, price: number): this {
        this.order.items.push({ name, price })
        return this
    }

    setDiscount(discount: number): this {
        this.order.discount = discount
        return this
    }

    setAddress(address: string): this {
        this.order.address = address
        return this
    }

    setNotes(notes: string): this {
        this.order.notes = notes
        return this
    }

    setIsPaid(isPaid: boolean): this {
        this.order.isPaid = isPaid
        return this
    }


    build() {
        if (!this.order.userId) throw new Error("UserId is required.")

        if (!this.order.items.length) throw new Error("Min one item is required.")

        if (this.order.discount! > 100 || this.order.discount! < 0) throw new Error("Invalid percent discount.")

        //* Calculate discount for order items.
        this.order.items = this.order.items.map(item => {
            const { discount } = this.order
            if (discount) {
                const finalPrice = item.price - (item.price * discount / 100)
                return { ...item, price: finalPrice }
            }

            return item
        })

        const builtOrder = this.order;
        this.order = new Order();

        return Object.freeze(builtOrder);
    }
}

const orderBuilder = new OrderBuilder()
    .setUserId(1)
    .setAddress('Iran Mashhad')
    .setDiscount(50)
    .setNotes("This is a new order")
    .setIsPaid(true)
    .addItem('laptop', 1000)
    .addItem('mouse', 500)
    .build()

console.log(orderBuilder)