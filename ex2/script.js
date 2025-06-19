function tabuada(){
    let num=parseInt(document.getElementById("numero").value);
    let resultadoDiv=document.getElementById("resultado");
    let tabuada = "";
    for (let i  =1; i<=10; i++){
        tabuada += `${num} x ${i} = ${num*i}<br>`;
    }
    resultadoDiv.innerHTML = tabuada;
}