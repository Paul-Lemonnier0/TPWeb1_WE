class Forme {
    constructor(color, thickness, id) {
        this.color = color;
        this.thickness = thickness;
        this.id = id;
    }

    paint(ctx) {
        ctx.lineWidth = this.thickness;
        ctx.strokeStyle = "red";
    }
}

class Rectangle extends Forme {
    constructor(topLeftX, topLeftY, width, height, thickness, color, id) {
        super(color, thickness, id);
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
        ctx.strokeRect(this.getInitX(), this.getInitY(), this.width, this.height);
        ctx.stroke();
    }
}

class Line extends Forme {
    constructor(startX, startY, endX, endY, thickness, color, id) {
        super(color, thickness, id);
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
        this.formes = formes || new Array();

    }

    addForme(forme) {
        this.formes.push(forme)
    }

    removeForme(formeID, ctx) {
        this.formes = this.formes.filter(f => f.id !== formeID)
        this.paint(ctx)
    }
}
