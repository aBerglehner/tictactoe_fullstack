import React from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { postTicTacToeCell } from "../Constants/Apis";
import { getGamesUrl } from "../Constants/Apis";

// cells={cells}
// num={8}
// turn={turn}
// setTurn={setTurn}
// setCells={setCells}
// setWinner={setWinner}

const Cell = ({ game, setGame, num, gameId }) => {
  const { cells, error, id, turn, winner, you, enemy } = game;

  const handleClick = async (id) => {
    // console.log("clicked on: ", num);
    const cellData = { cells, num, turn, winner };
    console.log("cellData: ", cellData);

    try {
      const putRes = { ...game, num };
      console.log("putRes: ", putRes);
      const response = await axios.put(getGamesUrl, putRes);
      console.log("put cell response: ", response.data);

      const { cells, turn, error, winner } = response.data;
      if (error) {
        alert(error);
      } else {
        console.log("winner: ", winner);
        if (winner) {
          // setWinner(winner);
        } else {
          // setTurn(turn);
        }
        // setCells(cells);
      }

      //todo
    } catch (error) {
      console.log(error);
    }
  };

  return <td onClick={handleClick}>{cells[num]}</td>;
  // return <td onClick={handleClick}>1</td>;
};

const GamePropTypes = {
  cells: PropTypes.array.isRequired,
  error: PropTypes.string,
  id: PropTypes.number,
  turn: PropTypes.string,
  winner: PropTypes.string,
  you: PropTypes.string,
  enemy: PropTypes.string,
};

Cell.propTypes = {
  game: PropTypes.shape(GamePropTypes).isRequired,
  setGame: PropTypes.func,
  num: PropTypes.number.isRequired,
  gameId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default Cell;
