import jwt from 'jsonwebtoken'

export default (req,res,next) => {
    try {
        const token = req.headers.authorization.split(' ')[1]
          jwt.verify(token, '123')
         next()
        
    } catch (error) {
        return res.send({
            message:"Authentication failed!"
        })
    }
} 