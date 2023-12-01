/* Pegar informacao do usuario */
function logar() {
    var login = document.getElementById("login").value;
    var senha = document.getElementById("senha").value;
  
    /* Validacao da senha */
    if (login == "admin" && senha == "admin") {
      alert("Login realizado com sucesso!");
    } else {
      alert("Usuário ou senha incorretos!");
    }
  }
  