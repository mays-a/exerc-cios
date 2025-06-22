function med(){
    const numero=parseFloat(document.getElementById("a").value);
    const numero1=parseFloat(document.getElementById("b").value);
    const numero2=parseFloat(document.getElementById("c").value);
    const media=((numero+numero1+numero2)/3);
    if(media<6){
        alert(`Você foi Reprovado, sua média foi ${media} :(`);
    }else{
        alert(`Parabéns, você foi Aprovado, sua média foi ${media}!`);
    }
}