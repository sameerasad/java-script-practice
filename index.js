console.log("after");

const getUser = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("reading from database");
      resolve({ id: id, githubusername: "sameer" });
    }, 1000);
  });
};

const getRepos = (username) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["repo1", "repo2"]);
    }, 2000);
  });
};

const getCommits = () => {
  return new Promise((resolve, reject) => {
    resolve(["commit1", "commit2"]);
  });
};

getUser(1).then((user) =>
  getRepos(user.githubusername)
    .then((repos) => getCommits(repos[0]))
    .then((commits) => console.log(commits[0]))

    .catch((err) => {
      console.log(err.message);
    })
);
