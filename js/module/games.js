let cont = 6;
let KeylistFavorites = "listFavorites";
import {
  imprimir,
  API_URL,
  Options,
  API_URL_ID,
  API_GENDER_URL,
  API_NEW_RELEASES,
  getGameLocalStorage,
  getLocalStorage
} from "../utils.js";
import { Game } from "./gamesRendering.js";

document.addEventListener("scroll", () => {
  const header = document.querySelector("header")

  if(window.scrollY > 0){
    header.classList.add("scrolled")
  } else{
    header.classList.remove("scrolled")
  }
})

class Games {
  constructor() {
    this.list = [];
  }
  attachEventListeners(container) {
    const gameDetails = document.querySelectorAll(".btn-details");
    gameDetails.forEach((button, index) => {
      button.addEventListener("click", () => {
        window.location.href = `game.html?id=${button.dataset.id}`;
        this.getGameDetails(button.dataset.id, container);
        console.log("id", button.dataset.id);
      });
    });
    const gameDetailsSwiper = document.querySelectorAll(".imgRealese");
    gameDetailsSwiper.forEach((div, index) => {
      div.addEventListener("click", () => {
        window.location.href = `game.html?id=${div.dataset.id}`;
        this.getGameDetails(div.dataset.id, container);
        console.log("id", div.dataset.id);
      });
    });
    const saveGames = document.querySelectorAll(".favorites-btn");
    saveGames.forEach((button, index) => {
      button.addEventListener("click", () => {
        let gamesFavoritesList = this.list[index];
        let gameSaveArray = getLocalStorage(KeylistFavorites) || [];
        gameSaveArray.push(gamesFavoritesList);
        console.log(gameSaveArray, "hola");

        localStorage.setItem(
          KeylistFavorites,
          JSON.stringify(gameSaveArray)
        );
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
        cont = cont + 1;
        this.render(container);
        console.log(cont);
      });
    });
  }
  render(container) {
    const contentHtml = this.list
      .slice(0, cont)
      .map((games) => games.renderMiniCard())
      .join("");
    imprimir(container, contentHtml);
    this.attachEventListeners(container);
  }
  renderNewReleases(container) {
    const contentHtml = this.list
      .slice(0, 12)
      .map((games) => games.renderNewRealease())
      .join("");
    imprimir(container, contentHtml);
    this.attachEventListeners(container);
  }
  renderFavorites(container) {
    const myGameDeserialize = JSON.parse(
      localStorage.getItem(KeylistFavorites)
    );
    console.log(localStorage);
    console.log("render", localStorage.getItem("list"));
    let gamesFavoritesHtml = "";

    for (let gameFavorite of myGameDeserialize) {
      gamesFavoritesHtml += `
      <a>
        <div class="card" data-id="${gameFavorite.id}">
          <img src="${gameFavorite.thumbnail}" alt="${gameFavorite.title}" class="img_listCard viewTransition">
          <div class="card_description">
            <div class="topContainer-card">
              <h2 class="title_listCard">${gameFavorite.title}</h2>
              <button class='favorites-btn' id='favorites-btn'><i class="fa-solid fa-heart" style="color: #008dda;"></i></button>
            </div>
            <p class="plataform">${gameFavorite.platform}</p>
            <div class="buttonSection">
              <h3 class="gender ${gameFavorite.genre}">${gameFavorite.genre}</h3>
              <button class="btn-primary btn-details" data-id="${gameFavorite.id}">View Game</button>
            </div>
            </div>
          </div>
      </a>
    `;
    }
    document.querySelector(`#${container}`).innerHTML = gamesFavoritesHtml;
    this.attachEventListeners(container);
  }
  renderGameDetails(container, response) {
    console.log("rendergames", response);
    const game = new Game(
      response.id,
      response.title,
      response.thumbnail,
      response.description,
      response.genre,
      response.platform,
      response.release_date,
      response.developer,
      response.publisher,
      response.minimum_system_requirements,
      response.screenshots
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
        response[i].description,
        response[i].genre,
        response[i].platform,
        response[i].release_date,
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
              game.title,
              game.thumbnail,
              game.release_date,
              game.genre,
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
        this.renderGameDetails("gameDetails", response);
      });
  }
  categoriesGamesFetch(id) {
    return fetch(`${API_GENDER_URL}${id}`, Options)
      .then((res) => res.json())
      .then((response) => {
        this.list = response.map(
          (game) =>
            new Game(
              game.id,
              game.title,
              game.thumbnail,
              game.release_date,
              game.genre,
              game.platform,
              game.developer
            )
        );
        this.render("listOfGames");
      });
  }

  newRealesesGamesFetch() {
    return fetch(API_NEW_RELEASES, Options)
      .then((res) => res.json())
      .then((response) => {
        this.list = response.map(
          (game) =>
            new Game(
              game.id,
              game.title,
              game.thumbnail,
              game.release_date,
              game.genre,
              game.platform,
              game.developer
            )
        );
      });
  }
}



export default Games;
