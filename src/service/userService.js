import userAlreadyExists from '../errors/userAlreadyExists.js'
import userWrongEmail from '../errors/userWrongEmail.js'
import userUpdateAWrongEmail from '../errors/userUpdateAWrongEmail.js'
import userTryingToUpdateWithAWrongEmail from '../errors/userTryingToUpdateWithAWrongEmail.js'
import userTryingToDeleteAWrongEmail from '../errors/userTryingToDeleteAWrongEmail.js'


export default class userService {
  constructor(userRepository) {
    this.userRepository = userRepository
  }

  async find(query) {
    return await this.userRepository.select(query)

  }

  async insertWithoutRepeat(query) {
    const select = await this.find(query.email)
    if (select.length > 0) {
      throw new userAlreadyExists('This user already exists!')
    }

    const regex = /(^\w+)(@)(\w+\.)(\w{3})(\.\w{2})?$/gm

    if (!query.email.match(regex)) {
      throw new userWrongEmail('The email is wrong!')
    }
    return await this.userRepository.insert(query)

  }

  async updateUser(query, value) {
    const regex = /(^\w+)(@)(\w+\.)(\w{3})(\.\w{2})?$/gm
    for (let i in value) {
      if (i == 'email' && !value[i].match(regex)) {
        throw new userUpdateAWrongEmail("The new Email is wrong! Please adjust!")
      }
    }

    if (!query.email.match(regex)) {
      throw new userTryingToUpdateWithAWrongEmail('The base email that the user passed is not valid!')
    }
    return await this.userRepository.update(query.email, value)

  }

  async deleteUser(query) {
    const regex = /(^\w+)(@)(\w+\.)(\w{3})(\.\w{2})?$/gm
    if (!query.email.match(regex)) {
      throw new userTryingToDeleteAWrongEmail('The email you sent to delete is out of standard')
    }
    return await this.userRepository.delete(query.email)
  }

}