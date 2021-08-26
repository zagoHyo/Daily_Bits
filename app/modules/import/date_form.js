function pintar_Intro(){
    let intro = document.querySelector('.intro')
    let section_intro = `
    <section class="hero intro is-fullheight" id="animated">
        <div class="hero-body is-justify-content-center">
            <img src="./image/logo/Color=Purple, Container=Yes.png" alt="">
        </div>
    </section>
    `
    intro.innerHTML = section_intro
}

// =========================================================
function section_intro(){
 let form = document.querySelector('.form')
 form.innerHTML = ''
 form.innerHTML = `
        <section class="hero form is-fullheight" id="formulario">
            <div class="hero-body is-flex-direction-column">
                    <img src="./image/logo/Color=Purple, Container=Yes.png" alt="" width="80px" height="80px" class="m-5">
                    <h1 class="is-size-1 title has-text-light">Iniciar sesión</h1>
                <button class="button is-danger" id="invitado"><img src="./image/google.png" class="m-2" alt=""> Continuar con Google</button>
                <article class="media my-3"></article><article class="media"></article>
                <div>
                    <div>
                    <div>
                    <label class="m-3 py-1 has-text-left has-text-light">Correo Electrónico</label>
                    </div>
                    <input class="input" id="email" type="email" placeholder="Correo">
                    </div>
                    </div>
                    <div class="is-justify-content-center" id="go">
                    <button class="button is-success m-2" id="iniciar">Iniciar</button>
                    </div>
                <label for="" class="my-1"><a href="" style="color:green">¿Se te olvidó tu contraseña?</a></label>
                <label for="" class="has-text-light">¿Aún no tienes una cuenta? <a style="color:green" id="registrate">Registrate</a></label>
            </div>
        </section>
     `
}

function section_registro(){
    let form = document.querySelector('.form')
    form.innerHTML = ''
    form.innerHTML = `
    <section class="hero form is-fullheight" id="formulario">
    <div class="hero-body is-flex-direction-column is-justify-content-center">
        <img src="./image/logo/Color=Purple, Container=Yes.png" alt="" width="80px" height="80px" class="m-5">
        <div class="field">
            <label class="label">Nombre</label>
            <div class="control">
            <input class="input" type="text" placeholder="Nombre" id="nombre">
            </div>
        </div>

        <div class="field">
            <label class="label">Correo Electronico</label>
            <div class="control">
                <input class="input" type="email" id="email" placeholder="Correo">
              
            </div>
        </div>

        <div class="field">
            <label class="label">Contraseña</label>
            <div class="control">
                <input class="input" type="password" id="password" placeholder="Contraseña">
            </div>
        </div>
        
        <div class="field is-grouped m-3">
            <div class="control">
            <button type="button" class="button is-success" id="registro_user">Crear usuario</button>
            </div>
            <div class="control">
            <button class="button is-link is-light" id="cancelar"><a href="">Cancelar</a></button>
            </div>
        </div></div>
    </section>
    `
}

export {pintar_Intro, section_intro, section_registro}