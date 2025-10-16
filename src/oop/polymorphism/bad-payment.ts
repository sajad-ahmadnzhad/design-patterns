class PaymentService {
    pay(type: "ZARINPAL" | "PAYPAL" | "CREDIT_CARD" , amount: number){
        if(type == 'ZARINPAL') {} //Handel logic for zarinpal
        if(type == 'PAYPAL') {} //Handel logic for paypal
        if(type == 'CREDIT_CARD') {} //Handel logic for credit card
    }
}

const payment = new PaymentService()

payment.pay('PAYPAL' , 2000)