const getCustomer = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: id,
        name: "sameer asad",
        isGold: true,
        email: "ssameerkhan525@gmail.com",
      });
    }, 4000);
  });
};

const getTopMovies = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["movie1", "movie2"]);
    }, 4000);
  });
};

const sendEmail = (email, movies) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 4000);
  });
};
//callback approach
/*getCustomer(1, (customer) => {
  console.log("customer", customer);
  if (customer.isGold) {
    getTopMovies((movies) => {
      console.log(movies);
      sendEmail(customer.email, movies, () => {
        console.log("sent email");
      });
    });
  }
});*/

//async and await approach
async function notifyCustomer() {
  try {
    const customer = await getCustomer(3);
    console.log("customers:", customer);
    if (customer.isGold) {
      const movies = await getTopMovies();
      console.log(movies);
      const emailSend = await sendEmail(customer.email, movies);
      console.log("sent Email....");
    }
  } catch (err) {
    console(new Error(err.message));
  }
}
notifyCustomer();
