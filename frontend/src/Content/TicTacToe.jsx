import React, { useState, useEffect } from "react";
import "./TicTacToe.css";
import axios from "axios";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Cell from "./Cell";
import { getGamesUrl, putRestartUrl } from "../Constants/Apis";

const TicTacToe = ({ curGame }) => {
  const [game, setGame] = useState({
    cells: Array.from({ length: 9 }, () => ""),
    error: "",
    id: null,
    num: -1,
    turn: "",
    winner: "",
    you: "",
    enemy: "",
  });

  // console.log("curGame: ", curGame);
  console.log("game: ", game);

  useEffect(() => {
    getGame(curGame);
  }, [curGame]);

  const getGame = async (id) => {
    try {
      if (id !== null) {
        const gameUrl = `${getGamesUrl}/${id}`;
        const response = await axios.get(gameUrl);
        console.log("gameUrl response: ", response.data);
        setGame(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleRestart = async () => {
    try {
      const response = await axios.put(putRestartUrl, game);
      setGame(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      {game.turn ? <></> : <h2>Waiting to create or chose a game!!!</h2>}
      <table>
        <thead>
          <tr>
            {game.turn && (
              <>
                <th>Turn: {game.turn}</th>
                <th>{game.you}: X</th>
                <th>{game.enemy}: O</th>
              </>
            )}
          </tr>
        </thead>
        <tbody>
          <tr>
            <Cell game={game} setGame={setGame} num={0} />
            <Cell game={game} setGame={setGame} num={1} />
            <Cell game={game} setGame={setGame} num={2} />
          </tr>
          <tr>
            <Cell game={game} setGame={setGame} num={3} />
            <Cell game={game} setGame={setGame} num={4} />
            <Cell game={game} setGame={setGame} num={5} />
          </tr>
          <tr>
            <Cell game={game} setGame={setGame} num={6} />
            <Cell game={game} setGame={setGame} num={7} />
            <Cell game={game} setGame={setGame} num={8} />
          </tr>
        </tbody>
      </table>
      {game.winner && (
        <>
          <p>{game.winner} is the winner!!!</p>
          <Button variant="contained" onClick={handleRestart}>
            Play Again
          </Button>
        </>
      )}
    </div>
  );
};

TicTacToe.propTypes = {
  curGame: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};
export default TicTacToe;
