function celciusToFahrenheit(tempinCel){
    var farh = (tempinCel * 1.8) + 32 // 1.8 is similar to 9/5 
    return farh
}

function farhenheitToCelcius(tempinFarh){
    var cel = (tempinFarh - 32) / 1.8
    return cel
}

celciusToFahrenheit(32);
farhenheitToCelcius(101);
