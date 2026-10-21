document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('click', function(e) {
            let ripple = document.createElement('span');
            ripple.classList.add('ripple-effect');
            
            let rect = this.getBoundingClientRect();
            let x = e.clientX - rect.left;
            let y = e.clientY - rect.top;
            
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// Enregistrement du Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then(registration => {
        console.log('[PWA] Service Worker enregistre avec succes :', registration.scope);
        // Force la verification d'une nouvelle version a chaque chargement
        registration.update();
      })
      .catch(err => {
        console.log('[PWA] Erreur d\'enregistrement du Service Worker :', err);
      });
  });

  // Recharge automatiquement la page quand un nouveau Service Worker prend le controle
  let refreshing = false;
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    if (refreshing) return;
    refreshing = true;
    window.location.reload();
  });
}