class BadNotificationService {
    send(email: string , message: string){
        //Handle logic for sending email for example with nodemailer in nodejs
        console.log(`Waiting for send email to ${email} with message ${message}`)
        
        console.log(`Email sent to ${email} with message ${message}`)
    }
}

class UserNotifier {
    private notificationService: BadNotificationService

    constructor() {
        this.notificationService = new BadNotificationService()
     }

    notifyUser(email: string, message: string) {
        this.notificationService.send(email, message)
    }
}

const notifier = new UserNotifier()

notifier.notifyUser("example@gmail.com" , 'Hello user')

const notification = new BadNotificationService()

notification.send('example@gmail.com' , 'Hello user')