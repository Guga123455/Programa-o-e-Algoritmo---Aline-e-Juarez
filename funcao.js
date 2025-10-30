//Atividade 2

function podeVotar(idade){
    if(idade>=18){
        console.log("Você pode votar.");            //função
    } else{
        console.log("Você não pode votar.");
    }
}

podeVotar(40); //Chamando função

//Atividade 3

function calcularMedia(nota1, nota2, nota3) {
    let media = (nota1 + nota2 + nota3)/3;

    if(media>=6){
        console.log("Aprovado");
    } else{
        console.log("Reprovado");
    }
}

calcularMedia(10, 10, 10);
