package org.acme;

import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

import java.util.ArrayList;
import java.util.List;


@Path("/games")
public class GreetingResource {
    static List<Game> list = new ArrayList<>();

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response showAllGames() {
        System.out.println("printed all GAMES get api: ");
        System.out.println("--------------------------------------------------");
        return Response.ok(list).build();
    }


    @POST
    @Path("/add")
    @Consumes(MediaType.APPLICATION_JSON) // Specify the expected media type for request
    public Response addGame(Game game) {
        System.out.println("Created Game: ");
        System.out.println("--------------------------------------------------");
        list.add(game);
        Constants.curId++;

        return Response.status(201).entity(game).build();
    }

}

