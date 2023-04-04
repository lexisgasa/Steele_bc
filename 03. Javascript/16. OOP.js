let hex = (r, g, b) => {
    return "#" + ( (1 << 24) + ( r << 16) + (g << 8 ) + b ).toString(16).slice(1);
}

let rgb = (r, g, b) => {
    return `rgb(${r},${g},${b})`
}

// hex (255,100,25) returns
// '#ff6419'
// rgb (255,100,25) returns
// 'rgb(255,100,25)'


// factory function 
let makeColor = (r, g, b) => {
    const color = {
        r: r,
        g: g,
        b: b,
        rgb: () => {
            return `rgb(${r},${g},${b})`
        },
        hex: () => {
            return "#" + ( (1 << 24) + ( r << 16) + (g << 8 ) + b ).toString(16).slice(1);
        }
    };
    return color;
}

const randomColor = makeColor(255, 200, 25);
randomColor.rgb();
randomColor.hex();

