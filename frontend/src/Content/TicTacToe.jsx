import React, { useState } from "react";
import "./TicTacToe.css";
import Cell from "./Cell";

const TicTacToe = () => {
  const [turn, setTurn] = useState("x");
  const [cells, setCells] = useState(Array.from({ length: 9 }, () => ""));
  const [winner, setWinner] = useState(null);

  const handleRestart = () => {
    setWinner(null);
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
              setTurn={setTurn}
              setCells={setCells}
              setWinner={setWinner}
            />
            <Cell
              cells={cells}
              num={1}
              turn={turn}
              setTurn={setTurn}
              setCells={setCells}
              setWinner={setWinner}
            />
            <Cell
              cells={cells}
              num={2}
              turn={turn}
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
              setTurn={setTurn}
              setCells={setCells}
              setWinner={setWinner}
            />
            <Cell
              cells={cells}
              num={4}
              turn={turn}
              setTurn={setTurn}
              setCells={setCells}
              setWinner={setWinner}
            />
            <Cell
              cells={cells}
              num={5}
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
              setTurn={setTurn}
              setCells={setCells}
              setWinner={setWinner}
            />
            <Cell
              cells={cells}
              num={7}
              turn={turn}
              setTurn={setTurn}
              setCells={setCells}
              setWinner={setWinner}
            />
            <Cell
              cells={cells}
              num={8}
              turn={turn}
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
          <button onClick={handleRestart}>Play Again</button>
        </>
      )}
    </div>
  );
};

export default TicTacToe;
