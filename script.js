// VARIABLES
const INITIAL_GRID = 9
const INITIAL_COLOR = "#FFFFFF"
let actual_grid = INITIAL_GRID



//  SELECTORS

const container = document.querySelector('.container')
const colorPicker = document.querySelector('#colorPicker')
const colorBtn = document.querySelector('.color')
const eraserBtn = document.querySelector('.eraser')
const cleanBtn = document.querySelector('.clean')
const elRange = document.querySelector('.rangeValue')
const elInput = document.querySelector('#range')


//TODO AÑADIR COLOR A LA CLASE DEL ITEM



// EVENT LISTENERS

elInput.addEventListener('input', changeValue)
elInput.addEventListener('input', grid)
colorBtn.addEventListener('click', colorClick)
cleanBtn.addEventListener('click', cleanAll)



// FUNCTIONS

function cleanAll(){
    grid(actual_grid)
}

function colorClick(e){
    console.log(e)
}

function changeBackground(e) {
    console.log(e.target)
    e.target.style.backgroundColor = 'black'
}



function grid(n){
    clearGrid()
    n = actual_grid
    const row = document.createElement('div')
    for (let i = 0; i < n; i++) {
        const item = document.createElement("div");
        
        item.classList.add("item");

        item.addEventListener('click', changeBackground)
        
        row.appendChild(item);

    }

    for (let i = 0; i < n; i++) {
        
        const newRow = row.cloneNode(true)
        newRow.classList.add("row", "row-" + i);
        container.appendChild(newRow)
    }

    const allDivs = container.querySelectorAll('div')
    allDivs.forEach(allDivs => allDivs.addEventListener('click', changeBackground)) 

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

function changeColor(){
    
}



console.log(elInput.value)

grid(actual_grid)

