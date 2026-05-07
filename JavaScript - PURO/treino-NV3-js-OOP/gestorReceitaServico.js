/**
 * O Gestor de Receita e Serviços
Neste exercício, você não vai apenas somar ou filtrar; você vai criar uma pequena inteligência que analisa o desempenho do negócio.

O Cenário
Você tem uma lista de atendimentos realizados no dia. Cada atendimento é um objeto com: cliente, servico, valor e tipoPagamento (dinheiro ou cartão).

O que você deve estruturar:
A Base de Dados:
Crie um array chamado atendimentosDoDia com pelo menos 5 objetos. Exemplo de um objeto: { cliente: "Suellen", servico: "Corte", valor: 50, tipoPagamento: "dinheiro" }.

A Função Principal (gerarRelatorio):
Esta função deve processar a lista e devolver um novo objeto (um objeto resumo) com as seguintes informações:

totalFaturado: A soma de todos os valores.

qtdDinheiro: Quantas pessoas pagaram em dinheiro.

qtdCartao: Quantas pessoas pagaram em cartão.

servicosRealizados: Um array apenas com os nomes dos serviços (ex: ["Corte", "Barba", ...]).

A Lógica de Decisão:
Dentro do seu loop for, você precisará de if e else para verificar o tipoPagamento e incrementar os contadores de dinheiro ou cartão.
 */

let atendimentoDia = [
    {cliente: "Ben",servico: "corte",valor:  50,tipoPagamento: "dinheiro"},
    {cliente: "welik",servico: "barba",valor:  20,tipoPagamento: "pix"},
    {cliente: "Alycia",servico: "cilios",valor:  80,tipoPagamento: "pix"},
    {cliente: "Duda",servico: "sobrancelha",valor:  30,tipoPagamento: "pix"},
    {cliente: "Ruiva",servico: "pigmentação",valor:  70,tipoPagamento: "cartão"},

];

function gerarRelatorio(resumo){
    let totalFaturado = 0;
    let qtdDinheiro = 0;
    let qtdCartao = 0;
    let qtdPix = 0;
    let servicoRealizado = []// array vazio para guardamos os nomes

    for(let i = 0; i < resumo.length; i++){
        //soma o valor 
        totalFaturado += resumo[i].valor;

        //guarda o nome do serviço na lista
        servicoRealizado.push(resumo[i].servico)

        //logica de contagem
        if(resumo[i].tipoPagamento === "dinheiro"){
           qtdDinheiro++;//soma + 1 no contador

        }else if(resumo[i].tipoPagamento === "cartão"){
           qtdCartao++

        }else if(resumo[i].tipoPagamento === "pix"){
         qtdPix++
            
        }
        
    }
     return {
        faturamento: totalFaturado,
        contagemDinheiro: qtdDinheiro,
        contagemCartao: qtdCartao,
        contagemPix: qtdPix,
        todosServicos: servicoRealizado 
       }
}

const resultadoFinal  = gerarRelatorio(atendimentoDia);

console.log(`
    O total faturado: R$: ${resultadoFinal.faturamento}.
    Pagamentos em dinheiro: ${resultadoFinal.contagemDinheiro}.
    Pagamentos em PIX ${resultadoFinal.contagemPix}.
    Serviços realizados ${resultadoFinal.todosServicos.join(", ")}
    `);
