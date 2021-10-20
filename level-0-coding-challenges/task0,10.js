function commonCharacters(str1, str2){
    var match = "";
    var str2 = Array.from(str2.toLowerCase()); // turn a string into an array of characters.
    for(x of str1.toLowerCase()){
        if (str2.includes(x)){
            match = match +  x;
            
        }
    }
    match = new Set(match)
    match = [...match].join(",")
    console.log("Common letters: "+ match);

}
commonCharacters("Mbali", "mnisi")
