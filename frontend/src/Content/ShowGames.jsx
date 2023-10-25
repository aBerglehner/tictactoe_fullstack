import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import PropTypes from "prop-types";
import axios from "axios";
import { getGamesUrl } from "../Constants/Apis";

// cells, num, turn, winner
const columns = [
  // { field: "id", headerName: "ID", width: 50 },
  { field: "you", headerName: "Your name", width: 130 },
  { field: "enemy", headerName: "Enemy name", width: 130 },
  { field: "cells", headerName: "Cells", width: 160 },
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

const ShowGames = ({ newGamesTrigger }) => {
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
  }, [newGamesTrigger]);

  return (
    <div style={{ height: "39vh", width: "100%" }}>
      <h1>Games</h1>
      <DataGrid
        rows={games}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10, 20]}
        checkboxSelection
      />
    </div>
  );
};

ShowGames.propTypes = {
  newGamesTrigger: PropTypes.bool.isRequired,
};

export default ShowGames;
