const express=require('express');
const router=express.Router();
const userModel=require('../Model/userModel');
const mongoose=require('mongoose');
const db="mongodb+srv://employee:employee@cluster1.xqb3lal.mongodb.net/";
mongoose.set('strictQuery', true);

mongoose.connect(db,error=>{
    if(error){
      console.log("DB Connection Error !!!")
    }else{
        console.log("DB Connected !!!");
    }
});

/// Data Get ===========>>>>

router.get('/GetAll',async (req,res)=>{
  try{
    const posts= await userModel.find()
    res.json(posts)
}
catch(err){
    res.json({message:err})
}

/// ===========POST Method===========>>>
router.post('/create',(req,res)=>{
  var userData=req.body;
  let user=new userModel(userData);
  user.save((error,userData)=>{
      if(error){
          console.log(error);
      }else{
          res.status(200).send(userData);
      }
  })

});
});

router.patch('/update/:id',(req,res)=>{
  var userData=req.body;
  var Id=req.params.id;
  userModel.findByIdAndUpdate(Id,userData, (error)=>{
      if(error){
          console.log(error);
      }else{
        res.status("Update Successfully !!!");
      }
  })
});

router.delete('remove/:id',(req,res)=>{
  var Id=req.params.id;
  userModel.findByIdAndDelete(Id, (error)=>{
    if(error){
        console.log(error);
    }else{
        res.status("Delete Successfully !!!");
    }
})
})



module.exports=router;