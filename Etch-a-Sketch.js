const gridContainer = document.querySelector("#grid-container");


for(let i = 0; i < 256; i++){
    gridItem = document.createElement("grid-item");
    girdItem.className = 'grid-item';
    gridContainer.appendChild(gridItem);
}

