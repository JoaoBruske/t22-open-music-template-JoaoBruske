import { criaCards } from "./criaCards.js";

export function renderiza(arrayAlbums) {
  const containerAlbums = document.querySelector(".container__albums");
  arrayAlbums.forEach((album) => {
    containerAlbums.appendChild(criaCards(album));
  });
}
