
//Mostly string is using in RegExp(Regular Expression)

// String Literal 

const text = "The quick brown fox jumps over the lazy dog";
const text2 = "Please locate where 'locate' occurs!"

//Search Methods

text.endsWith("dog"); // return true otherwise false
text.startsWith("The") // return true otherwise false 

//Mostly use in RegExp
text.search("lazy") // search string by string  Output 34
text.includes("fox"); // return true otherwise false 
text2.matchAll("locate") // return iterator containing the result of matching 
text.match("uick") // return an array contain a result /uick/g 

// returning index
text2.indexOf("locate"); // return the index otherwise -1 text not found output: 7
text.lastIndexOf("locate") // return the index output: 21




