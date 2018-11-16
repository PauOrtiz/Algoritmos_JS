function findLongestWordLength (str) { 
var splitString = str.split (" "); //poner siempre un espacio entre comillas
var biggestWord = 0; 
for (var i = 0; i <splitString.length; i ++) {
  if (splitString[i].length>biggestWord ) { 
biggestWord = splitString[i].length; 
   } 
} 
  return biggestWord;
}
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
