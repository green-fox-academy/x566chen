//https://swapi.co/api/people/?search=r2



const btn = document.querySelector('#btn');
let ipt = document.getElementById('input');


btn.addEventListener('click', ()=>{
    let httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = callback;
    alert(ipt.value);
    httpRequest.open('GET', `https://swapi.co/api/people/?search=${ipt.value}`,true);
    httpRequest.send(null);


    function callback(){
        if (httpRequest.readyState == 4 )
            if (httpRequest.status == 200){
                let json = httpRequest.responseText;
                let json_obj = JSON.parse(json);

                console.log(json_obj);

                
                
                for (let i=0; i<json_obj.count;i++){
                    const li = document.createElement('li');
                    const left =document.querySelector('#left');
                    left.appendChild(li);
                    li.setAttribute('id',`li${i}`);
                    li.innerHTML = json_obj.results[i].name;
                }  
                
                left.addEventListener('click',()=>{
                    for (let i=0; i<json_obj.count;i++){
                        for(let j=0; j<json_obj.results[i].films.length; j++){
                            let Url = json_obj.results[i].films[j];
                    
                            let htp = new XMLHttpRequest();
                            htp.onreadystatechange = callback;
                    
                            htp.open('GET', `${Url}`,true);
                            htp.send(null);
                    
                            function callback(){
                    
                                if (htp.readyState == 4 )
                                if (htp.status == 200){
                                    let json1 = htp.responseText;
                                    let json_obj1 = JSON.parse(json1);
                    
                                    console.log(json_obj1);
                    
                                    const li1 = document.createElement('li');
                                    const right = document.querySelector('#right');
                                    right.appendChild(li1);
                                    li1.innerHTML = `${json_obj1.title} (${json_obj1.release_date})`;
                                }   
                            }
                        }

                    }

                    

                    
                })

                }

            }

})







