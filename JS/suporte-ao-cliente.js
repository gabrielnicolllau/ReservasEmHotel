window.onload = function () {

    let usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));

    if (usuarioLogado && usuarioLogado.nome) {
        const menu = document.querySelector(".menu");

        let userMenu = document.getElementById("userMenu");
        userMenu.textContent = usuarioLogado.nome;

        const menuIten = document.createElement("li");
        menuIten.classList.add("menu-item");

        const sairBtn = document.createElement("a");
        sairBtn.id = "sairBtn";
        sairBtn.innerText = "Sair";

        sairBtn.addEventListener("click", (e) => {

            localStorage.removeItem("usuarioLogado");

            // Isso recarrega a página após o logout
            location.reload();
        })

        menuIten.appendChild(sairBtn);
        menu.appendChild(menuIten);
    }
};

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.form-container');

    form.addEventListener('submit', function (event) {
        const nome = document.getElementById('nome').value;
        const sobrenome = document.getElementById('sobrenome').value;
        const email = document.getElementById('email').value;
        const mensagem = document.querySelector('textarea[name="mensagem"]').value;

        if (!nome || !sobrenome || !email || !mensagem) {
            event.preventDefault(); // Impede o envio do formulário se algum campo estiver vazio
            alert('Por favor, preencha todos os campos.'); // Exibe uma mensagem de alerta
        } else {
            alert('Mensagem enviada com sucesso!'); // Mensagem de envio bem-sucedido (pode ser substituída por uma ação de envio real)
        }
    });
});