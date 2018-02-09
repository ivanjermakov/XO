class Cell {

    constructor(i, j, size) {
        this.i = i;
        this.j = j;
        this.size = size;
        this.fill = 0 // 0 - NONE, 1 - X, 2 - O
    }

    draw() {
        noFill();
        strokeWeight(5);
        stroke(255);
        rectMode(CENTER);
        rect(this.i * this.size + this.size / 2,
            this.j * this.size + this.size / 2,
            this.size, this.size);

        if (this.fill === 1) {
            this.drawX();
        }
        if (this.fill === 2) {
            this.drawO();
        }
    }

    fillX(x, y) {
        if (this.fill === 0) {
            if (x > this.i * this.size && x < this.i * this.size + this.size &&
                y > this.j * this.size && y < this.j * this.size + this.size) {
                this.fill = 1;
                isCross = false;
            }
        }
    }

    fillO(x, y) {
        if (this.fill === 0) {
            if (x > this.i * this.size && x < this.i * this.size + this.size &&
                y > this.j * this.size && y < this.j * this.size + this.size) {
                this.fill = 2;
                isCross = true;
            }
        }
    }

    drawX() {
        fill(255);
        strokeWeight(15);
        line(this.i * this.size + 40, this.j * this.size + 40,
            this.i * this.size + this.size - 40, this.j * this.size + this.size - 40);
        line(this.i * this.size + this.size - 40, this.j * this.size + 40,
            this.i * this.size + 40, this.j * this.size + this.size - 40);
    }

    drawO() {
        fill(255);
        ellipseMode(CENTER);
        ellipse(this.i * this.size + this.size / 2, this.j * this.size + this.size / 2, this.size - 40);
        fill(41);
        ellipse(this.i * this.size + this.size / 2, this.j * this.size + this.size / 2, this.size - 60);
    }

    fillChecked() {
        fill(255, 50, 50, 50);
        noStroke();
        rectMode(CENTER);
        rect(this.i * this.size + this.size / 2, this.j * this.size + this.size / 2,
            this.size - 5, this.size - 5);

        // fill(255, 0, 0);
        // if (this.fill === 1) {
        // line(this.i * this.size + 40, this.j * this.size + 40,
        //     this.i * this.size + this.size - 40, this.j * this.size + this.size - 40);
        // line(this.i * this.size + this.size - 40, this.j * this.size + 40,
        //     this.i * this.size + 40, this.j * this.size + this.size - 40);
        // } else if (this.fill === 2) {
        //     ellipseMode(CENTER);
        //     ellipse(this.i * this.size + this.size / 2, this.j * this.size + this.size / 2, this.size - 40);
        //     fill(41);
        //     ellipse(this.i * this.size + this.size / 2, this.j * this.size + this.size / 2, this.size - 60);
        // }

        gameOver = true;
    }
}