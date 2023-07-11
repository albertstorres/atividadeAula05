let montante;
let capital = 1000;
let taxa = 0.125;
let tempo = 5;

montante = capital * (1 + taxa) ** tempo;

console.log(`MONTANTE RETORNADO = ${montante}`);