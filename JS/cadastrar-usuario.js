let nome = document.querySelector("#nome");
let labelNome = document.querySelector("#labelNome");
let validarNome = false;

let usuario = document.querySelector("#usuario");
let labelUsuario = document.querySelector("#labelUsuario");
let validarUsuario = false;

let senha = document.querySelector("#senha");
let labelSenha = document.querySelector("#labelSenha");
let validarSenha = false;

let confimarSenha = document.querySelector("#confimarSenha");
let labelConfimarSenha = document.querySelector("#labelConfimarSenha");
let validarConfirmarSenha = false;

// Mudar a cor nos campos
nome.addEventListener("keyup", () => {
    if (nome.value.length <= 2) {
        labelNome.setAttribute("style", "color: red");
        validarNome = false;
    } else {
        labelNome.setAttribute("style", "color: green");
        validarNome = true;
    }
});

usuario.addEventListener("keyup", () => {
    if (usuario.value.length <= 4) {
        labelUsuario.setAttribute("style", "color: red");
        validarUsuario = false;
    } else {
        labelUsuario.setAttribute("style", "color: green");
        validarUsuario = true;
    }
});

senha.addEventListener("keyup", () => {
    if (senha.value.length <= 5) {
        labelSenha.setAttribute("style", "color: red");
        validarSenha = false;
    } else {
        labelSenha.setAttribute("style", "color: green");
        validarSenha = true;
    }
});

confimarSenha.addEventListener("keyup", () => {
    if (senha.value !== confimarSenha.value) {
        labelConfimarSenha.setAttribute("style", "color: red");
        validarConfirmarSenha = false;
    } else {
        labelConfimarSenha.setAttribute("style", "color: green");
        validarConfirmarSenha = true;
    }
});

function cadastrar() {
    if (validarNome && validarUsuario && validarSenha && validarConfirmarSenha) {

        // Se houver uma lista na localstorage, ela será adicionada. Caso não exista, será criado um array vazio.
        let listaDeUsuarios = JSON.parse(localStorage.getItem("listaDeUsuarios") || "[]"); // Tranforma o que vamos colocar dentro do localstorage em JSON

        listaDeUsuarios.push({

            cadastroDoNome: nome.value,
            cadastroUsuario: usuario.value,
            cadastroDaSenha: senha.value,

        });

        // Cria registro na localStorage
        localStorage.setItem("listaDeUsuarios", JSON.stringify(listaDeUsuarios));

        window.location.href = "../html/login.html";
        alert("Cadastro com sucesso!");


    } else {
        alert("Preecha todos os campos!");
    }
}