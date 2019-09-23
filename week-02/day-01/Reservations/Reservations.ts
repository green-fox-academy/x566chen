interface Reservationy {
    getDowBooking(): string;
    getCodeBooking(): string;
  }




function getRandomInt(min: number, max: number): number {
    var Range = max - min;
    var Rand = Math.random();
    return(min + Math.round(Rand * Range));
}
function randomString(len:number){
    var $chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var maxPos = $chars.length;
    var pwd = '';
    for (var i=0; i< len; i++){
        pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
        
    }
    return pwd;
    
}

const DayList = ['MON', 'TUE', 'WED', 'THU','FRI','SAT','SUN'];
class Reservation implements Reservationy{
    getDowBooking():string{
        return DayList[getRandomInt(0,6)];
    }

    getCodeBooking():string{
        return randomString(8);
    }
}

const reservation = new Reservation();
for(var i =0; i<10; i++){
    console.log(`Booking# ${reservation.getCodeBooking()} for ${reservation.getDowBooking()}`)
}