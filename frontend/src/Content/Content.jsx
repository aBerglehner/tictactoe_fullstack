import React, { useState, useRef } from "react";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AddBoxIcon from "@mui/icons-material/AddBox";
import Grid from "@mui/material/Grid";
import axios from "axios";
import ShowGames from "./ShowGames";
import TicTacToe from "./TicTacToe";
import { postGameUrl } from "../Constants/Apis";

const Content = () => {
  const [newGamesTrigger, setNewGamesTrigger] = useState(false);
  const yourName = useRef("");
  const enemyName = useRef("");
  const [curGame, setCurGame] = useState(null);
  console.log("content render");

  const handleCreateGame = async () => {
    const game = {
      you: yourName.current.value,
      enemy: enemyName.current.value,
    };
    console.log("handleCreateGame");
    // console.log("yourName: ", yourName.current.value);

    try {
      const response = await axios.post(postGameUrl, game);
      // const response2 = await axios.put(postGameUrl + "/3");
      // console.log("put res: ", response2);
      console.log("post response: ", response.data);
      setCurGame(response.data.id);
      setNewGamesTrigger((e) => !e);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container
      maxWidth="false"
      sx={{
        flexGrow: 1,
        padding: 2,
      }}
    >
      <Paper elevation={3} sx={{ p: 2, minHeight: "84vh" }}>
        <h1>Welcome to Your App</h1>
        <p>Create your new Game:</p>

        <TextField
          inputRef={yourName}
          id="outlined-helperText"
          label="Your name"
          defaultValue={yourName.current}
          helperText="Define your Game name"
          sx={{ marginRight: "5px" }}
        />
        <TextField
          inputRef={enemyName}
          id="outlined-helperText"
          label="Enemy name"
          defaultValue={enemyName.current}
          helperText="Define enemy Game name"
          sx={{ marginRight: "5px" }}
        />
        <Button
          onClick={handleCreateGame}
          variant="contained"
          endIcon={<AddBoxIcon />}
          sx={{ height: "55px" }}
        >
          Create Game
        </Button>
        <Grid container spacing={2}>
          <Grid item xs={7}>
            <ShowGames
              newGamesTrigger={newGamesTrigger}
              curGame={curGame}
              setCurGame={setCurGame}
            />
          </Grid>
          <Grid item xs={5}>
            <TicTacToe curGame={curGame} />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Content;
