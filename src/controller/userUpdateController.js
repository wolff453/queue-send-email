import queue from '../queueConfig.js'
 
export default class userUpdateController {
  static async getDataToUpdate(req, res) {
    const date = {
      email_update: req.body.email_update,
      senha_update: req.body.senha_update,
 
    }

    await queue.add(date)
    return res.send({
      message:"Dados atualizados com sucesso",
      data: date
    })

   }

}