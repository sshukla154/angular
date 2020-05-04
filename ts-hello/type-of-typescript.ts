let count = 5;
// count = 'a';

let a;
a = 1;
a = true;
a = 'a';

let b: number;
let c: boolean;
let d: string;
let e: any;
let f: number[] = [1, 2, 3];
let g: any[] = [1, true, 'g'];

//ENUM in JS
const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;


//ENUM in TS
enum TSColor { Red = 0, Green = 1, Blue = 2 };
let backgroundColor = TSColor.Red;