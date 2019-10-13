const btn = document.querySelector('#btn');
const h1 = document.querySelector('h1');


const fetch1 = () =>{
    return fetch('https://api.github.com/orgs/green-fox-academy/repos')
    .then(res => res.json());
}

const fetch2 = () => {
    return fetch(`https://api.github.com/repos/green-fox-academy/${repo}/commits`)
    .then(res => res.json())
}

