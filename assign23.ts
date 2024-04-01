let car : string = `subaru`;
//Equality comparison: 1 TRUE
console.log("Is car == `subaru`? I predict true");
console.log(car == `subaru`);//true

//test 2 :: strict equality comparison
console.log("Is car === `subaru`? I predict true");
console.log(car === `subaru`);//true



//test 3 :: inequality comparison (false)
console.log("Is car != `subaru`? I predict it False.")
console.log(car != `subaru`);//False

//test 4 :: strict inequality (False)
console.log("Is car  !== `subaru`? I predict False");
console.log(car !== `subaru`);//False

//test 5 :: less than comparison (False)
console.log("Is car < `subaru`? I predict False");
console.log(car < `subaru`);//False

// test :: 6 greater than comparison (False)
console.log("Is car > `subaru`? I predict False");
console.log(car > `subaru`);//False

// test7:: less than or equal comparison(true)
console.log("Is car <= `subaru`? I predict true");
console.log(car <= `subaru`);//true

//test8 :: greater than or equal comparison(true)
console.log("Is car >= `subaru`? I predict true");
console.log(car >= `subaru`);//true

//test9 :: checkin truthiness (true)
console.log("Is car? `subaru`? I predict true");
console.log(car);

//test10 :: checking falsiness
console.log("Is !car? `subaru`? I predict False");
console.log(!car);
