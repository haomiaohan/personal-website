// initialization
const path = require('path');
const express = require('express'); 
const db = require('./db');
const mongoose = require('mongoose');

const Transaction = mongoose.model('Transaction');
const app = express();

// setting the view engine
app.set('view engine', 'hbs');

// use the StaticPath and the UrlEncoded middlewares
app.use(express.json());

const staticPath = path.resolve(__dirname, 'public');
app.use(express.static(staticPath)); 

app.use(express.urlencoded({extended: false})); 

// adding the route for home page

/*
app.get('/', (req, res) => {    
    res.render('homepage', {index: true});
}); 
*/

app.get('/new-transaction', (req, res) => {    
    res.render('homepage', {index: undefined, generate: true});
}); 

app.get('/scan-qr-code', (req, res) => {    
    res.render('homepage', {index: undefined, scan: true});
}); 

app.get('/transactions', (req, res) => {    
    res.render('homepage', {index: undefined, transactions: true});
}); 

app.get('/api/transactions', (req, res) => {
    console.log('haha');

    Transaction.find(function(err, tran, count) {
        console.log(tran);
        res.json(tran);
    });
});

app.post('/api/transactions', (req, res) => {
    console.log('haha2');
    const tran = new Transaction({
        merchantName: req.body.merchantName,
        userName: req.body.userName,
        userID: req.body.userID,
        transactionAmt: req.body.transactionAmt,
        cashPaid: req.body.cashPaid,
        change: req.body.change,
        date: new Date()
    });
    console.log(tran);
    tran.save(function(err) {
        console.log('here');
        if (err) {
            console.log(err);
            res.json(err);
        }
        else {
            console.log('success');
            res.json({transaction: tran});
        }
    });
});

app.listen(process.env.PORT || 5000);