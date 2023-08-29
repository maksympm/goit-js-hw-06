const controlSize = document.querySelector("#font-size-control");
const changeText = document.querySelector("#text");

const handleInput = () => {
  changeText.style.fontSize = `${controlSize.value}px`;
};
handleInput();
controlSize.addEventListener("input", handleInput);
