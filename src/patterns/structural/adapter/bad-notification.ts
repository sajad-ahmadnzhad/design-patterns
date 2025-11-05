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

class NotificationService {
    send(type: 'TWILIO' | "SEND_GRID" | "FIREBASE", data: any) {
        if (type == 'FIREBASE') return new FirebaseClient().pushNotification(data.token, data.message)
        if (type == 'SEND_GRID') return new SendGridClient().senEmail(data)
        if (type == 'TWILIO') return new TwilioClient().sendSms(data.mobile, data.message)
    }
}

const notificationService = new NotificationService()

notificationService.send('TWILIO', { mobile: '099999231', message: 'hello user welcome.' })

notificationService.send('SEND_GRID', { message: "hello user welcome.", subject: "Hello", to: "test@gmail.com" })

notificationService.send('FIREBASE', { token: '<TOKEN>', message: 'hello user welcome.' })