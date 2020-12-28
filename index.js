function callback() {
  setTimeout(() => {
    console.log("welcome to the async java script");
  }, 2000);
}

setTimeout(() => {
  console.log("this is the async javascript");
}, 1500);

callback();

console.log("after");

const getUser = (id) => {
  setTimeout(() => {
    console.log("reading from database");
    return { id: id, githubusername: "sameer" };
  }, 1000)
};

getUser(1);
