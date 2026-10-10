import {
    recuperarDadosCadastro
} from "./armazenamento.js";

import {
    renderizarProjetos,
    renderizarInicio,
    renderizarCadastro
} from "./paginas.js";

AOS.init();

const menuToggle = document.getElementById("menu-toggle");

menuToggle.addEventListener("change", function () {

    if (menuToggle.checked) {
        console.log("Menu aberto");
    } else {
        console.log("Menu fechado");
    }

});

const linksNavegacao = document.querySelectorAll("nav a");

linksNavegacao.forEach(function (link) {

    link.addEventListener("click", function (event) {

        event.preventDefault();

        console.log("Link clicado:", link.textContent);

        if (link.textContent === "Projetos") {
            window.location.hash = "#projetos";
            carregarRota();
        }

        if (link.textContent === "Início") {
            window.location.hash = "#inicio";
            carregarRota();
        }

        if (link.textContent === "Cadastro") {
            window.location.hash = "#cadastro";
            carregarRota();
        }

    });

});

const app = document.getElementById("app");

console.log("Contêiner app encontrado:", app);

function carregarRota() {
    const rota = window.location.hash;

    console.log("Rota atual:", rota);

    if (rota === "#inicio") {
        renderizarInicio();
    }

    if (rota === "#projetos") {
        renderizarProjetos();
    }

    if (rota === "#cadastro") {
        renderizarCadastro();
    }
}

carregarRota();

const campoNome = document.getElementById("nome");

if (campoNome) {
    campoNome.addEventListener("input", function () {
        console.log("Nome digitado:", campoNome.value);
    });
}

const dadosCadastroRecuperados = recuperarDadosCadastro();

console.log("Dados recuperados:", dadosCadastroRecuperados);

if (dadosCadastroRecuperados) {
    console.log("Nome recuperado:", dadosCadastroRecuperados.nome);
}