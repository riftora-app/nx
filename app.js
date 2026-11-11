'use strict';
var ZIEL = 'https://claude.ai/artifact/Fpjc1FcVpmD4bVA8D3zYZu';
var info = document.getElementById('info'), inst = document.getElementById('inst'), merk = null;
if ('serviceWorker' in navigator) { navigator.serviceWorker.register('sw.js').catch(function () {}); }
var alsApp = (window.matchMedia && matchMedia('(display-mode: standalone)').matches) || navigator.standalone === true;
if (alsApp) {
  setTimeout(function () { location.replace(ZIEL); }, 300);
} else {
  info.textContent = 'Erst als App installieren – danach startest du NoxRift über das Symbol.';
}
window.addEventListener('beforeinstallprompt', function (e) { e.preventDefault(); merk = e; inst.hidden = false; });
inst.addEventListener('click', function () {
  if (!merk) { info.textContent = 'Oben rechts ⋮ → „Zum Startbildschirm hinzufügen“ → „Installieren“.'; return; }
  merk.prompt(); merk.userChoice.then(function (r) { info.textContent = r.outcome === 'accepted' ? '✓ Installiert – starte NoxRift jetzt über das neue Symbol.' : 'Abgebrochen.'; merk = null; inst.hidden = true; });
});
window.addEventListener('appinstalled', function () { info.textContent = '✓ Installiert – starte NoxRift jetzt über das neue Symbol.'; inst.hidden = true; });
