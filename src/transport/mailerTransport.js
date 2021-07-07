import nodemailer from 'nodemailer'

export default nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "8983f0c28a8045",
    pass: "8dc1c5486a2fe5"
  }
});


//Trocar para variáveis de ambiente