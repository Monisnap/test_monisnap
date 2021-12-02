import { connect, connection } from "mongoose";
require("dotenv").config();
import CharacterManager from "../../business/CharacterManager";
import characters = require("./characters.data.json");

export const runImportCharacters = async () => {
  try {
    await connect(process.env.MONGO_URI);
    console.info("Connected to mongo!");
    console.info("Preparing insert characters");
    const data = characters.characters.map((chr) => {
      let res = Object.assign(chr);
      delete res["id"];
      res.votes = 0;
      return res;
    });
    console.info("Data sanitized and vote count property added!");
    let characterManager = new CharacterManager();
    const results = await characterManager.create(data);
    console.log(results);
    console.info(`data insertion completed !`);
    await connection.close();
    console.info(`connexion to database closed !`);
    process.exit(0);
  } catch (error) {
    console.error(error);
  }
};

runImportCharacters();
