/**
 * O Conversor de Moedas


O que fazer:

Crie uma função chamada converterParaDolar.

Ela deve receber um parâmetro chamado valorReal.

Dentro dela, crie uma variável valorDolar que recebe valorReal / 5.50 (simulando a cotação).

Use o return para enviar o resultado de volta.

Fora da função, crie uma variável para receber esse resultado e mostre no console.

Por que isso é Nível 2?
Porque agora você não está apenas "fazendo contas", você está criando suas próprias ferramentas. No seu projeto de UTM, por exemplo, o "motor" será uma grande função.

Quer tentar montar esses dois? Se conseguir, você já terá dado o primeiro passo fora da programação "linear" para a programação "estruturada"!
 */

function converteDolar(valorReal){
    let valorDolar = valorReal / 5.50;
    return valorDolar;
}
 let valorConvertido = converteDolar(100);// valor a ser convertido



 console.log(`o resultado da converção é : ${valorConvertido.toFixed(2)}`)//toFixed(2) = para arredondar para duas casa decimais 
