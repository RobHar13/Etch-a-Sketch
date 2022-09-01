// Initialise constants
const DEFAULT_SIZE = 16;
const DEFAULT_MODE = "draw";
const DEFAULT_COLOR = "#000000";

// Assign constants to updateable values
let currentSize = DEFAULT_SIZE;
let currentMode = DEFAULT_MODE;
let currentColor = DEFAULT_COLOR;

const grid = document.querySelector('.grid');

// Create default grid on load
createGrid(currentSize);

// Button setup
const sizeBtn = document.querySelector("#sizeBtn");
const clearBtn = document.querySelector("#clearBtn");
const colorBtn = document.querySelector("#colorBtn");

// Button event listeners

// Runs 'setupGrid' on click
sizeBtn.addEventListener('click', function () {
    currentSize = setupGrid();
});

// Clears grid and reloads with current size
clearBtn.addEventListener('click', function () {
    reloadGrid(currentSize);
});

// Reloads grid and changes current color
colorBtn.addEventListener('change', function () {
    newColor = event.target.value;
    reloadColorGrid(currentSize, newColor);
});

// Clears grid and creates a new one with a prompted size. Returns new size.
function setupGrid() {

    clearGrid();

    let tooBig = true;

        do {
        let updateSize = prompt("Please enter a size");

            if (updateSize < 101) {
                tooBig = false;      
                
                grid.style.gridTemplateColumns = `repeat(${updateSize}, 1fr)`;
                grid.style.gridTemplateRows = `repeat(${updateSize}, 1fr)`;
        
                createGrid(updateSize);
        
                return updateSize;
                
            } else {
                alert("Too big! Choose a number 100 or less.")
            }

        } while (tooBig === true)


    }

    // Clears the grid squares completely (no grid)
    function clearGrid() {
        grid.innerHTML = '';
    }

    // Creates a grid with the specified number of cells
    function createGrid(size = DEFAULT_SIZE, currentColor=DEFAULT_COLOR) {
        for (let i = 1; i < (size * size) +1; i++) {
            createGridSquare(size, currentColor);
        }
    }

    // Reloads the grid using the current size
    function reloadGrid(size=DEFAULT_SIZE) {
        clearGrid();
        createGrid(size);
    }

    // Reloads the grid with new color
    function reloadColorGrid(size=DEFAULT_SIZE, color=DEFAULT_COLOR) {
        clearGrid();
        createGrid(size, color);
    }

    // Creates a single grid cell
    function createGridSquare(size=DEFAULT_SIZE, color=DEFAULT_COLOR) {
        const gridSquare = document.createElement('div');
        gridSquare.classList.add("cell");
        gridSquare.style.cssText = `box-sizing: border-box; border: solid #DDDDDD 1px; width: ${(1000 / size)}px; height: ${(1000 / size)}px; margin: 0; padding: 0`;
        grid.appendChild(gridSquare);
        gridSquare.style.backgroundColor = '#ffffff';
        gridSquare.addEventListener('mouseover', () => {
            gridSquare.style.backgroundColor = `${color}`;
        });
    }
