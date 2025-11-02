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
}

class Balance {
    constructor(public readonly bankAccount: BankAccount) { }

    getUserBalance(): number | null | void {
        return this.bankAccount.user.getWalletAmount();
    }
}

const user = new User()

const bankAccount = new BankAccount(user)

bankAccount.addAmount(1, 4000)

const balance = new Balance(bankAccount)

console.log(balance.getUserBalance())