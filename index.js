console.log("after");

const getUser = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("reading from database");
      resolve({ id: id, githubusername: "sameer" });
    }, 1000);
  });
};

const getRepos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["repo1", "repo2"]);
    }, 2000);
  });
};

getUser(1);

getRepos(1);
