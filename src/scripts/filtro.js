/* import { albumList } from "./albumList.js"; */
import { renderiza } from "./renderiza.js";
import { theme } from "./theme.js";
import { api } from "./API.js";

const albumList = await api();

/* Filtro de gênero */
const generos = document.querySelectorAll(".genres__list li button");
const inputRange = document.querySelector("[type='range']");

export function albumFilter() {
  inputRange.addEventListener("change", () => {
    const filtered = albumList.filter((album) => {
      if (genre === "Todos") {
        return parseFloat(album.price) <= parseInt(inputRange.value);
      } else {
        return (
          album.genre === genre &&
          parseFloat(album.price) <= parseInt(inputRange.value)
        );
      }
    });
    renderiza(filtered);
    theme();
  });
}

let ultimoSelecionado = document.querySelector(".genres ul li button");

const temaSelecionado = localStorage.getItem("openMusicTheme");

if (temaSelecionado === "dark") {
  ultimoSelecionado.classList.add("blurDark");
} else {
  ultimoSelecionado.classList.add("blurLight");
}
let genre = "Todos";

generos.forEach((genero) => {
  genero.addEventListener("blur", function () {
    const theme = localStorage.getItem("openMusicTheme");

    if (theme === "dark") {
      genero.classList.add("blurDark");
    } else {
      genero.classList.add("blurLight");
    }

    ultimoSelecionado = this;
  });

  genero.addEventListener("click", function () {
    if (ultimoSelecionado != this) {
      const theme = localStorage.getItem("openMusicTheme");

      if (theme === "dark") {
        ultimoSelecionado.classList.remove("blurDark");
      } else {
        ultimoSelecionado.classList.remove("blurLight");
      }
    }

    genre = this.textContent;

    const filtered = albumList.filter((album) => {
      if (genre === "Todos") {
        return parseFloat(album.price) <= parseInt(inputRange.value);
      } else {
        return (
          album.genre === genre &&
          parseFloat(album.price) <= parseInt(inputRange.value)
        );
      }
    });
    renderiza(filtered);
    theme();
  });
});

export {ultimoSelecionado}