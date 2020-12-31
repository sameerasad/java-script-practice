const p = Promise.resolve({ id: 1 });
p.then((res) => console.log(res));

const r = Promise.reject(new Error("REASON FOR REJECTION"));

r.catch((err) => console.log(err));
