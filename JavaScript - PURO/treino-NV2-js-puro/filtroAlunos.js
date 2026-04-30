/**
 * O Filtro de Alunos (Função + Filtro)
Neste exercício, vamos criar uma função que recebe uma lista de notas e nos devolve apenas as notas que são maiores ou iguais a 7 (notas de aprovação).

O que fazer:

Crie uma função chamada filtrarAprovados.

Ela deve receber um parâmetro chamado notas (um array de números).

Dentro da função:

Crie um novo array vazio chamado aprovados.

Use um loop for para percorrer o array notas.

Se a nota atual for >= 7, use o comando .push() para adicionar essa nota ao array aprovados.

No final da função, dê um return aprovados.

Fora da função, chame-a passando [10, 5, 8, 4, 7] e mostre o resultado.
 */


function filtrarProvas(notas){
    let aprovados = [];

    for(let i = 0; i < notas.length; i++){

        if(notas[i] >= 7){
            aprovados.push(notas[i]);
        }
    }
    return aprovados

}

let array = [10, 5, 8, 4, 7,9,12,6,];
let resultado = filtrarProvas(array);

console.log(resultado)