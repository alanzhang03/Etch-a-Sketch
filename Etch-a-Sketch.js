const gridContainer = document.querySelector("#grid-container");
const buttons = document.querySelector('.buttons');

for(let i = 0; i < 256; i++){
    gridItem = document.createElement("grid-item");
    girdItem.className = 'grid-item';
    gridContainer.appendChild(gridItem);
}

