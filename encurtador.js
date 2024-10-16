// Um objeto que mapeia URLs curtas para URLs originais
const links = {
    "meulink1": "https://exemplo.com/original",
    "github": "https://github.com"
};

// Função para gerar um link curto
function encurtar() {
    const url = document.getElementById('url').value;
    const id = Math.random().toString(36).substr(2, 5); // Gera um ID curto aleatório

    // Adiciona o novo link no objeto de links
    links[id] = url;

    // Exibe o link encurtado
    document.getElementById('linkEncurtado').innerHTML = `Link encurtado: <a href="/${id}" target="_blank">${window.location.href}${id}</a>`;
}
