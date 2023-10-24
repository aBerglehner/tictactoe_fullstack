package org.acme;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Cell extends Game {
    public int num;

    public Cell(int id, String enemy, String you, List<String> cells, String turn, String error, int num) {
        super(id, enemy, you, cells, turn, error);
        this.num = num;
    }

    public void setNum(int num) {
        this.num = num;
    }

    public int getNum() {
        return num;
    }


}
