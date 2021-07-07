import insertHTML from "../renderHTML.js";
   

export default class sendMail {
  constructor(mailerTransport) {
    this.mailerTransport = mailerTransport
   }
  async send(data) {
 
    await this.mailerTransport.sendMail({
      from: 'Email: <george8234@hotmail.com>',
      to: `<${data.email}>`,
      subject: 'Seja bem vindo!',
      html: `${insertHTML(data.name)}`
    });
  }
}

// O process acaba processando somente o método e ignora o construtor
// Remover o construtor e importar direto 

//colocar dnv o mailer transport no construtor