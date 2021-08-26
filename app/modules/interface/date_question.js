function section_seleccion(){
    let section_seleccion_pintar = document.querySelector('.quess')
    section_seleccion_pintar.innerHTML = 
`
<section class="hero section_selected form is-fullheight" id="formulario">
<div class=" is-flex-direction-column is-justify-content-centered">
    <div class="has-text-centered has-text-light m-4 ">
        <h1>Practica tus conocimientos en la categoria que prefieras</h1>
    </div>
    <div id="questions">
        <div id="html"></div>
        <label class="has-text-light">HTML</label>
        <div id="items">
            <div id="questions">
                <div id="css"></div>
                <label class="has-text-light">CSS</label>
            </div>
            <div id="questions">
                <div id="js"></div>
                <label class="has-text-light">JS</label>
            </div>
        </div>
        <div id="items">
            <div id="questions">
                <div id="figma"></div>
                <label class="has-text-light">FIGMA</label>
            </div>
            <div id="questions">
                <div id="ux"></div>
                <label class="has-text-light">UX</label>
            </div>
        </div>
        <nav class="navbar" role="navigation" aria-label="main navigation" style="background: #232E35;  height:69px; position:fixed; bottom:0; width:100vw; padding: 12px 16px 12px 16px">
            <div class="navbar-brand columns has-text-centered ">
                <div class="column items">
                        <img src="./image/navbar/verde/home.png" alt="">
                    </a>
                </div>
                <div class="column items">
                        <img src="./image/navbar/normal/estadistica.png" alt="">
                    </a>
                </div>
                <div class="column items">
                        <img src="./image/navbar/normal/perfil.png" alt="">
                    </a>
                </div>
            </div>
        </nav>
    <div>
</div>
</section>
`
}

export {section_seleccion}