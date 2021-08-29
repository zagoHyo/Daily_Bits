function section_seleccion(){
    let optiones = document.querySelector('#opciones')
    optiones.innerHTML = ''
    let section_seleccion_pintar = document.querySelector('.quess')
    section_seleccion_pintar.innerHTML = 
`
<section class="hero section_selected form is-fullheight" id="formulario">
<div class=" is-flex-direction-column is-justify-content-centered"  style="background-color:black;">
    <div class="has-text-centered has-text-light m-4 ">
        <h1>Practica tus conocimientos en la categoria que prefieras</h1>
    </div>
    <div id="questions">
        <a id="pregunta1">
        <div id="html"></div>
        </a>
        <label class="has-text-light">HTML</label>
        <div id="items">
            <div id="questions">
                <a id="pregunta2">
                    <div id="css"></div>
                </a>
                <label class="has-text-light">CSS</label>
            </div>
            <div id="questions">
                <a id="pregunta3">
                    <div id="js"></div>
                </a>
                <label class="has-text-light">JS</label>
            </div>
        </div>
        <div id="items">
            <div id="questions">
                <a id="pregunta"> 
                    <div id="figma"></div>
                </a>
                <label class="has-text-light">FIGMA</label>
            </div>
            <div id="questions">
                <a id="pregunta">
                  <div id="ux"></div>
                </a>
                <label class="has-text-light">UX</label>
            </div>
        </div>
        <nav class="navbar" role="navigation" aria-label="main navigation" style="background: #232E35;  height:69px; position:fixed; bottom:0; width:100vw; padding: 12px 16px 12px 16px">
            <div class="navbar-brand columns has-text-centered ">
                <div class="column items">
                    <a id="home_nav"><img src="./image/navbar/verde/home.png" alt=""></a>
                </div>
                <div class="column items"  href="./estadisticas.html">
                    <a id="estadistica_nav"><img src="./image/navbar/normal/estadistica.png" alt=""></a>
                </div>
                <div class="column items">
                    <a id="opciones_nav"><img src="./image/navbar/normal/perfil.png" alt=""></a>
                </div>
            </div>
        </nav>
    <div>
</div>
</section>
`
}

function questions_area1(){
    let section_seleccion_pintar = document.querySelector('.quess')
    section_seleccion_pintar.innerHTML = ''
    let questions_area_pintar = document.querySelector('#preguntas')
    questions_area_pintar.innerHTML = `
    <div class="columns is-mobile" style="height:5vh" id="navbar_top"><!-- Barra de navegacion --></div>
    <div class="columns is-mobile m-3" style="height:30vh;" id="pintarEnunciado"><!-- Enunciado --></div>
    <div class="columns hero">
        <div id="pintarRespuesta"><!-- Respuestas posibles --></div>
    </div>
    <div class="columns boton"style="height:15vh" id="btn_disable">
        <button class="button nav" title="button" disabled>Disabled</button>    
    </div>
    `
}

function questions_area2(){
    let section_seleccion_pintar = document.querySelector('.quess')
    section_seleccion_pintar.innerHTML = ''
    let questions_area_pintar = document.querySelector('#preguntas')
    questions_area_pintar.innerHTML = `
        <div class="columns is-mobile" style="height:5vh" id="navbar_top"><!-- Barra de navegacion --></div>
        <div class="columns is-mobile m-3 is-justify-content-center" style="height:20vh" id="pintarEnunciado">
        <!-- Enunciado --></div>
        <div id="pintarRespuesta" class="is-justify-content-center "><!-- Respuestas posibles --></div>
        <div class="columns boton"style="height:15vh; width:105vw; position: absolute; bottom:4%;" id="btn_disable">
            <button class="button nav" title="button" disabled>Disabled</button>    
        </div>
    `
}

export {section_seleccion, questions_area1, questions_area2}