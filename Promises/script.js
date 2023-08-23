// Exemplo de promise

// const myPromise = new Promise((resolve, reject) => {
//   const nome = "Filipe";

//   if (nome === "Filipe") {
//     resolve("Usuario Filipe encontrado!");
//   } else {
//     reject("O usuários não foi encontrado");
//   }
// });

// myPromise.then((data) => {
//   console.log(data);
// });



// Encadeamento de then´s

// const myPromise2 = new Promise((resolve, reject) => {
//   const nome = "Filipe";

//   if (nome === "Filipe") {
//     resolve("Usuario Filipe encontrado!");
//   } else {
//     reject("O usuários não foi encontrado");
//   }
// });

// myPromise2
//   .then((data) => {
//     return data.toUpperCase();
//   })
//   .then((stringModificada) => {
//     console.log(stringModificada);
//   });



// Retorno Catch

// const myPromise3 = new Promise((resolve, reject) => {
//   const nome = "Filipe";

//   if (nome === "Filipe") {
//     resolve("Usuario Filipe encontrado!");
//   } else {
//     reject("O usuários não foi encontrado");
//   }
// });

// myPromise3
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });



// Resolver várias promessas -- all/race


// all

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(()=>{
//     resolve('p1 ok! timeout')
//   },2000)
// });

// const p2 = new Promise((resolve, reject) => {
//   resolve("p2 ok!");
// });

// const p3 = new Promise((resolve, reject) => {
//   resolve("p3 ok!");
// });

// const resolveAll = Promise.all([p1, p2, p3]).then((data) => {
//   console.log(data);
// });


// Race

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//       resolve('p1 ok! timeout')
//     },2000)
//   });
  
//   const p2 = new Promise((resolve, reject) => {
//     resolve("p2 ok!");
//   });
  
//   const p3 = new Promise((resolve, reject) => {
//     resolve("p3 ok!");
//   });
  
//   const resolveRace = Promise.race([p1, p2, p3]).then((data) => {
//     console.log(data);
//   });
