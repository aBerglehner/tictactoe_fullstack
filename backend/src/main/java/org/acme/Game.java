package org.acme;

public class Game {
    public int id;
    public String enemy;
    public String you;

    public Game(String enemy, String you) {
        this.enemy = enemy;
        this.you = you;
        this.id = Constants.curId;
    }
}
