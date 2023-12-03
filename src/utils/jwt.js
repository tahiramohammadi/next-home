    import jwt from 'jsonwebtoken'

const secret = 'yoursecret'

export function generateToken(user) {
  return jwt.sign({id: user.id}, secret, {expiresIn: '1h'})
}

export function verifyToken(token) {
  return jwt.verify(token, secret) 
}