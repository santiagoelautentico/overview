import Games from "./module/games.js";

const games = new Games();
games.chargeGames().then(() => {
  games.render("listOfGames");
});

