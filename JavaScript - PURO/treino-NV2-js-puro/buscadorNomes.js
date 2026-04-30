/**
 * Buscador de Nomes (Localização)
Imagine que você tem uma lista de serviços do salão da Suellen e quer saber se um serviço específico existe na lista.

O que fazer:

Crie uma função chamada temServico.

Ela deve receber dois parâmetros: listaServicos (array) e nomeProcurado (string).

Dentro da função:

Use um loop for.

Se o item atual for igual ao nomeProcurado, retorne true (verdadeiro).

Se o loop acabar e não encontrar nada, retorne false (falso).

Chame a função passando uma lista de serviços e o nome que quer buscar.

Dica: O return mata a função na hora. Então, se você encontrar o item e der return true, a função para ali mesmo!
 */

function temServico(listaServico,nomePreocurado){
  
    for(let i = 0; i < listaServico.length; i++){

        if(listaServico[i] === nomePreocurado){
            return true;

        }

    }

    return false;

}

let servicosDisponiveis = ["cabelo", "barba", "bigode", "sobrancelhas"];

let resultado = temServico(servicosDisponiveis, "barba");
console.log(resultado);