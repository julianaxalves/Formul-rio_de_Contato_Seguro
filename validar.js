const form = document.getElementById("formx");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    const dados = {
        nome: nome,
        email: email,
        mensagem: mensagem
    };

});
