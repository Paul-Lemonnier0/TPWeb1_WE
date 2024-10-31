
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 0;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.

	new DnD(canvas, this);

	document.getElementById('butRect').onclick = function() {
		this.currEditingMode = editingMode.rect
	}.bind(this)

	document.getElementById('butLine').onclick = function() {
		this.currEditingMode = editingMode.line
	}.bind(this)

	document.getElementById('spinnerWidth').onchange = function(e) {
		this.currLineWidth = e.target.value
	}.bind(this)

	document.getElementById('colour').onchange = function(e) {
		this.currColour = e.target.value
		console.log(this.currColour)

	}.bind(this)

	this.onInteractionStart = function(DnD) {
		console.log("start")
	}.bind(this)


	this.onInteractionUpdate = function(dnd) {

		drawing.paint(ctx, canvas)

		if(this.currEditingMode === editingMode.line) {
			this.currentShape = new Line(
				dnd.posInit.x,
				dnd.posInit.y,
				dnd.posFin.x,
				dnd.posFin.y,
				this.currLineWidth,
				this.currColour,
			)	
		}

		else {
			this.currentShape = new Rectangle(
				dnd.posInit.x,
				dnd.posInit.y,
				dnd.posFin.x - dnd.posInit.x,
				dnd.posFin.y - dnd.posInit.y,
				this.currLineWidth,
				this.currColour,
			)
		}

		this.currentShape.paint(ctx)
	}.bind(this)

	this.onInteractionEnd = function(dnd) {
		drawing.addForme(this.currentShape)
	}.bind(this)
};


