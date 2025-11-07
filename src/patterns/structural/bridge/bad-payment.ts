class CreditCardNormalOrder {
    pay(amount: number): void {
        console.log(`Processing normal order payment of $${amount} using Credit Card.`);
    }
}

class PaypalNormalOrder {
    pay(amount: number): void {
        console.log(`Processing normal order payment of $${amount} using PayPal.`);
    }
}

class CreditCardPremiumOrder {
    pay(amount: number): void {
        console.log(`Processing premium order payment of $${amount} using Credit Card.`);
    }
}

class PaypalPremiumOrder {
    pay(amount: number): void {
        console.log(`Processing premium order payment of $${amount} using PayPal.`);
    }
}

// Usage
const creditCardNormalOrder = new CreditCardNormalOrder();
const paypalPremiumOrder = new PaypalPremiumOrder();
const creditCardPremiumOrder = new CreditCardPremiumOrder();
const paypalNormalOrder = new PaypalNormalOrder();

creditCardNormalOrder.pay(100);
paypalPremiumOrder.pay(200);
creditCardPremiumOrder.pay(300);
paypalNormalOrder.pay(400);