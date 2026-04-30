/**
 * Para encerrar o dia com chave de ouro, vamos unir tudo em um único exercício. Imagine que você está criando a lógica para o seu Dashboard de Anúncios.

O cenário:
Você tem uma lista de valores de investimentos em anúncios. Você precisa saber o total investido, mas apenas dos anúncios que custaram mais de 10 reais (os anúncios "premium").

O que fazer:

Crie o array: investimentos = [5, 15, 8, 20, 30].

Crie a variável: somaPremium = 0.

Faça o loop for percorrendo os investimentos.

Dentro do loop, use um if: Se o valor for maior que 10, some esse valor à variável somaPremium.

No final, mostre: "O total investido em anúncios premium é R$ [valor]".

Dica: Aqui você vai misturar a lógica do Exercício 1 (filtrar por valor) com a do Exercício 2 (somar valores).
 */

let investimento = [5, 15, 8, 20, 30];

let somaPremium = 0;

for(let i = 0; i < investimento.length; i++){

    if(investimento[i] > 10){
        somaPremium += investimento[i]

    }
}

console.log(`O total investido em anúncios premium é R$ ${somaPremium}`)