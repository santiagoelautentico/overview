export const imprimir = (elemento, contenido) => {
  document.querySelector(`#${elemento}`).innerHTML = contenido;
};

export const Options = {
  method: "GET",
  Headers: {
    "X-RapidAPI-Key": "91fe6eb877msh1d6bb6d3791657ap1e16b7jsnf4b627d697b6",
    "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
  },
};
export const API_URL = 'https://www.freetogame.com/api/games';

