import { Box, LinearProgress } from "@mui/material";
import React from "react";
import VoteContainer from "../container/VoteContainer";
import { fetchCharacters } from "../data/charactersDataHandler";

const Vote: React.VFC<any> = () => {
  const [data, setData] = React.useState([]);
  const [isLoading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchData = async () => {
      if (isLoading) {
        const data = await fetchCharacters();
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
      {!isLoading && (
        <VoteContainer
          char1={data[Math.floor(Math.random() * data.length)]}
          char2={data[Math.floor(Math.random() * data.length)]}
        />
      )}
    </div>
  );
};

export default Vote;
