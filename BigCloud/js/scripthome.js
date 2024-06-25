let elNomeUser = document.querySelector("#elNomeUser");

let nomeUser = "";
const URL_endpoint = "http://localhost:9179/api/";

let btnRicerca=document.querySelector("#btnRicerca");
let btnInputTitolo=document.querySelector("#btnInputTitolo");
let btnInputGenere=document.querySelector("#btnInputGenere");
let btnInputArtista=document.querySelector("#btnInputArtista");

function recuperaDati(){
    //recupera vari dati tra cui lo username

       
    nomeUser= JSON.parse(localStorage.getItem("userConnesso")); 
    elNomeUser.innerHTML = nomeUser.username;
}

window.addEventListener("DOMContentLoaded", recuperaDati)


let btnBrani = document.querySelector("#btnBrani");
let box3 = document.querySelector("#box3");
let lista = document.querySelector("#lista");


function pialla(){

    lista.innerHTML= " ";

}

function cercaBrani(modalita){

   lista.innerHTML= " ";

    let ricercacanzone=document.querySelector("#ricercacanzone").value;

    URL_ricercaTitolo=URL_endpoint+ `canzoni/${modalita}/${ricercacanzone}`
    fetch(URL_ricercaTitolo)
    .then(data => {
        console.log(data);
        return data.json();
    })
    .then(response => {
       console.log(response); 
       response.forEach(canzone => {
         console.log(canzone.titolo);
         lista.appendChild(stampaCanzone(canzone));
       });
    }) 

}



function recuperaBrani(){
    
    URL_ListaCanzoni = URL_endpoint + "canzoni";

    fetch(URL_ListaCanzoni)
    .then(data => {
        console.log(data);
        return data.json();
    })
    .then(response => {
       console.log(response); 
       response.forEach(canzone => {
         console.log(canzone.titolo);
         box3.appendChild(stampaCanzone(canzone));
       });
    })
}
function stampaCanzone(canzone) {
    //let brano = `<li>
      //  <span>${canzone.artista} - ${canzone.titolo}</span>
    //</li>`;
    let brano = document.createElement("li");
    brano.innerHTML = `<span>${canzone.artista} - ${canzone.titolo}</span>`;
    
    let btnAdd = document.createElement("button");
    btnAdd.innerHTML = "ADD";
    btnAdd.addEventListener("click", aggiungiINPlayList);
    btnAdd.setAttribute("class", "buttonadd")

    brano.appendChild(btnAdd);
    return brano;

}

function aggiungiINPlayList(){
    console.log("Sto aggiungendo in Playlist");
}

btnRicerca.addEventListener("click",pialla);

btnInputTitolo.addEventListener("click",function(){
    let modalita = "titolo";
    cercaBrani(modalita)
});

btnInputGenere.addEventListener("click",function(){
    let modalita = "genere";
    cercaBrani(modalita)
});

btnInputArtista.addEventListener("click",function(){
    let modalita = "artista";
    cercaBrani(modalita)
});

btnBrani.addEventListener("click", recuperaBrani);