class Point {
    constructor(private x?: number, public y?: number) {
    }

    draw() {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    }
}

let point: Point = new Point(11, 22);
// point.x = 10; // Not availble because it has private access modifiers
point.y = 20;
point.draw(); // draw() has bydefault access modifier which is public
