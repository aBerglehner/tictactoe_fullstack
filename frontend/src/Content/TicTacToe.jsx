import React, { useState } from "react";

const TicTacToe = () => {
  const [turn, setTurn] = useState("x");
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
            <td>1</td>
            <td>2</td>
            <td>3</td>
          </tr>
          <tr>
            <td>4</td>
            <td>5</td>
            <td>6</td>
          </tr>
          <tr>
            <td>7</td>
            <td>8</td>
            <td>9</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TicTacToe;
