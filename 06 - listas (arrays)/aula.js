<<<<<<< HEAD
// Cria um array vazio para armazenar as notas
const notas = [];

// Adiciona três notas ao array utilizando o método push
notas.push(10); // Adiciona a nota 10
notas.push(10); // Adiciona outra nota 10
notas.push(10); // Adiciona mais uma nota 10

// Inicializa uma variável para armazenar a soma das notas
let soma = 0;


// Laço for para iterar sobre o array de notas
for (let i = 0; i < notas.length; i++) {
    // let i = 0: Inicializa o contador i com 0, ou seja comecar com 0
    // i < notas.length: O laço continua enquanto i for menor que o comprimento do array
    // i++: Incrementa o valor de i em 1 após cada iteração, ou seja adiconar + 1 como comesa com 0 e nao com 1
    const nota = notas[i]; // Obtém a nota atual do array
    soma = soma + nota; // Adiciona a nota atual à soma
}

// Calcula a média das notas dividindo a soma pelo número de notas
const media = soma / notas.length;

// Exibe a média no console
console.log(media);
=======
// Cria um array vazio para armazenar as notas
const notas = [];

// Adiciona três notas ao array utilizando o método push
notas.push(10); // Adiciona a nota 10
notas.push(10); // Adiciona outra nota 10
notas.push(10); // Adiciona mais uma nota 10

// Inicializa uma variável para armazenar a soma das notas
let soma = 0;


// Laço for para iterar sobre o array de notas
for (let i = 0; i < notas.length; i++) {
    // let i = 0: Inicializa o contador i com 0, ou seja comecar com 0
    // i < notas.length: O laço continua enquanto i for menor que o comprimento do array
    // i++: Incrementa o valor de i em 1 após cada iteração, ou seja adiconar + 1 como comesa com 0 e nao com 1
    const nota = notas[i]; // Obtém a nota atual do array
    soma = soma + nota; // Adiciona a nota atual à soma
}

// Calcula a média das notas dividindo a soma pelo número de notas
const media = soma / notas.length;

// Exibe a média no console
console.log(media);
>>>>>>> 01cf3b3 (Atualização)
