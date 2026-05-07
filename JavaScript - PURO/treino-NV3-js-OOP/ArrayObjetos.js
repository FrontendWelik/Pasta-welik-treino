/**
 * 
 * Array de Objetos
Este é o "chefão" final da lógica de programação antes de você entrar de cabeça em projetos complexos. No mundo real, você terá uma lista de objetos.

O cenário:
Você tem uma lista de serviços do salão, onde cada item é um objeto com nome e preco.

O que fazer:

Crie um array chamado listaServicos.

Dentro dele, coloque 3 objetos (ex: Corte, Barba, Sobrancelha), cada um com seu nome e preco.

Crie uma função chamada calcularTotal.

Essa função deve percorrer o array com um for, somar o preco de cada objeto e retornar o total.

Dica: Dentro do seu for, para pegar o preço, você usará: listaServicos[i].preco.

Consegue juntar tudo o que aprendeu (Array + Loop + Objeto) nesse exercício? Se conseguir, você estará oficialmente pronto para a Fase 3 dos seus estudos!
 */

// para o desboard funcionar , o codigo precisa seguir este fluxo
// O Array - Apenas os Objetos {} dentro dos colchetes []
// A Soma - uma variavel fora do loop que recebe o valor de cada preço
// O Loop - Parar exatamente no tamanho da lista

let listaServicos = [
    {nome: "Corte", preco: 40, tempo: "20min"},
    {nome: "Barba", preco: 30, tempo: "15min"},
    {nome: "Sobrancelha", preco: 50, tempo: "10min"},

];

function calcularTotal(servico){
    let total = 0;// variavel acumuladora começa do zero 

    for(let i = 0; i < servico.length; i++){
        //somando o preço do objeto atual ao total
        total += servico[i].preco
        
    }

    return total;//devolvemos a soma final 
}

const resultadoFinal = calcularTotal(listaServicos);// passando o valor do paramentro da função
console.log(`O valor total dos serviços é: R$ ${resultadoFinal}`)

/**
 O que mudou aqui?
total += servicos[i].preco: Isso diz ao JavaScript: "Vá na lista, pegue o item da posição i, entre na propriedade preco e some ao que eu já tenho guardado".

 */