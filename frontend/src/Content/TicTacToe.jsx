import React, { useState, useEffect } from "react";
import "./TicTacToe.css";
import axios from "axios";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Cell from "./Cell";
import { getGamesUrl } from "../Constants/Apis";

const TicTacToe = ({ curGame }) => {
  const [turn, setTurn] = useState("x");
  const [cells, setCells] = useState(Array.from({ length: 9 }, () => ""));
  const [winner, setWinner] = useState("");
  const [game, setGame] = useState({
    cells: Array.from({ length: 9 }, () => ""),
    error: "",
    id: null,
    num: -1,
    turn: "",
    winner: "",
    you: "",
    enemey: "",
  });

  console.log("curGame: ", curGame);
  console.log("game: ", game);

  const getGame = async (id) => {
    try {
      if (id !== "") {
        const gameUrl = `${getGamesUrl}/${id}`;
        const response = await axios.get(gameUrl);
        console.log("gameUrl response: ", response.data);
        setGame(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getGame(curGame);
  }, [curGame]);

  const handleRestart = () => {
    setWinner("");
    setCells(Array.from({ length: 9 }, () => ""));
  };

  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            <th>Turn: {turn}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <Cell game={game} setGame={setGame} num={0} gameId={curGame} />
            <Cell game={game} setGame={setGame} num={1} gameId={curGame} />
            <Cell game={game} setGame={setGame} num={2} gameId={curGame} />
          </tr>
          <tr>
            <Cell game={game} setGame={setGame} num={3} gameId={curGame} />
            <Cell game={game} setGame={setGame} num={4} gameId={curGame} />
            <Cell game={game} setGame={setGame} num={5} gameId={curGame} />
          </tr>
          <tr>
            <Cell game={game} setGame={setGame} num={6} gameId={curGame} />
            <Cell game={game} setGame={setGame} num={7} gameId={curGame} />
            <Cell game={game} setGame={setGame} num={8} gameId={curGame} />
          </tr>
        </tbody>
      </table>
      {winner && (
        <>
          <p>{winner} is the winner!!!</p>
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
