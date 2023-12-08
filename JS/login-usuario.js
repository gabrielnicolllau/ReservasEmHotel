function entrar() {
  let email = document.querySelector("#input-email").value;
  let senha = document.querySelector("#senha").value;

  let listaDeUser = JSON.parse(localStorage.getItem("listaDeUsuarios")) || [];

  let userValid = {
    nome: "",
    email: "",
    senha: ""
  };

  listaDeUser.forEach(item => {
    if (email === item.cadastroEmail && senha === item.cadastroDaSenha) {
      userValid = {
        nome: item.cadastroDoNome,
        email: item.cadastroEmail,
        senha: item.cadastroDaSenha
      };
    }
  });

  if (userValid.email !== "" && userValid.senha !== "") {
    alert("Login bem-sucedido!");
    let userMenu = document.getElementById("userMenu");
    userMenu.textContent = userValid.nome;

    // Armazena o usuário logado no localStorage
    localStorage.setItem("usuarioLogado", JSON.stringify(userValid));

    window.location.href = "../index.html";

  } else {
    alert("Usuário ou senha incorretos!");
  }
}

// Verifica se há um usuário logado ao carregar a página
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
      location.reload(); // Recarrega a página após o logout
    })

    menuIten.appendChild(sairBtn);
    menu.appendChild(menuIten);
  }
};