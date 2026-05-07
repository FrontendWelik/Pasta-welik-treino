/**
 * O Gerenciador de Clientes (Nível 3)
Imagine que você está organizando os serviços do salão.

O que fazer:

Crie um objeto chamado servico.

Propriedades: nome (ex: "Corte"), valor (ex: 50) e tempo (ex: "30min").

Crie uma função chamada exibirDetalhes.

Ela deve receber o objeto e mostrar no console:

"Serviço: [nome]"

"Preço: R$ [valor]"

"Duração: [tempo]"

Por que isso é importante?
No Nível 2, se você mudasse a ordem de um array, o código quebrava. No Nível 3, não importa a ordem: se você pedir .valor,
 o JavaScript vai direto na informação certa. Isso dá um poder imenso para criar sistemas organizados!

Consegue montar esses dois? Foque em como a função "entra" no objeto para pegar os valores.
 */

class Servico{
   constructor(){
    this.nome = "Corte",
    this.valor = 50,
    this.tempo = "30min"
   }

   exibirDetalhes(){
     console.log(`Serviço: ${this.nome}`)
     console.log(`Preço: ${this.valor}`)
     console.log(`Duração: ${this.tempo}`)
   }
}

const servico = new Servico()
servico.exibirDetalhes()