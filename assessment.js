var a=prompt("Enter First Name");
var b=prompt("Enter Last Name");
var age=prompt("Enter your Age");
var height=prompt("Enter height in cms");
var p=prompt("Enter your pet name");
if(a[0]===b[0] && age<30 && age>20 && height>=170 && p[p.length-1]==="y")
{
  console.log("Access Granted !");
}
else {
  console.log("Access Denied");
}
