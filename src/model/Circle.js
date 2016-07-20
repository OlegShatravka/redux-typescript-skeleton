var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Point = (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.toString = function () {
        return this.x + " " + this.y;
    };
    return Point;
})();
exports.Point = Point;
var Circle = (function (_super) {
    __extends(Circle, _super);
    function Circle(x, y, radius) {
        _super.call(this, x, y);
        this.x = x;
        this.y = y;
        this.radius = radius;
    }
    Circle.prototype.toString = function () {
        return _super.prototype.toString.call(this) + " " + this.radius;
    };
    return Circle;
})(Point);
exports["default"] = Circle;
