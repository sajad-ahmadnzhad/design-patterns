interface INotificationSender<T> {
    send(...args: T[]): T
}

//* Aliases for payloads
type TwilioPayload = { mobile: string; message: string }
type SendGridPayload = { to: string; subject: string; message: string }
type FirebasePayload = { token: string; message: string }

//* SDKs
class TwilioClient {
    sendSms(mobile: string, message: string) {
        //* Handle logic
        console.log(`Sms sent to ${mobile} with message: ${message} successfully.`)
    }
}

class SendGridClient {
    senEmail({ to, subject, message }: { to: string, subject: string, message: string }) {
        //* Handle logic
        console.log(`Email sent to ${to} with message: ${message} successfully.`)
    }
}

class FirebaseClient {
    pushNotification(token: string, message: string) {
        //* Handle logic
        console.log(`push notification sent to ${token} with message: ${message} successfully.`)
    }
}

//* Adapters
class TwilioAdapter implements INotificationSender<TwilioPayload> {
    constructor(private readonly twilioClient: TwilioClient) { }

    send(data: TwilioPayload): any {
        this.twilioClient.sendSms(data.mobile, data.message)
    }
}

class SendGridAdapter implements INotificationSender<SendGridPayload> {
    constructor(private readonly sendGrideClient: SendGridClient) { }

    send(data: SendGridPayload): any {
        this.sendGrideClient.senEmail(data)
    }
}

class FirebaseAdapter implements INotificationSender<FirebasePayload> {
    constructor(private readonly firebaseClient: FirebaseClient) { }

    send(data: FirebasePayload): any {
        this.firebaseClient.pushNotification(data.token, data.message)
    }
}

class NotificationService<T> {
    constructor(private readonly adapter: INotificationSender<T>) { }

    send(data: T): any {
        this.adapter.send(data)
    }
}

const twilioNotification = new NotificationService(new TwilioAdapter(new TwilioClient()))

twilioNotification.send({ mobile: '099999231', message: 'hello user welcome.' })

const sendGridNotification = new NotificationService(new SendGridAdapter(new SendGridClient()))

sendGridNotification.send({ message: "hello user welcome.", subject: "Hello", to: "test@gmail.com" })

const firebaseNotification = new NotificationService(new FirebaseAdapter(new FirebaseClient()))

firebaseNotification.send({ token: "<Token>", message: 'hello user welcome.' })