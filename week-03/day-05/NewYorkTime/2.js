// Create an Account and register an app using localhost as the website URL to get your API key.
// Use the Article Search API
// Find articles about the moon landing by Apollo 11
// Display the following fields in a list 

// Create a permalink for each article
//822GQzNQ6VcNnxvrk1menGt5DluR1LZW

let api = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
let apiKey = "&api-key=822GQzNQ6VcNnxvrk1menGt5DluR1LZW";
let query = "q=Apollo 11";

const book = document.getElementById('books');

let httpRequest = new XMLHttpRequest();
httpRequest.onreadystatechange = callback;
httpRequest.open('GET', "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=Apollo 11&api-key=822GQzNQ6VcNnxvrk1menGt5DluR1LZW",true);
httpRequest.send(null);

function callback(){
    if (httpRequest.readyState == 4 )
        if (httpRequest.status == 200){
          
            let json_obj = JSON.parse(httpRequest.responseText);

            let len = json_obj.response.docs.length;
           
            console.log(json_obj.response);
            

            for (let i=0; i<len; i++){
                const li = document.createElement('li');
                book.appendChild(li);
                // Headline
                // Snippet
                // Publication date
                const h1 = document.createElement('h1');
                const h2 = document.createElement('h2');
                const p = document.createElement('p');
                const link = document.createElement('a');

                h1.innerHTML = json_obj.response.docs[i].headline.main;
                h2.innerHTML = json_obj.response.docs[i].snippet;
                p.innerHTML = json_obj.response.docs[i].pub_date;
                link.innerHTML ='permalink';
                link.setAttribute('href', `${json_obj.response.docs[i].web_url}`);
                li.appendChild(h1);
                li.appendChild(h2);
                li.appendChild(p);
                li.appendChild(link);


            }



   

        }
}