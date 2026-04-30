/**
 * Imagine que você tem uma lista de usuários e quer saber se o "Welik" está nela.

O que fazer:

Crie um array chamado usuarios com alguns nomes: ["Ana", "Carlos", "Welik", "Suzana"].

Crie uma variável chamada usuarioProcurado com o valor "Welik".

Use um loop for para percorrer a lista.

Dentro do loop, use um if para comparar cada item da lista com o usuarioProcurado.

Se encontrar, mostre no console: "Usuário [Nome] encontrado na posição [i]!".
 */

let usuarios = ["benjamin","welik","alycia","fernandod"];

let usuarioProcurado = "welik";

for(let i = 0;i < usuarios.length;  i++){
    //O alvo é igual ao item atual da lista
    if(usuarios[i] === usuarioProcurado){
        console.log(`achamos o usuario: ${usuarioProcurado}, encontrado na posição ${[i]}`);
    }

}