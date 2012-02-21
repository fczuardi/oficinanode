function waitAndPrint(t,msg,callback){
  // if (typeof callback == 'undefined') callback = function(){};
  callback = callback || function(){};
  setTimeout(function(){
    console.log(msg)
    callback();
  }, t*1000);
}
waitAndPrint(0,'hello',function(){
  waitAndPrint(1,'world',function(){
    waitAndPrint(1,'HELLO',function(){
      waitAndPrint(1,'WORLD')
    })
  })
});