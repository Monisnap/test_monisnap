import express = require("express");
import { Express } from "express-serve-static-core";
import helmet = require("helmet");
import { connect } from "mongoose";
import charactersController from "./controllers/charactersController";
require("dotenv").config();

const headerDecorator = (req: any, res: any, next: any) => {
  let origin = req.headers.customorigin || req.headers.origin;
  res.header("Access-Control-Allow-Origin", origin);
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, CustomOrigin, pragma, cache-control, withcredentials, Authorization"
  );
  next();
};

export default class App {
  public app: Express;
  protected port: string;
  private static instance: App;

  constructor() {
    this.port = process.env.LISTENING_PORT || "8080";
    this.app = express();
  }

  public static GetInstance(): App {
    if (!App.instance) App.instance = new App();
    return App.instance;
  }

  private buildServerGlobalScope() {
    this.app.use(express.json()).use(helmet()).use(headerDecorator);
  }

  private initializeRouter() {
    this.app.use("/characters", charactersController);
  }

  private async createDbConnexion() {
    try {
      await connect(process.env.MONGO_URI);
      console.info("Connected to mongo!");
    } catch (error) {
      console.error(error);
      process.abort();
    }
  }

  public async run() {
    this.buildServerGlobalScope();
    await this.createDbConnexion();
    this.initializeRouter();
    this.app.listen(this.port, () => {
      console.info(`App is listening on the port ${this.port}`);
    });
  }
}
