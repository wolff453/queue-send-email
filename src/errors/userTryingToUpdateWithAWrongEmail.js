export default class userTryingToUpdateWithAWrongEmail extends Error{
    constructor(message){
        super(message)
        this.message = message
        this.name = this.constructor.name
    }
}