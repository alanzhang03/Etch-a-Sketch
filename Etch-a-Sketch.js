const gridContainer = document.querySelector("#grid-container");
const buttons = document.querySelector('#buttons-container');
let currentColor = '#000000';
let isDrawing = false;

function buildGridItems(){
    for(let i = 0; i < 256; i++){
        grids = document.createElement("div");
        grids.className = 'grid-item';
        gridContainer.appendChild(grids);
        grids.addEventListener('mouseover', function(){
            if(isDrawing){
                this.style.backgroundColor = currentColor;
            }
        });
    }
}
buildGridItems();

gridContainer.addEventListener('click', function(){
    isDrawing = !isDrawing;
})

const colorPickingButton = document.createElement("input");
colorPickingButton.textContent = "Color: ";
colorPickingButton.type = "color";
colorPickingButton.id = "colorPicker";
colorPickingButton.value = "#000000";
colorPickingButton.className = "buttons";

buttons.appendChild(colorPickingButton);

colorPickingButton.addEventListener("input", function(){
    console.log("Color chosen:", this.value);
    currentColor = this.value;
})


const clearButton = document.createElement("button");
clearButton.className = 'buttons';
clearButton.textContent = "clear button!";
buttons.appendChild(clearButton);

clearButton.addEventListener("click", function(){
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
    buildGridItems();
})


const eraseButton = document.createElement("button");
eraseButton.className = "buttons";
eraseButton.textContent = "Erase button!";
buttons.appendChild(eraseButton);