const controlSize = document.querySelector("#font-size-control");
const changeText = document.querySelector("#text");

const handleInput = () => {
  changeText.style.fontSize = `${controlSize.value}px`;
};

controlSize.addEventListener("input", handleInput);
