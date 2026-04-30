/**
 * Exercício 4: O Contador de "Cliques" (Filtro Específico)
Vamos simular que você recebeu uma lista de ações de usuários (cliques e visualizações) e precisa contar apenas quantos cliques aconteceram.

O que fazer:

Crie um array chamado acoes com estes valores: ["clique", "view", "clique", "view", "clique"].

Crie uma variável chamada contadorCliques começando em 0.

Use o for para percorrer o array.

Use o if para verificar: se a ação atual for igual a "clique", aumente o contadorCliques em 1.

Ao final, fora do loop, mostre: "Total de cliques registrados: [valor]".
 */
let acoes = ["clique", "view", "clique", "view", "clique"];
let contadorClique = 0;

for(let i = 0; i < acoes.length; i++){
    //so entramos no if se o item atual for exatamente clique 
    if(acoes[i] === "clique"){
        contadorClique++; // aumenta 1 apenas quando acha um clique

    }

}

//resultado deve ser mostrado fora do loop para ele nao ficar repetindo 
console.log(`Total de cliques resgistrados: ${contadorClique}`)