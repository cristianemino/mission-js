function compareLetters(string, letters) {
    let stringLetters = string.split("");
    let lettersArray = letters.split("");
for (let i = 0; i < lettersArray.length; i++) {
    if (!stringLetters.includes(lettersArray[i])) {
        return false;
    }
}  
    return true;
}  