interface IUser {
    id: number
    name: string
    address: string
    walletAmount: number
}

class User {

    private data: IUser = {
        id: 1,
        name: "sajad",
        address: "Iran",
        walletAmount: 0
    }

    constructor() { }

    getWalletAmount(): number {
        return this.data.walletAmount;
    }

    addToWallet(amount: number): void {
        this.data.walletAmount += amount;
    }

    getId(): number {
        return this.data.id;
    }

}

class BankAccount {
    constructor(public readonly user: User) { }

    addAmount(userId: number, amount: number): number | void {
        const idOfUser = this.user.getId();

        if (userId == idOfUser) {
            console.log(`Amount: ${amount} add to user: ${userId} wallet.`)
            return this.user.addToWallet(amount);
        }

        console.error("User not found")
    }

    getBalance(userId: number): number | null {
        const idOfUser = this.user.getId();
        if (userId == idOfUser) {
            return this.user.getWalletAmount();
        }
        return null;
    }
}

class Balance {
    constructor(public readonly bankAccount: BankAccount) { }

    getUserBalance(userId: number): number | null | void {
        const balance = this.bankAccount.getBalance(userId);
        if (balance !== null) {
            return balance;
        }

        console.error("User not found.")
    }
}

const user = new User()

const bankAccount = new BankAccount(user)

bankAccount.addAmount(1, 4000)

const balance = new Balance(bankAccount)

console.log(balance.getUserBalance(1))