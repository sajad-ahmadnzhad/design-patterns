interface IPaymentService {
    pay(userId: number, amount: number): void;
}

class PaymentService implements IPaymentService {
    pay(userId: number, amount: number): void {
        console.log(`[LOG] Payment successful for user ${userId}, amount ${amount}`);
    }
}

abstract class PaymentDecorator implements IPaymentService {
    constructor(protected readonly wrappee: IPaymentService) { }

    abstract pay(userId: number, amount: number): void;
}

class LoggingDecorator extends PaymentDecorator {
    pay(userId: number, amount: number): void {
        console.log(`[LOG] Starting payment for user ${userId}`);
        this.wrappee.pay(userId, amount);
    }
}

class RetryDecorator extends PaymentDecorator {
    pay(userId: number, amount: number): void {
        let success = false;
        for (let i = 0; i < 3; i++) {
            console.log(`[LOG] Attempt ${i + 1}...`);
            success = Math.random() > 0.3; // simulate payment gateway
            if (success) break;
        }
        if (!success) {
            console.log(`[ERROR] Payment failed after 3 retries.`);
            return;
        }
        this.wrappee.pay(userId, amount);
    }
}


// Usage
const paymentService = new PaymentService();
const loggingPaymentService = new LoggingDecorator(paymentService);
const retryPaymentService = new RetryDecorator(loggingPaymentService);
retryPaymentService.pay(1, 100);