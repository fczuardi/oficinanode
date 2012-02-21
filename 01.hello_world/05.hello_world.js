console.log('hello');
setTimeout(function (){
  console.log('world');
  setTimeout(function (){
    console.log('HELLO');
    setTimeout(function (){
      console.log('WORLD');
    }, 1000);
  }, 1000);
}, 1000);
