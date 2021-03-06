package cz.educanet.webik;

import javax.enterprise.context.ApplicationScoped;
import java.util.ArrayList;
import java.lang.Math;

@ApplicationScoped
public class GameManager {

    int idcko = 0;

    private ArrayList<Game> games = new ArrayList<>();

    public ArrayList<Game> getGames(){
        return games;
    }

    public boolean create(Game game) {
        if(game.getRating() < 0 || game.getRating() > 100)
            return false;

        this.idcko ++;
        int newId = this.idcko;

        game.setId(newId);
        games.add(game);

        return true;
    }


    public Game getGame (int id){
        return  games.stream()
                .filter(gameStream -> id == gameStream.getId())
                .findAny()
                .orElse(null);
    }

    public boolean gameCheck(int id) {
        for (int i = 0; i < games.size(); i++){
            if (id != games.get(i).id) {
                return false;
            }
        } return true;
    }

    public boolean removeGame(int id){
        return  games.remove(getGame(id));
    }

    public boolean editGame(int id, Game game){


        if(gameCheck(id)){
            games.add(game);
            return true;
        } else {
            return false;
        }
    }

}
