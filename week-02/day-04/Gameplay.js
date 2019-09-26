class Dimension {

    
    ifsize(num){
        
        num<=0 ? console.log('That\'s not a valid number for the dimension!'):console.log('');
    }

    construct(num){
        let array = [];
        let _with = num;
        let height =  num;
        let str= '';
        for (let i=0; i < num; i++){
            str=str+' '+(i+1);
            
        }
        console.log(' '+str);
        let str1 ='';
        let arr=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
        for (let m=0; m < num; m++){
            for (let n=0; n <num; n++){
                str1=str1+' #';
            }
           
            console.log(arr[m]+str1);
            str1='';
        }
    }

}

let dimension = new Dimension();
dimension.construct(4);
dimension.ifsize(-1);
