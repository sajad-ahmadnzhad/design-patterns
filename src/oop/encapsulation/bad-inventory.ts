class BadInventory {
    public balance: number = 0;

    addFunds(fund: number) {
        if (fund <= 0) throw new Error('Invalid fund amount');
        this.balance += fund;
    }

    withdraw(amount: number) {
        if (amount > this.balance) throw new Error('Insufficient balance');
        this.balance -= amount;
    }
}

const inventory = new BadInventory()

inventory.balance += 200

inventory.withdraw(100)

inventory.addFunds(100)