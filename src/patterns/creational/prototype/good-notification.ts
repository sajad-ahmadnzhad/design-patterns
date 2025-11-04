class EmailTemplate {
    constructor(
        public subject: string,
        public body: string,
        public footer: string,
        public templateName: string
    ) { }

    clone(): EmailTemplate {
        return new EmailTemplate(this.subject, this.body, this.footer, this.templateName)
    }
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

const newTemplate = template.clone()
newTemplate.body = "hello ali how are you?"
service.send(newTemplate)

const newTemplate2 = template.clone()
newTemplate2.body = 'hello mohammad how are you>?'
service.send(newTemplate2)