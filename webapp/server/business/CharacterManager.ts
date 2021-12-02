import { Character, CharacterModel } from "../data_access/models/Characters";
import { sortResultsByKey } from "../utils/sortResults";
import BaseManager from "./BaseManager";

export default class CharacterManager extends BaseManager<Character> {
  constructor() {
    super(CharacterModel);
  }

  async voteForCharacter(data: Character): Promise<Character> {
    return super.update(data);
  }

  async create(data: Character[]): Promise<Character | Character[]> {
    return super.create(data);
  }

  async find(filter: any): Promise<Character[]> {
    const results = await super.find(filter);
    return sortResultsByKey(results, "votes");
  }
}
