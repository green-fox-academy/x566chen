const btn = document.querySelector('#btn');
const div = document.querySelector('#div');

btn.addEventListener('click', ()=>{
    fetch('http://api.icndb.com/jokes/random')
        .then(res_web => res_web.json())
        .then(json=>{
            const div1=document.createElement('p');
            div.appendChild(div1);
            div1.textContent += json.value.joke;
        }).catch(err =>{
            div.appendChild(div1);
            duv1.textContent = 'Sry, Error!'
        })

});

