const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    merchantName: String,
    userName: String,
    userID: String,
    transactionAmt: Number,
    cashPaid: Number,
    change: Number,
    date: Date
});

const Transaction = mongoose.model('Transaction', transactionSchema);

/*
let dbconf;
if (process.env.NODE_ENV === 'PRODUCTION') {
    const fs = require('fs');
    const path = require('path');
    const fn = path.join(__dirname, 'config.json');
    const data = fs.readFileSync(fn);

    const conf = JSON.parse(data);
    dbconf = conf.dbconf;
} 
else {
    dbconf = 'mongodb://localhost/percent';
}

mongoose.connect(dbconf);
*/
const dbconf = process.env.DB_URI;
mongoose.connect(dbconf);