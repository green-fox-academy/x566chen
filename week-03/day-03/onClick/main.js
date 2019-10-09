const ul1 = document.createElement('ul');
const ul2 = document.createElement('ul');
const div = document.createElement('div');
const body = document.querySelector('body');
const arr = ['bread', 'milk', 'orange', 'tomato'];
const dir = ['up', 'to', 'delete','down'];

ul1.className='left';
div.className='middle';
ul2.className = 'right';

body.appendChild(ul1);
body.appendChild(div);
body.appendChild(ul2);

for (let i=0; i <4; i++){
    let li = document.createElement('li');
    li.id = arr[i];
    li.textContent = arr[i];
    ul1.appendChild(li);
}





for (let i=0; i<4; i++){
    const btn = document.createElement('button');
    btn.id = dir[i];
    btn.textContent = dir[i];
    div.appendChild(btn);
}



const bread = document.querySelector('#bread');
const milk = document.querySelector('#milk');
const orange = document.querySelector('#orange');
const tomato = document.querySelector('#tomato');
const up = document.querySelector('#up');
const to = document.querySelector('#to');
const delete1 = document.querySelector('#delete');
const down = document.querySelector('#down')

//>

function to1(){
    const li2 = document.createElement('li');
    const point = document.getElementById(select);
    li2.textContent = point.textContent;
    li2.id = select;
    ul1.removeChild(point);
    ul2.appendChild(li2);
    const first = document.querySelector('li:first-child');
    first.style.backgroundColor = 'grey';

}
//X
function delete2(){
    const point = document.getElementById(select);
    ul1.removeChild(point);
    const first = document.querySelector('li:first-child');
    first.style.backgroundColor = 'grey';
}

//up

let arr0 = [0, 1, 2, 3]

function up1(){

        let index = arr0.indexOf(arr1.indexOf(document.getElementById(select)));
        if (index != 0 ){
            let tmp = arr1[index];
            arr1[index]= arr1[index-1];
            arr1[index-1] = tmp;
    

            let i=0;
            arr0.forEach((x)=>{
                ul1.removeChild(arr1[i]);
                i++;
            })
       
            arr0.forEach((x)=>{
                ul1.appendChild(arr1[x]);
            })

        }
    }
//down





function down1(){

        let index = arr0.indexOf(arr1.indexOf(document.getElementById(select)));
        if (index != 4 ){
            let tmp = arr1[index];
            arr1[index]= arr1[index+1];
            arr1[index+1] = tmp;
    

            let i=0;
            arr0.forEach((x)=>{
                ul1.removeChild(arr1[i]);
                i++;
            })
       
            arr0.forEach((x)=>{
                ul1.appendChild(arr1[x]);
            })

        }
    }



//return index
function find_index(x=[],y){
    let count=0;
    x.forEach((data)=>{
        if(data.textContent == y.textContent){
            return count;
        }else{
            count++;
        }
    })

}

up.onclick = () =>{
    up1();
}
to.onclick = () =>{
    to1();
}
delete1.onclick = () =>{
    delete2();
}
down.onclick =() =>{
    down1();
}

//select
let select='';
const arr1 = [bread, milk, orange, tomato];
arr1.forEach((item)=>{  
    item.onclick = () =>{    
        arr1.forEach((ori)=>{ori.style.backgroundColor = 'white';})
        item.style.backgroundColor = 'grey';
        select = item.id;
    }
    
})



