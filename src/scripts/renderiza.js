import { criaCards } from "./criaCards.js";

export function renderiza(arrayAlbums) {
  const containerAlbums = document.querySelector(".container__albums");

  while (containerAlbums.childElementCount > 0) {
    containerAlbums.removeChild(containerAlbums.firstChild);
  }

  arrayAlbums.forEach((album) => {
    containerAlbums.appendChild(criaCards(album));
  });
}
