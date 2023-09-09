import React from "react";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AddBoxIcon from "@mui/icons-material/AddBox";

const Content = () => {
  return (
    <Container
      sx={{
        flexGrow: 1,
        padding: 3,
      }}
    >
      {/* Your content goes here */}
      <Paper elevation={3} sx={{ p: 3 }}>
        <h1>Welcome to Your App</h1>
        <p>This is the body of your app.</p>

        <TextField
          id="outlined-helperText"
          label="Game name"
          defaultValue="Game 1"
          helperText="Define your Game name"
          sx={{ marginRight: "5px" }}
        />
        <Button
          variant="contained"
          endIcon={<AddBoxIcon />}
          sx={{ height: "55px" }}
        >
          Create Game
        </Button>
      </Paper>
    </Container>
  );
};

export default Content;
