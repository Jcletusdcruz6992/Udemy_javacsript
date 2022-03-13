var sample={Model:'Ford',Year:'1995',fun:function jog(){
  console.log('Hello World !');
}}
console.log(sample);
console.dir(sample.fun)

var details={
  Name:'James Cletus Dcruz',
  fun:function() {
    console.log("Hi "+this.Name);
  }
}
console.log(details.fun());
