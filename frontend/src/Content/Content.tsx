import React, { useState, useRef } from "react";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AddBoxIcon from "@mui/icons-material/AddBox";
import axios from "axios";
import ShowGames from "./ShowGames";

const postUrl = "http://localhost:8080/hello/add";

const Content = () => {
  const [createGame, setCreateGame] = useState({ you: "", enemy: "" });
  const [dataChanged, setDataChanged] = useState(false);
  const yourName = useRef(null);
  const enemyName = useRef(null);

  // ref={inputRef}

  const handleCreateGame = async () => {
    // const game = { you: yourName.current, enemy: enemyName.current };
    console.log("yourName: ", yourName.current);

    console.log("handleCreateGame");
    // console.log("createGame: ", createGame);
    try {
      // await axios.post(postUrl, game);
      await axios.post(postUrl, createGame);
      // console.log("post response: ", response.data);
      setDataChanged((e) => !e);
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
          // ref={yourName}
          onChange={(e) =>
            setCreateGame({ ...createGame, you: e.target.value })
          }
          id="outlined-helperText"
          label="Your name"
          defaultValue={createGame.you}
          helperText="Define your Game name"
          sx={{ marginRight: "5px" }}
        />
        <TextField
          // ref={enemyName}
          onChange={(e) =>
            setCreateGame({ ...createGame, enemy: e.target.value })
          }
          id="outlined-helperText"
          label="Enemy name"
          defaultValue={createGame.enemy}
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
        <ShowGames dataChanged={dataChanged} />
      </Paper>
    </Container>
  );
};

export default Content;
