class MysqlDatabase {
    connect(){
        console.log("Connected to mysql db success")
    }
}

class User {
    private db: MysqlDatabase

    constructor(){
        this.db = new MysqlDatabase()
    }

    findOne(id:number){
        this.db.connect()
        console.log("Fetching user...")
    }
}


const user = new User()

user.findOne(1)