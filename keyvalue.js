var carinfo={model:"Tesla",year:2022,owner:"Elon Musk"}
console.log(carinfo);
console.log(carinfo["model"]);
var newinfo={a:"string",b:[1,2,3],c:{inside:["a","b",8]}}
console.log(newinfo);
carinfo['model']="Ford"
console.log(carinfo);
carinfo['year']+=1;
console.log(carinfo);
for (key in carinfo) {
console.log(key);
console.log(carinfo[key]);
}
