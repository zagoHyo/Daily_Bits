import {animatedForm, alerta} from "./animation_form.js"
import {animacion_opciones} from "../interface/animation_question.js"
import {section_seleccion} from "../interface/date_question.js"


const crear = async () => { 
        let nombre = document.getElementById('nombre').value
        let email = document.getElementById('email').value;
        let contraseña = document.getElementById('password').value
        let local = await fetch('http://localhost:4000/usuarios');
        let data = await local.json()
        if(nombre, email, contraseña !== "" && data.find(user => user.correo !== email)){
        let resp = await fetch('http://localhost:4000/usuarios',{
            method: 'POST',
            body: JSON.stringify({
                nombre: nombre,
                correo: email,
                contraseña: contraseña,
                estadistica: [
                    {
                        correctasT: 0,
                        correctasHTML: 0,
                        correctasCSS: 0,
                        correctasJS: 0
                    },
                    {
                        incorrectasT: 0, 
                        incorrectasHTML: 0,
                        incorrectasCSS: 0,
                        incorrectasJS:0
                    }
                ],
                vida: 4,
                respuesta: []
            }), 
            headers: { 
                "Content-Type": "application/json; charset=UTF-8"
            }})

        } 
}

const recopilador = async () => {
    let usuario = JSON.parse(localStorage.getItem('usuario'))
    const {contraseña, correo, estadistica, nombre, vida, id, respuesta} = usuario
    let resp = await fetch(`http://localhost:4000/usuarios/${id}`,{
        method: 'PUT',
        body: JSON.stringify({
            nombre: nombre,
            correo: correo,
            contraseña: contraseña,
            estadistica: [
                {
                    correctasT: estadistica[0].correctasT,
                    correctasHTML: estadistica[0].correctasHTML,
                    correctasCSS: estadistica[0].correctasCSS,
                    correctasJS: estadistica[0].correctasJS
                },
                {
                    incorrectasT: estadistica[0].incorrectasT, 
                    incorrectasHTML: estadistica[0].incorrectasHTML,
                    incorrectasCSS: estadistica[0].incorrectasCSS,
                    incorrectasJS:estadistica[0].incorrectasJS
                }
            ],
            vida: vida,
            respuesta: respuesta,
            id: id
        }), 
        headers: { 
            "Content-Type": "application/json; charset=UTF-8"
        }})
}   


const inicio = async () => {
    let email = document.getElementById('email').value
    let resp = await fetch('http://localhost:4000/usuarios');
    let data = await resp.json()
    if(data.find(user => user.correo === email)){
        let local = data.find(user => user.correo === email)
        localStorage.setItem('usuario', JSON.stringify(local))
    }
}
export {crear, inicio, recopilador}

