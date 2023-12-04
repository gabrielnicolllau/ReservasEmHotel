function entrar() {
  let usuario = document.querySelector("#usuario").value;
  let senha = document.querySelector("#senha").value;

  let listaDeUser = JSON.parse(localStorage.getItem("listaDeUsuarios")) || [];

  let userValid = {
    usuario: "",
    senha: ""
  };

  listaDeUser.forEach(item => {
    if (usuario === item.cadastroUsuario && senha === item.cadastroDaSenha) {
      userValid = {
        usuario: item.cadastroUsuario,
        senha: item.cadastroDaSenha
      };
    }
  });

  if (userValid.usuario !== "" && userValid.senha !== "") {
    alert("Login bem-sucedido!");

  } else {
    alert("Usuário ou senha incorretos!");
  }
}