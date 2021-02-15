function reverseString(statement) {
    var reverse = "";
    for (let i = 0; i < statement.length; i++) {
        const element = statement[i];
        reverse = element + reverse;
    }
    return reverse;
}
var speech = "Hi I wanted to say you something.";
var alienWord = reverseString(speech);
console.log(alienWord);