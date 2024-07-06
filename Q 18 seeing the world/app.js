var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Store the locations in a array. Make sure the array is not in alphabetical order.
var places = ["turkey", "makkah", "bangkok", "baku", "islamabd"];
// //Print your array in its original order.
console.log("original order:", places);
// //Print your array in alphabetical order without modifying the actual list.
console.log("Alphabetical order:", __spreadArray([], places, true).sort());
// //Show that your array is still in its original order by printing it
console.log("original order:", places);
// //Print your array in reverse alphabetical order without changing the order of the original list
console.log("ReverseAlphabetical order:", __spreadArray([], places, true).sort().reverse());
//Show that your array is still in its original order by printing it again
console.log("original order", places);
//Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("Reverse order", places.reverse());
console.log("Original order", places.reverse());
console.log("Alphabetical order:", places.sort());
console.log("ReverseAlphabetical order:", places.sort().reverse());
