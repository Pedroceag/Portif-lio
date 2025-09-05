function contar() {
    let mostraHTML = document.getElementById("mostraHTML");

    let parouimpar;
    let contador = 1;

    parouimpar = contador % 2;


    while (contador <= 10) {
        mostraHTML.innerHTML += `${contador} \u{1f600} `;
        contador++;
    }

    if(parouimpar == 0) {
        ("O numero " + resultado + "e par");
    }
 
 
}