/**
 * Este é um clássico! Vamos aprender a somar todos os itens de uma lista.

O que fazer:

Crie um array chamado vendas com os valores: [5, 10, 15].

Crie uma variável chamada total começando em 0 (fora do loop).

Crie um loop for que percorra o array vendas.

Dentro do loop, você deve somar o valor da venda atual à variável total.

Dica: Use total = total + vendas[i] ou o atalho total += vendas[i].

Fora do loop (depois que ele terminar), use o console.log para mostrar o resultado final da soma.
 */

let vendas = [5, 10, 15,30];

let total = 0;

for(let i = 0; i < vendas.length; i++){
     total += vendas[i];
}

let quantidadeItens = vendas.length;

let media = total / quantidadeItens

console.log(`o total da soma é ${total}`)
console.log("esses são quantidade de itens que tem dento " + vendas.length)
console.log("esses são os itens " + vendas)
console.log("esses a media " + media)