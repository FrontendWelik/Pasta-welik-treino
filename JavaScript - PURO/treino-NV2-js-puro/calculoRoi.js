/**
 * O Calculador de ROI (Retorno sobre Investimento)
Como você está focado em Dashboards e Marketing Digital, vamos criar uma função que calcule algo real. O ROI ajuda a saber se um anúncio valeu a pena.

A fórmula simples é: (Ganho - Custo) / Custo.

O que fazer:

Crie uma função chamada calcularROI.

Ela deve receber dois parâmetros: ganho e custo.

Dentro dela, crie uma variável chamada resultado que faz a conta: (ganho - custo) / custo.

Retorne o resultado.

Fora da função, chame-a passando os valores 1000 (ganho) e 200 (custo).

Mostre no console: "O ROI da campanha é: [valor]".

Dica de mestre: Para o resultado ficar em formato de "porcentagem", você pode multiplicar o resultado final por 100.
 */

function calculoRoi(ganho,custo){
    let resultado = (ganho - custo) / custo;
    return resultado;
}

let valor = calculoRoi(1000,200) * 100;

console.log(`O ROI da camapnha é: ${valor}%`)