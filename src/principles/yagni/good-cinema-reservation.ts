class ReservationTable {
    reserve(tableId: number, userId: number) {
        console.log(`Reserved table: ${tableId} for user: ${userId}`)
    }
}

const reservationTable = new ReservationTable()

reservationTable.reserve(1, 2)