var express=require('express');
const bodyParser=require('body-parser');
const PORT=3000;
const api=require('../routes/api');

const app=express();
app.use(bodyParser.json());
app.use('/api',api);

//==========Local Host Connect==============>>>>
app.listen(PORT,(error)=>{
    if(error){
      console.log("Error");
    }else{
      console.log("Connected !!!");
    }
})