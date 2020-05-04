var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    };
    Point.prototype.getDistance = function (another) {
        console.log('Point - X: ' + this.x, ', Y: ' + this.y);
    };
    return Point;
}());
var point = new Point();
point.x = 10;
point.y = 40;
point.draw();
point.getDistance(point);
