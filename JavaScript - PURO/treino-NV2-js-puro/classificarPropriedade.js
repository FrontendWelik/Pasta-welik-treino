/**
 * 
 * Imagine que no seu Gerador de UTM ou no seu Dashboard, 
 * você recebe uma lista de cliques de vários anúncios. 
 * Você precisa criar uma função que diga quais anúncios são "Alta Performance"
 * e quais são "Baixa Performance".
 */

function classificarPerfomance(listaClique){
    let relatorio = [];

    for(let i = 0; i <listaClique.length; i++){
        if(listaClique[i] > 100){
            relatorio.push("alta performance");

        }else {
            relatorio.push("Baixa performance");
        }

    }
    return relatorio

}

let array = [150, 50, 200, 80,10,110];

const resultado = classificarPerfomance(array);

console.log(resultado);

