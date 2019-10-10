const button = document.querySelector('button');
const result = document.querySelector('.result');

const count =()=>{
    const count1 = document.getElementsByTagName('li').length;
    result.textContent= count1;
}

button.addEventListener('click', count)