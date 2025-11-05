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

const userService = new UserService();
const inventoryService = new InventoryService();
const paymentService = new PaymentService();
const shippingService = new ShippingService();
const emailService = new EmailService();

const user =userService.getUser("user1");
const inventory = inventoryService.checkStock("item1");
const payment = paymentService.processPayment(user.id, 100);
const shipping = shippingService.arrangeShipping(user.id, "item1");
emailService.sendOrderConfirmation(user.id, { itemId: "item1", trackingId: shipping.trackingId });