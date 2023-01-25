import * as express from "express";
import * as passport from "passport";
import User from "../models/users";
import logger from "./logger";
import { Strategy } from "passport-local";
import { LocalStrategy } from "../services";
class Passport {
  public mount(_app: express.Application): express.Application {
    _app.use(passport.initialize());
    _app.use(passport.session());
    passport.serializeUser<any, any>((req: any, user: any, done: Function) => {
      console.log("storing the user");
      done(null, user.id);
    });

    passport.deserializeUser<any, any>(
      (req: any, id: string, done: Function) => {
        User.findById(id, (err: any, user: any) => {
          console.log("use found was" + user);
          done(err, user);
        });
      }
    );
    this.mountLocalStrategy();
    return _app;
  }
  public mountLocalStrategy() {
    try {
      LocalStrategy.register(passport);
    } catch (error: unknown) {
      logger.error("errror mounting the local strategy" + error);
    }
  }
}

export default new Passport();
