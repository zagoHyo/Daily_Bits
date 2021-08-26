import {pintar_Intro, section_intro, section_registro} from "./modules/import/date_form.js"
import {intro, animatedForm} from "./modules/import/animation_form.js"
import { crear } from "./modules/import/apiFake_form.js"
import {animacion_opciones} from "./modules/interface/animation_question.js"
import {section_seleccion} from "./modules/interface/date_question.js"


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

document.getElementById('invitado').addEventListener('click', () => {
    animatedForm()
    setTimeout(function(){section_seleccion()}, 1080)
    setTimeout(function(){animacion_opciones()}, 1080)
    
})

let registrate = document.getElementById('registrate')
registrate.addEventListener('click', () => {
    section_registro()
    // let cancelar = document.getElementById('cancelar')
    // cancelar.addEventListener('click', () => {
    //     section_intro()
    // })
    let registro_user = document.getElementById('registro_user')
    registro_user.addEventListener('click', () => {
        crear()
    })
})