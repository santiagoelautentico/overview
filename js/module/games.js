let cont = 6;
import {
  imprimir,
  API_URL,
  Options,
  API_URL_ID,
  API_GENDER_URL,
} from "../utils.js";
import { Game } from "../module/game.js";

// const queryString = window.location.search;
// const urlParams = new URLSearchParams(queryString);
// const product = urlParams.get('id');
// console.log("pepe", product);

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
    const gameCategories = document.querySelectorAll(".categories");
    gameCategories.forEach((li, index) => {
      li.addEventListener("click", () => {
        this.categoriesGamesFetch(li.dataset.id);
        console.log(li.dataset.id);
      });
    });
    const seeMore = document.querySelectorAll(".seeMore");
    seeMore.forEach((div, index) => {
      div.addEventListener("click", () => {
        cont = cont + 10;
        this.render(container);
        console.log(cont);
      });
    });
  }
  // attachEventListeners(container) {
  //   const gameDetails = document.querySelectorAll(".card");
  //   gameDetails.forEach((div, index) => {
  //     div.addEventListener("mouseover", () => {
  //       this.getGameDetailsPictures(div.dataset.id, container);
  //       console.log(div.dataset.id);
  //     });
  //   });
  // }

  render(container) {
    const contentHtml = this.list
      .slice(0, cont)
      .map((games) => games.renderMiniCard())
      .join("");
    imprimir(container, contentHtml);
    this.attachEventListeners(container);
  }

  renderGameDetails(container, response) {
    // response.renderGamePage()
    const game = new Game(
      response.id,
      response.thumbnail,
      response.title,
      response.genre,
      response.release_date,
      response.platform,
      response.developer
    );

    imprimir(container, game.renderGamePage());
    this.attachEventListeners(container);
  }
  renderGameCategories(container, response) {
    for (let i = 0; i < response.length; i++) {
      const game = new Game(
        response[i].id,
        response[i].thumbnail,
        response[i].title,
        response[i].genre,
        response[i].release_date,
        response[i].platform,
        response[i].developer
      );
      console.log(response[i]);
      imprimir(container, game.renderMiniCard());
    }
    this.attachEventListeners(container);
  }
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
        const queryString = window.location.href;
        const urlParams = new URLSearchParams(queryString);
        console.log(queryString);
        const elid = urlParams.get(id);
        console.log("pepe", elid);
        console.log("prueba2", response);
        this.renderGameDetails("listOfGames", response);
      });
  }
  categoriesGamesFetch(id) {
    return fetch(`${API_GENDER_URL}${id}`)
      .then((res) => res.json())
      .then((response) => {
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
        this.render("listOfGames");
      });
  }

}

export default Games;
