let w = 504;
let h = 504;

let field = make2DArray(3, 3);

let size;

let isCross = true;

let gameOver = false;

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
    if (!gameOver) {
        background(41);

        for (let i = 0; i < 3; i++) {

            for (let j = 0; j < 3; j++) {
                field[i][j].draw();
            }
        }

        check();
    }
}

function check() {
    checkDiag();
    checkVert();
    checkHoris();
}

function checkDiag() {
    if ((field[0][0].fill === 1 && field[1][1].fill === 1 && field[2][2].fill === 1) ||
        (field[0][0].fill === 2 && field[1][1].fill === 2 && field[2][2].fill === 2)) {
        field[0][0].fillChecked();
        field[1][1].fillChecked();
        field[2][2].fillChecked();
    }
    if ((field[0][2].fill === 1 && field[1][1].fill === 1 && field[2][0].fill === 1) ||
        (field[0][2].fill === 2 && field[1][1].fill === 2 && field[2][0].fill === 2)) {
        field[0][2].fillChecked();
        field[1][1].fillChecked();
        field[2][0].fillChecked();
    }
}

function checkVert() {
    for (let i = 0; i < 3; i++) {
        if ((field[i][0].fill === 1 && field[i][1].fill === 1 && field[i][2].fill === 1) ||
            (field[i][0].fill === 2 && field[i][1].fill === 2 && field[i][2].fill === 2)) {
            field[i][0].fillChecked();
            field[i][1].fillChecked();
            field[i][2].fillChecked();
        }
    }
}

function checkHoris() {
    for (let i = 0; i < 3; i++) {
        if ((field[0][i].fill === 1 && field[1][i].fill === 1 && field[2][i].fill === 1) ||
            (field[0][i].fill === 2 && field[1][i].fill === 2 && field[2][i].fill === 2)) {
            field[0][i].fillChecked();
            field[1][i].fillChecked();
            field[2][i].fillChecked();
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

function keyPressed() {
    gameOver = false;
    setup();
}