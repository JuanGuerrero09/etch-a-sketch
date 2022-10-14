// VARIABLES
const INITIAL_GRID = 9
const INITIAL_COLOR = "#FFFFFF"
let actual_grid = INITIAL_GRID



//  SELECTORS

const container = document.querySelector('.container')
const colorPicker = document.querySelector('#colorPicker')
const eraserBtn = document.querySelector('.eraser')
const elRange = document.querySelector('.rangeValue')
const elInput = document.querySelector('#range')

console.log(elInput.value)



// EVENT LISTENERS

elInput.addEventListener('input', changeValue)
elInput.addEventListener('input', grid)



// FUNCTIONS



function grid(n){
    clearGrid()
    n = actual_grid
    const row = document.createElement('div')
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
    return
}

elRange.innerHTML = INITIAL_GRID + " x " + INITIAL_GRID

function changeValue(){
    elRange.innerHTML = elInput.value + " x " + elInput.value
    actual_grid = elInput.value
    console.log(actual_grid)
}

function clearGrid(){
    container.innerHTML = ""
}

console.log(elInput.value)

grid(5)


