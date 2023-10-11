import React from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { postTicTacToeCell } from "../Constants/Apis";

// cells={cells}
// num={8}
// turn={turn}
// setTurn={setTurn}
// setCells={setCells}
// setWinner={setWinner}

const Cell = ({ cells, num, turn, winner, setTurn, setCells, setWinner }) => {
  const handleClick = async () => {
    // console.log("clicked on: ", num);
    const cellData = { cells, num, turn, winner };
    console.log("cellData: ", cellData);

    try {
      const response = await axios.post(postTicTacToeCell, cellData);
      console.log("post cell response: ", response.data);

      const { cells, turn, error, winner } = response.data;
      if (error) {
        alert(error);
      } else {
        console.log("winner: ", winner);
        if (winner) {
          setWinner(winner);
        } else {
          setTurn(turn);
        }
        setCells(cells);
      }

      //todo
    } catch (error) {
      console.log(error);
    }
  };

  return <td onClick={handleClick}>{cells[num]}</td>;
};

Cell.propTypes = {
  cells: PropTypes.arrayOf(PropTypes.string).isRequired,
  num: PropTypes.number.isRequired,
  turn: PropTypes.string.isRequired,
  winner: PropTypes.string,
  setTurn: PropTypes.func,
  setCells: PropTypes.func,
  setWinner: PropTypes.func,
};

export default Cell;
