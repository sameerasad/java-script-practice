const getCustomer = (id, callback) => {
  setTimeout(() => {
    callback({
      id: id,
      name: "sameer asad",
      isGold: true,
      email: "ssameerkhan525@gmail.com",
    });
  }, 4000);
};

const getTopMovies = (callback) => {
  setTimeout(() => {
    callback(["movie1", "movie2"]);
  }, 4000);
};

const sendEmail = (email, movies, callback) => {
  setTimeout(() => {
    callback();
  }, 4000);
};

getCustomer(1, (customer) => {
  console.log("customer", customer);
  if (customer.isGold) {
    getTopMovies((movies) => {
      console.log(movies);
      sendEmail(customer.email, movies, () => {
        console.log("sent email");
      });
    });
  }
});
