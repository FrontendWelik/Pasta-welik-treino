/**
 * imagine que no seu dashboard voce tem uma lista de preço de anúncios e quer destacar apenas os que são caros 
 * logica : crie um array chamado precos com varios valores [1,2,3,4,5,6,7,8].
 * crie um loop for que percorra todos esses preços 
 * dentro do loop use if para verificar :
 se o preço dpr maior que 100, imprima - Preço alto: R$ [preco]
 se for menor , imprima apenas preço normal [preco]
 */


 let preco = [10, 45, 120, 5, 80, 200,500,30];

 for(let i = 0; i < preco.length; i++){
    let valor = preco[i];

    if(valor > 100){
        console.log(`Preço Alto: R$:${valor}`);

    }else{
        console.log(`Preço Normal: R$: ${valor}`);
    }
 }