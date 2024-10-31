var editingMode = { rect: 0, line: 1 }

class Pencil {
	constructor(ctx, drawing, canvas) {
		this.currEditingMode = editingMode.line
		this.currLineWidth = 5
		this.currColour = '#000000'
		this.currentShape = 0

		this.drawing = drawing

		new DnD(canvas, this)

		document.getElementById('butRect').onclick = function () {
			this.currEditingMode = editingMode.rect
		}.bind(this)

		document.getElementById('butLine').onclick = function () {
			this.currEditingMode = editingMode.line
		}.bind(this)

		document.getElementById('spinnerWidth').onchange = function (e) {
			this.currLineWidth = e.target.value
		}.bind(this)

		document.getElementById('colour').onchange = function (e) {
			this.currColour = e.target.value
		}.bind(this)

		this.onInteractionStart = function (DnD) {
			this.drawing.paint(ctx)
		}.bind(this)


		this.onInteractionUpdate = function (dnd) {

			this.drawing.paint(ctx)
			const id = uuid.v4()

			if (this.currEditingMode === editingMode.line) {
				this.currentShape = new Line(
					dnd.posInit.x,
					dnd.posInit.y,
					dnd.posFin.x,
					dnd.posFin.y,
					this.currLineWidth,
					this.currColour,
					id
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
					id
				)
			}

			this.currentShape.paint(ctx)
		}.bind(this)

		this.onInteractionEnd = function (dnd) {
			const id = this.currentShape.id

			this.drawing.addForme(this.currentShape)
			this.drawing.paint(ctx)

			updateShapeList(id, this.currentShape, this.drawing, ctx)
		}.bind(this)

	}
}

function updateShapeList(uuid, shape, drawing, ctx) {
	var shapeList = document.getElementById('shapeList')
	var shapeElement = document.createElement('li')
	shapeElement.id = uuid

	let isLine = shape.startX !== undefined

	const btn = document.createElement('button')
	btn.className = 'btn btn-default'
	const span = document.createElement('span')
	span.className = 'glyphicon glyphicon-remove-sign'
	btn.appendChild(span)

	btn.onclick = () => {
			drawing.removeForme(uuid, ctx)
			shapeList.removeChild(shapeElement)
	};

	shapeElement.appendChild(btn)

	shapeElement.appendChild(document.createTextNode(isLine ? "Ligne" : "Rectangle"))

	shapeList.appendChild(shapeElement)
}
