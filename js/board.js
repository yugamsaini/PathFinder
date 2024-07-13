// ==========================================================
// =================== Rendering Grid 📅📏 =================
// ==========================================================

const board = document.querySelector('#board');
let matrix;
let row;
let col;
let width = 22;
var cells = [];

const pixels = document.querySelectorAll('#pixel .drop-menu a');
pixels.forEach((pixel) => {
    pixel.addEventListener('click', () => {
        width = pixel.innerText.replace('px', '');
        const cells = document.querySelectorAll('.col');
        cells.forEach(cell => {
            document.documentElement.style.setProperty('--cell-width', `${width}px`);
        })

        renderBoard();
        source = set('source');
        target = set('target');
    });
});

function renderBoard() {
    matrix = [];
    col = parseInt(board.clientWidth / width);
    row = parseInt(board.clientHeight / width);
    if(window.innerWidth <= 662){
        row -= 1;
    }

    board.innerHTML = '';
    for (let i = 0; i < row; i++) {
        const rowElement = document.createElement('div');
        rowElement.setAttribute('id', `row-${i}`);
        rowElement.classList.add('row');
        let colList = [];
        for (let j = 0; j < col; j++) {
            const colElement = document.createElement('div');
            colElement.classList.add('col', 'unvisited');
            colElement.setAttribute('id', `${i}-${j}`);
            rowElement.appendChild(colElement);

            colList.push(colElement);
        }
        board.appendChild(rowElement);
        matrix.push(colList);
    }
    cells = document.querySelectorAll('.col');
    boardInteraction(cells);
}

