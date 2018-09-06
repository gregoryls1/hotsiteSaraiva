
const target = document.querySelectorAll('[data-anime]');
const animate = "zoomIn";

function animeScroll() {
    
    const breakPoint = (window.innerHeight * 3) / 4
    const windowTop = window.pageYOffset + breakPoint;
    
            
    target.forEach(function(element){
        if((windowTop) > element.offsetTop){
            element.classList.add(animate);
        }
    })
}

window.addEventListener('scroll', function() {
    animeScroll();
})