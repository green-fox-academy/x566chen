let btn = document.querySelector('#btn');
let div1 = document.getElementById('div')

function show(){
    //alert('5 seconds passed!');
    console.log('222')
}

//first method(normal):

// let show_time = self.setInterval("show()",5000);

// btn.addEventListener('click',()=>{
    
//     window.clearInterval(show_time);
    
// })


//second method(using promise):

show_time().then(p2).catch((error)=>{
    console.log('111')
})



function show_time(){
    let show_time = new Promise((resolve,reject)=>{
        resolve(self.setInterval("show()",5000));
    })
}

function p2(){
    let p2 = new Promise((resolve, reject)=>{
        btn.addEventListener('click',()=>{
            reject(window.clearInterval(show_time));
            
        })
    })
}

//third method:

