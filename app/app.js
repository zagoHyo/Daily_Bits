import {pintar_Intro, section_intro, section_registro} from "./modules/import/date_form.js"
import {intro, animatedForm, alerta} from "./modules/import/animation_form.js"
import { crear,inicio } from "./modules/import/apiFake_form.js"
import {animacion_opciones} from "./modules/interface/animation_question.js"
import {section_seleccion, questions_area1} from "./modules/interface/date_question.js"

document.addEventListener('DOMContentLoaded', () => {
    pintar_Intro()
    if(localStorage.getItem('usuario')){
        section_seleccion()
        animacion_opciones()
        cargar()
    }else{
        section_intro()
        document.getElementById('iniciar').addEventListener('click', () => {
            inicio()    
            animatedForm()
            setTimeout(function(){section_seleccion()}, 1080)
            setTimeout(function(){animacion_opciones()}, 1080)   
            setTimeout(function(){cargar()}, 1080)    
        })
        let registrate = document.getElementById('registrate')
        registrate.addEventListener('click', () => {
            section_registro()
            let registro_user = document.getElementById('registro_user')
            registro_user.addEventListener('click', () => {
                crear()
            })
            
        })
        document.getElementById('invitado').addEventListener('click', () => {
            animatedForm()
            setTimeout(function(){section_seleccion()}, 1080)
            setTimeout(function(){animacion_opciones()}, 1080)   
            setTimeout(function(){cargar()}, 1080)    
        })
    }
})

function cargar(){
    let pregunta1 = document.getElementById('pregunta1')
    pregunta1.addEventListener('click', () => {
        questions_area1()
        decidirEncuesta(1)
    })
    let pregunta2 = document.getElementById('pregunta2')
    pregunta2.addEventListener('click', () => {
        questions_area1()
        decidirEncuesta(2)
    })
    let pregunta3 = document.getElementById('pregunta3')
    pregunta3.addEventListener('click', () => {
        questions_area1()
        decidirEncuesta(3)
    })
}

async function decidirEncuesta(desicion){
    let rest = await fetch('http://localhost:4001/encuestas')
    let data = await rest.json()
    if(desicion == 1){
        mandarPregunta(data.HTML)
    }
    else if(desicion == 2){
        mandarPregunta(data.CSS)        
    }
    else if(desicion == 3){
        mandarPregunta(data.JS)        
    }
}

function mandarPregunta(data){
    let n_p = 1
    // Math.random() * (4-1) + 1
    let corazon = 3
    const {imagen, estructura, respuestaUnica} = data

    let navbar_top = document.getElementById('navbar_top')
    navbar_top.innerHTML = `
    <div class="column is-1 m-3">
        <a href="">
            <img src="./image/estructura_questions/Union.png" height="50px" width="50px" alt="">
        </a>
    </div>
    <div class="column m-2">
        <progress class="progress is-success is-small" value="60" max="100"></progress>
    </div>
    <div class="column is-2 m-2 has-text-light"><img src="./image/estructura_questions/Corazon.png" alt="" height="20px" width="20px">${corazon}</div>
    `
    if(n_p == 1){
        respuestaUnicaFiltro(respuestaUnica)
    }
    else if(n_p == 2){
        imagenFiltro(imagen)
    }
    else if(n_p==3){
        estructuraFiltro(estructura)
    }
}

function respuestaUnicaFiltro(dates){
    let n = Math.floor(Math.random() * (4-0) + 0)
    let pintarEnunciado = document.getElementById('pintarEnunciado')
    pintarEnunciado.innerHTML = `
    <div class="column is-3 m-2"><img src="./image/childrens/Property 1=1.png" alt="" height="100px" width="100px"></div>
    <div class="column">
        <h1 class="hero-body has-text-light is-size-8">${dates[n].titulo}</h1>
    </div>
    `
    let pintarRespuesta = document.getElementById('pintarRespuesta')
    pintarRespuesta.innerHTML = `
    <div class="columns m-3"><button class="button is-medium is-fullwidth"><p>${dates[n].opciones.r1}</p></button></div>
    <div class="columns m-3"><button class="button is-medium is-fullwidth"><p>${dates[n].opciones.r2}</p></button></div>
    <div class="columns m-3"><button class="button is-medium is-fullwidth"><p>${dates[n].opciones.r3}</p></button></div>
    <div class="columns m-3"><button class="button is-medium is-fullwidth"><p>${dates[n].opciones.r4}</p></button></div>
    `
    pintarRespuesta.addEventListener('click', e => {
        let btn_disable = document.getElementById('btn_disable')
        btn_disable.innerHTML = `
        <button class="button nav" title="button" id="comprobar">Comprobar</button>    
        `
        capturarDatosRespuesta(e, dates, n)
    })
}

const capturarDatosRespuesta = (e, dates , n) => {
    if(e.target.classList.contains('is-medium')){
        evaluarRespuesta(e.target.parentElement, dates, n)
    }
}
const evaluarRespuesta = (object,dates, n) => {
    let box = {
        respuesta: object.querySelector('p').textContent
    }
    console.log(object)
    let comprobar = document.getElementById('comprobar')
    comprobar.addEventListener('click', () => {
        console.log(dates)
        if(dates[n].respuesta == box.respuesta){
            let btn_disable = document.getElementById('btn_disable')
            btn_disable.innerHTML = `
            <div class="container has-background-success-light" style="width:100vw; position:fixed; bottom:0; display: flex; flex-direction: column;height:20vh;">
                <h3 class="subtitle" style="text-align: center; margin-top:10px">¡Buen Trabajo!</h3>
                <button class="button is-success" style="justify-content: center; height: 50px; margin: 0px 30px;" id="continuar">Continuar</button>
            </div>
            `
            let continuar = document.getElementById('continuar')
            continuar.addEventListener('click', () => {
                respuestaUnicaFiltro(dates)
                btn_disable.innerHTML = `<button class="button nav" title="button" disabled>Disabled</button>`
            })
        }
        else{
            let btn_disable = document.getElementById('btn_disable')
            btn_disable.innerHTML = `
            <div class="container has-background-danger-light" style="width:100vw; position:fixed; bottom:0; display: flex; flex-direction: column;height:20vh;">
                <h3 style="text-align: center; margin-top:10px">La respuesta correcta es:<br> ${box.respuesta}</h3>
                <button class="button is-danger" style="justify-content: center; height: 50px; margin: 0px 25px; width:85vw !important;" id="continuar">Continuar</button>
            </div>
            `
            let continuar = document.getElementById('continuar')
            continuar.addEventListener('click', () => {
                respuestaUnicaFiltro(dates)
                btn_disable.innerHTML = `<button class="button nav" title="button" disabled>Disabled</button>`
            })
        }
    })
}