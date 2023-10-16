package org.acme;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Game {
    public int id;
    public String enemy;

    public String you;

    //new
    public List<String> cells;
    public int num;
    public String turn;
    public String error;
    public String winner;

    //old
//    public Game(String enemy, String you) {
//        this.enemy = "myTest";
//        this.you = "myTest";
//        this.id = Constants.curId;
//    }

    public Game(int id, String enemy, String you, List<String> cells, int num, String turn) {
        this.enemy = enemy;
        this.you = you;
        if (id == 0) {
            this.id = Constants.curId;
        } else {
            this.id = id;
        }
        this.cells = cells;
        this.num = num;
        this.turn = turn;
    }

    public void setYou(String you) {
        this.you = you;
    }

    public String getError() {
        return error;
    }

    public void setError(String error) {
        this.error = error;
    }

    public void setCells(List<String> cells) {
        this.cells = cells;
    }

    public void setNum(int num) {
        this.num = num;
    }

    public void setTurn(String turn) {
        this.turn = turn;
    }

    public List<String> getCells() {
        return cells;
    }

    public int getNum() {
        return num;
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

    public void handleTurn() {
        if (!winner.equals("")) {
            setError(turn + " already won the game");
        } else if (cells.get(num).equals("")) {
            cells.set(num, turn);
            if (checkIfGameWon(turn, cells)) {
                setWinner(turn);
            }
        } else {
            setError("try free field");
        }
    }

    public void swapTurn() {
        if (this.turn.equals("x")) {
            setTurn("o");
        } else {
            setTurn("x");
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
