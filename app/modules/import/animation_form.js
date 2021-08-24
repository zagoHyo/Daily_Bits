let intro = gsap.to(".intro", {
    duration: 2.5, 
    x: 2000, 
    delay: 1.5
  });
function animatedForm(){
  let form = gsap.to(".form", {
    duration: 2, 
    y: 2000, 
    delay: 1
});
}
export {intro, animatedForm}