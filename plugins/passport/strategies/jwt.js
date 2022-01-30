const passport = require('passport')
const { Strategy, ExtractJwt } = require('passport-jwt')
const boom = require('@hapi/boom')

const AuthService = require('../../../services/authService')
const { config } = require('../../../config')

passport.use(
  new Strategy({
    secretOrKey: config.authJwtSecret,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
  },
  async (tokenPayload, done) => {
    const authService = new AuthService()

    try {

      const user = await authService.login(tokenPayload.email)

      if (!user) {                
        return done(boom.unauthorized(), false)
      }

      delete user.password

      done(null, { ...user, scopes: tokenPayload.scopes })
    } catch (error) {      
      return done(error)
    }
  })
)
