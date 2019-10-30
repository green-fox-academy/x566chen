const express = require('express');
const app = express();
const PORT = 3000;
const mysql = require('mysql');
app.use(express.json());


app.set('view engine', 'ejs');



const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'cathy.com',
    database: 'test',
});


app.get('/', (req, res) => {
    let select_bookname = 'SELECT book_name FROM book_mast';
    connection.query(select_bookname, (error, result) => {
        if(error){
            console.log(error);
            res.status(500).send('DB ERROR');
            return;
        }
        res.render('home',{result});
    })
});


app.get('/fulldata', (req, res) => {
    let select_series = 'select distinct book_mast.book_name,aut_name, cate_descrip, pub_name, purch_price from (((book_mast join author on book_mast.aut_id = author.aut_id) join category on category.cate_id = book_mast.cate_id) join newpublisher on newpublisher.pub_id= book_mast.pub_id) join purchase on purchase.book_id= book_mast.book_id'
    connection.query(select_series, (error, result) => {
        if(error){
            console.log(error);
            res.status(500).send('DB ERROR');
            return;
        }
        res.render('booklist',{result});
        //res.json(result);
        
    })
});

app.get('/books', (req, res) => {
    const input = req.query;
    const bookstore = 'SELECT book_mast.book_name, cate_descrip as category, pub_name as publisher, purch_price as price FROM book_mast JOIN category ON book_mast.cate_id = category.cate_id JOIN purchase ON book_mast.book_id=purchase.book_id JOIN newpublisher ON newpublisher.pub_id = book_mast.pub_id'
    const bookall='SELECT * FROM (SELECT book_mast.book_name, cate_descrip as category, pub_name as publisher, purch_price as price FROM book_mast JOIN category ON book_mast.cate_id = category.cate_id JOIN purchase ON book_mast.book_id=purchase.book_id JOIN newpublisher ON newpublisher.pub_id = book_mast.pub_id) NEWTABLE'
    
    let select_category = `SELECT book_name, category FROM ${bookall}`
    let select_price_plt=`SELECT book_name, price as plt FROM ${bookall}`
    let select_price_pgt=`SELECT book_name, price as pgt FROM ${bookall}`
    let select_pub=`SELECT book_name, publisher FROM ${bookall}`

    if(input.hasOwnProperty("category")){
        select_category +=`WHERE ${input}`
        connection.query(select_category, (error, result) => {
            if(error){
                console.log(error);
                res.status(500).send('DB ERROR');
                return;
            }
            res.render('filter',{result});

        })

    }else if(input.hasOwnProperty("plt")){
        select_price_plt+=`WHERE ${input}`
        connection.query(select_price_plt, (error, result) => {
            if(error){
                console.log(error);
                res.status(500).send('DB ERROR');
                return;
            }
            res.render('filter',{result});

        })

    }else if(input.hasOwnProperty("pgt")){
        select_price_pgt+=`WHERE ${input}`
        connection.query(select_price_pgt, (error, result) => {
            if(error){
                console.log(error);
                res.status(500).send('DB ERROR');
                return;
            }
            res.render('filter',{result});

        })

    }else{
        select_pub +=`WHERE ${input}`
        connection.query(select_pub, (error, result) => {
            if(error){
                console.log(error);
                res.status(500).send('DB ERROR');
                return;
            }
            res.render('filter',{result});

        })


    }
    


    
    // if(input==='plt' || input ==='pgt'){



    // }else if ()

});



// start express app on port 3000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});