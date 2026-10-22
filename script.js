// Date et année : mises à jour automatiquement (page laissée ouverte d'un jour à l'autre)
function updateDate() {
    const now = new Date();
    const date = now.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
    const today = document.getElementById('today');
    const year = document.getElementById('year');

    if (today) today.textContent = date.charAt(0).toUpperCase() + date.slice(1);
    if (year) year.textContent = now.getFullYear();
}

document.addEventListener('DOMContentLoaded', () => {
    updateDate();
    setInterval(updateDate, 60 * 1000);                  // vérifie chaque minute
    window.addEventListener('focus', updateDate);        // au retour sur la fenêtre
    document.addEventListener('visibilitychange', () => {
        if (!document.hidden) updateDate();              // au retour sur l'onglet / sortie de veille
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