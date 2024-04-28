import Games from "../js/module/games.js";

const games = new Games();
// games.searchGames().then(() => {
//   games.render("listOfGames");
// });

games.chargeGames().then(() => {
  games.render("listOfGames");
});



