const gridContainer = document.querySelector("#grid-container");
const totalGrids = 16 * 16; 

for(let i = 0; i < totalGrids; i++){
    const square = document.createElement("div");
    square.classList.add("grid-item");
    gridContainer.appendChild(square);
}


