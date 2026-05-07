/**
 * O Perfil do Desenvolvedor (Nível 3)
Vamos criar um objeto que represente você e uma função que apresente esses dados.

O que fazer:

Crie um objeto chamado desenvolvedor.

Adicione as seguintes propriedades a ele:

nome: (seu nome)

cidade: "Jundiaí"

tecnologiaFavorita: "Tailwind CSS"

Crie uma função chamada apresentarDev.

Essa função deve receber um objeto como parâmetro.

Dentro da função, retorne uma frase usando Template Literal:

"Olá, eu sou o [nome], moro em [cidade] e minha tecnologia favorita é [tecnologiaFavorita]."

Chame a função passando o seu objeto desenvolvedor e mostre o resultado no console.
 * 
 */

class Desenvolvedor{
    constructor(){
        this.nome = "welik",
        this.cidade = "Jundiaí",
        this.tecnologiFavorita = "Javascript"
    }

    apresentarDev(){
        //usando this. para acessar as propriedades do proprio objeto
         return `Olá, eu sou ${this.nome}, , e moro na cidade ${this.cidade} e minha tecnologia favorita é ${this.tecnologiFavorita} `;
    }
}

// Criando a instancia (o objeto real vindo do molde)
const desenvolvedor = new Desenvolvedor()

//Chamando a função atraves da instância
let mensagem = desenvolvedor.apresentarDev()
console.log(mensagem);
