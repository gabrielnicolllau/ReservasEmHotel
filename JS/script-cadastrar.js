let nome = document.querySelector("#nome");
let labelNome = document.querySelector("#labelNome");

let usuario = document.querySelector("#labelUsuario");
let labelUsuario = document.querySelector("#labelUsuario");

let senha = document.querySelector("#senha");
let labelSenha = document.querySelector("#labelSenha");

let confimarSenha = document.querySelector("#confimarSenha");
let labelConfimarSenha = document.querySelector("#labelConfimarSenha");

nome.addEventListener("keyup", ()=> {
    if(nome.value.length <= 2) {
        labelNome.setAttribute("style", "color: red");
    } else {
        labelNome.setAttribute("style", "color: green");
    }
});

function cadastrar() {
    
}