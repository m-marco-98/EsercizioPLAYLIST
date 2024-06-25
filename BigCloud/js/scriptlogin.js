const URL_endpoint = "http://localhost:9179/api/";


class Utente{
    constructor(username,password){
       
        this.username=username;        
        this.password=password;        
    }
}

let formLogin=document.querySelector("#formReg");
let lg=document.querySelector("#lg");

function validate(){
    lg.innerHTML="";
    //acquisizione controllo
    
    let inputColorati=document.querySelectorAll("input .borderRed");
    inputColorati.forEach(inputColorati=>{
        inputColorati.removeAttribute("class"); 
    })
    let username=document.querySelector("#username").value;    
    let password=document.querySelector("#password").value;   
    
    
    if(validateUsername(username,event) && validatePass(password,event)){
        login(username, password);
    };
    
}
    
function login(username, password){
    URL = URL_endpoint+`utente/login?username=${username}&password=${password}`;
    fetch(URL)
    .then(data => {
        return data.json(); //il metodo json() converte il json in obj
    }
    )
    .then(response => {
        console.log(response);
        localStorage.setItem("userConnesso", JSON.stringify(response));        
        location.href = "./home.html";
    })        
    
    
};   

function validateUsername(username,event){
    if(username==""|| username.length<=2){
        demo.innerHTML+= "<p>hai dimenticato l'username</p> ";
        document.querySelector("#username").setAttribute("class","borderRed");
        event.preventDefault();
        event.stopImmediatePropagation();
    }else{
        return true;
    }
}

function validatePass(password,event){
    
    if(password==""){
        demo.innerHTML+= "<p>hai dimenticato la password</p>";
        document.querySelector("#pass").setAttribute("class","borderRed");
        event.preventDefault();
        event.stopImmediatePropagation();
    }else{
        return true;
    }
}



btnlogin.addEventListener("click",validate);


//recuperare gli elementi 
let elUsername=document.querySelector("#username");
let elPassword=document.querySelector("#password");