import userLogin from "./moduloDados.js"

class ControlerUserLogin{
    constructor(status){
        this.status = status;
    }
    checkLogin(){
        this.status = true;
    }
    loginInfo(user, senha){
        var infoCheck = userLogin.find((userLogin) => userLogin.username === user);
        console.log(infoCheck);
        if(!infoCheck ){
            alert("Usuário não existe");
            
        }else{
            if(infoCheck.senha === senha){
                this.checkLogin();
                alert(`Você está: ${this.status}`);
            } else{
                alert("Não logou!");
            }
        }
    }
}

const controlerUserLogin = new ControlerUserLogin();

export default controlerUserLogin;