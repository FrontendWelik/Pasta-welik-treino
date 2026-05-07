/**
 * Vamos dificultar um pouquinho? Para fixar bem a lógica, vamos misturar soma acumulada com validação.
O cenário:
No seu projeto de Dashboard, você tem uma meta de cliques. Você quer somar todos os cliques e, no final, dizer se a meta total foi batida.
 */

function verificarMetas(listaCliques,metaMinima){
    let totalCliques = 0;

    for(let i = 0; i < listaCliques.length; i++){
         totalCliques += listaCliques[i];
    }
     if(totalCliques >= metaMinima){
            return `meta batida! Total ${totalCliques}`;

        }else{
            return `Meta não atingida. Total:${totalCliques}`;
        }

}

let cliques = [50, 30, 20];

const resultado = verificarMetas(cliques, 120);

console.log(resultado);
