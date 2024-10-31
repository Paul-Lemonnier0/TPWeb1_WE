class Forme {
    constructor(color, thickness) {
        this.color = color;
        this.thickness = thickness;
    }

    paint(ctx) {
        ctx.lineWidth = this.thickness;
        ctx.strokeStyle = this.color;
        console.log("Painting shape");
    }
}

class Rectangle extends Forme {
    constructor(topLeftX, topLeftY, width, height, thickness, color) {
        super(color, thickness);
        this.topLeftX = topLeftX;
        this.topLeftY = topLeftY;
        this.width = width;
        this.height = height;
    }

    getInitX() {
        return this.topLeftX;
    }

    getInitY() {
        return this.topLeftY;
    }

    getFinalX() {
        return this.topLeftX + this.width;
    }

    getFinalY() {
        return this.topLeftY + this.height;
    }

    paint(ctx) {
        super.paint(ctx);
        ctx.beginPath();
        ctx.rect(this.getInitX(), this.getInitY(), this.width, this.height);
        ctx.stroke();
    }
}

class Line extends Forme {
    constructor(startX, startY, endX, endY, thickness, color) {
        super(color, thickness);
        this.startX = startX;
        this.startY = startY;
        this.endX = endX;
        this.endY = endY;
    }

    getInitX() {
        return this.startX;
    }

    getInitY() {
        return this.startY;
    }

    getFinalX() {
        return this.endX;
    }

    getFinalY() {
        return this.endY;
    }

    paint(ctx) {
        super.paint(ctx);
        ctx.beginPath();
        ctx.moveTo(this.getInitX(), this.getInitY());
        ctx.lineTo(this.getFinalX(), this.getFinalY());
        ctx.stroke();
    }
}

class Drawing {
    constructor(formes) {
        this.formes = new Array();
    }

    paint(ctx) {
        ctx.fillStyle = '#F0F0F0'; 
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

        this.formes.forEach((forme) => {
            forme.paint(ctx);
        });
    }

    addForme(forme) {
        this.formes.push(forme)
    }
}
