function exibir(num) {
  console.log("a operação resultou em " + num);
}

function soma(a, b, callback) {
  var op = a + b;
  callback(op);
}

function multip(a, b, cb) {
  var op = a * b;
  cb(op);
}

soma(2, 2, exibir);

multip(2, 5, exibir);
console.log("api");
