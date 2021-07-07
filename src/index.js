import express from 'express'
import userController from './controller/userController.js'
import login from '../src/middleware/authenticate.js'
import userUpdateController from '../src/controller/userUpdateController.js'


const app = express()

app.use('/assets', express.static('assets'))

app.use(express.json())


app.post('/cadastro', async (req, res) => {
  await userController.getData(req, res)
})

app.patch('/atualizar',login, async (req,res) => {
  await userUpdateController.getDataToUpdate(req,res)
 
})

app.listen(3200, () => {
  console.log("Running!")
})