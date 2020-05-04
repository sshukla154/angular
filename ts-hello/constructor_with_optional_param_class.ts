class Point {
    x: number;
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
point.x = 10;
point.y = 20;
point.draw();
