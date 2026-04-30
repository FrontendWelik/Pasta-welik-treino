/**
 * O Gerador de Links (UTM)
vamos criar a versão lógica dele em JavaScript puro. Uma UTM nada mais é do que um link com várias informações grudadas no final.

O que fazer:

Crie uma função chamada gerarLinkUtm.

Ela deve receber três parâmetros: url, origem e campanha.

Dentro dela, use um Template Literal para montar a frase (o link final).

O formato deve ser: [url]?utm_source=[origem]&utm_campaign=[campanha]

Retorne esse link montado.

Chame a função passando:

URL: "meusite.com.br"

Origem: "meusite.com.br"

Campanha: "meusite.com.br"

Mostre o resultado final no console.

Exemplo de como o resultado deve sair no console:
meusite.com.br?utm_source=google&utm_campaign=vendas_abril

Este exercício é a base real do projeto que você mencionou nos seus planos de estudo! Consegue montar essa "fábrica de links"?
 */

function gerarLink(url,origem,campanha){
    return `${url}?utm_source=${origem}&utm_campaign=${campanha}
`;

}

let utm = gerarLink("meusite.com.br","google","vendas_abril");

console.log(`o link final: ${utm}`);