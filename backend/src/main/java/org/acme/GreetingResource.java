package org.acme;

import jakarta.inject.Inject;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.IntStream;


@Path("/games")
public class GreetingResource {

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response showAllGames() {
        System.out.println("printed all GAMES get api: ");
        System.out.println("--------------------------------------------------");
        return Response.ok(Constants.list).build();
    }

    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    public Response modifyGame(Cell cell) {
        System.out.println("modifyGame / put api: ");
        System.out.println("--------------------------------------------------");

        Optional<Game> searchedGame = Constants.list.stream().filter(e -> e.getId() == cell.getId()).findFirst();
        if (searchedGame.isPresent()) {
            searchedGame.get().setError("");
            searchedGame.get().handleTurn(cell.getNum());
            searchedGame.get().swapTurn();
        }
        return Response.ok(searchedGame).build();
    }

    @PUT
    @Path("/restart")
    @Consumes(MediaType.APPLICATION_JSON)
    public Response restartGame(Game game) {
        System.out.println("restartGame / put api: ");
        System.out.println("--------------------------------------------------");

        Optional<Game> searchedGame = Constants.list.stream().filter(e -> e.getId() == game.getId()).findFirst();
        if (searchedGame.isPresent()) {
            searchedGame.get().setError("");
            List<String> cellList = IntStream.rangeClosed(0, 8).mapToObj(String::valueOf).map(e -> "").collect(Collectors.toList());
            searchedGame.get().setCells(cellList);
            searchedGame.get().setWinner("");
            searchedGame.get().setStatus("in progress");
        }
        return Response.ok(searchedGame).build();
    }

    @GET
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getGameById(@PathParam("id") int id) {
        System.out.println("get game by id api: ");
        System.out.println("id: " + id);
        System.out.println("--------------------------------------------------");
        Optional<Game> searchedGame = Constants.list.stream().filter(game -> game.getId() == id).findFirst();
        return Response.ok(searchedGame).build();
    }

    @POST
    @Path("/add")
    @Consumes(MediaType.APPLICATION_JSON) // Specify the expected media type for request
    public Response addGame(Game game) {
        System.out.println("Created Game / post api: ");
        System.out.println("--------------------------------------------------");
        List<String> cellList = IntStream.rangeClosed(0, 8).mapToObj(String::valueOf).map(e -> "").collect(Collectors.toList());
        game.setCells(cellList);
        game.setTurn("X");
        game.setWinner("");
        game.setStatus("started");
        Constants.list.add(game);
        Constants.curId++;

        return Response.status(201).entity(game).build();
    }


}

