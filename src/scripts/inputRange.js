export function animaCor() {
  const inputRange = document.querySelector('input[type = "range"]');
  inputRange.addEventListener("input", () => {
    inputRange.style.background = `linear-gradient(to right, var(--color-brand-1) 0%, var(--color-brand-1) ${inputRange.value}%, var(--color-gray-5) ${inputRange.value}%, var(--color-gray-5) 100%)`;
  });
}
