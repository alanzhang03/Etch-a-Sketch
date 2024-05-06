const gridContainer = document.querySelector("#grid-container");
const buttons = document.querySelector('.buttons');

for(let i = 0; i < 256; i++){
    gridItem = document.createElement("grid-item");
    girdItem.className = 'grid-item';
    gridContainer.appendChild(gridItem);
}

const clearButton = document.createElement("button");
clearButton.className = 'buttons';
clearButton.textContent = "clear button";
buttons.appendChild(clearButton);


const colorPickingButton = document.createElement("button");
colorPickingButton.className = "buttons";
colorPickingButton.className = "clear button";
buttons.appendChild(colorPickingButton);