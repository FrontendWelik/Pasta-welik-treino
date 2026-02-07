// 1. Selecionamos os elementos que vamos manipular
const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const messageText = document.getElementById('message');

// 2. Ouvimos o evento de "submit" (enviar) do formulário
loginForm.addEventListener('submit', function(event){

    // Impede a página de recarregar (comportamento padrão do form)
    event.preventDefault();

    // 3. Pegamos os valores e limpamos espaços extras com trim()
    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();

    // 4. Lógica de Validação
    if(emailValue === '' || passwordValue === ''){
        exibirMensagem("Por favor, preencha todos os campos!", "red");

    }
    else if(!validarEmail(emailValue)){
        exibirMensagem("Formato de e-mail inválido!", "orange");
    }
    else if (passwordValue.length < 6) {
        exibirMensagem("A senha deve ter pelo menos 6 caracteres!", "orange");
    } 
    else {
        exibirMensagem("Login realizado com sucesso! Redirecionando...", "lightgreen");
        // Aqui você enviaria os dados para o servidor/API
    }
});

// Função auxiliar para validar o formato do e-mail usando RegEx
function validarEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

// Função para mostrar a mensagem na tela com cor dinâmica
function exibirMensagem(texto, cor) {
    messageText.innerText = texto;
    messageText.style.color = cor;
}


