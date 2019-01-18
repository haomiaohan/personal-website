// initialization
const path = require('path');
const express = require('express'); 
const app = express();

// setting the view engine
app.set('view engine', 'hbs');

// use the StaticPath and the UrlEncoded middlewares
const staticPath = path.resolve(__dirname, 'public');
app.use(express.static(staticPath)); 

app.use(express.urlencoded({extended: false})); 

// adding the route for home page
app.get('/', (req, res) => {    
    res.render('homepage', {index: true});
}); 

app.get('/about', (req, res) => {    
    res.render('homepage', {index: undefined, about: true});
}); 

app.get('/portfolio', (req, res) => {    
    res.render('homepage', {index: undefined, portfolio: true});
}); 

app.get('/contact', (req, res) => {  
    const img = ['berlin', 'marrakech', 'hyderabad', 'keywest', 'delhi', 'istanbul'];
    const desc = ['Reichstag Building, Berlin, Germamy', 'Marrakech, Morocco', 'Golconda Fort, Hyderabad, TS, India', 'Key West, FL, United States', 'Red Fort, Delhi, India', 'Sultan Ahmed Mosque, Istanbul, Turkey']  
    const random = Math.floor(Math.random() * 6);
    res.render('homepage', {index: undefined, contact: true, img: img[random], desc: desc[random]});
}); 

app.listen(process.env.PORT || 5000);