import Games from "./module/games.js";

const games = new Games();
games.newRealesesGamesFetch().then(() => {
  games.renderNewReleases("swiperWrapper");
});
games.chargeGames().then(() => {
  games.render("listOfGames");
});

