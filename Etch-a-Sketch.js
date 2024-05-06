const gridContainer = document.querySelector("#grid-container");
const totalRows = 16;
const totalCols = 16;

for(let row=0; row < totalRows; row++){
    for(let col=0; col < totalCols; col++){
        let grid = document.createElement("div");
        grid.classList.add("grid-item");
        gridContainer.appendChild(grid);
    }
}

