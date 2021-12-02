import express = require("express");
import CharacterManager from "../business/CharacterManager";

let charactersController = express.Router();

charactersController.get("/", async (_req, res) => {
  const findFilter = {};
  console.info("GET: call charactersController......");
  let characterManager = new CharacterManager();
  const results = await characterManager.find(findFilter);
  res.status(200).json(results);
});

charactersController.put("/", async (req, res) => {
  console.info("PUT: call charactersController......");
  let characterManager = new CharacterManager();
  const result = await characterManager.voteForCharacter(req.body);
  res.status(200).json(result);
});

export default charactersController;
