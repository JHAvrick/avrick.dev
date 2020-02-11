/**
 * 
 * 
 * @param colors {Array<Array<Number>>} - An array of three-element arrays corresponding to RGB Values
 * @param steps {Number} - The number of steps between each value
 * 
 * Example: scaleColors([[234, 155, 100], [1, 1, 1], [234, 155, 100], [1, 1, 1]], 2);
 * 
 */
function scaleColors(colors, steps){
    let totalSteps = (steps * (colors.length - 1)) + 1;
    let colorsIndex = 0;
    let scaled = [];
    for (let i = 1; i < totalSteps; i++){
       
       let c1 = colors[colorsIndex];
       let c2 = colors[colorsIndex + 1];
        
       let r = Math.floor(c1[0] + ((c2[0] - c1[0]) / steps * ( (i - 1) % steps) ))
       let g = Math.floor(c1[1] + ((c2[1] - c1[1]) / steps * ( (i - 1) % steps) ))
       let b = Math.floor(c1[2] + ((c2[2] - c1[2]) / steps * ( (i - 1) % steps) ))
       scaled[i - 1] = `rgb(${r},${g},${b})`
         
       colorsIndex = (i % steps) === 0 ? colorsIndex + 1 : colorsIndex;
    }
   
   scaled.push(`rgb(${colors[colors.length - 1][0]},${colors[colors.length - 1][1]},${colors[colors.length - 1][2]})`);
   return scaled;
 }

 export default scaleColors;
 
 

