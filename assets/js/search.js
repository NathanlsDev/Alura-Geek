let campoPesquisa = document.querySelector("#pesquisar");

let barraDeBusca = document.querySelector(".cabecalho__containerPesquisa");
let logo = document.querySelector(".cabecalho__logo");
let link = document.querySelector(".cabecalho__link--login");
let lupa = document.querySelector(".img1");

campoPesquisa.addEventListener("click", function(){
  barraDeBusca.classList.toggle('mostrarBarra');
  logo.classList.toggle('esconder');
  link.classList.toggle('esconder');
  lupa.classList.toggle('esconder');
    
});
