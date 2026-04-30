const corAtual = "amarelo"

if(corAtual == "verde"){
    console.log("Pode passar");

}else if(corAtual == "amarelo"){
   console.log("diminua a velocidade");

}else if(corAtual == "vermelho"){
    console.log("Pare, não passe");
}

// a mesma estrutura usando o Switch 

switch( corSemaforo){
    case "verde":
        console.log("pode passar ");
        break;
    case "amarelo":
        console.log("diminua a velocidade ");
        break;
    case "vermelho":
        console.log("pare, não passe");
        break;
        default:
            console.log("cor invalida")

}