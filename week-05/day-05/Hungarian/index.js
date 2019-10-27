const express = require('express');
const app = express();
const PORT = 3000;



// home page
app.get('/translate', (req, res) => {
    const{text, lang} = req.body;
    if(text && land){
        if(land==='en'){
            res.json({
                text: translate(text),
                lang: 'gibberish'
            })
        }
    }else{
        res.json({
            error: 'I can\'t translate that!'
        })
    }
});

// start express app on port 3000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

function translate(sentence){
    const arr=['a', 'e', 'i','o','u'];
    let str=sentence.split('')

    let transtr = str.map(x=>{
        if(arr.includes(x)){
            x=x+'l'+x;
        }
        return x
    })
    return transtr.join('')
}