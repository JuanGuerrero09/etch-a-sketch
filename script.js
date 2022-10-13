// VARIABLES
const INITIAL_GRID = 16
const INITIAL_COLOR = "#FFFFFF"


//  SELECTORS

const container = document.querySelector('.container')
const row = document.createElement('div')




// EVENT LISTENERS



// FUNCTIONS



function grid(n){
    for (let i = 0; i < n; i++) {
        const item = document.createElement("div");
        
        item.classList.add("item", "item-" + i);
        
        row.appendChild(item);
    }
    for (let i = 0; i < n; i++) {

        const newRow = row.cloneNode(true)
        newRow.classList.add("row", "row-" + i);
        
        container.appendChild(newRow)
    }
}

grid(INITIAL_GRID)

console.log(row)

