const video = document.getElementById("myVideo");
const bt = document.getElementById("btSpeed");

// aumentar a velocidade do video
bt.addEventListener('click' ,() =>{
    if (video.playbackRate === 1.0){
        video.playbackRate === 3.0// fica 3 vezes mais rapido
        bt.innerText = "velocidade normal"
    } else {
        //playbackRate: É uma propriedade nativa que controla a velocidade. 
        //$1.0$ é o normal, $0.5$ é câmera lenta e $2.0$ ou mais é acelerado
        video.playbackRate = 1.0;
        bt.innerText = "velocidade aumenta"
    }
});

//efeito do filtro ao passar o mouse 
// quando o mouse entrar na tela o video fica preto e branco 
document.addEventListener('mouseenter',() =>{
    //filter = Estamos acessando o CSS via JavaScript para aplicar filtros de imagem
    video.style.filter = "grayscale(100%) blur(5px)";
    video.style.transition = "1s"// Suaviza a transição do efeito
});

// quando o mouse sai volta ao normal
//addEventListener: Estamos "ouvindo" o que o usuário faz (clicar ou mover o mouse) para disparar as funções.
document.addEventListener('mouseleave', () =>{
    video.style.filter = "none";
});

/*
O JavaScript (Interatividade)
Aqui damos vida e comportamento aos elementos.

Capturando os Elementos
const video = document.getElementById('myVideo');: Cria uma variável chamada video que armazena a referência ao nosso elemento HTML de vídeo para que possamos dar comandos a ele.

const btn = document.getElementById('speedBtn');: Faz o mesmo para o botão de velocidade.

A Lógica do Botão de Velocidade
btn.addEventListener('click', () => { ... });: Diz ao navegador: "Fique ouvindo o botão. Quando ele for clicado, execute o código dentro das chaves".

if (video.playbackRate === 1.0): Verifica se a velocidade atual é a normal (1.0).

video.playbackRate = 3.0;: Altera a propriedade de velocidade do vídeo para 3 vezes o normal.

btn.innerText = "...": Muda o texto escrito dentro do botão para que o usuário saiba o que acontecerá no próximo clique.

Efeitos de Filtro (Mouse)
document.addEventListener('mouseenter', ...): O evento mouseenter detecta quando o seu mouse entra na área da janela do navegador.

video.style.filter = "grayscale(100%) blur(5px)";: Acessa o CSS do vídeo e aplica dois filtros simultâneos: deixa totalmente cinza (grayscale) e desfocado (blur).

video.style.transition = "1s";: Diz que qualquer mudança de estilo (como o filtro) deve levar 1 segundo para acontecer, criando uma transição suave em vez de um corte seco.

document.addEventListener('mouseleave', ...): Detecta quando o mouse sai da janela.

video.style.filter = "none";: Remove todos os filtros, voltando o vídeo ao estado original colorido e nítido.

*/