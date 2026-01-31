const botao = document.querySelector('#btn-gerar');
const elementoTexto = document.querySelector('#texto-frase');

botao.addEventListener('click', buscarFrase)

async function buscarFrase(){
    // Liga pra API e espera a resposta
    const resposta = await fetch('https://api.adviceslip.com/advice');

    // Converte a resposar em um formato que o JS entende
    const dados = await resposta.json();

    // pega o texto do conselho e coloca no H1
    elementoTexto.innerText = dados.slip.advice;
}