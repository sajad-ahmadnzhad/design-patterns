class DatabaseConnection {
    connect() {
        console.log("connected to the database...");
    }
}

class AuthService {
    private readonly dbConnection: DatabaseConnection = new DatabaseConnection();

    registerUser(username: string, password: string) {

        console.log("Connecting to the database...");
        this.dbConnection.connect();

        console.log(`Registering user: ${username}`);
    }

    loginUser(username: string, password: string) {
        console.log("Connecting to the database...");
        this.dbConnection.connect();

        console.log(`Logging in user: ${username}`);
    }
}

class OrderService {
    private readonly dbConnection: DatabaseConnection = new DatabaseConnection();

    createOrder(userId: string, product: string) {
        console.log("Connecting to the database...");
        this.dbConnection.connect();

        console.log(`Creating order for user: ${userId} for product: ${product}`);
    }

    cancelOrder(orderId: string) {
        console.log("Connecting to the database...");
        this.dbConnection.connect();

        console.log(`Cancelling order: ${orderId}`);
    }
}

const authService = new AuthService();
const orderService = new OrderService();

authService.registerUser("john_doe", "password123");
orderService.createOrder("user_1", "laptop");