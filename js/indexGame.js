import Games from "./module/games.js";

const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

console.log(queryString);
const gamePage = urlParams.get("id");

console.log("el id es:", gamePage);

const games = new Games();
games.getGameDetails(gamePage).then(() => {
  games.renderGameDetails("gameDetails");
});
