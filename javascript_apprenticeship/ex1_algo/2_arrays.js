/*
* Remove all duplicates of an array and returning an array of only unique elements
* TIP : Check new ES6 Datatypes
* */

var myArray = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8, 8, 42, 76, 89, 76, 12];

var set = new Set(myArray);
for (var id in set){
    set.delete(id);
}
console.log(set);


/*
* Given an array of integers, find the largest difference between two elements
* such that the element of lesser value must come before the greater element
* */

var array = [7, 8, 4, 9, 9, 15, 3, 1, 10];

