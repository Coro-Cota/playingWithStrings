//SOME AWESOME METHODS FOR STRINGS
//                                         321
let practice_with_some_strings = "Hello, world";
// //an object wrapper around all primitives String(practice_with_some_strings)
let str = 'hello';
let temp = new String("new string"); // wrapper object
console.log(temp);
temp.custom = 1;
console.log(temp.custom);


//obtaining portions of a string
//substring and return "ell" ----->
console.log(practice_with_some_strings.substring(1,4));
//slice and return "worl" -----> 
console.log(practice_with_some_strings.slice(7,11));
//split and return an array of both words -----> 
console.log(practice_with_some_strings.split(" "))
//Bonus: what method can take an array of words and put them back together

//searching a string

//indexOf "H" ---->
console.log(practice_with_some_strings.indexOf("H"))
//lastIndexOf "l" ---->
console.log(practice_with_some_strings.lastIndexOf("l"))

//boolean searching funtions

//startsWith "Hello" gives us?---> 
console.log(practice_with_some_strings.startsWith("Hello"))

//endsWith "!" ---> 
console.log(practice_with_some_strings.endsWith("!"))

//includes "no" --->

console.log(practice_with_some_strings.includes("no"))

//creating modified version of a string
//replace "llo" with "ya" ---> "Heya, world"

console.log(practice_with_some_strings.replace("llo","ya"))

//toLowerCase ---> take a guess lol

console.log(practice_with_some_strings.toLowerCase())

//toUpperCase ---> take another guess

console.log(practice_with_some_strings.toUpperCase())



//inspecting individual characters of a string
//charAt 0 ---> 

console.log(practice_with_some_strings.charAt(0))

//charCodeAt 0  --->

console.log(practice_with_some_strings.charCodeAt(0))

//Bonus: find the range of lower and uppercase letters


//space trim funtctions !bonus mess with these methods!
let test = "   test "
//trim test --->

//Bonus: mess with the other trims
// //trimStart and trimEnd
