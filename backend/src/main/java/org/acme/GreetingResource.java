package org.acme;

import jakarta.inject.Inject;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;


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


    @POST
    @Path("/add")
    @Consumes(MediaType.APPLICATION_JSON) // Specify the expected media type for request
    public Response addGame(Game game) {
        System.out.println("Created Game: ");
        System.out.println("--------------------------------------------------");
        Constants.list.add(game);
        Constants.curId++;

        return Response.status(201).entity(game).build();
    }

    @PUT
    @Path("/add/{id}")
    @Consumes(MediaType.APPLICATION_JSON)
    public Response modifyGame(@PathParam("id") int id) {
        System.out.println("modifyGame: ");
        System.out.println("--------------------------------------------------");
//        () -> Arrays.stream(Constants.list)
        Optional<Game> searchedGame = Constants.list.stream().filter(game -> game.getId() == id).findFirst();
        Constants.list.forEach(e -> System.out.println(e.getId()));
//        Game game = Constants.list.get(id - 1);
        searchedGame.ifPresent(game -> game.setYou("changed!!!"));

        return Response.status(204).entity(searchedGame).build();
    }

}

