
// let img = document.querySelector('.img-inspector');
// const nav = document.querySelector('nav');
// let x = 0;
// let y = 0;
// let z = parseInt(getComputedStyle(img).backgroundSize);


// nav.addEventListener('click', (event) =>{
//     let action = event.target.getAttribute('data-action');
//     let dir = event.target.getAttribute('data-direction');

//     if (action === 'move'){
//         if(dir === 'up'){
//             y -=10;
//         }else if(dir === 'down'){
//             y +=10;
//         }else if(dir === 'left'){
//             x -= 10;
//         }else{
//             x += 10;
//         }

//         img.setAttribute('style', `background-position-x: ${x}px ; background-position-y: ${y}px`)

//     }else if(action === 'zoom'){
//         if (dir === 'in'){
//             z += 20;

//         }else{
//             z -= 20;
//         }

//         img.setAttribute('style', `background-size: ${z}%`);
//     }
// });

const actions = document.querySelector('nav');
let img = document.querySelector('.img-inspector');
const imgInspector = getComputedStyle(img);
let marginLeft = 0;
let marginTop = 0;
let size = Number(imgInspector.backgroundSize.slice(0, imgInspector.backgroundSize.length - 1));

actions.addEventListener('click', (event) => {
    if (event.target.getAttribute('data-action') === 'move') {
        let direction = event.target.getAttribute('data-direction');
        if (direction === 'up') {
            marginTop -= 10;
        } else if (direction === 'down') {
            marginTop += 10;
        } else if (direction === 'left') {
            marginLeft -= 10;
        } else if (direction === 'right') {
            marginLeft += 10;
        }
        img.setAttribute('style', `background-position-x: ${marginLeft}px; background-position-y: ${marginTop}px; background-size: ${size}%`);
    }
});

actions.addEventListener('click', (event) => {
    if (event.target.getAttribute('data-action') === 'zoom') {
        let zoom = event.target.getAttribute('data-direction');
        if (zoom === 'in') {
            size *= 1.2;
        } else if (zoom === 'out') {
            size *= 0.8;
        }
        img.setAttribute('style', `background-position-x: ${marginLeft}px; background-position-y: ${marginTop}px; background-size: ${size}%`);
    }
});