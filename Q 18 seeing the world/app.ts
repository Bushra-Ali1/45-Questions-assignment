//Store the locations in a array. Make sure the array is not in alphabetical order.
let places : string[]=["turkey", "makkah", "bangkok", "baku", "islamabd"]

// //Print your array in its original order.
 console.log("original order:",places);

// //Print your array in alphabetical order without modifying the actual list.
 console.log("Alphabetical order:" , [...places].sort());

// //Show that your array is still in its original order by printing it
console.log("original order:", places);

// //Print your array in reverse alphabetical order without changing the order of the original list
 console.log("ReverseAlphabetical order:" , [...places].sort().reverse());

 //Show that your array is still in its original order by printing it again
 console.log("original order" ,places);

 
//Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("Reverse order" ,places.reverse());


console.log("Original order" ,places.reverse());


console.log("Alphabetical order:" , places.sort());

 //change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed
console.log("ReverseAlphabetical order:" ,places.sort().reverse());