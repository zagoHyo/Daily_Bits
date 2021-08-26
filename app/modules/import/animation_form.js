let intro = gsap.to(".intro", {
    duration: 2.5, 
    x: 2000, 
    delay: 1.5
  });
function animatedForm(){
  let form = gsap.to(".form", {
    duration: 2, 
    y: 2000, 
    delay: 1,
});
}
function alerta(){
  form.innerHTML = `
  <section class="hero is-danger is-fullheight">
  <div class="hero-body">
    <div class="">
      <p class="title">
        Fullheight hero
      </p>
      <p class="subtitle">
        Fullheight subtitle
      </p>
    </div>
  </div>
  </section>
  `
}

export {intro, animatedForm, alerta}