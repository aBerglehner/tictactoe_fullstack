package org.acme;

import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

import java.util.ArrayList;
import java.util.List;


@Path("/hello")
public class GreetingResource {
    static List<Game> list = new ArrayList<>();

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response hello() {
        System.out.println("printed all GAMES get api: ");
        System.out.println("--------------------------------------------------");
        return Response.ok(list).build();
    }


    @POST
    @Path("/add")
    @Consumes(MediaType.APPLICATION_JSON) // Specify the expected media type for request
    public Response addSomething(Game game) {
        System.out.println("Created Game: ");
        System.out.println("--------------------------------------------------");

        list.add(game);
        return Response.status(201).entity(game).build();
    }

}

