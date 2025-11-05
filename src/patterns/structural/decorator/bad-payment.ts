class PaymentService {
    pay(userId: number, amount: number): void {
        console.log(`[LOG] Starting payment for user ${userId}`);
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

        console.log(`[LOG] Payment successful for user ${userId}, amount ${amount}`);
    }
}

// Usage
const paymentService = new PaymentService();
paymentService.pay(1, 100);