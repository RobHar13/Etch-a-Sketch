// Initialise constants
const DEFAULT_SIZE = 16;

// Assign constants to updateable values
let currentSize = DEFAULT_SIZE;

const grid = document.querySelector('.grid');

// Create default grid on load
createGrid(currentSize);

// Button setup
const sizeBtn = document.querySelector("#sizeBtn");
const clearBtn = document.querySelector("#clearBtn")

// Button event listeners

// Runs 'setupGrid' on click
sizeBtn.addEventListener('click', function () {
    currentSize = setupGrid();
});

// Clears grid and reloads with current size
clearBtn.addEventListener('click', function () {
    reloadGrid(currentSize)
});

// Clears grid and creates a new one with a prompted size. Returns new size.
function setupGrid() {

    clearGrid();

    let tooBig = true;

        do {
        let updateSize = prompt("Please enter a size");

            if (updateSize < 100) {
                tooBig = false;      
                
                grid.style.gridTemplateColumns = `repeat(${updateSize}, 1fr)`;
                grid.style.gridTemplateRows = `repeat(${updateSize}, 1fr)`;
        
                createGrid(updateSize);
        
                return updateSize;
                
            } else {
                alert("Too big! Choose a number less than 100.")
            }

        } while (tooBig === true)


    }

    // Clears the grid squares completely (no grid)
    function clearGrid() {
        grid.innerHTML = '';
    }

    // Creates a grid with the specified number of cells
    function createGrid(size) {
        for (let i = 1; i < (size * size) + 1; i++) {
            createGridSquare();
        }
    }

    // Reloads the grid using the current size
    function reloadGrid(size) {
        clearGrid();
        createGrid(size);
        console.log("Button works")
    }

    // Creates a single grid cell
    function createGridSquare() {
        const gridSquare = document.createElement('div');
        gridSquare.classList.add("cell");
        gridSquare.style.cssText = "border: solid black 1px; width: 10px; height: 10px; margin: 0; padding: 0";
        grid.appendChild(gridSquare);
        gridSquare.style.backgroundColor = "white";
        gridSquare.addEventListener('mouseover', () => {
            gridSquare.style.backgroundColor = "black";
        });
    }
