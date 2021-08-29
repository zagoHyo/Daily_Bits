function section_option() {
    let section_seleccion_pintar = document.querySelector('.quess')
    section_seleccion_pintar.innerHTML = ''
    let optiones = document.querySelector('#opciones')
    optiones.innerHTML = ''
    optiones.innerHTML = `
    <section class="hero has-background-black is-fullheight">
        <div class="m-5 is-flex is-justify-content-center">
            <div class="">
            <figure class="image">
                <img class="is-rounded is-align-items-center" style="max-height:250px; max-width:250px" src="./image/peregil.jpg">
            </figure>
            <p class="title has-text-light has-text-centered m-5">
                Nombre
            </p>
            <p class="subtitle has-text-light has-text-centered m-5">
                <a>Editar perfil</a>
            </p>
            <p class="subtitle has-text-light has-text-centered">
                <a >Borrar perfil</a>
            </p>
            <p class="subtitle has-text-centered p-5">
                <a class="has-text-danger" id="cerrarSeccion">Cerrar Sección</a>
            </p>
            </div>
        </div>
        <nav class="navbar" role="navigation" aria-label="main navigation" style="background: #232E35;  height:69px; position:fixed; bottom:0; width:100vw; padding: 12px 16px 12px 16px">
            <div class="navbar-brand columns has-text-centered ">
                <div class="column items">
                    <a id="home_nav"><img src="./image/navbar/normal/home.png" alt=""></a>
                </div>
                <div class="column items" href="estadistica.html">
                    <a id="estadistica_nav"><img src="./image/navbar/normal/estadistica.png" alt=""></a>
                </div>
                <div class="column items">
                    <a id="opciones_nav"><img src="./image/navbar/verde/perfil.png" alt=""></a>
                </div>
            </div>
        </nav>
    </section>
    `
}

export {section_option}