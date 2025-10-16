interface NotificationService {
    send(identifier: string, message: string): void
}

class EmailNotification implements NotificationService {
    send(email: string, message: string): void {
        //Handle logic for sending email for example with nodemailer in nodejs
        console.log(`Waiting for send email to ${email} with message ${message}`)

        console.log(`Email sent to ${email} with message ${message}`)
    }
}

class PushNotification implements NotificationService {
    send(pushNotificationStr: string, message: string): void {
        //Handle logic for sending push notification for example with webpush in nodejs
        console.log(`Waiting for send notification to ${pushNotificationStr} with message ${message}`)

        console.log(`Notification sent to ${pushNotificationStr} with message ${message}`)
    }
}

class UserNotifier {
    constructor(private notificationService: NotificationService) { }

    notifyUser(identifier: string, message: string) {
        this.notificationService.send(identifier, message)
    }
}

const emailService = new EmailNotification()

const notifier = new UserNotifier(emailService)

notifier.notifyUser('example@gmail.com', 'Hello user')

const emailNotification = new EmailNotification()

emailNotification.send('example@gmail.com', 'Hello user')

const pushNotification = new PushNotification()

pushNotification.send('<PUSH NOTIFICATION JSON>', 'Hello user')

