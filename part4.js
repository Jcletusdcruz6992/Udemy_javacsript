var arr=[]
function add(name) {
  arr.push(name);
  rep();
}

function remove(name) {
  var index=arr.indexOf(name);
  arr.splice(index,1);
  rep();
}
function rep() {
  var action=prompt("Please select an action: add, remove, display, or quit.")
  if (action==="add") {
    var name=prompt("Enter element you want to add")
    add(name)
  }
  else if (action==="remove") {
    var name=prompt("Enter element you want to remove")
    remove(name)
  }
  else if (action==="display") {
    console.log(arr);
    rep();
  }
  else if (action=="quit") {
    alert("Thanks for using the Web App! Please refresh the page to start over.")
  }
  else {
    alert("Invalid entry")
  }
}
var option =prompt("Would you like to start the roster web app? y/n")
if(option==="y")
{
rep();
}
else if (option==="n") {
alert("Thanks for using the Web App! Please refresh the page to start over.")
}
else{
  alert("Wrong input")
}
