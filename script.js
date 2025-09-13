//complete this code
class Rectangle {
	constructor(width,heigth){
		this._width=width;
		this._heigth=heigth;
	}
	get width(){
		return this._width ;
	
	}
  get height() {
    return this._height;
  }
	getArea(){
		return this._width*this._heigth;
	}
}

class Square extends Rectangle {
	super(side, side);
	constructor(side){
		this._side=side;
		
	}
	getPerimeter(){
		return 4*side;
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
