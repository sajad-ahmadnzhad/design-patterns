class DatabaseConnection {
    connect() {
        console.log("connected to the database...");
    }
}

class BaseService {
    protected dbConnection: DatabaseConnection;

    constructor() {
        this.dbConnection = new DatabaseConnection();
    }

    connectAndLog(action: string) {
        console.log(`Connecting to the database...`);
        this.dbConnection.connect();

        console.log(`${action} action performed.`);
    }
}

class AuthService extends BaseService {
    registerUser(name: string) {
        this.connectAndLog("Register User");

        console.log(`User ${name} registered successfully.`);
    }

    loginUser(name: string) {
        this.connectAndLog("Login User");

        console.log(`User ${name} logged in successfully.`);
    }
}

class OrderService extends BaseService {
    createOrder(userId: number, item: string) {
        this.connectAndLog("Creating order");
        console.log(`Order for user ${userId}: ${item} created successfully!`);
    }

    cancelOrder(orderId: number) {
        this.connectAndLog("Cancelling order");
        console.log(`Order ${orderId} cancelled successfully!`);
    }
}


const authService = new AuthService();
const orderService = new OrderService();

authService.registerUser("Ali");
orderService.createOrder(1, "Pizza");