package org.acme;

import java.util.List;

public class Cell {
    public List<String> cells;
    public int num;
    public String turn;

    public Cell(List<String> cells, int num, String turn) {
        this.cells = cells;
        this.num = num;
        this.turn = turn;
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

}
