// Posiciona a nav logo abaixo do header e ajusta o padding do body
(function () {
  function ajustarTopo() {
    var header = document.querySelector("header");
    var nav = document.querySelector("nav");
    if (!header || !nav) return;

    var alturaHeader = header.offsetHeight;
    nav.style.top = alturaHeader + "px";

    var alturaNav = nav.offsetHeight;
    document.body.style.paddingTop = (alturaHeader + alturaNav) + "px";
  }

  // Roda ao carregar e ao redimensionar a janela
  window.addEventListener("load", ajustarTopo);
  window.addEventListener("resize", ajustarTopo);
})();
