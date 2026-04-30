let nota1 = 6;
let nota2 = 10;
let mediaNota = (nota1 + nota2) / 2;

if(mediaNota >= 7 && mediaNota <= 10){
    console.log(`sua nota foi: ${mediaNota},voce foi aprovado!!`);

}else if(mediaNota >= 5 && mediaNota <= 6.9){
    console.log(`sua nota foi ${mediaNota},voce esta de recuperação`);
}else if(mediaNota < 5){
    console.log(`sua nota foi: ${mediaNota},voce foi reprovado`);

}else{
    console.log("voce nao tem nota");
}

