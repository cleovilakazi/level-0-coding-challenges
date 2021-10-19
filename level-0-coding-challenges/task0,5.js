function areaOfTriangle(base, side1, side2){
    let sp = 1/2 * (base +side1 +side2); //sp = semiperimeter
    let area = Math.sqrt(sp *(sp-base)*(sp-side1)*(sp-side2)); // using Math.sqrt function, this formula is the Herons formula

    return area;

}
areaOfTriangle(10,3,12);