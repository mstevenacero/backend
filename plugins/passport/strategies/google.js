const passport = require('passport')
const { config } = require('../../../config')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const UserService = require('../../../services/userService')

// Googl strategy
passport.use(new GoogleStrategy({
    clientID: config.googleClientID,
    clientSecret: config.googleClientSecret,
    callbackURL : `http://localhost:${config.port}/api/auth/google-oauth/callback`
},async (accessToken, refreshToken, profile, done) => {
    

    const userService = new UserService()

    try {

        const email = profile.emails[0].value
        const name = profile.displayName

        const toCreate = {
            email,
            name
        }

        const user = await userService.findOrCreate({where:{email:email}},toCreate)    

        return done(null,user)
    } catch (error) {
        return done(error)
    }
    
}))

