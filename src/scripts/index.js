import { applyInputRangeStyle } from "./inputRange.js";
/* import { albumList } from "./albumList.js"; */
import { renderiza } from "./renderiza.js";
import { theme } from "./theme.js";
import { albumFilter } from "./filtro.js";
import { api } from "./API.js";

renderiza(await api());
albumFilter();
theme();
applyInputRangeStyle();