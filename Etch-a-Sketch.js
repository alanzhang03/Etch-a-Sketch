const gridContainer = document.querySelector("#grid-container");
const buttons = document.querySelector('#buttons-container');
let currentColor = '#000000';


for(let i = 0; i < 256; i++){
    grids = document.createElement("grid-item");
    grids.className = 'grid-item';
    gridContainer.appendChild(grids);




}

const clearButton = document.createElement("button");
clearButton.className = 'buttons';
clearButton.textContent = "clear button!";
buttons.appendChild(clearButton);


const colorPickingButton = document.createElement("button");
colorPickingButton.className = "buttons";
colorPickingButton.textContent = "pick button!";
buttons.appendChild(colorPickingButton);







const eraseButton = document.createElement("button");
eraseButton.className = "buttons";
eraseButton.textContent = "Erase button!";
buttons.appendChild(eraseButton);