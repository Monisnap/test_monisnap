import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import * as React from "react";
import { CharacterUI, voteForCharacter } from "../data/charactersDataHandler";

interface Props {
  char1: CharacterUI;
  char2: CharacterUI;
}

const VoteContainer: React.VFC<Props> = (props: Props) => {
  const { char1, char2 } = props;
  const [voteIsDone, setVote] = React.useState(false);
  const MySwal = withReactContent(Swal);

  const handleClick = async (char: any) => {
    try {
      char.votes += 1;
      await voteForCharacter(char);
      await MySwal.fire({
        title: <strong>Good job!</strong>,
        html: <i>Your vote has been submited!</i>,
        icon: "success",
      });
      const voteIsDone = true;
      setVote(voteIsDone);
    } catch (error) {
      console.log(char);
      await MySwal.fire({
        title: <strong>Error!</strong>,
        html: <i>An error occured try again!</i>,
        icon: "error",
      });
    }
  };

  return (
    <Grid
      container
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      style={{ paddingTop: "3rem" }}
    >
      <Grid item xs={6}>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              image={char1.pic}
              height="340"
              alt={char1.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {char1.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                homeworld: <strong>{char1.homeworld}</strong>
              </Typography>
              <Typography variant="body2" color="orange">
                Votes: <strong>{char1.votes}</strong>
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              variant="contained"
              color="success"
              disabled={voteIsDone}
              onClick={() => {
                handleClick(char1);
              }}
            >
              Vote for it
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="340"
              image={char2.pic}
              alt={char2.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {char2.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                homeworld: <strong>{char2.homeworld}</strong>
              </Typography>
              <Typography variant="body2" color="orange">
                Votes: <strong>{char2.votes}</strong>
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              variant="contained"
              color="success"
              disabled={voteIsDone}
              onClick={() => {
                handleClick(char2);
              }}
            >
              Vote for it
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default VoteContainer;
