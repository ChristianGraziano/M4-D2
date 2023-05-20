const urlApi ="https://striveschool-api.herokuapp.com/api/deezer/search?q="

function fishingServer () {
    fetch(urlApi+ "eminem")
    .then ((res) => {
        return res.json();
    })
    .then((res) => {
        createHtml(res.data);
    })
    .fetch ((err) => {
        console.log(err);
    })
}

function createHtml(songs){
    const myHtmlDiv=document.getElementById("myDiv");
    for (const song of songs) {
        const songDiv=document.createElement('div');
        const cardBodY=document.createElement('div');
        
        cardBodY.innerText=song.title;
        cardBodY.classList.add('card-body');


        songDiv.appendChild(cardBodY);
        songDiv.classList.add('card');
        songDiv.classList.add('col-md-3');
        songDiv.classList.add('mx-2');
        songDiv.classList.add('d-flex');
        songDiv.classList.add('mb-2');
        
        myHtmlDiv.appendChild(songDiv);
    }
}

fishingServer();



/* // Creazione dell'elemento principale della card (div con classe "card")
var card = document.createElement("div");
card.classList.add("card");

// Creazione dell'elemento per il corpo della card (div con classe "card-body")
var cardBody = document.createElement("div");
cardBody.classList.add("card-body");

// Creazione dell'elemento per il titolo della card (h5 con classe "card-title")
var cardTitle = document.createElement("h5");
cardTitle.classList.add("card-title");
cardTitle.textContent = "Titolo della card";

// Creazione dell'elemento per il testo della card (p con classe "card-text")
var cardText = document.createElement("p");
cardText.classList.add("card-text");
cardText.textContent = "Testo della card";

// Aggiunta dell'elemento del titolo come figlio del corpo della card
cardBody.appendChild(cardTitle);

// Aggiunta dell'elemento del testo come figlio del corpo della card
cardBody.appendChild(cardText);

// Aggiunta del corpo della card come figlio della card principale
card.appendChild(cardBody);

// Aggiunta della card al documento HTML (nel tuo elemento di destinazione desiderato)
var targetElement = document.getElementById("nome-del-tuo-elemento-di-destinazione");
targetElement.appendChild(card); */