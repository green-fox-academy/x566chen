const btn = document.querySelector('#btn');
const div = document.querySelector('#div');

btn.addEventListener('click', Async());

async function Async(){
    try {
        const res_web = await fetch("http://api.icndb.com/jokes/random");
        const json = await res_web.json();
        const div1 = document.createElement('p');
        div1.textContent += json.value.joke;
        div.appendChild(div1);

    }catch{
        div.appendChild(div1);
        div1.textContent = 'Sry, Error!'

    }
}