const form = document.querySelector("form");

let linhas = '';
const nomes = [];
const telefones = [];

form.addEventListener("submit", function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaLinha();

});

function adicionaLinha(){
    let nome = document.getElementById("nome");
    let telefone = document.getElementById("telefone");

    if (nomes.includes(nome.value)){
        alert(`Nome ${nome.value} já existe`);
        return 0;
    } else {
        nomes.push(nome.value);
        telefones.push(telefone.value);
    }
    let linha = `<tr>`;
    linha += `<td>${nome.value}</td>`;
    linha += `<td>${telefone.value}</td>`;
    linha += `</tr>`;
    linhas += linha;
}
function atualizaLinha(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}