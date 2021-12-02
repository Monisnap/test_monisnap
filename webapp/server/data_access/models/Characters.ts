import { Schema, model, ObjectId } from "mongoose";

// 1. Create an interface representing a character in MongoDB.
export interface Character {
  _id?: ObjectId;
  name: string;
  pic: string;
  homeworld: string;
  votes: number;
}

// 2. Create a Schema corresponding to the document interface.
export const CharacterSchema = new Schema<Character>({
  name: { type: String },
  pic: { type: String },
  homeworld: { type: String },
  votes: { type: Number },
});

// 3. Create a Model.
export const CharacterModel = model<Character>("Character", CharacterSchema);
