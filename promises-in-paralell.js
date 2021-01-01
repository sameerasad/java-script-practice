const p1 = new Promise((resolve) => {
  setTimeout(() => {
    console.log("p1 resolve with value 1...");
    resolve(1);
  }, 2000);
});
const p2 = new Promise((resolve) => {
  setTimeout(() => {
    console.log("p1 resolve with value 2...");
    resolve(2);
  }, 2000);
});
const p2 = new Promise((resolve) => {
  setTimeout(() => {
    console.log("p1 resolve with value 3...");
    resolve(3);
  }, 2000);
});
// in this way we will get the resolve values of promise in an array if both promises resolved
Promise.all([p1, p2,p3]).then((res) => console.log(res));

// with the race method we will get the first resolved promise and not in an array form

Promise.race([p1, p2]).then((res) => console.log(res));
