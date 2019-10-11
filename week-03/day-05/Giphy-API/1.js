// Obtain an API key
// Search/Find the images in the API
// Display the list of the first 16 results's static thumbnail
// If the user clicks on the thumbnail, display the animated GIF
//KoaO553ZRRxEXdR2am5WfgRsGI8b27Nh
// /v1/gifs/search

let api = "https://api.giphy.com/v1/stickers/search?";
let apiKey = "&api_key=KoaO553ZRRxEXdR2am5WfgRsGI8b27Nh";
let query = "&q=rainbow";

const pic = document.getElementById('pic');

let httpRequest = new XMLHttpRequest();
httpRequest.onreadystatechange = callback;
httpRequest.open('GET', "https://api.giphy.com/v1/stickers/search?&api_key=KoaO553ZRRxEXdR2am5WfgRsGI8b27Nh&q=rainbow",true);
httpRequest.send(null);


function callback(){
    if (httpRequest.readyState == 4 )
        if (httpRequest.status == 200){
            let json = httpRequest.responseText;
            let json_obj = JSON.parse(json);
            for (let i=0; i<16;i++){
                let img = document.createElement('img');
                //let pic=;
                img.setAttribute('src',`${json_obj.data[i].images.original_still.url}`);
                pic.appendChild(img);
                img.addEventListener('click',()=>{
                    img.src = json_obj.data[i].images.original.url;
                })
            }

        }
}









