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

const Cell = ({ cells, num, turn, setTurn, setCells, setWinner }) => {
  const handleClick = async () => {
    console.log("clicked on: ", num);
    const cellData = { cells, num, turn };
    console.log("cellData: ", cellData);

    try {
      const response = await axios.post(postTicTacToeCell, cellData);
      console.log("post cell response: ", response.data);
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
  setTurn: PropTypes.func,
  setCells: PropTypes.func,
  setWinner: PropTypes.func,
};

export default Cell;
