// when we call a promise it alwaye be in the pending state
//a promise could resollve or reject

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    //if promise resolve it will give us
    // resolve();
    // if its reject it will throw an error
    reject(new Error("MESSAGE"));
  }, 2000);
});

p.then((res) => console.log("result", res)).catch((err) =>
  console.log("ERROR", err.message)
);
