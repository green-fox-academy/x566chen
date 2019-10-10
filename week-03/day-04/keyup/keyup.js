const h1 = document.querySelector('h1');
window.addEventListener('keyup', function(event){
    console.log(event);
    console.log(event[event.length-1]);

    let asc = event.keyCode;
    let key = String.fromCharCode(asc);

    h1.textContent = `Last pressed key code is:${key}`;
})


