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

  console.log("curGame: ", curGame);

  const getGame = async (id) => {
    try {
      const gameUrl = `${getGamesUrl}/${id}`;
      const response = await axios.get(gameUrl);
      console.log("gameUrl response: ", response.data);
      // setGames(response.data);
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
            <Cell
              cells={cells}
              num={0}
              turn={turn}
              winner={winner}
              setTurn={setTurn}
              setCells={setCells}
              setWinner={setWinner}
            />
            <Cell
              cells={cells}
              num={1}
              turn={turn}
              winner={winner}
              setTurn={setTurn}
              setCells={setCells}
              setWinner={setWinner}
            />
            <Cell
              cells={cells}
              num={2}
              turn={turn}
              winner={winner}
              setTurn={setTurn}
              setCells={setCells}
              setWinner={setWinner}
            />
          </tr>
          <tr>
            <Cell
              cells={cells}
              num={3}
              turn={turn}
              winner={winner}
              setTurn={setTurn}
              setCells={setCells}
              setWinner={setWinner}
            />
            <Cell
              cells={cells}
              num={4}
              turn={turn}
              winner={winner}
              setTurn={setTurn}
              setCells={setCells}
              setWinner={setWinner}
            />
            <Cell
              cells={cells}
              num={5}
              winner={winner}
              turn={turn}
              setTurn={setTurn}
              setCells={setCells}
              setWinner={setWinner}
            />
          </tr>
          <tr>
            <Cell
              cells={cells}
              num={6}
              turn={turn}
              winner={winner}
              setTurn={setTurn}
              setCells={setCells}
              setWinner={setWinner}
            />
            <Cell
              cells={cells}
              num={7}
              turn={turn}
              winner={winner}
              setTurn={setTurn}
              setCells={setCells}
              setWinner={setWinner}
            />
            <Cell
              cells={cells}
              num={8}
              turn={turn}
              winner={winner}
              setTurn={setTurn}
              setCells={setCells}
              setWinner={setWinner}
            />
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
  curGame: PropTypes.number,
};
export default TicTacToe;
