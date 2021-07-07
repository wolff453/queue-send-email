import queue from '../queueConfig.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'



export default class userController {
  static async getData(req, res) {
    const date = {
      email: req.body.email,
      name: req.body.name,
    }

    const hash = await bcrypt.hash(req.body.senha, 10)
    date.senha = hash

 
    const token = jwt.sign(date, '123')
    console.log(token)

    await queue.add(date)
    res.send(date)
  }

}