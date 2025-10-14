abstract class NotificationService {
    abstract send(message: string): void
}

class EmailNotification extends NotificationService {
    send(message: string): void {
        
        if(message.length ==0){
             throw new Error("Message is empty.")
        }

        //Handle logic for send email notification
    }
}

class PushNotification extends NotificationService {
    send(message: string): void {
        //Handle good logic for send push notification
    }
}

class SmsNotification extends NotificationService {
    send(message: string): void {
        //Handle good logic for send sms notification
    }
}

const sms = new SmsNotification()
const push = new PushNotification()
const email = new EmailNotification()