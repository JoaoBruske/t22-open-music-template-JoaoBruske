import { applyInputRangeStyle } from "./inputRange.js";

export function theme() {
  /* Verifica se há um tema salvo */
  const theme = localStorage.getItem("openMusicTheme");
  const elementos = document.querySelectorAll("[data-theme]");

  if (theme === "dark") {
    elementos.forEach((elemento) => elemento.classList.add("darkMode"));
  }
}

/* Adiciona a seleção de tema ao botão */
const themeButton = document.querySelector("header button");
themeButton.addEventListener("click", () => {
  const elementos = document.querySelectorAll("[data-theme]");
  const theme = localStorage.getItem("openMusicTheme");
  console.log(theme);
  if (theme != "dark") {
    localStorage.setItem("openMusicTheme", "dark");
    elementos.forEach((elemento) => elemento.classList.toggle("darkMode"));
    console.log("entrou 1");
  } else {
    console.log("entrou 2 ");
    localStorage.setItem("openMusicTheme", "light");
    elementos.forEach((elemento) => {
      elemento.classList.toggle("darkMode");
    });
  }
  applyInputRangeStyle();
});