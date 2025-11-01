interface IDiscountStrategy {
    calculate(discountRage: number, price: number): number
}

class Discount implements IDiscountStrategy {
    calculate(discountRate: number, price: number): number {
        return price - (discountRate / 100 * price)
    }
}

class Score {
    movieScore(movieId: number): void {
        console.log(`Score added to movie: ${movieId}`)
    }
}

class ReservationTable {
    reserve(tableId: number, userId: number) {
        console.log(`Reserved table: ${tableId} for user: ${userId}`)
    }
}


const reservationTable = new ReservationTable()

reservationTable.reserve(1, 2)