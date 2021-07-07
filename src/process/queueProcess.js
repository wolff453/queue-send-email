import sendMail from '../mail/mailSend.js'
import queue from '../queueConfig.js'
import userFactory from '../factory/userFactory.js'
import mailerTransport from '../transport/mailerTransport.js'
const factory = await userFactory.factory()
//  queue.process(sendMail.send)


//  await factory.updateUser({
//      email:"teste@gmail.com"
//  }, {
//     senha: "123432424"
// })

queue.process(async (job) => {

    if(!job.data.email && !job.data.senha){
        return await factory.updateUser({
            email:job.data.email_update
        }, {
            senha: job.data.senha_update
        })
    }

     await factory.insertWithoutRepeat({
        email: job.data.email,
        senha: job.data.senha
    })

    await new sendMail(mailerTransport).send(job.data)

  
  
 })

  






