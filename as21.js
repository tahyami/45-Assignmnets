//Strings checking
console.log("Testing of strngs");
console.log("bugatti" == "bugatti");
//console.log("bugatti"=="Bugatti");error cuz lower case b is not equal to capital B
console.log("checking strings but using lower case and checks it wheather its equal to or not");
console.log("Bugatti".toLowerCase() == "bugatti");
console.log("Mathametical tests");
console.log(10 > 2);
console.log(10 > 11);
console.log("Checking of logical operators");
console.log(1 && 1);
console.log(true && false);
console.log("Checking of an element that is present in array or not");
var people = ["anas", "assam", "rafay"];
//console.log(people.includes("anas"));
//console.log(!people.includes("taha"));
//include is not working i dont know but why it gives error but i used differnent mehtod of checking wheather the ement is in the array or not
var hasTaha = people.some(function (person) { return person === "taha"; });
console.log(hasTaha); // Output: false (assuming "taha" is not present)
