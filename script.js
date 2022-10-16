// VARIABLES
const INITIAL_GRID = 9
const INITIAL_COLOR = 'black'
const INITIAL_MODE = 'color'
let actual_grid = INITIAL_GRID
let actual_color = INITIAL_COLOR
let actual_mode = INITIAL_MODE



//  SELECTORS

const container = document.querySelector('.container')
const colorPicker = document.querySelector('#colorPicker')
const allButtons = document.querySelectorAll('button')
const elRange = document.querySelector('.rangeValue')
const elInput = document.querySelector('#range')


//TODO AÑADIR COLOR A LA CLASE DEL ITEM



// EVENT LISTENERS

elInput.addEventListener('input', changeValue)
elInput.addEventListener('input', grid)
allButtons.forEach(buttton => buttton.addEventListener('click', colorClick)) 
colorPicker.addEventListener('change', colorPic)



// FUNCTIONS

function colorClick(e){
    allButtons.forEach(buttton => buttton.classList.remove('picked')) 
    console.log(e.target)
    e.target.classList.add('picked')
    if (e.target.value == 'clean'){
        cleanAll()
        console.log('hola')
        actual_color = ''
    }
    else if(e.target.value == 'eraser'){
        actual_color = 'white'
        actual_mode = 'eraser'
    }
    else if(e.target.value == 'color'){
        actual_color = INITIAL_COLOR
        actual_mode = 'color'
    }
}

function colorPic(e){
    if (actual_mode != 'eraser'){
        actual_color = e.target.value
    }
}

function cleanAll(){
    grid(actual_grid)
}


function changeBackground(e) {
    e.target.style.backgroundColor = actual_color
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
    allDivs.forEach(allDivs => allDivs.addEventListener('mouseover', changeBackground)) 

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

