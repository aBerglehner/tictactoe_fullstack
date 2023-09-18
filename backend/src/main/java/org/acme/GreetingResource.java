package org.acme;

import jakarta.inject.Inject;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

import java.util.ArrayList;
import java.util.List;


@Path("/hello")
public class GreetingResource {
    static List<String> list = new ArrayList<>();

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response hello() {
        System.out.println("printed all GAMES get api: " + list);
        System.out.println("--------------------------------------------------");
        return Response.ok(list).build();
    }

    @POST
//    @Consumes(MediaType.APPLICATION_JSON)
    @Path("/add")
    public Response addSomething(String game) {
        System.out.println("Created Game: " + game);
        System.out.println("--------------------------------------------------");

        list.add(game);
        return Response.status(201).entity(game).build();
    }

}

