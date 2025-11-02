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

function sendNotification(type: 'EMAIL' | 'SMS' | 'PUSH', message: string): void {
    if (type === 'EMAIL') { 
        const notification = new EmailNotification();
        notification.send(message);
    } else if (type === 'SMS') {
        const notification = new SMSNotification();
        notification.send(message);
    } else if (type === 'PUSH') {
        const notification = new PushNotification();
        notification.send(message);
    } else {
        throw new Error('Unknown notification type');
    }
}
// Usage
const notificationType = 'EMAIL'; // This could come from user input or configuration
sendNotification(notificationType, 'This is a test notification.');