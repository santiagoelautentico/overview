import { imprimir, API_URL, Options, API_URL_ID } from "../utils.js";
import { ListOfGames } from "../module/game.js";

class Games {
  constructor() {
    this.list = [];
  }
  detailsGame(id, container) {
    this.list = this.list.filter((games) => games.id !== id);
    fetch(`${API_URL_ID}?id=${id}`, Options)
      .then((res) => res.json())
      .then((data) => {
        this.list.push(new ListOfGames(data.id, data.thumbnail, data.title, data.genre, data.release_date, data.platform, data.developer));
        this.render2(container);
        console.log("prueba", this.list);
      })
  }


  attachEventListeners(container) {
    const gameDetails = document.querySelectorAll(".card");
    gameDetails.forEach((div, index) => {
      div.addEventListener("click", () => {
        this.idGames(div.dataset.id, container);
        console.log(div.dataset.id);
      });
    });
  }

  render(container) {
    // if (this.lista.length === 0) {
    //   imprimir(container, "<h3 class='empty'>There are no games</h3>");
    //   return;
    // }
    const contentHtml = this.list
      .map((games) => games.renderMiniCard())
      .join("");
    imprimir(container, contentHtml);
    this.attachEventListeners(container);
  }

  render2(container) {
    const contentHtml = this.list
      .map((games) => games.renderGamePage())
      .join("");
    imprimir(container, contentHtml);
    this.attachEventListeners(container);
  }

  // attachEventListeners(container) {
  //   const gameDetails = document.querySelectorAll(".card");
  //   gameDetails.forEach((div, index) => {
  //     div.addEventListener("click", () => {
  //       this.detailsGame(div.dataset.id, container);
  //       console.log(div.dataset.id);
  //     });
  //   });
  // }

  // pepeTry(id) {
  //   return fetch(`${API_URL_ID}?id=${id}`, Options)
  //     .then((res) => res.json())
  //     .then((response) => {
  //       console.log("esta es la respuesta", response);
  //       this.list.id = response.map(
  //         (game) =>
  //           new ListOfGames(
  //             game.id,
  //             game.thumbnail,
  //             game.title,
  //             game.genre,
  //             game.release_date,
  //             game.platform,
  //             game.developer
  //           )
  //       );
  //     });
  // }
  chargeGames() {
    return fetch(API_URL, Options)
      .then((res) => res.json())
      .then((response) => {
        console.log("prueba", response);
        this.list = response.map(
          (game) =>
            new ListOfGames(
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
  idGames(id) {
    return fetch(`${API_URL_ID}?id=${id}`, Options)
      .then((res) => res.json())
      .then((response) => {
        console.log("prueba2", response);
        render2("listOfGames2", response);
      });
  }

}

export default Games;
