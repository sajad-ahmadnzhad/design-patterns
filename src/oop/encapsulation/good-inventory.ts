class GoodInventory {
    private balance: number = 0;

    addFunds(fund: number) {
        if (fund <= 0) throw new Error('Invalid fund amount');
        this.balance += fund;
    }

    withdraw(amount: number) {
        if (amount > this.balance) throw new Error('Insufficient balance');
        this.balance -= amount;
    }

    getBalance() {
        return this.balance;
    }
}

const inventory = new GoodInventory()

//Not access
// inventory.balance += 200

inventory.withdraw(2000)

inventory.addFunds(100)