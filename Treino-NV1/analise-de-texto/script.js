const areaTexto = document.getElementById('texto');
const contadorChar = document.getElementById('char-count');
const contadorPalavras = document.getElementById('word-count');

areaTexto.addEventListener('input', () =>{
     const texto = areaTexto.value;

     contadorChar.textContent = texto.length;

     const palavras = texto.trim().split(/\s+/);

     if(texto.trim() === ""){
        contadorPalavras.textContent = 0;

     }else {
        contadorPalavras.textContent = palavras.length
     }
});