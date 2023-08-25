// API https://replit.com/@FilipeMuliterno/Api-Teste#index.js

// const p_temp = document.getElementById("p_temp");
// const p_nivel = document.getElementById("p_nivel");
// const p_press = document.getElementById("p_press");

// const obterDados = () => {
//   const endpoint = "https://api-teste.filipemuliterno.repl.co";

//   fetch(endpoint)
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//       p_temp.innerHTML = `A temperatura é: ${data.temperatura}`;
//       p_nivel.innerHTML = `O nível é: ${data.nivel}`;
//       p_press.innerHTML = `A pressão é: ${data.pressao}`;
//     });
// };

// let intervalo = setInterval(obterDados, 5000); Caso queira usar intervalo




// Exemplo utilizando um método POST

// let dados = {  // Dados que serão enviados
//   nome: "Filipe",
//   idade: 22,
//   curso: "ADS",
// };

// let header = {
//   method: "POST", // Método utilizado
//   body: JSON.stringify(dados), // Dados que serão enviados convertido já
// };

// const obterDados = () => {
//   const endpoint = "https://api-teste.filipemuliterno.repl.co";

//   fetch(endpoint, header)
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//     });
// };

// Da mesma forma que poderia ser assim

// const gravarDados = () => {
//   const endpoint = "https://api-teste.filipemuliterno.repl.co";

//   fetch(endpoint, {
//     method: "POST",
//     body: {
//       nome: "Filipe",
//       idade: 22,
//       curso: "ADS",
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//     });
// };

// gravarDados();
