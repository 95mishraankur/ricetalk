const express = require('express');
const router = express.Router();
const {}
require('./connect')
const user=require('./scema')

router.get('/', (req, res) => {
    res.send(`Hello world from the server rotuer js`);
});

router.post('/register', (req, res) => {
    const {name,email,phone,profation}=req.body
     user.findOne({email:email})
     .then(userExist=>
         {
             if(userExist)
             {
                 return res.status(422).json({err: 'email exist'})
             }
             const users= new user({name,email,phone,profation})
              users.save().then(()=>
              {
                 res.status(201).json({message: "saved"})
              })
         }) 
    //res.send("mera register page");
});

  router.get('./register',(req,res)=>
  {
    user.find()
    .then(list=> res.json(list))
  
  })
   router.patch('./register/:id',(req,res)=>
   {
     const _id=req.param.id
     user.findByIdAndUpdate(_id,req.body,{
       new:true
     })
     .then(data=> res.send(data))
   })
   router.patch('./register/:id',(req,res)=>
   {
     user.findByIdAndDelete(req.param.id)
     .then(data=> res.send(data))
   })

module.exports = router;