const express = require('express');
const app = express();


app.get('/',function(req,res){
    res.send("<h1>hello This month is very Expenisve for me</h1>");
 
})

app.get('/contact',function(req,res){
   res.send("Contact me at: jaswalashish131@gmail.com") 
})

app.get('/about',function(req,res){
    res.send('Ashish Jaswal Owns this fucking website');
})

app.get('/hobbies',function(req,res){
    res.send('This is My Hobbie Page');
})


app.listen(3000,function(){
    console.log('Server listening on port 3000');
});