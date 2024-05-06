/* import { albumList } from "./albumList.js"; */
import { renderiza } from "./renderiza.js";
import { theme } from "./theme.js";
import { api } from "./API.js";

const albumList = await api()

export function albumFilter() {
  const inputRange = document.querySelector("[type='range']");

  inputRange.addEventListener("change", () => {
    const filtered = albumList.filter((album) => {
      return parseFloat(album.price) <= parseInt(inputRange.value);
    });
    renderiza(filtered);
    theme();
  });
}
