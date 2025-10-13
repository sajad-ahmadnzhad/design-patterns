class BadUserManagementService {
    constructor() { }

    register(username: string, password: string) {
        console.log("user data =>", username, password)

        //Checking for existing user from users.json file
        this.loadFile('users.json')

        //hash password and insert user to users.json file
        this.writeToFile('users.json', JSON.stringify({ username, password }))

        console.log('user registered success.')
        this.sendEmail('example@gmail.com', 'you singed in my application welcome.')
    }

    login(username: string, password: string) {
        console.log('user login data =>', username, password)

        //Checking for existing user from users.json file 
        this.loadFile('users.json')

        console.log('user logged in success.')
        this.sendEmail("example@gmail.com", "you logged ihn my application welcome.")
    }

    sendEmail(email: string, message: string) {
        console.log('Wait for sending email....')
        console.log(`Email sended with message=${message} for user email =>`, email)
    }


    writeToFile<T extends string = any>(filename: string, data: T) {
        console.log('writing to file =>', filename)
        console.log('write data success.', filename, data)
    }

    loadFile(filename: string) {
        console.log("wait for loading file....")
        console.log(`file ${filename} loaded success.`)
    }
}

const badUserManagementService = new BadUserManagementService()

badUserManagementService.register('ahmadnzhad22', '12334444')