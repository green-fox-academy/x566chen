const express = require('express');
const path = require('path');

const app = express();
const PORT = 8080;

app.use(express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/doubling',(req, res) =>{
    if(req.query.input){
        res.json ({
            'received': req.query.input,
            'result': req.query.input *2
        })
    }else{
        res.json({
            
            'error': 'Please provide an input!'
              
        })

    }
})

app.get('/greeter',(req,res)=>{
    if(req.query.name && req.query.title){
        res.json({    
            'welcome_message': `Oh, hi there ${req.query.name}, my dear ${req.query.title}!`
        })
    }else if(req.query.name&&!req.query.title){
        res.json({    
            'error': 'Please provide a title!'
        })
    }else if(!req.query.name&&req.query.title){
        res.json({    
            'error': 'Please provide a name!'
        })
    }else if(!req.query.name&& !req.query.title){
        res.json({    
            'error': "Please provide a name and a title!"
        })
    }
})

app.get('/appenda/:id',(req, res)=>{
    const type = req.param.id;
    if (type !== undefined) {
        res.json({
    
            'appended': `${type}a`
    
        })
    } else {
        res.send('404 NOT FOUND');
    }
})

app.post('/dountil/:action', (req, res) => {
    const input = req.params.action;
    const until = Number(req.body.until);
    if (until !== undefined) {
        if (input === 'sum') {
            res.json({
                'result': (1 + until) * until / 2
            });
        } else if (input === 'factor') {
            res.json({
                'result': factor(until)
            });
        }
    } else {
        res.send({
            'error': 'Please provide a number!'
        });
    }
});

app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`);
});

function factor(num){
    let res = 1;
    for (let i=1; i <= num; i++){
        res *= i;
    }
    return res;
}