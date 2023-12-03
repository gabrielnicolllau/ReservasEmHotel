let nome = document.querySelector("#nome");
let labelNome = document.querySelector("#labelNome");

let usuario = document.querySelector("#usuario");
let labelUsuario = document.querySelector("#labelUsuario");

let senha = document.querySelector("#senha");
let labelSenha = document.querySelector("#labelSenha");

let confimarSenha = document.querySelector("#confimarSenha");
let labelConfimarSenha = document.querySelector("#labelConfimarSenha");

// Mudar a cor nos campos
nome.addEventListener("keyup", () => {
    if (nome.value.length <= 2) {
        labelNome.setAttribute("style", "color: red");
    } else {
        labelNome.setAttribute("style", "color: green");
    }
});

usuario.addEventListener("keyup", () => {
    if (usuario.value.length <= 4) {
        labelUsuario.setAttribute("style", "color: red");
    } else {
        labelUsuario.setAttribute("style", "color: green");
    }
});

senha.addEventListener("keyup", () => {
    if (senha.value.length <= 5) {
        labelSenha.setAttribute("style", "color: red");
    } else {
        labelSenha.setAttribute("style", "color: green");
    }
});

confimarSenha.addEventListener("keyup", () => {
    if (senha.value !== confimarSenha.value) {
        labelConfimarSenha.setAttribute("style", "color: red");
    } else {
        labelConfimarSenha.setAttribute("style", "color: green");
    }
});

function cadastrar() {
    
}