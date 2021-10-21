function printVowels(str){
    const vowels = ["a", "e", "i", "o","u", "A", "E", "I", "O", "U"]
    var match = ""
    for(var x of str){ //for loop to iterate through the values of the string one by one
        if (vowels.includes(x)){
            match = x.toLowerCase() + match //if the letter is a vowel the it is added into the match var and passed as a string.
        }   
    }
    match = new Set(match) // a set does not accept duplicates thefore i created one so that all my vowels can have only one representative.
    match = [...match].join(",")
    console.log("Vowels:", match) 
}
printVowels("Entanglement")
