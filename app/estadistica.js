let data = JSON.parse(localStorage.getItem('usuario'))
const {estadistica} = data
let correctas = document.getElementById('correctas')
correctas.innerHTML =  estadistica[0].correctasT
let incorrectas = document.getElementById('Incorrectas')
incorrectas.innerHTML =  2

let contestadas = document.getElementById('contestadas')
contestadas.innerHTML = estadistica[0].correctasT