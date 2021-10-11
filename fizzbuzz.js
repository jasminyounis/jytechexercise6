//Notes: 
//print all the numbers from 1 to 100
//For numbers divisible by 3, print "Fizz"
//For numbers divisible by 5, print "Buzz"
//
for (var i=1; i < 101; i++){
    if (i % 15 == 0) console.log("FizzBuzz");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);
}