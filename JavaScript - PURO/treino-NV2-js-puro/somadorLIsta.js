/**
 * O Somador de Lista (Função + Loop)
Para fecharmos o Nível 2 com chave de ouro, vamos misturar o que você aprendeu ontem (Loops) com o que aprendeu hoje (Funções).

O que fazer:

Crie uma função chamada calcularTotalVendas.

Ela deve receber um parâmetro chamado listaDePrecos (que será um array).

Dentro da função:

Crie uma variável soma = 0.

Faça um loop for que percorra a listaDePrecos e some tudo na variável soma.

No final da função (depois do loop), dê um return soma.

Fora da função, chame-a passando o array [50, 100, 25].

Mostre o resultado no console.

Por que isso é importante? No seu Dashboard, os dados virão em listas. Ter uma função pronta para somar qualquer lista que você mandar para ela é uma ferramenta poderosa.

Consegue unir o Nível 1 e o Nível 2 nesse exercício?
 */

function calcularTotalVendas(listaPrecos){
    let soma = 0;
    for(let i = 0; i < listaPrecos.length; i++){
    soma += listaPrecos[i];
    }
    return soma;

}

let array = [50, 100, 25];

let resultado = calcularTotalVendas(array);

console.log(resultado);