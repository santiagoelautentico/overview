import Games from "./module/games.js";

const games = new Games();
// games.searchGames().then(() => {
//   games.render("listOfGames");
// });
// export const click = (elemento, callback) => {
//   document.querySelector(`#${elemento}`).addEventListener("click", callback);
// };
games.idGames().then(() => {
  games.render2("listOfGames");
});
games.chargeGames().then(() => {
  games.render("listOfGames");
});
