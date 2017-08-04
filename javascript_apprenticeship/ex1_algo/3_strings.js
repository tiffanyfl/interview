 /*
 * Given a string, reverse each word in a the sentence
 * */

 let reverse = "Mary would you mary me";
var map = new Map();
var tab = reverse.split(' ');
var tabre = tab.reverse().join(' ');
var tabreverse = map.set(tabre, tab);
console.log(tabreverse);

 /*
 * Given two strings, return true if they are anagrams of one another
 * */

 let wordOne = "Pascal Obispo";
 let wordTwo =  "Pablo Picasso";
 // => returns true !

 /*
 * Check if a given string is a palindrome "Rotor" is a palindrome. "Race Car" should also be considered a palindrome.
 * Case sensitivity should be taken into account
 * */

 let palindrome = "Eh ! ça va la vache";
var map = new Map();
var tab = palindrome.split('');
var tabre = tab.reverse().join('');
var tabreverse = map.set(tabre, tab);
console.log(tabreverse);