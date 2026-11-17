// Seletor de idioma PT/EN. Guarda a escolha no browser; por omissão segue o idioma do browser.
(function () {
  var guardar = function (l) { try { localStorage.setItem("idioma", l); } catch (e) {} };
  var ler = function () { try { return localStorage.getItem("idioma"); } catch (e) { return null; } };
  var url = new URLSearchParams(location.search).get("lang");
  var inicial = url || ler() || ((navigator.language || "pt").toLowerCase().indexOf("pt") === 0 ? "pt" : "en");

  function aplicar(l) {
    var en = l === "en";
    document.documentElement.lang = en ? "en" : "pt-PT";
    var t = document.documentElement.getAttribute(en ? "data-titulo-en" : "data-titulo-pt");
    if (t) document.title = t;
    document.querySelectorAll(".idioma button").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.dataset.idioma === (en ? "en" : "pt")));
    });
  }

  aplicar(inicial);
  document.addEventListener("DOMContentLoaded", function () {
    aplicar(document.documentElement.lang === "en" ? "en" : "pt");
    document.querySelectorAll(".idioma button").forEach(function (b) {
      b.addEventListener("click", function () { guardar(b.dataset.idioma); aplicar(b.dataset.idioma); });
    });
  });
})();
