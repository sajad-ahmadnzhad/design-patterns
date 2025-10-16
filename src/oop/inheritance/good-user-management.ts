class User {
    login() {
        //Logic for login user
    }

    register() {
        //Logic for register user
    }

    refreshToken() {
        //Logic for refresh token
    }
}

const user = new User()

user.login()
user.refreshToken()
user.register()

class Admin extends User {
    login() {
        //Override logic for login admin
    }

    register() {
        //Override logic for register admin
    }
}

const admin = new Admin()

admin.login()
admin.refreshToken()
admin.register()