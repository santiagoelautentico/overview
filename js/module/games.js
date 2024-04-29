import { imprimir, API_URL, Options } from "../utils.js";
import { ListOfGames } from "../module/game.js";

class Games {
  constructor() {
    this.list = [];
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
  }

  chargeGames() {
    return fetch(API_URL, Options)
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
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
        function obtenerID(id) {
          alert("se ha presionado la carta con el id: " + id);
        }
      });

    // const filterOption = document.getElementById("search");
    // const handleFilterSearch = () => {
    //   const searchFilter = filterOption.value;
    //   const filteredGenders = this.list.filter((game) => this
    // }
  }
}

export default Games;
