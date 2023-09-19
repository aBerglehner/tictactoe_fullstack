import React, { useState } from "react";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AddBoxIcon from "@mui/icons-material/AddBox";
import axios from "axios";
import ShowGames from "./ShowGames";

const url = "http://localhost:8080/hello/add"; // Replace with the URL you want to send a POST request to
const headers = {
  "Content-Type": "application/json", // Specify the Content-Type header
  // Add any other headers as needed
};
const Content = () => {
  const [game, setGame] = useState({ you: "", enemy: "", id: 1, turns: 32 });

  const handleCreateGame = async () => {
    console.log("handleCreateGame");
    console.log("game: ", game);
    try {
      const response = await axios.post(url, game);
      // const response = await axios.post(url, game, { headers });
      console.log("response: ", response.data);
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
      <Paper elevation={3} sx={{ p: 2, minHeight: "84vh" }}>
        <h1>Welcome to Your App</h1>
        <p>This is the body of your app.</p>

        <TextField
          onChange={(e) => setGame({ ...game, you: e.target.value })}
          id="outlined-helperText"
          label="Your name"
          defaultValue={game.you}
          helperText="Define your Game name"
          sx={{ marginRight: "5px" }}
        />
        <TextField
          onChange={(e) => setGame({ ...game, enemy: e.target.value })}
          id="outlined-helperText"
          label="Enemy name"
          defaultValue={game.enemy}
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
        <ShowGames />
      </Paper>
    </Container>
  );
};

export default Content;
