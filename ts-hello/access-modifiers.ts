class Point {
    private x: number;
    y: number;

    constructor(_x?: number, _y?: number){
        this.x=_x;
        this.y=_y;
    }

    draw() {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    }
}

let point: Point = new Point(11, 22);
// point.x = 10; // Not availble because it has private access modifiers
point.y = 20;
point.draw(); // draw() has bydefault access modifier which is public
