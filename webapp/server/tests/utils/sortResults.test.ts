import { sortResultsByKey } from "../../utils/sortResults";

describe("Test if sortResults work correctly", () => {
  it("Should test if sortResultsByKey return expected result", () => {
    const data = [
      { name: "aby", age: 21 },
      { name: "cate", age: 14 },
      { name: "bob", age: 23 },
    ];
    const dataSortedByName = [data[0], data[2], data[1]];
    const dataSortedByAge = [data[1], data[0], data[2]];
    expect(sortResultsByKey(data, "name")).toEqual(dataSortedByName);
    expect(sortResultsByKey(data, "age")).toEqual(dataSortedByAge);
  });
});
