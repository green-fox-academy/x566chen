const words = document.querySelector('#words');
const btn = document.querySelector('#resolve');
const during = document.querySelector('#during');

let date = new Date();
let second1 = date.getSeconds();


//------------------First method(normal):

// words.textContent = `Script loaded at ${performance.now()}`;

//     btn.addEventListener('click', ()=>{

//     let date1 =new Date();

//     let second2 = date1.getSeconds();

//     during.innerHTML =`${second2 - second1} seconds` ;
// })

//----------------second method(using promise):

// let promise1 = new Promise(function(resolve){
//     words.textContent = `Script loaded at ${performance.now()}`;
// });
//          promise1.then(
//          btn.addEventListener('click', ()=>{

//          let date1 =new Date();
    
//          let second2 = date1.getSeconds();
    
//          during.innerHTML =`${second2 - second1} seconds` ;
//     })
//     );

//third method(using async):

function assign(){
    words.textContent = `Script loaded at ${performance.now()}`;
}
       btn.addEventListener('click', ()=>{

       let date1 =new Date();

       let second2 = date1.getSeconds();

       during.innerHTML =`${second2 - second1} seconds` ;
  });


async function asyncTimeSys(){

    await assign();

    await click();

}
asyncTimeSys();

