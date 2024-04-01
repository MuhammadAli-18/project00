// seeing the world: Think of atleast five place in the world you like to visit.
//Store the location in an array . Make sure the location is not in alphabetic order.
// Print your array in its original order
let places : string[] =[`China`,`Dallas`,`France`,`Bangkok`,`Australia`]
console.log(`original` + places); 
//print ur array in alpha betic order without modifying it
console.log(`copy`  + [...places].sort());
//show that ur array are still in orignal position
console.log(`original` + places); 
//print array in reverse
console.log(`copy`  + [...places].sort().reverse());
//show that ur array are still in orignal position by printing it again
console.log(`copy`  + [...places].sort().reverse());
//revers the order of ur list. print the order show that its changed
console.log(`original` + places.sort());
//reverse the orderof urlist again.print the list to bshow its back to its orignal position
console.log(`original` + places.sort().reverse());
