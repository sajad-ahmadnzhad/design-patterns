interface PaymentService {
    pay(amount: number): void
}

class PaypalService implements PaymentService {
    pay(amount: number): void {
        //Handle logic for paypal payment
        console.log(`payment ${amount} with paypal`)
    }
}

const paypalService = new PaypalService()
paypalService.pay(100)


class ZarinpalService implements PaymentService {
    pay(amount: number): void {
        //Handle logic for zarinpal payment
        console.log(`payment ${amount} with zarinpal`)
    }
}

const zarinpalService = new ZarinpalService()
zarinpalService.pay(10000)


class CreditCardService implements PaymentService {
    pay(amount: number): void {
        //Handle logic for credit card payment
        console.log(`payment ${amount} with credit card`)
    }
}

const creditCardService = new CreditCardService()
creditCardService.pay(100)

class UserPayment {
    constructor(private paymentService: PaymentService) { }

    payment(amount: number) {
        this.paymentService.pay(amount)
    }
}

const paypalPaymentService = new PaypalService()
const userPayment = new UserPayment(paypalPaymentService)

userPayment.payment(100)