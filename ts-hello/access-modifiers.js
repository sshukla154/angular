var Point = /** @class */ (function () {
    function Point(_x, _y) {
        this.x = _x;
        this.y = _y;
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    };
    return Point;
}());
var point = new Point(11, 22);
// point.x = 10; // Not availble because it has private access modifiers
point.y = 20;
point.draw();
