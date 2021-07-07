export default class userRepository {
    constructor(instanceConnection) {
        this.instanceConnection = instanceConnection
    }

    async select(query) {
        return await this.instanceConnection.connectionString
            .where({ email: query })
            .select()
            .table('users')
    }

    async insert(query) {
        return await this.instanceConnection.connectionString
            .insert(query)
            .into('users')

    }

    async update(query, value) {
        return await this.instanceConnection.connectionString
            .where({ email: query })
            .update(value)
            .table('users')
    }

    async delete(query) {
        return await this.instanceConnection.connectionString
            .where({ email: query })
            .delete()
            .table('users')
    }
}