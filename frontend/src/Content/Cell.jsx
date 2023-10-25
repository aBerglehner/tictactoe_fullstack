import React from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { getGamesUrl } from "../Constants/Apis";

const Cell = ({ game, setGame, num }) => {
  const { cells } = game;

  const handleClick = async () => {
    console.log("clicked on: ", num);
    try {
      const putRes = { ...game, num };
      // console.log("putRes: ", putRes);
      const response = await axios.put(getGamesUrl, putRes);
      console.log("put cell response: ", response.data);

      if (response.data.error) {
        alert(response.data.error);
      } else {
        // console.log("winner: ", winner);
        setGame(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return <td onClick={handleClick}>{cells[num]}</td>;
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
};

export default Cell;
