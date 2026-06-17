const petsList = [];

document.addEventListener('DOMContentLoaded', function() {
    
    const petTipo = document.getElementById("tipo");
    const petNome = document.getElementById("nome");
    const petIdade = document.getElementById("idade");
    const petRaca = document.getElementById("raca");
    const petDescricao = document.getElementById("descricao");

    function cadastrarPet() {
        const pet = {
            tipo: petTipo.value,
            nome: petNome.value,
            idade: petIdade.value,
            raca: petRaca.value,
            descricao: petDescricao.value
        };
        petsList.push(pet);
        console.log(petsList);
    }

    document.getElementById("ButtonSubmit").addEventListener("click", function (event) {
        event.preventDefault();
        cadastrarPet();
        localStorage.setItem('pets', JSON.stringify(petsList));
    });

});

