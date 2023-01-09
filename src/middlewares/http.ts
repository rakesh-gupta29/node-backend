import { Application } from "express";
import * as express from "express";
import logger from "./logger";
class HTTP {
  public static mount(_app: Application): Application {
    logger.info("Mouting the HTTP middlewares");
    _app.use(express.json());

    // Disable the x-powered-by header in response: X-Powered-By is set by various servers to say what kind of server it is
    _app.disable("x-powered-by");
    return _app;
  }
}
export default HTTP;
