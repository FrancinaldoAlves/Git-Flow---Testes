function validar(){
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let sexo = document.getElementById("sexo").value;
    let idade = document.getElementById("idade").value;
    let regexEmail = /\S+@\S+\.\S+/.test(email);

    if (nome === "" || email === "" || sexo === "" || idade === "") {
        alert("Preencha todos os campos!");
        return;
    }

    else if(!regexEmail) {
        alert("Email inválido");
        return;
    }

    else if (idade <= 0){
        alert("Idade tem que ser maior que zero")
        return;
    }

    else {
        alert("Cadastro realizado com sucesso")
    }
}