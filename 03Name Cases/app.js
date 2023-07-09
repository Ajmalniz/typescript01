var str = "AJmal Khan";
//there is no buliting method to title case in typescript 
function convertToTitleCase(inputString) {
    var words = inputString.toLowerCase().split(" ");
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substring(1);
    }
    return words.join(" ");
}
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(convertToTitleCase(str));
