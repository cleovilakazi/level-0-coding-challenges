function commonCharacters(str1, str2){
    var match = "";
    var str2 = Array.from(str2); // turn a string into an array of characters.
    for(x of str1){
        if (str2.includes(x)){
            match = match +  x+",";
            
        }
    }
    console.log("Common letters: "+ match);

}
commonCharacters("mbali", "mnisi")