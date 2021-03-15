package cz.educanet.webik;

import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.ArrayList;
import java.util.List;


@Path("user")
@Produces(MediaType.APPLICATION_JSON)
public class UsersResource {

    @Inject
    private UsersManager manager;

    public static List<User> names = new ArrayList<User>();

    public static boolean existUser(String username) {
        for(int i = 0; i < names.size(); i++) {
            if(username.equals(names.get(i).getUsername())) {
                return true;
            }
        }
        return false;
    }

    @POST
    @Path("register")
    public Response createUser(User user) {
        if(existUser(user.username)) {
            return Response.ok("This username already exists").build();
        }
        names.add(user);
        return Response.ok("This username:" + user + "is ok").build();
    }

    @POST
    @Path("login")
    public Response loginUser(User user) {
        for(int x = 0; x < names.size(); x++) {
            User user2 = names.get(x);
            if (user2.username.equals(user.username) & user2.password.equals(user.password)) {
                manager.user = user2;
                return Response.ok(user2).build();
            }

        }
        return Response.status(Response.Status.NOT_FOUND).build();
    }

    @GET
    public Response getLoggedUser() {
        return  Response.ok(manager.user).build();
    }

}
