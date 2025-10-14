interface Database {
    connect(url: string): void
}

class MysqlDatabase implements Database {
    connect(url: string): void {
        console.log("Connected to mysql db success.")
    }
}

class PostgresqlDatabase implements Database {
    connect(url: string): void {
        console.log("Connected to postgresql db success.")
    }
}

class User {
    constructor(private readonly db: Database) { }

    getUser(id: number) {
        this.db.connect('<MYSQL URL>')
        console.log('Fetching user....')
    }
}


const mysqlDb = new MysqlDatabase()
const postgresqlDb = new PostgresqlDatabase()

const userMysql = new User(mysqlDb)
const userPostgres = new User(postgresqlDb)

userMysql.getUser(1)
userPostgres.getUser(1)