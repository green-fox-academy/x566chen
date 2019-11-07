const express = require('express');
const app = express();
const PORT = 3000;
const mysql = require('mysql');
const cors = require('cors')

app.use(express.json());
app.use(cors())


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'cathy.com',
    database: 'reddit',
});

app.get('/posts', (req, res) => {
    let select_all = 'SELECT * FROM info';
    connection.query(select_all, (error, result) => {
        if(error){
            console.log(error);
            res.status(500).send('DB ERROR');
            return;
        }
        res.status(200).send(result);
    })
});

app.post('/posts', (req,res) => {

    let title = req.body.title;
    let url = req.body.url;
    let timestamp = Date.parse(new Date())/1000;
    let score = 0;

    let add_post = `INSERT INTO info (title, url, timestamp, score)
                VALUES 
                ( "${title}", "${url}","${timestamp}", "${score}")`;
    connection.query(add_post,(error, result)=>{

        if(error){
        res.status(500).send('DB ERROR');
        return;
        }
        res.setHeader('Content-Type', 'application/json');
        res.status(201).json({
            id: timestamp,
            title: title,
            url: url,
            timestamp:timestamp,
            score:score
        })
    
    })
})
app.put('/posts/:id/upvote', async(req,res) =>{
    let id = req.params.id;
    let add_upvote = `UPDATE info SET score=score+1 WHERE id = ${id}`;

    await connection.query(add_upvote,(error, result) =>{
        if (error){
            console.log(error);
        }
        console.log(result);
    })

    let select_upvote = `SELECT * FROM info`

    connection.query(select_upvote, (error, result)=>{
        if(error){
            console.log(error);
            res.status(500).send('DB ERROR');
            return;
            }
            res.setHeader('Content-Type', 'application/json');
            res.status(201).send(result);
    })

})

app.put('/posts/:id/downvote', async(req,res) =>{
    let id = req.params.id;
    let add_upvote = `UPDATE info SET score=score-1 WHERE id = ${id}`;

    await connection.query(add_upvote,(error, result) =>{
        if (error){
            console.log(error);
        }
        console.log(result);
    })

    let select_upvote = `SELECT * FROM info`

    connection.query(select_upvote, (error, result)=>{
        if(error){
            console.log(error);
            res.status(500).send('DB ERROR');
            return;
            }
            res.setHeader('Content-Type', 'application/json');
            res.status(201).send(result);
    })

})


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
