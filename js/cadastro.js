const list = [];

document.addEventListener('DOMContentLoaded', function() {
    
    const nome = document.getElementById("nome");
    const telefone = document.getElementById("telefone");
    const endereco = document.getElementById("endereco");
    const cpf = document.getElementById("cpf");
    const botao = document.getElementById("ButtonSubmit");

    function cadastrar() {
        if (!nome.value || !telefone.value || !endereco.value || !cpf.value) {
            alert("Por favor, preencha todos os campos.");
            return;
        } else {
        const cadastro = {
            nome: nome.value,
            telefone: telefone.value,
            endereco: endereco.value,
            cpf: cpf.value
        };
        list.push(cadastro);
        console.log(list);
        const mensagemSucesso = document.getElementById("cadastroSucesso");
        mensagemSucesso.style.display = "block";
         }
    }

    botao.addEventListener('click', cadastrar);
});