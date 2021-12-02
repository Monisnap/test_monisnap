import * as React from "react";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { CharacterUI } from "../data/charactersDataHandler";

interface Props {
  character: CharacterUI;
}

export default function Character(props: Props) {
  const { character } = props;
  return (
    <>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={character.name} src={character.pic} />
        </ListItemAvatar>
        <ListItemText
          primary={character.name}
          secondary={
            <React.Fragment>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={6}>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {character.homeworld ? character.homeworld : "No homeworld"}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    sx={{ display: "inline", fontWeight: "bold" }}
                    component="span"
                    variant="body2"
                    color="orange"
                  >
                    {`Votes: ${character.votes}`}
                  </Typography>
                </Grid>
              </Grid>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  );
}
