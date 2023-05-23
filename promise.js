 const urlApi ="https://striveschool-api.herokuapp.com/api/deezer/search?q="

 function fishingServer () {
     fetch(urlApi+ "eminem")
     .then ((res) => {
         return res.json();
     })
     .then((res) => {
         createHtml(res.data);
     })
     .catch ((err) => {
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

// const musicData = (id)=> {
//     let promise= new Promise((resolve,reject)=> {
//         let request =  fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=' + id, { method: 'GET' });
//         setTimeout(()=>{
//             resolve(request);
//             reject("error");
//         },1000);
//  });
//     return promise;
// }


// musicData("eminem")
// .then((response)=> {response.json().then((data)=> {getAlbum(data, "eminem")})})
// .catch((error)=> {console.log(error)});

// function getAlbum(datas, name) {

//     let albums = document.getElementById('eminem');
//     let albumsData = datas.data;

//     for (let i = 0; i < 4; i++) {

//         let dadDiv = document.createElement("div");
//         albums.appendChild(dadDiv);

//         let albumTitle = document.createElement("h4");
//         albumTitle.innerText = albumsData[i].title;
//         dadDiv.appendChild(albumTitle);

//         let albumImg = document.createElement("img");
//         albumImg.src = albumsData[i].album.cover_medium;
//         dadDiv.appendChild(albumImg);

//     }
// }