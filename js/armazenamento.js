export function salvarDadosCadastro(dadosCadastro) {
    localStorage.setItem(
        "dadosCadastro",
        JSON.stringify(dadosCadastro)
    );
}

export function recuperarDadosCadastro() {
    const dadosSalvos = localStorage.getItem("dadosCadastro");

    if (!dadosSalvos) {
        return null;
    }

    return JSON.parse(dadosSalvos);
}