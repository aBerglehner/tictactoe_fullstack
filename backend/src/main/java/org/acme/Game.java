package org.acme;

public class Game {
//    public static int curId = 0;
//    public int curId = 1;
    public int curId;
    public String enemy;
    public String you;
    //    public int turns = 0;
    public int turns;

    public Game(String enemy, String you,int curId, int turns) {
//        curId++;
        this.enemy = enemy;
        this.you = you;
        this.curId = curId;
        this.turns = turns;
    }

}
