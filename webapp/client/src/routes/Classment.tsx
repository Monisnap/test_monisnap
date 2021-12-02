import { fetchCharacters } from "../data/charactersDataHandler";
import React from "react";
import CharactersContainer from "../container/CharactersContainer";
import { Box, LinearProgress } from "@mui/material";

const Classment: React.VFC<any> = () => {
  const [data, setData] = React.useState([]);
  const [isLoading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchData = async () => {
      if (isLoading) {
        const data = (await fetchCharacters()).reverse();
        const isLoading = false;
        setData(data);
        setLoading(isLoading);
      }
    };
    fetchData();
  });

  return (
    <div>
      {isLoading && (
        <Box sx={{ width: "100%", marginTop: "25px" }}>
          <LinearProgress />
        </Box>
      )}
      {!isLoading && <CharactersContainer characters={data} />}
    </div>
  );
};

export default Classment;
