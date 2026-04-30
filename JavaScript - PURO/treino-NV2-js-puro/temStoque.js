/**
 * Para ver se você pegou essa manha do return fora do loop, tente este:

Crie uma função chamada temEstoque.

Ela recebe uma listaProdutos e um produtoDesejado.

Se o produto estiver na lista, retorna "Produto em estoque".

Se o loop acabar e não achar, retorna "Produto esgotado".

Dica: Em vez de retornar true ou false, retorne as frases! Consegue ajustar essa lógica?
 */

function temStoque(listaProdutos,produtosDesejados){
    for(let i = 0;i < listaProdutos.length; i++){
        if(listaProdutos[i] === produtosDesejados){
            return 'Produto em estoque'
            
        }

    }
   return 'Produto esgotado'

}

let produtos = ["champoo","sabonete","pitanga"];

let resultado = temStoque(produtos, "sabonete");

console.log(resultado)