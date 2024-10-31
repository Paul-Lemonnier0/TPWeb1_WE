Forme.prototype.paint = function(ctx) {
    ctx.lineWidth = this.thickness
    ctx.color = this.color

    ctx.rect(
        this.topLeftX,
        this.topLeftY,
        this.topLeftX + this.width,
        this.toLeftY + this.height
    )
    
    ctx.stroke()

}

Drawing.prototype.paint = function(ctx) {
    ctx.fillStyle = 'lightgray'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);  // now fill the canvas
}