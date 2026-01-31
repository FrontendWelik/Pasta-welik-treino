
let contador = 0;
const valor = document.querySelector('#valor');
const aumentar = document.querySelector('#btn-aumentar');
const diminuir = document.querySelector('#btn-diminuir');



function atualizarCor(){
    if(contador > 0){
        valor.style.color = "green";

    }else if(contador < 0){
        valor.style.color = "red";

    } else{
        valor.style.color = "black";
    }
}

aumentar.addEventListener('click', function(){
      contador = contador + 1;
      valor.innerText = contador;
      atualizarCor()
});

diminuir.addEventListener('click', function(){
      contador = contador - 1;
      valor.innerText = contador;
      atualizarCor()
});