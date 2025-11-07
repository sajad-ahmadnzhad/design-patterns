interface PaymentOrder {
    pay(amount: number): void;
}

class CreditCardPayment implements PaymentOrder {
    pay(amount: number): void { 
        console.log(`Processing payment of $${amount} using Credit Card.`);
    }
}

class PaypalPayment implements PaymentOrder {
    pay(amount: number): void {
        console.log(`Processing payment of $${amount} using PayPal.`);
    }
}

abstract class Order {
    constructor(protected paymentMethod: PaymentOrder) { }

    abstract processOrder(amount: number): void;
}

class NormalOrder extends Order {
    processOrder(amount: number): void {
        console.log("Processing normal order.");
        this.paymentMethod.pay(amount);
    }
}

class PremiumOrder extends Order {
    processOrder(amount: number): void {
        console.log("Processing premium order.");
        this.paymentMethod.pay(amount);
    }
}

// Usage
const normalOrderWithCreditCard = new NormalOrder(new CreditCardPayment());
const premiumOrderWithPaypal = new PremiumOrder(new PaypalPayment());

normalOrderWithCreditCard.processOrder(100);
premiumOrderWithPaypal.processOrder(200);