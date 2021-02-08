package cz.educanet.webik;

import javax.enterprise.context.ApplicationScoped;
import javax.ws.rs.core.Response;
import java.util.ArrayList;
import java.lang.Math;

@ApplicationScoped
public class GameManager {

    private ArrayList<Game> games = new ArrayList<>();

    public ArrayList<Game> getGames(){
        return games;
    }

    public boolean create(Game game) {
        if(game.getRating() < 0 || game.getRating() > 100)
            return false;

        int newId = (int) (Math.random()*(100 +1));

        if (gameCheck(newId)){
            game.setId(newId);
            games.add(game);
        }
        return true;
    }

    public Game getGame (int id){
        return  games.stream()
                .filter(gameStream -> id == gameStream.getId())
                .findAny()
                .orElse(null);
    }

    public boolean gameCheck(int id) {
        for (int i = 0; i < 100; i++){
            if (id != games.get(id).id) {
                return false;
            }
        } return true;
    }

    public boolean removeGame(int id){
        return  games.remove(getGame(id));
    }

    public boolean editGame(int id){
        return true;
    }

}
