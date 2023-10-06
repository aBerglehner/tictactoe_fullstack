import React, { useEffect, useState, memo } from "react";
import { DataGrid } from "@mui/x-data-grid";
import PropTypes from "prop-types";
import axios from "axios";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "you", headerName: "Your name", width: 130 },
  { field: "enemy", headerName: "Enemy name", width: 130 },
  // {
  //   field: "turns",
  //   headerName: "Turns",
  //   type: "number",
  //   width: 90,
  // },
];

// const rows = [
//   { id: 1, enemy: "Snow", you: "Jon", turns: 35 },
//   { id: 2, enemy: "Lannister", you: "Cersei", turns: 42 },
//   { id: 3, enemy: "Lannister", you: "Jaime", turns: 45 },
//   { id: 4, enemy: "Stark", you: "Arya", turns: 16 },
//   { id: 5, enemy: "Targaryen", you: "Daenerys", turns: null },
//   { id: 6, enemy: "Melisandre", you: null, turns: 150 },
//   { id: 7, enemy: "Clifford", you: "Ferrara", turns: 44 },
//   { id: 8, enemy: "Frances", you: "Rossini", turns: 36 },
//   { id: 9, enemy: "Roxie", you: "Harvey", turns: 65 },
// ];

const getGamesUrl = "http://localhost:8080/games";

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
        // rows={rows}
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
