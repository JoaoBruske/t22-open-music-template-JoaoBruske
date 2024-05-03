export function applyInputRangeStyle() {
  const inputRange = document.querySelector("[type='range']");

  checkThemeAndValue();

  inputRange.addEventListener("input", () => {
    checkThemeAndValue();
  });

  function checkThemeAndValue() {
    const theme = localStorage.getItem("openMusicTheme");

    const runnableTrackProgress = (inputRange.value / inputRange.max) * 100;
    if (theme === "dark") {
      inputRange.style.background = `linear-gradient(to right, var(--color-brand-2) ${runnableTrackProgress}%, var(--color-gray-4) ${runnableTrackProgress}%)`;
    } else {
      inputRange.style.background = `linear-gradient(to right, var(--color-brand-1) ${runnableTrackProgress}%, var(--color-gray-5) ${runnableTrackProgress}%)`;
    }

    const displayValor = document.querySelector(".price p span");
    displayValor.textContent = `R$ ${inputRange.value}`;
    console.log("teste");
  }
}
