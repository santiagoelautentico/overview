import { imprimir, API_URL, Options, API_URL_ID } from "../utils.js";
import { Game } from "../module/game.js";

class Games {
  constructor() {
    this.list = [];
  }

  attachEventListeners(container) {
    const gameDetails = document.querySelectorAll(".card");
    gameDetails.forEach((div, index) => {
      div.addEventListener("click", () => {
        this.getGameDetails(div.dataset.id, container);
        console.log(div.dataset.id);
      });
    });
  }
  // attachEventListeners(container) {
  //   const gameDetails = document.querySelectorAll(".card");
  //   gameDetails.forEach((div, index) => {
  //     div.addEventListener("mouseover", () => {
  //       this.getGameDetails(div.dataset.id, container);
  //       console.log(div.dataset.id);
  //     });
  //   });
  // }

  render(container) {
    const contentHtml = this.list
      .map((games) => games.renderMiniCard())
      .join("");
    imprimir(container, contentHtml);
    this.attachEventListeners(container);
  }

  renderGameDetails(container, response) {
    // response.renderGamePage()
    const game = new Game(
      response.id,
      response.cover_picture,
      response.title,
      response.genre,
      response.release_date,
      response.platform,
      response.developer
    );
    imprimir(container, game.renderGamePage());
    this.attachEventListeners(container);
  }
  // renderGameSreenshoots(container, response) {
  //   // response.renderGamePage()
  //   const game = new Game(
  //     response.id,
  //     response.cover_picture,
  //   );
  //   imprimir(container, game.renderScreenshoots());
  //   this.attachEventListeners(container);
  // }
  chargeGames() {
    return fetch(API_URL, Options)
      .then((res) => res.json())
      .then((response) => {
        console.log("prueba", response);
        this.list = response.map(
          (game) =>
            new Game(
              game.id,
              game.thumbnail,
              game.title,
              game.genre,
              game.release_date,
              game.platform,
              game.developer
            )
        );
      });
  }
  getGameDetails(id) {
    return fetch(`${API_URL_ID}?id=${id}`, Options)
      .then((res) => res.json())
      .then((response) => {
        console.log("prueba2", response);
        this.renderGameDetails("listOfGames", response);
      });
  }
  // getScreenShoots(id) {
  //   return fetch(`${API_URL_ID}?id=${id}`, Options)
  //     .then((res) => res.json())
  //     .then((response) => {
  //       console.log("prueba3", response);
  //       this.renderGameSreenshoots("screenshots", response);
  //     });
  // }
}

export default Games;
