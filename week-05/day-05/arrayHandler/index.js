const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.json())
// set the view engine to ejs



// home page
app.post('/arrays/:type', (req, res) => {
 
  const {what, numbers} = req.body;
  if (what && numbers){
      if (what === 'sum'){
          res.json({
              result: add(numbers)
          })
      }else if(what==='multiply'){
          res.json({
              result: multiply(numbers)
          })
      }else if(what==='double'){
          res.json({
              result: double(numbers)
          })
      }
  }else{
      res.json({
          error: 'Please provide what to do with the numbers!'
      })
  }


});

// start express app on port 3000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

function add(array){
    let sum=0;
    for(i=0; i<array.length; i++){
        sum = sum + array[i];
    }
    return sum;
}

function multiply(array){
    let res=1;
    for (i=0; i<array.length; i++){
        res=res*array[i];
    }
    return res;
}

function double(array){
    let arr = [];
    array.map((i)=>{
        arr.push(i*2);
    })
    return arr;
}

