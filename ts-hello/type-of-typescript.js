var count = 5;
// count = 'a';
var a;
a = 1;
a = true;
a = 'a';
var b;
var c;
var d;
var e;
var f = [1, 2, 3];
var g = [1, true, 'g'];
//ENUM in JS
var ColorRed = 0;
var ColorGreen = 1;
var ColorBlue = 2;
//ENUM in TS
var TSColor;
(function (TSColor) {
    TSColor[TSColor["Red"] = 0] = "Red";
    TSColor[TSColor["Green"] = 1] = "Green";
    TSColor[TSColor["Blue"] = 2] = "Blue";
})(TSColor || (TSColor = {}));
;
var backgroundColor = TSColor.Red;
