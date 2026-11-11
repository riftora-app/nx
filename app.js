'use strict';
var ZIEL = 'https://claude.ai/artifact/Fpjc1FcVpmD4bVA8D3zYZu';
if ('serviceWorker' in navigator) { navigator.serviceWorker.register('sw.js').catch(function () {}); }
var app = (window.matchMedia && matchMedia('(display-mode: standalone)').matches) || navigator.standalone === true || /quelle=app/.test(location.search);
var info = document.getElementById('info'), inst = document.getElementById('inst'), hilfe = document.getElementById('hilfe');
if (app) {
  /* Als App gestartet: direkt in die private NoxRift */
  setTimeout(function () { location.replace(ZIEL); }, 300);
} else {
  /* Im Browser: NICHT weiterleiten, damit hier die App installiert wird (sonst installiert Chrome die Claude-Seite) */
  info.textContent = 'Erst installieren, dann hast du NoxRift als eigene App.';
  hilfe.hidden = false;
  var wartend = null;
  window.addEventListener('beforeinstallprompt', function (e) { e.preventDefault(); wartend = e; inst.hidden = false; });
  inst.addEventListener('click', function () { if (!wartend) return; wartend.prompt(); wartend.userChoice.then(function (r) { if (r.outcome === 'accepted') { info.textContent = '✅ Installiert – NoxRift jetzt über das Symbol öffnen.'; inst.hidden = true; } wartend = null; }); });
  window.addEventListener('appinstalled', function () { info.textContent = '✅ Installiert – NoxRift jetzt über das Symbol öffnen.'; inst.hidden = true; });
}
