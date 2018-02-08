let w = 504;
let h = 504;

let field = make2DArray(3, 3);

let size;

let isCross = true;

function make2DArray(cols, rows) {
    let field = [cols];
    for (let i = 0; i < rows; i++) {
        field[i] = [rows];
    }

    return field;
}

function setup() {
    createCanvas(w, h);

    let size = floor(w / 3);

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            field[i][j] = new Cell(i, j, size);
        }
    }
}

function draw() {
    background(41);

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            field[i][j].draw();
        }
    }
}

function mousePressed() {
    if (isCross) {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                field[i][j].fillX(mouseX, mouseY);
            }
        }
    } else {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                field[i][j].fillO(mouseX, mouseY);
            }
        }
    }
}