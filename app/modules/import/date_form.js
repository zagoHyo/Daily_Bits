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
 <div class="hero-body is-justify-content-center is-flex-direction-column">
     <img src="./image/logo/Color=Purple, Container=Yes.png" alt="" width="80px" height="80px">
     <h1 class="is-size-1 title has-text-light">Iniciar sesión</h1>
     <div id="elimiti">
         <button class="danger">Continuar como invitado</button>
     </div>
     <article class="media my-3"></article><article class="media"></article>
     <label for="" class="my-1">Correo Electronico</label>
     <input class="input_inicio" type="text" placeholder="Text input">
     <label for="" class="my-3"><a href="" style="color:green">¿Se te olvidó tu contraseña?</a></label>
     <label for="">¿Aún no tienes una cuenta? <a href="" style="color:green">Inscribirse</a></label>
     </div>
</section>
 `
}

export {pintar_Intro, section_intro}