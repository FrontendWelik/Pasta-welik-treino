/**
 * O Estacionamento:

Crie um array chamado vagas com: ["ocupado", "livre", "ocupado", "ocupado", "livre"].

Crie uma variável vagasLivres começando em 0.

Faça um loop que percorra as vagas.

Se a vaga estiver "livre", aumente o contador.

No final, mostre: "Existem [X] vagas disponíveis no momento".

Esse exercício é idêntico ao dos cliques, mas muda o contexto. Se você acertar esse, terá dominado a lógica de contagem!
 */

let vagas = ["ocupado", "livre", "ocupado", "ocupado", "livre"];

let vagasLivres = 0;

for(let i = 0; i < vagas.length; i++){
    if(vagas[i] === "livre"){
        vagasLivres++

    }

}

console.log(`Existem ${vagasLivres} vagas disponíveis no momento`)