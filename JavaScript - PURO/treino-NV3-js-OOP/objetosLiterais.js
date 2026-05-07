/**
 * O Objeto do Anúncio (Custo por Clique)
Vamos simular uma lógica real do seu Dashboard de anúncios.

O que fazer:

Crie um objeto literal chamado anuncio.

Propriedades: titulo: "Campanha Abril", cliques: 100, investimento: 250.

Crie uma função chamada calcularCPC (Custo por Clique).

Essa função deve receber o objeto como parâmetro.

A conta é: investimento / cliques.

Retorne a frase: "O anúncio [titulo] teve um custo de R$ [resultado] por clique."
 */

const anuncio = {
    titulo: "Campanha Abril",
    cliques: 100,
    investimento: 250,
};

function calcularCPC(dadosAnuncio){
    //dinheiro dividido pelos cliques
   let resultados = dadosAnuncio.investimento / dadosAnuncio.cliques;

   // acessamos as propriedades atraves do paramentro da função
   return `o anunciao ${dadosAnuncio.titulo} teve um custo de R$ ${resultados} por clientes   `

}

//resultado esperado
console.log(calcularCPC(anuncio))

