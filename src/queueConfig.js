import Bull from 'bull'
import redisConfig from '../src/redisConfig/config.js'

const queue = new Bull('QueueToSendMail', redisConfig)

export default queue