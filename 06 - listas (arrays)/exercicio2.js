//2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado.

const numeros=[0,1,2,3,4,5,6,7,8,9,10];

for (let i = 0; i < numeros.length; i++) {
    const numero =numeros[i];
    
    if(numero %2 === 0){
        console.log(numero)
    }

}
//basicamente o codigo funciona assim se o numero se o numero ficar inteiro dividido por 2 ele é par ai vc imprime le se nao so continua.