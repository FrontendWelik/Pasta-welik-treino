/**
 * Crie uma função que receba um número e retorne um Array contendo os resultados da tabuada de 1 a 10.
 */

function gerarTabuada(numero){
    let resultados = [];

    for(let i = 1; i <= 10; i++){//Em vez de numero.length, vamos dizer para o i começar em 1 e ir até que ele seja i <= 10.
        //crie a frase da conta 
        let conta = `${numero} X ${i} = ${numero * i}`;

        //usando .push para guardar na lista resultado
        resultados.push(conta);
    }

    return resultados;
}

let tabuadaDoCinco = gerarTabuada(5);

console.log(tabuadaDoCinco);

