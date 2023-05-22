const passport = require('passport');
// const passportJWT = require('passport-jwt');

// const JwtStrategy = passportJWT.Strategy;
// const { ExtractJwt } = passportJWT;

// const options = {
//   jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//   secretOrKey: process.env.SECRET_KEY,
// };

// const strategyForJwt = new JwtStrategy(options, async (payload, next) => {
//   return next(null, '');
// });

// passport.use(strategyForJwt);

module.exports = passport;
