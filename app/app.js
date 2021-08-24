import {pintar_Intro, section_intro} from "./modules/import/date_form.js"
import {tween} from "./modules/import/animation_form.js"
document.addEventListener('DOMContentLoaded', () => {
    pintar_Intro()
})
section_intro()
document.getElementById('iniciar').addEventListener('click', () => {
    cargarDatos()
})

function cargarDatos(){
    let email = document.querySelector('#email').value
    let contraseña = document.querySelector('#password').value
    console.log(email)
    console.log(contraseña)

}
