const gridContainer = document.querySelector("#grid-container");
const buttons = document.querySelector('#buttons-container');
let currentColor = 'white';
let isDrawing = false;
let useRainbow = false;

function buildGridItems(){
    for(let i = 0; i < 256; i++){
        let grids = document.createElement("div");
        grids.className = 'grid-item';
        gridContainer.appendChild(grids);
        grids.addEventListener('mouseover', function(){
            if(isDrawing){
                if (useRainbow) {
                    this.style.backgroundColor = setRainbow();  
                } else {
                    this.style.backgroundColor = currentColor;
                }
            }
        });
    }
}
buildGridItems();

function setEraseMode(){
    currentColor = 'white';
    useRainbow = false;
}

function setBlackMode(){
    currentColor = 'black';
    useRainbow = false;
}

function setRainbow() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    useRainbow = true;
    return `rgb(${red}, ${green}, ${blue})`;
}

gridContainer.addEventListener('click', function(){
    isDrawing = !isDrawing;
})

const colorPickingButton = document.createElement("input");
colorPickingButton.textContent = "Color: ";
colorPickingButton.type = "color";
colorPickingButton.id = "colorPicker";
colorPickingButton.value = "white";
colorPickingButton.className = "buttons";
buttons.appendChild(colorPickingButton);
colorPickingButton.addEventListener("input", function(){
    console.log("Color chosen:", this.value);
    currentColor = this.value;
    useRainbow = false;
})

const blackButton = document.createElement("button");
blackButton.className = "buttons";
blackButton.textContent = "Black";
blackButton.className += " button-style";
blackButton.addEventListener('click', setBlackMode);
buttons.appendChild(blackButton);

const rainbowButton = document.createElement("button");
rainbowButton.className = "buttons";
rainbowButton.textContent = "RGB";
rainbowButton.className += " button-style";
buttons.appendChild(rainbowButton);
rainbowButton.addEventListener('click', setRainbow);


const clearButton = document.createElement("button");
clearButton.className = 'buttons';
clearButton.textContent = "Clear Button!";
clearButton.className += " button-style";
buttons.appendChild(clearButton);
clearButton.addEventListener("click", function(){
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
    buildGridItems();
})


const eraseButton = document.createElement("button");
eraseButton.className = "buttons";
eraseButton.textContent = "Erase Button!";
eraseButton.className += " button-style";
buttons.appendChild(eraseButton);
eraseButton.addEventListener("click", setEraseMode)



