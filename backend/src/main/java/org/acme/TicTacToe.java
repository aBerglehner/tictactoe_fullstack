package org.acme;

import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

import java.util.ArrayList;
import java.util.List;

@Path("/tictactoe")
public class TicTacToe {
//    static List<Cell> list = new ArrayList<>();
//
//    @GET
//    @Produces(MediaType.APPLICATION_JSON)
//    public Response testGet() {
//        System.out.println("new api #####: ");
//        System.out.println("--------------------------------------------------");
//        List<String> mylist = new ArrayList<>();
//        mylist.add("aa");
//        mylist.add("bb");
////        Cell cell = new Cell(mylist, 1, "tt");
////        list.add(cell);
//        return Response.ok(list).build();
//    }
//
//
//    @POST
//    @Path("/cell")
//    @Consumes(MediaType.APPLICATION_JSON)
//    public Response evaluateGame(Cell cell) {
//        System.out.println("post request clicked on cell: ");
//        System.out.println("--------------------------------------------------");
//
//        cell.handleTurn();
//        cell.swapTurn();
//
//        return Response.status(201).entity(cell).build();
//    }
}
