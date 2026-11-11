'use strict';
var ZIEL = 'https://claude.ai/artifact/Fpjc1FcVpmD4bVA8D3zYZu';
if ('serviceWorker' in navigator) { navigator.serviceWorker.register('sw.js').catch(function () {}); }
setTimeout(function () { location.replace(ZIEL); }, 500);
setTimeout(function () { var i = document.getElementById('info'); if (i) i.textContent = 'Falls nichts passiert: unten tippen.'; }, 2500);
