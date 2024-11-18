const prompt = require('prompt-sync')();
// npm install prompt-sync
function saudacao(nome) {
 console.log('OI ' + nome.toUpperCase());
}
function entradaNome(callback) {
 var nome = prompt('Digite seu nome: ');
 callback(nome); // chamando a função callback (saudação)
}
entradaNome(saudacao); 
