class User {
    private _email: string = ''
    private _password: string = ''

    login(email: string, password: string) {
        this._email = email
        this._password = password //Hash password
    }

    get email() {
        return this._email
    }

    set email(newEmail: string) {
        this._email = newEmail
    }

    get password() {
        return this._password //Hash password
    }

    set password(newPassword: string) {
        this._password = newPassword
    }
}

const user = new User()

console.log(user.email)
user.email = 'new@gmail.com'

console.log(user.password)

user.password = 'my password'
