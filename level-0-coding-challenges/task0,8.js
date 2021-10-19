function convertToTime(num1){
    var toHours = parseInt(num1/60) // using parseInt to convert float to integer/whole number
    var toMinutes = num1%60

    if (toHours==1 && toMinutes == 1){
        console.log(toHours + " hour, " + toMinutes + " minute.")
    }

    else if (toHours == 1 ){
        console.log(toHours + " hour, " + toMinutes + " minutes.")
    
    } 
    else if(toMinutes == 1){
        console.log(toHours + " hours, " + toMinutes + " minute.")
    }
    else{
        console.log(toHours + " hours, " + toMinutes + " minutes.")
    }
    
}
convertToTime(125)