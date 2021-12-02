import DataHandler from "../../data_access/DataHandler";
import { Character, CharacterModel } from "../../data_access/models/Characters";

describe("Test if DataHandler work correctly", () => {
  it("Should test if create many work correctly", async () => {
    const dataArray: any = [
      {
        name: "Wilhuff Tarkin",
        pic: "https://vignette.wikia.nocookie.net/starwars/images/c/c1/Tarkininfobox.jpg",
        homeworld: "eriadu",
      },
    ];
    const bulkSaveMock = jest
      .spyOn(CharacterModel, "insertMany")
      .mockImplementation();
    const dbHandler = new DataHandler<Character>(CharacterModel);
    await dbHandler.create(dataArray);
    expect(bulkSaveMock).toHaveBeenCalledTimes(1);
  });

  it("Should test if find work correctly", async () => {
    const findMock = jest.spyOn(CharacterModel, "find").mockImplementation();
    const dbHandler = new DataHandler<Character>(CharacterModel);
    await dbHandler.find({});
    expect(findMock).toHaveBeenCalledTimes(1);
  });

  it("Should test if update work correctly", async () => {
    const characterData: any = {
      _id: "61a80eeefa9156a14a5dd467",
      name: "Wilhuff Tarkin",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/c/c1/Tarkininfobox.jpg",
      homeworld: "eriadu",
      votes: 25,
    };

    const findMock = jest
      .spyOn(CharacterModel, "findById")
      .mockImplementation();
    const dbHandler = new DataHandler<Character>(CharacterModel);
    await dbHandler.update(characterData);
    expect(findMock).toHaveBeenCalledTimes(1);
  });
});
