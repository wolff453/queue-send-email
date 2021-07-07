import UserRepository from "../repository/userRepository.js";
import UserService from "../service/userService.js";
import connectionString from "../util/connectionString.js";
import InstanceConnection from "../util/instanceConnection.js";




export default class userFactory {
    static async factory() {
        const connection = new InstanceConnection(connectionString)
        const repository = new UserRepository(connection)
        const service = new UserService(repository)
        return service
    }
}