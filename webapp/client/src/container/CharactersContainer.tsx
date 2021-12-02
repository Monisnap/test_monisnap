import * as React from "react";
import List from "@mui/material/List";
import Character from "../components/Character";
import { CharacterUI } from "../data/charactersDataHandler";

interface Props {
  characters: CharacterUI[];
}

const CharactersContainer: React.VFC<Props> = (props: Props) => {
  const { characters } = props;

  return (
    <List
      sx={{ width: "100%", bgcolor: "background.paper", paddingTop: "3rem" }}
    >
      {characters.map((elem) => {
        return <Character character={elem} />;
      })}
    </List>
  );
};

export default CharactersContainer;
