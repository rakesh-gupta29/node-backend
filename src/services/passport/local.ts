import { PassportStatic } from "passport";
import { Strategy } from "passport-local";
import logger from "../../middlewares/logger";
import User from "../../models/users";

class LocalStrategy {
  public static register(passport: PassportStatic): PassportStatic {
    passport.use(
      new Strategy(
        { usernameField: "email", passwordField: "password" },
        (email, password, done) => {
          console.log(email + " " + password);
          done(null, false);
        }
      )
    );
    return passport;
  }
}

export default LocalStrategy;

// passport.use(
//   new Strategy(
//     { usernameField: "email", passwordField: "password" },
//     (email, password, done) => {
//       logger.info("User entered email is " + email);
//       logger.info("user entered password is " + password);
//       User.findOne(
//         { email: email.toLocaleLowerCase() },
//         (err: any, user: any) => {
//           logger.info("user from Datbase is " + user.email);
//           logger.info(" error while fething from Datbase is " + err);
//           if (err) {
//             return done(err);
//           }

//           if (!user) {
//             return done(null, false);
//           }
//           logger.info("comparing password now!");
//           user.comparePassword(password, (_err: any, _isMatch: any) => {
//             if (_err) {
//               return done(_err);
//             }
//             if (_isMatch) {
//               return done(null, user);
//             }
//             return done(null, false);
//           });
//         }
//       );
//     }
//   )
// );
