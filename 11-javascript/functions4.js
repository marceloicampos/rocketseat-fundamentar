console.log('---início do código---')

// function hosting - a função é elevada

sayMyName()

function sayMyName() {
    console.log('marcelo1');
}

var sayMyName2 = function () {
    // erro de referência não há elevação da função,
    // a chamada tem que ser posterior
    console.log('marcelo2');
}

sayMyName2()

console.log('---fim do código---')
