let mybook = new Map();
mybook.set("William A. Lathan","405-709-1865");
mybook.set("John K. Miller","402-247-8568");
mybook.set("JHortensia E. Foster","606-481-6467");
mybook.set("Amanda D. Newland","319-243-5613");
mybook.set("Brooke P. Askew","307-687-2982");

console.log(mybook.entries());

console.log(mybook.get("John K. Miller"));

for (let pair of mybook){
    if (pair[1]=="307-687-2982"){
        console.log(pair[0]);
    }
}

console.log(mybook.has("Chris E. Myers"));