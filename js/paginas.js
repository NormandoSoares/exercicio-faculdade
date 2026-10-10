
import { salvarDadosCadastro } from "./armazenamento.js";

export function renderizarPagina(conteudo) {
    const app = document.getElementById("app");
    app.innerHTML = conteudo;
}

export function renderizarProjetos() {
    const projetos = [
        {
            categoria: "Assistência",
            titulo: "Cuidando dos Idosos",
            descricao: "Visitas, conversas e acompanhamento para pessoas idosas que precisam de companhia e apoio."
        },
        {
            categoria: "Doação",
            titulo: "Cesta Solidária",
            descricao: "Distribuição de alimentos e itens de primeira necessidade para famílias atendidas."
        },
        {
            categoria: "Saúde",
            titulo: "Saúde e Bem-Estar",
            descricao: "Ações de orientação e encaminhamento de medicamentos para quem mais precisa."
        }
    ];

    const cardsProjetos = projetos.map(function (projeto) {
        return `
            <article data-aos="fade-up">
                <span class="badge">${projeto.categoria}</span>
                <h3>${projeto.titulo}</h3>
                <p>${projeto.descricao}</p>
            </article>
        `;
    });

    const conteudoProjetos = `
        <section>
            <h2>Projetos sociais</h2>
            ${cardsProjetos.join("")}
        </section>
    `;

    renderizarPagina(conteudoProjetos);
}


export function renderizarInicio() {
    const conteudoInicio = `
        <section data-aos="fade-up">
            <h2>Sobre a ONG</h2>
            <p>A ONG Proteger atua em ações sociais, apoiando pessoas e comunidades por meio do voluntariado e de campanhas de doação.</p>
        </section>

        <section>
            <h2>Contato</h2>
            <p>E-mail: contato@ongproteger.org</p>
            <p>Telefone: (83) 99999-9999</p>
        </section>

        <section>
            <h2>Ação social</h2>
            <img src="../imagens/ong.jpg"
                 alt="Voluntários da ONG realizando uma ação social"
                 width="600">
        </section>
    `;

    renderizarPagina(conteudoInicio);
}

export function renderizarCadastro() {

    const conteudoCadastro = `
        <section>
            <h2>Cadastro de apoiadores</h2>

            <form>
                <fieldset>
                    <legend>Dados pessoais</legend>

                    <p>
                        <label for="nome">Nome completo</label><br>
                        <input type="text" id="nome" name="nome" required>
                    </p>

                    <p>
                        <label for="cpf">CPF</label><br>
                        <input type="text" id="cpf" name="cpf"
                               placeholder="000.000.000-00"
                               pattern="[0-9]{3}\\.[0-9]{3}\\.[0-9]{3}-[0-9]{2}"
                               title="Use o formato 000.000.000-00"
                               required>
                    </p>

                    <p>
                        <label for="email">E-mail</label><br>
                        <input type="email" id="email" name="email" required>
                    </p>

                    <p>
                        <label for="telefone">Telefone</label><br>
                        <input type="tel" id="telefone" name="telefone"
                               placeholder="(83) 99999-9999"
                               pattern="\\([0-9]{2}\\) [0-9]{5}-[0-9]{4}"
                               title="Use o formato (83) 99999-9999"
                               required>
                    </p>

                    <p>
                        <label for="nascimento">Data de nascimento</label><br>
                        <input type="date" id="nascimento" name="nascimento" required>
                    </p>
                </fieldset>

                <fieldset>
                    <legend>Endereço</legend>

                    <p>
                        <label for="cep">CEP</label><br>
                        <input type="text" id="cep" name="cep"
                               placeholder="00000-000"
                               pattern="[0-9]{5}-[0-9]{3}"
                               title="Use o formato 00000-000"
                               required>
                    </p>
                </fieldset>

                <fieldset>
                    <legend>Preferências</legend>

                    <p>
                        <input type="radio" id="opcao-radio" name="preferencia" value="radio">
                        <label for="opcao-radio">Opção radio</label>
                    </p>

                    <p>
                        <input type="checkbox" id="opcao-checkbox" name="checkbox" value="checkbox">
                        <label for="opcao-checkbox">Opção checkbox</label>
                    </p>
                </fieldset>
            </form>
        </section>
    `;

    renderizarPagina(conteudoCadastro);

    const formulario = document.querySelector("form");

    const mensagemFormulario = document.createElement("p");
    mensagemFormulario.id = "mensagem-formulario";
    formulario.appendChild(mensagemFormulario);

    formulario.addEventListener("submit", function (event) {
        event.preventDefault();

        if (formulario.checkValidity()) {
            mensagemFormulario.textContent = "Formulário válido!";
            console.log("Formulário válido!");

            const dadosCadastro = {
                nome: document.getElementById("nome").value,
                cpf: document.getElementById("cpf").value,
                email: document.getElementById("email").value,
                telefone: document.getElementById("telefone").value,
                nascimento: document.getElementById("nascimento").value,
                cep: document.getElementById("cep").value
            };

            console.log("Dados do cadastro:", dadosCadastro);

            salvarDadosCadastro(dadosCadastro);

        } else {
            mensagemFormulario.textContent = "Formulário inválido!";
            console.log("Formulário inválido!");
        }
    });
}