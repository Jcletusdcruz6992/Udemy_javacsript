var countries=["USA","GERMANY","CANADA","INDIA"]
console.log(countries);
console.log(countries[1]);
countries[2]="France";
console.log(countries);
var country1="USA";
var country2="prance"
var country3="delhi"
console.log(country1);
console.log(country2);
console.log(country3);
var mixed=[true,20,"string"]
console.log(mixed);
//to add or remove elements
var arr=['a','b','c']
console.log(arr);
var popped_item=arr.pop();
console.log(popped_item);
console.log(arr);
arr.push("j");
console.log(arr);
//to return last item
console.log(arr[arr.length-1]);
//matrix Arrays
var matrix=[[1,2,3],[4,5,6],[7,9,78,9]];
console.log(matrix);
console.log(matrix.length);
var new_arr=["James","Cletus","Dcruz"]
console.log(new_arr);
for (var i = 0; i < new_arr.length; i++) {
  console.log(new_arr[i]);
}
//using for of
for (var variable of new_arr) {
  console.log(variable);
}

//alert every letter
for (var letter of new_arr) {
  alert(letter);
}
//alternate way
new_arr.forEach(alert);

//function
function functionName(name) {
  console.log(name + " is awesome ");
}
functionName("Django");
var topics=["python","django","science"];
topics.forEach(functionName);
