console.log("call stack");

setTimeout(() => {
  console.log("Task");
}, 0);

Promise.resolve(true).then(() => {
  console.log("Micro Task");
});
