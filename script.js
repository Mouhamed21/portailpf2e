// Date et année
document.addEventListener('DOMContentLoaded', () => {
    const now = new Date();
    const date = now.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });

    document.getElementById('today').textContent = date.charAt(0).toUpperCase() + date.slice(1);
    document.getElementById('year').textContent = now.getFullYear();
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