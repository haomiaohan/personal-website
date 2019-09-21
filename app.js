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
    const img = ['budapest', 'marrakech', 'hyderabad', 'madrid', 'delhi', 'istanbul', 'montenegro', 'portland', 'sarajevo', 'seoul', 'vienna'];
    const desc = ['Matthias Church, Budapest, Hungary', 'Marrakech, Morocco', 'Golconda Fort, Hyderabad, India', 'Royal Palace, Madrid, Spain', 'Red Fort, Delhi, India', 'Sultan Ahmed Mosque, Istanbul, Turkey', 'National Museum of Montenegro, Cetinje, Montenegro', 'Portland Head Lighthouse, Portland, Maine, U.S.', 'Outskirts of Sarajevo, Bosnia and Herzegovina', 'Gyeongbokgung Palace, Seoul, Rep. Korea', 'Rathaus (City Hall), Vienna, Austria']  
    const random = Math.floor(Math.random() * 11);
    res.render('homepage', {index: undefined, contact: true, img: img[random], desc: desc[random]});
}); 

app.listen(process.env.PORT || 5000);