let nome = document.querySelector("#nome");
let labelNome = document.querySelector("#labelNome");
let validarNome = false;

let cpf = document.querySelector("#cpf");
let labelCPF = document.querySelector("#labelCPF");
let validarCPF = false;

let email = document.querySelector("#email");
let labelEmail = document.querySelector("#labelEmail");
let validarEmail = false;

let senha = document.querySelector("#senha");
let labelSenha = document.querySelector("#labelSenha");
let validarSenha = false;

let confimarSenha = document.querySelector("#confimarSenha");
let labelConfimarSenha = document.querySelector("#labelConfimarSenha");
let validarConfirmarSenha = false;

// Mudar a cor do campo do nome 
nome.addEventListener("keyup", () => {
    if (nome.value.length <= 2) {
        labelNome.setAttribute("style", "color: red");
        validarNome = false;
    } else {
        labelNome.setAttribute("style", "color: green");
        validarNome = true;
    }
});

// Mudar a cor no campo de CPF
cpf.addEventListener("keyup", () => {
    const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/; // Expressão Regular para CPF no formato 999.999.999-99

    if (cpfRegex.test(cpf.value)) {
        labelCPF.setAttribute("style", "color: green");
        validarCPF = true;
    } else {
        labelCPF.setAttribute("style", "color: red");
        validarCPF = false;
    }
})

// Mudar a cor no campo email
email.addEventListener("keyup", () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expressão Regular para validar e-mail

    if (emailRegex.test(email.value)) {
        labelEmail.setAttribute("style", "color: green");
        validarEmail = true;
    } else {
        labelEmail.setAttribute("style", "color: red");
        validarEmail = false;
    }
});

// Mudar a cor no campo da senha
senha.addEventListener("keyup", () => {
    if (senha.value.length <= 5) {
        labelSenha.setAttribute("style", "color: red");
        validarSenha = false;
    } else {
        labelSenha.setAttribute("style", "color: green");
        validarSenha = true;
    }
});

// Mudar a cor no campo confirmar senha
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
    if (validarNome && validarCPF && validarEmail && validarSenha && validarConfirmarSenha) {

        // Se houver uma lista na localstorage, ela será adicionada. Caso não exista, será criado um array vazio.
        let listaDeUsuarios = JSON.parse(localStorage.getItem("listaDeUsuarios") || "[]"); // Tranforma o que vamos colocar dentro do localstorage em JSON

        listaDeUsuarios.push({

            cadastroDoNome: nome.value,
            cadastroCPF: cpf.value,
            cadastroEmail: email.value,
            cadastroDaSenha: senha.value


        });

        // Cria registro na localStorage
        localStorage.setItem("listaDeUsuarios", JSON.stringify(listaDeUsuarios));

        window.location.href = "../html/login.html";
        alert("Cadastro com sucesso!");


    } else {
        alert("Preecha todos os campos!");
    }
}