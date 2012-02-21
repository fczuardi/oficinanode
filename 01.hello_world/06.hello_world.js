function waitAndPrint(t,msg){
  setTimeout(function(){
    console.log(msg)
  }, t*1000);
}
waitAndPrint(0,'hello');
waitAndPrint(1,'world');
waitAndPrint(2,'HELLO');
waitAndPrint(3,'WORLD');
console.log('The End');