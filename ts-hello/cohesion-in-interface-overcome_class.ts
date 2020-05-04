class Point {
    x: number;
    y: number;
    draw() {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    }
    getDistance(another: Point) {
        console.log('Point - X: ' + this.x, ', Y: ' + this.y);
    }
}

let point: Point = new Point();
point.x = 10;
point.y = 40;
point.draw();
point.getDistance(point);
