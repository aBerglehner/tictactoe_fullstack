package org.acme;


import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Game {
    public int id;
    public String you;
    public String enemy;
    public String error;
    public String status;
    public List<String> cells;
    public String turn;
    public String winner;

    public Game(int id, String enemy, String you, List<String> cells, String turn, String error, String status) {
        this.you = you;
        this.enemy = enemy;
        this.error = error;
        this.status = status;
        if (id == 0) {
            this.id = Constants.curId;
        } else {
            this.id = id;
        }
        this.cells = cells;
        this.turn = turn;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setYou(String you) {
        this.you = you;
    }

    public void setCells(List<String> cells) {
        this.cells = cells;
    }

    public void setTurn(String turn) {
        this.turn = turn;
    }

    public List<String> getCells() {
        return cells;
    }

    public String getTurn() {
        return turn;
    }

    public String getWinner() {
        return winner;
    }

    public void setWinner(String winner) {
        this.winner = winner;
    }

    public String getError() {
        return error;
    }

    public void setError(String error) {
        this.error = error;
    }

    //real methods starts here add Lombok
    public void swapTurn() {
        if (!this.winner.isEmpty() || !this.error.isEmpty()) {
            return;
        }
        if (this.turn.equals("x")) {
            setTurn("o");
        } else {
            setTurn("x");
        }
    }

    public void handleTurn(int num) {
        if (!this.winner.isEmpty()) {
            setError(this.turn + " already won the game");
        } else if (this.cells.get(num).isEmpty()) {
            this.cells.set(num, this.turn);
            if (checkIfGameWon(this.turn, this.cells)) {
                setWinner(this.turn);
            }
        } else {
            setError("try free field");
        }
    }

    private boolean checkIfGameWon(String turn, List<String> cells) {
        List<List<Integer>> possibilities = new ArrayList<>();
        //rows combos
        possibilities.add(new ArrayList<>(Arrays.asList(0, 1, 2)));
        possibilities.add(new ArrayList<>(Arrays.asList(3, 4, 5)));
        possibilities.add(new ArrayList<>(Arrays.asList(6, 7, 8)));
        //cols combos
        possibilities.add(new ArrayList<>(Arrays.asList(0, 3, 6)));
        possibilities.add(new ArrayList<>(Arrays.asList(1, 4, 7)));
        possibilities.add(new ArrayList<>(Arrays.asList(2, 5, 8)));
        //diagonal combos
        possibilities.add(new ArrayList<>(Arrays.asList(0, 4, 8)));
        possibilities.add(new ArrayList<>(Arrays.asList(2, 4, 6)));

        for (List<Integer> possibility : possibilities) {
            if (possibility.stream().allMatch(e -> cells.get(e).equals(turn))) return true;
        }

        return false;
    }

}
