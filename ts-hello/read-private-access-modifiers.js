class Point {
    constructor(x, y) {
    }
    draw() {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    }
    //To read Private X
    get X() {
        return this.x;
    }
    //To read Private Y
    get Y() {
        return this.Y;
    }
}
let point = new Point(11, 22);
// point.x = 10; // Not availble because it has private access modifiers
let abc = point.X;
console.log(abc);
//point.draw(); // draw() has bydefault access modifier which is public
