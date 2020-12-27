function callback() {
  setTimeout(() => {
    console.log("welcome to the async javasscript");
  }, 2000);
}

setTimeout(() => {
  console.log("this is the async javascript");
}, 1000);

callback();
console.log("after");
