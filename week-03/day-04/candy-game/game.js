// - Gather 10.000 candies!
// - Clicking the ‘Create candies’ button gives you 1 candy.
// - You can buy a lollipop for 100 candies by clicking the ‘Buy lollipop’ button.
// - 10 lollipops generate 1 candy per second.
//   - Use the 🍭 emoji to display the lollipops you have
// - Display the candy producton rate in the `Candies / Second` row
// - If you press the "make candy rain" button, the candy generation should speed up 10x
const btn1 = document.querySelector('.create-candies');
const btn2 = document.querySelector('.buy-lollypops');
const btn3 = document.querySelector('.candy-machine');
const candy = document.querySelector('.candies');
const lollypops = document.querySelector('.lollypops');
const speed = document.querySelector('.speed');
const candyrain = document.querySelector('.candy-machine');
//candy amount:
(function speedup() {
    if (lollypops.textContent === '') {
        speed.textContent = 0;
    } else {
        speed.textContent = Number(speed.textContent) + Math.floor(lollypops.textContent.length / 20) - Math.floor((lollypops.textContent.length - 1) / 20);
    }
})();

btn1.addEventListener('click',(event)=>{
    
    candy.textContent++;
})

btn2.addEventListener('click',(event)=>{
    if (candy.textContent >= 100){
        lollypops.textContent += '🍭';
        candy.textContent-=100;
    }
})

candyrain.addEventListener('click', () => {
    speed.textContent *= 10;
});

generator(() => {
    candy.textContent = Number(speed.textContent) + Number(candy.textContent);
}, 1000);