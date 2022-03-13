// Part 6 - Objects Exercise

////////////////////
// PROBLEM 1 //////
//////////////////

// Given the object:
var employee = {
  name: "John Smith",
  job: "Programmer",
  age: 31,
  nameLength:function() {

    console.log(this.name.length);
  }
}

console.log(employee.nameLength());
// Add a method called nameLength that prints out the
// length of the employees name to the console.


///////////////////
// PROBLEM 2 /////
/////////////////

// Given the object:

// Write program that will create an Alert in the browser of each of the
// object's values for the key value pairs. For example, it should alert:

// Name is John Smith, Job is Programmer, Age is 31.
var employee = {
  name: "John Smith",
  job: "Programmer",
  age: 31,
  
}
for (name in employee) {
  alert(name+":"+employee[name])

}

///////////////////
// PROBLEM 3 /////
/////////////////

// Given the object:


function lastName() {
  const array=employee.name.split(" ");
  console.log(array[array.length-1]);
}

lastName();
// Add a method called lastName that prints
// out the employee's last name to the console.

// You will need to figure out how to split a string to an array.
// Hint: http://www.w3schools.com/jsref/jsref_split.asp
