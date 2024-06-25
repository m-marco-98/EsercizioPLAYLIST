const URL_endpoint = "http://localhost:9179/api/"

let boxProva = document.querySelector("#boxProva");


function mostraCanzoni() {

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
         boxProva.innerHTML += stampaCanzone(canzone);
       });
    })
}

function stampaCanzone(canzone) {
    let brano = `<li>
        <span>${canzone.artista} - ${canzone.titolo}</span>
    </li>`;
    return brano;

}


window.addEventListener("DOMContentLoaded", mostraCanzoni);