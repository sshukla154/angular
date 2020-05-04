class Point {
    private _x: number;
    private _y: number;
    constructor(x?: number, y?: number) {
    }

    draw() {
        console.log('X: ' + this._x + ', Y: ' + this._y);
    }

    //To read Private X
    get x() {
        return this._x;
    }
    

    //To read Private Y
    get Y() {
        return this.Y;
    }

}

let point: Point = new Point(11, 22);
// point.x = 10; // Not availble because it has private access modifiers
let abc = point.x;
console.log(abc);
//point.draw(); // draw() has bydefault access modifier which is public
