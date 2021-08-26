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
        <div class="hero-foot">
            <nav class="tabs is-boxed is-fullwidth">
                <div class="container">
                <ul>
                    <li class="is-active"><a>
                        <img src="./image/icono_footer/homeBlack.png" alt="">
                        <label for="">Home</label>
                    </a></li>
                    <li><a>Modifiers</a></li>
                    <li><a>Grid</a></li>
                </ul>
                </div>
            </nav>
        </div>
    <div>
</div>
</section>
`
}

export {section_seleccion}