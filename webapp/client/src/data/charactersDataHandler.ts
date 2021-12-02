import axios from "axios";
const serverUrl = "http://localhost:8080/characters";

export interface CharacterUI {
  _id?: string;
  name: string;
  pic: string;
  homeworld: string;
  votes: number;
  __v?: number;
}

export const voteForCharacter = async (data: any) => {
  const result = (await axios.put(serverUrl, data)).data;
  return result;
};

export const fetchCharacters = async () => {
  const results = (await axios.get(serverUrl)).data;
  return results;
};
