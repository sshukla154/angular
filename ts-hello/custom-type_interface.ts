interface Point {
    x: number,
    y: number
}

let drawPointWithInterface = (point: Point) => {
    // ..
}

let drawPointWithutInterface = (point: { x: number, y: number }) => {
    // ..
}

// drawPointWithInterface({
//     x: 1,
//     y: 2
// })