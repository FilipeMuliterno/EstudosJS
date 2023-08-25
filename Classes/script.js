// Maneira antiga de fazer classes

// function Pessoa(name) {
//   this.name = name;
// }

// var p1 = new Pessoa("Filipe");

// console.log(p1.name);




// Maneira correta com class

// class Pessoa {
//   constructor(name) {
//     this._name = name;
//   }

//   set name(string) {
//     this._name = string;
//   }

//   get name() {
//     return this._name;
//   }

//   andar() {
//     return `${this._name} Andou`;
//   }
// }

// var p1 = new Pessoa("Filipe");

// p1.name = "Bruna";
