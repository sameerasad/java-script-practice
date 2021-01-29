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
//promise approach
getUser(1).then((user) =>
  getRepos(user.githubusername)
    .then((repos) => getCommits(repos[0]))
    .then((commits) => console.log(commits[0]))

    .catch((err) => {
      console.log(err.message);
    })
);

// async and await approach

async function diplayCommit() {
  try {
    const user = await getUser(1);
    const repo = await getRepos(user.githubusername);
    const commit = await getCommits(commit[0]);
    console.log(commit);
    console.log(repo);
    console.log(repo) 
  } catch (err) {
    console.log(err.message);
  }
}

getCommits().then((res) => console.log(res));
getRepos().then((res) => console.log(res));
getUser(1).then((res) => console.log(res));

diplayCommit();
