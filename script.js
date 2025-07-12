import { mostrarDescontos } from './js/calculoEncargos.js';
import { mostrarFerias } from './js/calculoFerias.js';
import { mostrarAjuda } from './js/ajuda.js';
import { mostrarSindicatosFortaleza } from './js/sindicatos.js';


  const botaocetidoes = document.getElementById("botao-certidoes");
  const listacertidoes = document.getElementById("lista-certidoes");

  const botaogoverno = document.getElementById("botao-governo");
  const listagoverno = document.getElementById("lista-governamentais");

  const botaoCalculos = document.getElementById("calculos");
  const listacalculos = document.getElementById("lista-calculos");

  const botaoSindicatos = document.getElementById("sindicatos");
  const listaSindicatos = document.getElementById("lista-sindicatos");

 botaocetidoes.addEventListener("click", () => {
    listacertidoes.classList.toggle("escondido");
  });

  botaogoverno.addEventListener("click", () => {
    listagoverno.classList.toggle("escondido");
  });

  botaoCalculos.addEventListener("click", () => {
    listacalculos.classList.toggle("escondido");
  });



  botaoSindicatos.addEventListener("click", () => {
    listaSindicatos.classList.toggle("escondido");
  });




document.getElementById("link-descontos").addEventListener("click", (e) => {
  e.preventDefault();
  mostrarDescontos();
});

document.getElementById("link-beneficios").addEventListener("click", (e) => {
  e.preventDefault();
  mostrarFerias();
});

document.getElementById("link-ajuda").addEventListener("click", function(e) {
  e.preventDefault();
  mostrarAjuda();
});

document.getElementById("sindicatoCeara").addEventListener("click", function (e) {
  e.preventDefault();
  mostrarSindicatosFortaleza();
});

import { mostrarAdicionais } from './js/calculoAdicionais.js';

document.getElementById("link-adicionais").addEventListener("click", function (e) {
  e.preventDefault();
  mostrarAdicionais();
});

import { mostrarSumarioLegislacao } from './js/legislacao.js';

document.getElementById("link-legislacao").addEventListener("click", (e) => {
  e.preventDefault();
  mostrarSumarioLegislacao();
});
