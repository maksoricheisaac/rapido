class Carousel {
    constructor(element, autoStartInterval = 2000) {
        this.carousel = element;
        this.slides = this.carousel.querySelector('.carousel-slides');
        
        this.currentIndex = 0;
        this.totalSlides = this.slides.children.length;
        this.autoStartInterval = autoStartInterval;
        this.autoplayTimer = null;

        // Clone des slides pour l'effet infini
        this.cloneSlides();

        this.startAutoplay();
    }

    cloneSlides() {
        // Cloner le premier et le dernier slide
        const firstSlide = this.slides.children[0].cloneNode(true);
        const lastSlide = this.slides.children[this.totalSlides - 1].cloneNode(true);
        
        // Ajouter les clones
        this.slides.appendChild(firstSlide);
        this.slides.insertBefore(lastSlide, this.slides.firstChild);

        // Mettre à jour le nombre total de slides
        this.totalSlides += 2;
        
        // Ajuster la position initiale
        this.slides.style.transform = `translateX(-100%)`;
        this.currentIndex = 1;
    }

    nextSlide() {
        this.currentIndex++;
        this.updateCarousel();

        // Vérifier si on a atteint le dernier clone
        if (this.currentIndex === this.totalSlides - 1) {
            setTimeout(() => {
                this.slides.style.transition = 'none';
                this.currentIndex = 1;
                this.updateCarousel();
                
                // Réactiver la transition
                setTimeout(() => {
                    this.slides.style.transition = 'transform 0.5s ease';
                }, 2000);
            }, 500);
        }
    }

    updateCarousel() {
        const offset = -this.currentIndex * 100;
        this.slides.style.transform = `translateX(${offset}%)`;
    }

    startAutoplay() {
        // Arrête le timer précédent s'il existe
        this.stopAutoplay();

        // Démarre le nouveau timer
        this.autoplayTimer = setInterval(() => {
            this.nextSlide();
        }, this.autoStartInterval);
    }

    stopAutoplay() {
        if (this.autoplayTimer) {
            clearInterval(this.autoplayTimer);
            this.autoplayTimer = null;
        }
    }
}

// Initialisation du carrousel
document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    new Carousel(carousel);
});


const menu = document.getElementById('menu')
const login = document.getElementById('login')
const watch = document.getElementById('watch')
const started = document.getElementById('started')

menu.addEventListener('click', (e) => {
    alert("Pas disponible !")
})

login.addEventListener('click', (e) => {
    alert("Pas disponible !")
})

watch.addEventListener('click', (e) => {
    alert("Pas disponible !")
})

started.addEventListener('click', (e) => {
    alert("Pas disponible !")
})