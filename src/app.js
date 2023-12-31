const path =require('path');
const express = require('express');
const app = express();
const hbs = require('hbs');
const port = process.env.port || 5000;

// console.log();
// static path declaration
const static_path =path.join(__dirname,'../public');
const tampelate_path =path.join(__dirname,'../templates/views');
const partials_path =path.join(__dirname,'../templates/partials');
app.set('view engine','hbs');
app.set('views',tampelate_path);
hbs.registerPartials(partials_path)

app.use(express.static(static_path));


app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/about',(req,res)=>{
    res.render('about')
})

app.get('/weather',(req,res)=>{
    res.render('weather')
})
app.get('*',(req,res)=>{
    res.render('404error',{
        errorMsg:"oops! page not fount"
    })
})


app.listen(port,()=>{
    console.log(`listining on port: ${port}`)
})