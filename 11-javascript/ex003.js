/* ### Celsius em Fahrenheit e vice e versa
Crie uma função que receba uma string em celsius ou fahrenheit
e faça a transformação de uma unidade para outra 
    C = (F - 32) * 5/9 
    F = C * 9/5 + 32
*/

function converte() {
    let ct = document.getElementById('celsius').value
    let ft = document.getElementById('fahrenheit').value
    let resultadoC = document.getElementById('resultadoC')
    let resultadoF = document.getElementById('resultadoF')
    let c = ((ft - 32) * 5) / 9
    let f = (ct * 9) / 5 + 32
    resultadoC.innerHTML = `O ${ft}º Fahrenheit é ${c.toFixed(1)}° Celsius`
    resultadoF.innerHTML = `O ${ct}º Celsius é ${f.toFixed(1)}° Fahrenheit`
}

const button = document.getElementById('button')

button.addEventListener('click', converte)
