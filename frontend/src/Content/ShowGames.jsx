import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import PropTypes from "prop-types";
import axios from "axios";
import { getGamesUrl } from "../Constants/Apis";

// cells, num, turn, winner
const columns = [
  // { field: "id", headerName: "ID", width: 50 },
  { field: "you", headerName: "X", width: 130 },
  { field: "enemy", headerName: "O", width: 130 },
  { field: "cells", headerName: "Plays", width: 160 },
  { field: "turn", headerName: "Turn", width: 90 },
  { field: "winner", headerName: "Winner", width: 90 },
  { field: "status", headerName: "Status", width: 90 },
  // {
  //   field: "turns",
  //   headerName: "Turns",
  //   type: "number",
  //   width: 90,
  // },
];

const ShowGames = ({ newGamesTrigger, curGame, setCurGame }) => {
  const [games, setGames] = useState([]);
  console.log("ShowGames render");
  // console.log("ShowGames: ", games);

  const getGames = async () => {
    try {
      const response = await axios.get(getGamesUrl);
      // console.log("get response: ", response.data);
      setGames(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getGames();
  }, [newGamesTrigger, curGame]);

  return (
    <div style={{ height: "87%", width: "100%" }}>
      <h1>Games</h1>
      <DataGrid
        rows={games}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0 },
          },
        }}
        pageSizeOptions={[5, 10, 25]}
        checkboxSelection
        onRowSelectionModelChange={(newRowSelectionModel) => {
          if (newRowSelectionModel.length) {
            setCurGame(newRowSelectionModel[newRowSelectionModel.length - 1]);
          }
        }}
        rowSelectionModel={curGame === null ? -1 : curGame}
        autoPageSize
      />
    </div>
  );
};

ShowGames.propTypes = {
  newGamesTrigger: PropTypes.bool.isRequired,
  curGame: PropTypes.number,
  setCurGame: PropTypes.func,
};

export default ShowGames;
