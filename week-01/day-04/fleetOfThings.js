'use strict';

const Thing = require('./thing');
const Fleet = require('./fleet');

class FleetOfThings {
    main() {
        this.fleet = new Fleet();
        let no1 = new Thing('Get milk');
        no1.complete();
        let no2 = new Thing('Remove the obstacles');
        no2.complete();
        let no3 = new Thing('Stand up');
        let no4 = new Thing('Eat lunch');

        this.fleet.add(no1);
        this.fleet.add(no2);
        this.fleet.add(no3);
        this.fleet.add(no4)





    }
    print() {

        for (var i=0; i <this.fleet.getThings().length; i++){
            let name = this.fleet.getThings()[i].getName();
            if (this.fleet.getThings()[i].getCompleted()==true){
                console.log((i+1)+'. '+ ' '+'[ ]'+name);
            }else{
                console.log(i+'. '+ ' '+'[x]'+name);
            }
        }

    }
}
let fleetOfThings = new FleetOfThings();
fleetOfThings.main();
fleetOfThings.print();

// -  You have the `Thing` class
// -  You have the `Fleet` class
// -  Create the `FleetOfThings` class with a `main` method
// -  Download those, use those
// -  In the `main` method create a fleet
// -  Achieve this output:
//  Crete a fleet of things to have this output:

// 1. [ ] Get milk
// 2. [ ] Remove the obstacles
// 3. [x] Stand up
// 4. [x] Eat lunch

// Hint: You have to create a `print()` method as well