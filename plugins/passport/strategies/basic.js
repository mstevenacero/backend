import  passport from 'passport';
import  passportHttp from 'passport-http';
let BasicStrategy = passportHttp.BasicStrategy;

import bcrypt from 'bcrypt';
import AuthService from '../../../services/authService.js';
import boom from '@hapi/boom';

const basicOptions = {
  usernameField: 'username',
  passwordField: 'password'
};

passport.use(new BasicStrategy(
  basicOptions,
  async (username, password, done) => {
    const authService = new AuthService()

    try {
      const user = await authService.login(username)

      if (!user) {
        return done(boom.unauthorized(), false)
      }

      if (!(await bcrypt.compare(password, user.password))) {
        return done(boom.unauthorized(), false)
      }
      
      return done(null,user)
    } catch (error) {
      return done(error)
    }
  }
));
