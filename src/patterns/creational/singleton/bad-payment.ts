interface ILogger {
    log(message: string, serviceName?: string): void
    warn(message: string, serviceName?: string): void
    error(message: string, serviceName?: string): void
}

class Logger implements ILogger {
    log(message: string, serviceName?: string) {
        const now = new Date()
        console.log(`${now}, ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()} LOG [${serviceName || Logger.name}] ${message}`)
    }

    warn(message: string, serviceName?: string) {
        const now = new Date()
        console.log(`${now}, ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()} WARN [${serviceName || Logger.name}] ${message}`)
    }

    error(message: string, serviceName?: string) {
        const now = new Date()
        console.log(`${now}, ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()} ERROR [${serviceName || Logger.name}] ${message}`)
    }
}

class PaymentService {
    constructor(private readonly logger: ILogger) { }

    pay(amount: number) {
        //* Handle payment amount logic

        this.logger.log(`Payment amount: ${amount}`, PaymentService.name)
    }
}

const logger = new Logger()
const paymentService = new PaymentService(logger)

paymentService.pay(1000)