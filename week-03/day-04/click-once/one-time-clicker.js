let timestamp = (new Date()).valueOf();


const btn = document.querySelector('button');


const add =()=>{
    console.log(timestamp);
    btn.removeEventListener('click', add);


}
btn.addEventListener('click', add);





