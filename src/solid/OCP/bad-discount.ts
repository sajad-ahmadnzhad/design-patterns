class BadDiscountCalculator {
    apply(price: number, type: 'close' | 'near' | 'away', value: number) {
        if (type == 'close') {
            const appliedDiscount = price -= value
            return appliedDiscount
        } else if (type == 'near') {
            //This is test logic
            return price -= value - 10
        } else if (type == 'away') {
            //This is test logic
            return price -= value - 100
        }
    }

}

const discount = new BadDiscountCalculator()

discount.apply(120000, 'away', 20000)
discount.apply(100000, 'close', 10000)
discount.apply(300000, 'away', 90000)