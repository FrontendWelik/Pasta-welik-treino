/**
 * Desafio 1 (Nível 2): A Máquina de Boas-Vindas
Para começar, vamos transformar sua lógica de mensagens em uma função.

O que fazer:

Crie uma função chamada saudarUsuario.

Ela deve receber um parâmetro chamado nome.

Dentro dela, ela deve apenas dar um console.log dizendo: "Olá, [nome]! Bem-vindo ao sistema.".

Depois de criar a função, chame-a três vezes com nomes diferentes (ex: seu nome, o da Alycia, etc).

Exemplo de como pensar (Sem o código pronto):
Para criar a função: function nomeDaFunção(parametro) { ... }

Para usar a função: nomeDaFunção("Welik")
 */

function saudarUsuario(nome){
  console.log(`Olá ${nome}, Bem-vindo ao sistema`)
}

saudarUsuario("welik");
saudarUsuario("Alycia");
saudarUsuario("Benjamin");
