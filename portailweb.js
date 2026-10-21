document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Effet d'onde au clic
            let ripple = document.createElement('span');
            ripple.classList.add('ripple-effect');
            
            // Positionnement du clic
            let rect = this.getBoundingClientRect();
            let x = e.clientX - rect.left;
            let y = e.clientY - rect.top;
            
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            
            this.appendChild(ripple);
            
            // Nettoyage après l'animation
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});