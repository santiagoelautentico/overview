import Games from "./module/games.js";

const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

console.log(queryString);
const gamePage = urlParams.get("id");
const games = new Games();
games.chargeGames(gamePage).then(() => {
  games.renderFavorites("favorites_container");
});
