import React, { useState, useRef } from "react";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AddBoxIcon from "@mui/icons-material/AddBox";
import axios from "axios";
import ShowGames from "./ShowGames";

const postGameUrl = "http://localhost:8080/games/add";

const Content = () => {
  const [newGamesTrigger, setNewGamesTrigger] = useState(false);
  const yourName = useRef('');
const enemyName = useRef('');
    console.log('content render')

  // ref={inputRef}

  const handleCreateGame = async () => {
    const game = { you: yourName.current.value, enemy: enemyName.current.value };
    console.log("handleCreateGame");
    // console.log("yourName: ", yourName.current.value);

    try {
      const response = await axios.post(postGameUrl, game);
      console.log("post response: ", response.data);
      setNewGamesTrigger((e) => !e);
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
        <ShowGames newGamesTrigger={newGamesTrigger} />
      </Paper>
    </Container>
  );
};

export default Content;