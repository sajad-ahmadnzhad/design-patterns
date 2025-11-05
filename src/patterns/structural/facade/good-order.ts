class UserService {
    getUser(userId: string) {
        // Simulate fetching user data
        return { id: userId, name: "John Doe" };
    }
}

class InventoryService {
    checkStock(itemId: string) {
        // Simulate checking stock
        return itemId === "item1" ? 10 : 0;
    }
}

class PaymentService {
    processPayment(userId: string, amount: number) {
        // Simulate payment processing
        return true;
    }
}

class ShippingService {
    arrangeShipping(userId: string, itemId: string) {
        // Simulate arranging shipping
        return { trackingId: "TRACK12345" };
    }
}

class EmailService {
    sendOrderConfirmation(userId: string, orderDetails: any) {
        // Simulate sending email
        console.log(`Order confirmation sent to user ${userId}`);
    }
}

class OrderFacade {
    constructor(
        private readonly userService: UserService,
        private readonly inventoryService: InventoryService,
        private readonly paymentService: PaymentService,
        private readonly shippingService: ShippingService,
        private readonly emailService: EmailService
    ) { }

    placeOrder(userId: string, itemId: string, amount: number) {
        const user = this.userService.getUser(userId);
        const stock = this.inventoryService.checkStock(itemId);
        if (stock <= 0) {
            throw new Error("Item is out of stock");
        }
        const paymentSuccess = this.paymentService.processPayment(user.id, amount);
        if (!paymentSuccess) {
            throw new Error("Payment failed");
        }
        const shipping = this.shippingService.arrangeShipping(user.id, itemId);
        this.emailService.sendOrderConfirmation(user.id, { itemId, trackingId: shipping.trackingId });
    }
}

const userService = new UserService();
const inventoryService = new InventoryService();
const paymentService = new PaymentService();
const shippingService = new ShippingService();
const emailService = new EmailService();

const orderFacade = new OrderFacade(userService, inventoryService, paymentService, shippingService, emailService);
orderFacade.placeOrder("user1", "item1", 100);