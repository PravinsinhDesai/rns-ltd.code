const express= require('express');

app=express();

app.get('/',(request,responce)=>{
    responce.sendfile("public/login.html",{root:__dirname});
})

app.listen(3000)