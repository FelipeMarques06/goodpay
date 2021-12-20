import controlerUserLogin from "./moduloInterface.js";

var modalLogin = new bootstrap.Modal(document.getElementById('modal1'))

const entrarUsuario = document.getElementById("btnEntrar");
entrarUsuario.addEventListener("click", (event)=>{
    let nome = document.getElementById("usuario").value,
        senha = document.getElementById("senha").value;
    if(!nome || nome === null || nome ==="" || !senha || senha === null || senha ===""){
        document.getElementById("titleModal").innerHTML = "Campos Vazios";
        document.getElementById("bodyModal").innerHTML = "Um ou mais campos estão vaziosw"
        modalLogin.show();
        alert("Campos Vazios, não há como executar o login");
    } else {
        controlerUserLogin.loginInfo(nome, senha);
    }

})