import { Application } from "express";
import * as express from "express";
import * as session from "express-session";
import logger from "./logger";
import Locals from "../providers/locals";
class HTTP {
  public static mount(_app: Application): Application {
    logger.info("Mouting the HTTP middlewares");
    _app.use(express.json());

    // Disable the x-powered-by header in response: X-Powered-By is set by various servers to say what kind of server it is
    _app.disable("x-powered-by");
    const options = {
      resave: true,
      saveUninitialized: true,
      secret: Locals.loadConfig().appSecret,
      cookie: {
        maxAge: 1209600000, // two weeks (in ms)
      },
    };

    _app.use(session(options));

    return _app;
  }
}
export default HTTP;
