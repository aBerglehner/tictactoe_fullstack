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
//    static List<Game> list = new ArrayList<>();

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response showAllGames() {
        System.out.println("printed all GAMES get api: ");
        System.out.println("--------------------------------------------------");
        return Response.ok(Constants.list).build();
    }

    @GET
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getGameById(@PathParam("id") int id) {
        System.out.println("get game by id api: ");
        System.out.println("--------------------------------------------------");
        Optional<Game> searchedGame = Constants.list.stream().filter(game -> game.getId() == id).findFirst();
        return Response.ok(searchedGame).build();
    }

    @PUT
    @Path("/{id}")
    @Consumes(MediaType.APPLICATION_JSON)
    public Response modifyGame(@PathParam("id") int id) {
        System.out.println("modifyGame / put api: ");
        System.out.println("--------------------------------------------------");
//        () -> Arrays.stream(Constants.list)
        Optional<Game> searchedGame = Constants.list.stream().filter(game -> game.getId() == id).findFirst();
        Constants.list.forEach(e -> System.out.println(e.getId()));
//        Game game = Constants.list.get(id - 1);
        searchedGame.ifPresent(game -> game.setYou("changed!!!"));

//        return Response.status(204).entity(searchedGame).build();
        return Response.status(204).entity(Constants.list).build();
    }

    @POST
    @Path("/add")
    @Consumes(MediaType.APPLICATION_JSON) // Specify the expected media type for request
    public Response addGame(Game game) {
        System.out.println("Created Game / post api: ");
        System.out.println("--------------------------------------------------");
        List<String> cellList = IntStream.rangeClosed(0, 8).mapToObj(String::valueOf).map(e -> "").toList();
        game.setCells(cellList);
        game.setNum(-1);
        game.setTurn("x");
        game.setWinner("");
        Constants.list.add(game);
        Constants.curId++;

        return Response.status(201).entity(game).build();
    }


}

