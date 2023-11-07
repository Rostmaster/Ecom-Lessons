const sections = document.querySelectorAll('.section');
const playground = document.querySelector('.playground');

const observer = new IntersectionObserver(entries =>{
    entries.forEach(entry =>{
       if(entry.isIntersecting){
        if(entry.target.classList.contains('section-2')){
            playground.classList.add('playground-1');
        }

        if(entry.target.classList.contains('section-3')){
            playground.classList.add('playground-2');
        }

        if(entry.target.classList.contains('section-4')){
            playground.classList.add('playground-3');
        }
       }
    })
});


// Better scrolling behavior
// https://github.com/studio-freight/lenis
sections.forEach(section =>{
    observer.observe(section);
})
const lenis = new Lenis()
lenis.on('scroll', (e) => {
  console.log(e)
})
function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)