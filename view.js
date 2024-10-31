Forme.prototype.paint = function(ctx) {
    ctx.lineWidth = this.thickness
    ctx.strokeStyle = this.color
}

Drawing.prototype.paint = function(ctx) {
    ctx.fillStyle = '#F0F0F0';
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    this.formes.forEach((forme) => {
        forme.paint(ctx);
    });
}