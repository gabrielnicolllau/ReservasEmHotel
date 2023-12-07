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