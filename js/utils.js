export const imprimir = (elemento, contenido) => {
  document.querySelector(`#${elemento}`).innerHTML = contenido;
};

// export const setLocalStorage = (clave, valor) => {
//   if (typeof valor === "object") {
//     valor = JSON.stringify(valor);
//   }
//   localStorage.setItem(clave, valor);
// };

// // funcion para obtener valor de localStorage por clave
// //si es un objeto, lo convierto a objeto con JSON.parse
// export const getLocalStorage = (clave) => {
//   let valor = localStorage.getItem(clave);
//   try {
//     return JSON.parse(valor);
//   } catch (error) {
//     return valor;
//   }
// };
export function loadGameLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
export function getGameLocalStorage(key, valueDefult){
  const value = localStorage.getItem(key)

  if(value) {
    return value
  }
  else {
    valueDefult
  }
}
export const Options = {
  method: "GET",
  Headers: {
    "X-RapidAPI-Key": "91fe6eb877msh1d6bb6d3791657ap1e16b7jsnf4b627d697b6",
    "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
  },
};
export const API_URL = "https://www.freetogame.com/api/games";
export const API_URL_ID = "https://www.freetogame.com/api/game";
export const API_GENDER_URL = "https://www.freetogame.com/api/games?category=";

// export const redirectGameDetail = window.location.href = 'game.html'
