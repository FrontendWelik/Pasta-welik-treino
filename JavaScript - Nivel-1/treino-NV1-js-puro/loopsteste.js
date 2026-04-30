const estoque = ["teclado", "gabinete", "monitor", "fone ouvido"];

//o loop a maquina de repetição
for(let i = 0; i < estoque.length; i++){// 
    console.log(`Produtos disponiveis: ${estoque[i]}`);

}

/* a variavel i carrega o valor 0 , se i for menor que estoque.length(contador): i++ = atribuindo um valor ao i para ele percorrer no loop, i = indice , o contador do arrey que vai ter todos os dados dela  */
/**
 * Explicação Detalhada:
Vamos abrir o "capô" desse for (let i = 0; i < estoque.length; i++). Ele é dividido em 3 partes principais dentro dos parênteses:

1. A Inicialização (let i = 0)
Aqui você está criando uma variável de controle (um contador).

Chamamos de i por convenção (de index ou índice).

Começamos no 0 porque, como você viu no exercício anterior, o primeiro item de um Array sempre está na posição 0.

2. A Condição de Parada (i < estoque.length)
O loop vai rodar enquanto essa frase for verdadeira.

estoque.length nos diz que existem 4 itens.

O loop vai rodar quando i for 0, 1, 2 e 3.

Quando o i chegar a 4, a condição 4 < 4 se torna falsa, e o computador sai do loop e continua o resto do código.

3. O Incremento (i++)
Isso acontece ao final de cada rodada.

i++ é o mesmo que dizer i = i + 1.

Sem isso, o i seria sempre 0, a condição seria sempre verdadeira, e seu computador travaria em um loop infinito.

O que acontece dentro das chaves { }?
JavaScript
console.log(`Produto disponível: ${estoque[i]}`);
Aqui está o truque: a cada volta do loop, o valor de i muda.

1ª volta: i vale 0. O código lê estoque[0] (teclado).

2ª volta: i vale 1. O código lê estoque[1] (gabinete).

3ª volta: i vale 2. O código lê estoque[2] (monitor).

...e assim por diante.
 * 
 */