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
 form.innerHTML = `
        <section class="hero form is-fullheight" id="animated">
        <div class="hero-body is-flex-direction-column">
                <img src="./image/logo/Color=Purple, Container=Yes.png" alt="" width="80px" height="80px" class="m-5">
                <h1 class="is-size-1 title has-text-light">Iniciar sesión</h1>
            <button class="button is-danger"><img src="./image/logo_invitado.png" class="m-2" alt=""> Continuar como invitado</button>
            <article class="media my-3"></article><article class="media"></article>
            <div>
                <div>
                <label class="m-3 py-1 has-text-left has-text-light">Correo Electrónico</label>
                <input class="input" id="email" type="email" placeholder="Correo">
                <label class="m-3 py-1 has-text-left has-text-light">Contraseña</label>
                <input class="input" id="password" type="password" placeholder="Contraseña">
                </div>
                </div>
                <div class="is-justify-content-center" id="go">
                <button class="button is-success m-3" id="iniciar">Iniciar</button>
                </div>
            <label for="" class="my-3"><a href="" style="color:green">¿Se te olvidó tu contraseña?</a></label>
            <label for="" class="has-text-light">¿Aún no tienes una cuenta? <a href="" style="color:green">Registrate</a></label>
        </div>
        </section>
     `
}
export {pintar_Intro, section_intro}