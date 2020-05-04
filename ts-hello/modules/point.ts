export class Point {

    constructor(private x?: number, private y?: number) { }

    draw(){
        console.log('Point - X: ' + this.x + ', Y: ' + this.y);
    }
}