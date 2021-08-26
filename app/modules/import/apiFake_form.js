import {animatedForm, alerta} from "./animation_form.js"
import {animacion_opciones} from "../interface/animation_question.js"
import {section_seleccion} from "../interface/date_question.js"


const crear = async () => { 
        let nombre = document.getElementById('nombre').value
        let email = document.getElementById('email').value;
        let contraseña = document.getElementById('password').value
        let local = await fetch('http://localhost:4000/usuarios');
        let data = await local.json()
        if(nombre, email, contraseña !== "" && data.find(user => user.correo === email)){
        let resp = await fetch('http://localhost:4000/usuarios',{
            method: 'POST',
            body: JSON.stringify({
                nombre: nombre,
                correo: email,
                contraseña: contraseña
            }), 
            headers: { 
                "Content-Type": "application/json; charset=UTF-8"
            }})
        } else {
        }
}

const inicio = async () => {
    let email = document.getElementById('email').value
    let resp = await fetch('http://localhost:4000/usuarios');
    let data = await resp.json()
    if(data.find(user => user.correo === email)){
        animatedForm()
        setTimeout(function(){section_seleccion()}, 1080)
        setTimeout(function(){animacion_opciones()}, 1080)
    }
}
export {crear, inicio}

