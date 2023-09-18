import React, { useState } from "react";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AddBoxIcon from "@mui/icons-material/AddBox";
import axios from "axios";
import ShowGames from "./ShowGames";

const defaultGameName = "Game 2";
const Content = () => {
  const [game, setGame] = useState(defaultGameName);

  const handleCreateGame = async () => {
    console.log("handleCreateGame");
    try {
      const response = await axios.post(
        "http://localhost:8080/hello/add",
        game
      );
      console.log("response: ", response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container
      sx={{
        flexGrow: 1,
        padding: 3,
      }}
    >
      {/* Your content goes here */}
      <Paper elevation={3} sx={{ p: 2, minHeight: "84vh" }}>
        <h1>Welcome to Your App</h1>
        <p>This is the body of your app.</p>

        <TextField
          onChange={(e) => setGame(e.target.value)}
          id="outlined-helperText"
          label="Game name"
          defaultValue={defaultGameName}
          helperText="Define your Game name"
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
        <ShowGames />
      </Paper>
    </Container>
  );
};

export default Content;
