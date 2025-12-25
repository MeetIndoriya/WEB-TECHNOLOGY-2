function getlongestWord(str ){
    return str.split(/\s+/).reduce ((longest, word) =>{
        return word.length > longest.length ? word : longest;
    }, "");
}
console.log(getlongestWord("Web technology lab 3B4"));