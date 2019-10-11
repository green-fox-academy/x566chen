//https://swapi.co/api/people/?search=r2

let api = "https://swapi.co/api/people/?search=";
let ipt ;
const btn = document.querySelector('#btn');
const input = document.querySelector('input');


const pic = document.getElementById('pic');

let httpRequest = new XMLHttpRequest();
httpRequest.onreadystatechange = callback;
httpRequest.open('GET', `https://swapi.co/api/people/?search=${ipt}`,true);
httpRequest.send(null);

let ipt = document.getElementById('input');

btn.addEventListener('click', ()=>{
    ipt.value
})







// function callback(){
//     if (httpRequest.readyState == 4 )
//         if (httpRequest.status == 200){
//             let json = httpRequest.responseText;
//             let json_obj = JSON.parse(json);
//             for (let i=0; i<16;i++){
//                 let img = document.createElement('img');
//                 //let pic=;
//                 img.setAttribute('src',`${json_obj.data[i].images.original_still.url}`);
//                 pic.appendChild(img);
//                 img.addEventListener('click',()=>{
//                     img.src = json_obj.data[i].images.original.url;
//                 })
//             }

//         }
// }
