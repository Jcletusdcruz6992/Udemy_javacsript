/// PART 8 - LOOP EXERCISES
// Before we continue on with your project, let's practice some loops!
// You'll have just two problems, but you'll need to use each loop type we
// learned about to solve them!


///////////////////
//// PROBLEM 1 ///
/////////////////

// Use a For Loop to print (console.log()) out the word "hello" 5 times.
//
// Do this with a While Loop and a For Loop

// While Loop
var x=0;
while(x<5)
{
  console.log("hello");
  x=x+1;
}

// For Loop
for(var y=0;y<5;y++)
{
  console.log("hello");

}



/////////////////
// PROBLEM 2 ///
///////////////

// Use Loops to console.log() (print out) all the odd numbers from 1 to 25
// Do this using two methods, a while loop and a for loop

// METHOD ONE
// While Loop
var a=0;
while(a<26)
{
  if(a%2!==0)
  {
    console.log(a);
  }
  a=a+1;
}
// METHOD TWO
// For Loop
for (var i = 0; i <26; i++) {
  if(i%2!==0)
  {
    console.log(i);
  }
}
