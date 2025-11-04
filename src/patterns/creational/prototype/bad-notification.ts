class EmailTemplate {
    constructor(
        public subject: string,
        public body: string,
        public footer: string,
        public templateName: string
    ) { }
}

class EmailService {
    send(template: EmailTemplate): void {
        console.log(`Email sent successfully with template: ${template.templateName}`);
        console.log(`Subject: ${template.subject}`);
        console.log(`Body: ${template.body}`);
    }
}

const template = new EmailTemplate('hello user', 'hello sajad how are you?', 'footer', 'template')
const service = new EmailService()
service.send(template)

const template1 = new EmailTemplate(template.subject, 'hello ali how are you?', template.footer, template.templateName)
service.send(template1)

const template2 = new EmailTemplate(template1.subject, 'hello mohammad how are you?', template1.footer, template1.templateName)
service.send(template2)