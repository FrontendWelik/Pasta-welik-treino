/**
 * O Verificador de Acesso
Já que você está pegando o jeito das funções com return, vamos criar uma que toma uma decisão.

O que fazer:

Crie uma função chamada podeAcessar.

Ela deve receber um parâmetro chamado idade.

Dentro dela, use um if:

Se a idade for maior ou igual a 18, ela deve dar return "Acesso Permitido".

Caso contrário (else), ela deve dar return "Acesso Negado".

Chame a função passando uma idade e mostre o resultado no console.log.

Por que fazer isso? No futuro, você pode usar essa mesma lógica para verificar se um campo de UTM está vazio ou se um usuário está logado no seu dashboard!
 */


function podeAcessar(idade){
    if(idade >= 18){
        return 'Acesso Permitido'

    }else{
        return "Acesso Negado !"
    }
}

let idadeUsuario = podeAcessar(10);

console.log(`${idadeUsuario}`);