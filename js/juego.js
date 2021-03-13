const distribucion = 6;
var ngramas = {};



function markovv() {
    for (i = 0; i <= txt.length - distribucion; i++) {
        var ngrama = txt.substring(i, i + distribucion);

        if (!ngramas[ngrama]) {
            ngramas[ngrama] = [];
        }
        ngramas[ngrama].push(txt.charAt(i + distribucion));
    }

    console.log(ngramas);
}



function markov() {
    var posibilidadesArray;
    var posiSigLetra;
    var letraSiguiente;

    var ngramaActual = txt.substring(0, distribucion);
    var resultado = ngramaActual;

    for (var i = 0; i < 45; i++) {
        posibilidadesArray = ngramas[ngramaActual];
        posSigLetra = Math.floor(Math.random() * posibilidadesArray.length);
        letraSiguiente = posibilidadesArray[posSigLetra];

        resultado += letraSiguiente;

        var inicioPos = resultado.length - distribucion;
        var finPos = resultado.length;
        ngramaActual = resultado.substring(inicioPos, finPos);

    }

    console.log(resultado);

}