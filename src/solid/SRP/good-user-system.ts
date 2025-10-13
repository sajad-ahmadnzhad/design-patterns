class GoodUserManagementService {

    constructor(
        private readonly fileSystem: FileSystem,
        private readonly notification: Notification,
        private readonly passwordHasher: PasswordHasher,
        private readonly user: User
    ) { }

    register(username: string, password: string) {
        console.log("user data =>", username, password)

        const hashPassword = this.passwordHasher.hash(password)

        const user = this.user.create({ username, password: hashPassword })

        //Checking for existing user from users.json file
        this.fileSystem.loadFile('users.json')

        //hash password and insert user to users.json file
        this.fileSystem.writeToFile('users.json', JSON.stringify({ ...user }))

        console.log('user registered success.')
        this.notification.sendEmail('example@gmail.com', 'you singed in my application welcome.')
    }

    login(username: string, password: string) {
        console.log('user login data =>', username, password)
        
        //Checking for existing user from users.json file 
        this.fileSystem.loadFile('users.json')
        
        //load hash form users.json file to compare
        this.passwordHasher.compare(password , '')

        console.log('user logged in success.')
        this.notification.sendEmail("example@gmail.com", "you logged ihn my application welcome.")
    }
}

class FileSystem {
    writeToFile<T extends string>(filename: string, data: T) {
        console.log('writing to file =>', filename)
        console.log('write data success.', filename, data)
    }

    loadFile(filename: string) {
        console.log("wait for loading file....")
        console.log(`file ${filename} loaded success.`)
    }
}


class Notification {
    sendEmail(email: string, message: string) {
        console.log('Wait for sending email....')
        console.log(`Email sended with message=${message} for user email =>`, email)
    }
}


class User {
    create(userData: IUser) {
        return { ...userData }
    }
}

class PasswordHasher {
    hash(password: string): string {
        //Hash password logic
        return password
    }

    compare(password: string, hash: string): boolean {
        //compare hash logic with bcrypt

        const isValid = password == hash

        return isValid
    }

}

interface IUser {
    username: string
    password: string
}

const fileSystem = new FileSystem()
const notification = new Notification()
const user = new User()
const passwordHasher = new PasswordHasher()

const goodUserManagementService = new GoodUserManagementService(fileSystem, notification, passwordHasher, user)

goodUserManagementService.register('ahmadnzhad22', '213234324')
goodUserManagementService.login("ahmadnzhad22" , '2234324324')