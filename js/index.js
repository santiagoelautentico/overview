import Games from "./module/games.js";

const games = new Games();
// games.searchGames().then(() => {
//   games.render("listOfGames");
// });
// export const click = (elemento, callback) => {
//   document.querySelector(`#${elemento}`).addEventListener("click", callback);
// };
// games.detailsGame() {
//   games.render2("listOfGames2");
// }
games.chargeGames().then(() => {
  games.render("listOfGames");
});
