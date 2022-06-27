
let user= document.querySelector(".user");

let pass =document.querySelector(".pass");

user.onblur = function(){
    sessionStorage.setItem("user",`${user.value}`);
}

pass.onblur = function(){
    sessionStorage.setItem("pass",`${pass.value}`);
}

if(sessionStorage.getItem('user') !== null && sessionStorage.getItem("pass") !== null){
user.setAttribute("value",`${sessionStorage.getItem("user")}`);
pass.setAttribute("value",`${sessionStorage.getItem("pass")}`);
}