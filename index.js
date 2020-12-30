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

const getUser = (id, callback) => {
  setTimeout(() => {
    console.log("reading from database");
    callback({ id: id, githubusername: "sameer" });
  }, 1000);
};
const getRepos = (callback) => {
  setTimeout(() => callback(["repo1", "repo2", "repo3"]), 2000);
};

getUser(1, function (user) {
  console.log("user", user);
});

getRepos((repos) => {
  console.log("repos:", repos);
});
