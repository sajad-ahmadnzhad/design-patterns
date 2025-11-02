interface INotification {
    send(message: string): void;
}

class EmailNotification implements INotification {
    send(message: string): void {
        console.log(`Email Notification: ${message}`);
    }
}

class SMSNotification implements INotification {
    send(message: string): void {
        console.log(`SMS Notification: ${message}`);
    }
}

class PushNotification implements INotification {
    send(message: string): void {
        console.log(`Push Notification: ${message}`);
    }
}

class NotificationFactory {
    static createNotification(type: 'EMAIL' | 'SMS' | "PUSH"): INotification {
        switch (type) {
            case 'EMAIL':
                return new EmailNotification();
            case 'SMS':
                return new SMSNotification();
            case 'PUSH':
                return new PushNotification();
            default:
                throw new Error('Unknown notification type');
        }
    }
}

// Usage
const notificationType = 'EMAIL'; // This could come from user input or configuration
const notification = NotificationFactory.createNotification(notificationType);
notification.send('This is a test notification.');