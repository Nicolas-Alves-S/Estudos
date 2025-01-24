// Mock para teste local
function gets() {
    return "Carrinho: 10, 15.00 - Boneca: 3, 25.00"; // Exemplo de entrada
}

function print(output) {
    console.log(output);
}

function verificnodearPromocoes() {
    const taxaDesconto = 0.10;
    const entrada = gets();
    const produtos = entrada.split(' - ');
    const resultado = [];

    produtos.forEach(produto => {
        const [nome, quantidadePreco] = produto.split(': ');
        const [quantidade, precoUnitario] = quantidadePreco.split(', ').map(Number);

        let precoFinal;
        if (quantidade >= 5) {
            precoFinal = precoUnitario * (1 - taxaDesconto);
        } else {
            precoFinal = precoUnitario;
        }

        resultado.push(`${nome}: ${precoFinal.toFixed(2)}`);
    });

    print(resultado.join(' - '));
}

// Chamada da função
verificarPromocoes();
