class User {
    public email: string = ''
    public password: string = ''

    login(email: string, password: string) {
        this.email = email
        this.password = password //Hash password
    }
}

const user = new User()

user.email = "hacked@gmail.com"
user.password = 'hacked'

user.login("example@gmail.com", '123445')